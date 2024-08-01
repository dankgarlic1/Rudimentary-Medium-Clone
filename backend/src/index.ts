import { Hono } from "hono";

const app = new Hono();

app.post("api/v1/user/signup", (c) => {
  return c.text("signup route");
});

app.post("api/v1/user/signinp", (c) => {
  return c.text("signin route");
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
