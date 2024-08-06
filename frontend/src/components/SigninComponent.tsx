import React, { useState } from "react";
import { Link } from "react-router-dom";
import { InputBox } from "./shared/InputBox";
import { Button } from "./shared/Button";
import { SignupInput } from "@dankgarlic1/medium-blog";

export const SigninComponent = () => {
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
            <div className="font-bold text-3xl">Login to your account</div>
            <div className="text-slate-400 text-center">
              Don't have an account?
              <Link to="/signup" className="underline">
                Sign Up
              </Link>
            </div>
          </div>
          <div className="pt-4">
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
            <Button authType="Sign in" />
          </div>
        </div>
      </div>
    </div>
  );
};
