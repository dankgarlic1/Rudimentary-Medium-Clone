// import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { SignupInput } from "@dankgarlic1/medium-blog";
import { InputBox } from "./shared/InputBox";
import { Button } from "./shared/Button";
export const Auth = ({ type }: { type: "signup" | "signin" }) => {
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
            <div className="font-bold  text-3xl">
              {type === "signin"
                ? "Login to your account"
                : "Create an account"}
            </div>
            <div className="text-slate-400 text-center">
              {type === "signin"
                ? "Don't have an account?"
                : "Already have an account?"}
              <Link
                to={type === "signin" ? "/signup" : "/signin"}
                className="underline "
              >
                {type === "signin" ? "Sign Up" : "Sign In"}
              </Link>
            </div>
          </div>
          <div className="pt-4">
            {type === "signup" ? (
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
            ) : null}
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
            <Button authType={type === "signup" ? "Sign up" : "Sign in"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
