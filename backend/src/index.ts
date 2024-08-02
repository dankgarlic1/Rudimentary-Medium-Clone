import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign, verify } from "hono/jwt";

type Variables = {
  userId: any;
};
const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: Variables;
}>();

app.use("/api/v1/blog/*", async (c, next) => {
  try {
    const token = c.req.header("Authorization") || "";

    if (!token) {
      c.status(401);
      return c.json({ error: "unauthorized" });
    }
    const response = await verify(token, c.env.JWT_SECRET);
    if (!response) {
      c.status(401);
      return c.json({ error: "unauthorized" });
    } else {
      c.set("userId", response.id);
      await next();
    }
  } catch (error) {
    console.log(error);
  }
});

app.post("/api/v1/user/signup", async (c) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();
    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: body.password,
      },
    });
    const token = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({ jwt: token });
  } catch (error) {
    console.log(error);
    return c.json({ error: "error while signing up" });
  }
  // return c.text("signup route");
});

app.post("/api/v1/user/signin", async (c) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await c.req.json();
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });
    if (!user) {
      c.status(403);
      return c.json({ error: "user not found" });
    } else {
      const token = await sign({ id: user.id }, c.env.JWT_SECRET);
      return c.json({ token: token });
    }
  } catch (error) {
    c.status(403);
    console.log(error);

    return c.json({ error: "error while signing in" });
  }
});

app.post("/api/v1/blog", (c) => {
  const token = c.get("userId");
  console.log(`Token is: ${token}`);

  return c.text("blog route");
});
app.put("/api/v1/blog", (c) => {
  return c.text("signup route");
});
app.get("/api/v1/blog/:id", (c) => {
  const id = c.req.param("id");
  console.log(id);

  return c.text("get blog");
});

app.get("/api/v1/blog/bulk", (c) => {
  return c.text("get blgs in bulk");
});

export default app;
