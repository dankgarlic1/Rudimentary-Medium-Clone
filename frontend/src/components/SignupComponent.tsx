import React, { useState } from "react";
import { Link } from "react-router-dom";
import { InputBox } from "./shared/InputBox";
import { Button } from "./shared/Button";
import { SignupInput } from "@dankgarlic1/medium-blog";

export const SignupComponent = () => {
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });

  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center ">
        <div>
          <div className="px-10">
            <div className="font-bold text-3xl">Create an account</div>
            <div className="text-slate-400 text-center">
              Already have an account?
              <Link to="/signin" className="underline">
                Sign In
              </Link>
            </div>
          </div>
          <div className="pt-4">
            <InputBox
              type="text"
              title="Name"
              placeholder="Enter your name"
              onChange={(e) => {
                setPostInputs((c) => ({
                  ...c,
                  name: e.target.value,
                }));
              }}
            />
            <InputBox
              type="text"
              title="Email"
              placeholder="Enter your email"
              onChange={(e) => {
                setPostInputs((c) => ({
                  ...c,
                  email: e.target.value,
                }));
              }}
            />
            <InputBox
              type="password"
              title="Password"
              placeholder="Enter your password"
              onChange={(e) => {
                setPostInputs((c) => ({
                  ...c,
                  password: e.target.value,
                }));
              }}
            />
          </div>
          <div className="pt-8">
            <Button authType="Sign up" />
          </div>
        </div>
      </div>
    </div>
  );
};
