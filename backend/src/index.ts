import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, sign, verify } from "hono/jwt";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

app.post("api/v1/user/signup", async (c) => {
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
    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({ jwt });
  } catch (error) {
    console.log(error);
    return c.json({ error: "error while signing up" });
  }
  // return c.text("signup route");
});

app.post("api/v1/user/signin", async (c) => {
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
      const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
      return c.json({ jwt });
    }
  } catch (error) {
    c.status(403);
    console.log(error);

    return c.json({ error: "error while signing in" });
  }
});

app.post("api/v1/blog", (c) => {
  return c.text("blog route");
});
app.put("api/v1/blog", (c) => {
  return c.text("signup route");
});
app.get("api/v1/blog/:id", (c) => {
  const id = c.req.param("id");
  console.log(id);

  return c.text("get blog");
});

app.get("api/v1/blog/buld", (c) => {
  return c.text("get blgs in bulk");
});

export default app;
