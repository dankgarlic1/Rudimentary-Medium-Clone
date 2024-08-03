"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogUpdateInput = exports.blogPostInput = exports.signinInput = exports.signupInput = void 0;
const zod_1 = require("zod");
exports.signupInput = zod_1.z.object({
    name: zod_1.z.string(),
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(6),
});
exports.signinInput = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(6),
});
exports.blogPostInput = zod_1.z.object({
    title: zod_1.z.string(),
    content: zod_1.z.string(),
});
exports.blogUpdateInput = zod_1.z.object({
    //   id: z.string(),
    title: zod_1.z.string().optional(),
    content: zod_1.z.string().optional(),
});
