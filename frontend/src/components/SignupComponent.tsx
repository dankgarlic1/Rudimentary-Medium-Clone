import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InputBox } from "./shared/InputBox";
import { Button } from "./shared/Button";
import { SignupInput } from "@dankgarlic1/medium-blog";
import { signupRequest } from "../helper/api-communicator";
import toast from "react-hot-toast";

export const SignupComponent = () => {
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleSignup = async () => {
    try {
      toast.loading("Signing Up", { id: "signup" });
      await signupRequest(
        postInputs.name,
        postInputs.email,
        postInputs.password
      );

      toast.success("Signed Up Successfully", { id: "signup" });
      navigate("/blogs");
    } catch (error) {
      console.log(error);
      toast.error("Signing Up Failed", { id: "signup" });
    }
  };

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
            <Button authType="Sign up" onClick={handleSignup} />
          </div>
        </div>
      </div>
    </div>
  );
};
