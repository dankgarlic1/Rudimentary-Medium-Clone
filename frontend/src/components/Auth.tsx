// import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { SignupInput } from "@dankgarlic1/medium-blog";
import { InputBox } from "./shared/InputBox";
export const Auth = () => {
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });
  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div>
          <div className="font-bold  text-3xl">Create an Account</div>
          <div className="text-slate-400 ">
            Already have an account?{" "}
            <Link to={"/signin"} className="underline ">
              Login
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div>
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
      </div>
    </div>
  );
};

export default Auth;
