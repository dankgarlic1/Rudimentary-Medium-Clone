import { z } from "zod";

export const signupInput = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
});

export const signinInput = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const blogPostInput = z.object({
  title: z.string(),
  content: z.string(),
});

export const blogUpdateInput = z.object({
  //   id: z.string(),
  title: z.string().optional(),
  content: z.string().optional(),
});

export type SignupInput = z.infer<typeof signupInput>;
export type SigninInput = z.infer<typeof signinInput>;
export type BlogPostInput = z.infer<typeof blogPostInput>;
export type BlogUpdateInput = z.infer<typeof blogUpdateInput>;
