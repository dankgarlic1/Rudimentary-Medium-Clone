import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InputBox } from "./shared/InputBox";
import { Button } from "./shared/Button";
import { SignupInput } from "@dankgarlic1/medium-blog";
import toast from "react-hot-toast";
import { signinRequest } from "../helper/api-communicator";

export const SigninComponent = () => {
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleSignin = async () => {
    try {
      toast.loading("Signing In", { id: "signin" });
      await signinRequest(postInputs.email, postInputs.password);

      toast.success("Signed In Successfully", { id: "signin" });
      navigate("/blogs");
    } catch (error) {
      console.log(error);
      toast.error("Signing In Failed", { id: "signin" });
    }
  };
  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center ">
        <div>
          <div className="px-10">
            <div className="font-bold text-3xl">Login to your account</div>
            <div className="text-slate-400 text-center">
              Don't have an account?
              <Link to="/" className="underline">
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
            <Button buttonName="Sign in" onClick={handleSignin} />
          </div>
        </div>
      </div>
    </div>
  );
};
