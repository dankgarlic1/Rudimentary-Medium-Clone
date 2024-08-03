import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify } from "hono/jwt";
import { blogPostInput, blogUpdateInput } from "@dankgarlic1/medium-blog";

type Variables = {
  userId: any;
};

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: Variables;
}>();

blogRouter.use("/*", async (c, next) => {
  console.log(`Middleware triggered for ${c.req.url}`);
  try {
    const token = c.req.header("Authorization")?.replace("Bearer ", "") || "";

    if (!token) {
      return c.json({ error: "Unauthorized, no token provided" }, 401);
    }

    const response = await verify(token, c.env.JWT_SECRET);
    if (!response) {
      return c.json({ error: "Unauthorized, invalid token" }, 401);
    }

    c.set("userId", response.id);
    await next();
  } catch (error) {
    console.error("Middleware error:", error);
    return c.json({ error: "You are not Logged In" }, 403);
  }
});

blogRouter.post("/", async (c) => {
  try {
    const userId = c.get("userId");
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await c.req.json();
    const { success } = blogPostInput.safeParse(body);
    if (!success) {
      c.status(400);
      return c.json({ error: "invalid input" });
    }
    const post = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: userId,
      },
    });
    return c.json({ postId: post.id });
  } catch (error) {
    console.error("POST error:", error);
    return c.json({ error: "Internal server error" }, 500);
  }
});

blogRouter.put("/", async (c) => {
  try {
    const userId = c.get("userId");
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await c.req.json();
    const { success } = blogUpdateInput.safeParse(body);
    if (!success) {
      c.status(400);
      return c.json({ error: "invalid input" });
    }

    // if (!body.id || !body.title || !body.content) {
    //   return c.json({ error: "Missing required fields" }, 400);
    // }
    // console.log(`This is id from body ${body.id}`);
    // console.log(`This is User Id ${userId}`);

    // console.log(`This is authorId from body ${body.authorId}`);

    const update = await prisma.post.update({
      where: {
        id: body.id,
        authorId: userId,
      },
      data: {
        title: body.title,
        content: body.content,
      },
    });
    return c.json({ postId: update.id, msg: "Post Updated" });
  } catch (error) {
    console.error("PUT error:", error);
    return c.json({ error: "Internal server error" }, 500);
  }
});
blogRouter.get("/bulk", async (c) => {
  try {
    // console.log("Called all post get api");

    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const response = await prisma.post.findMany();
    return c.json(response);
  } catch (error) {
    console.error("BULK GET error:", error);
    return c.json({ error: "Internal server error" }, 500);
  }
});

blogRouter.get("/:id", async (c) => {
  try {
    // console.log("Called specific post get api");

    const id = c.req.param("id");
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const response = await prisma.post.findUnique({
      where: { id: id },
    });

    if (!response) {
      return c.json({ error: "Post not found" }, 404);
    }

    return c.json(response);
  } catch (error) {
    console.error("GET error:", error);
    return c.json({ error: "Internal server error" }, 500);
  }
});

// blogRouter.get("/test", async (c) => {
//   return c.json({ message: "Test route is working" });
// });
