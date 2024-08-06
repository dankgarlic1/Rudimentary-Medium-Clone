import Quote from "../components/Quote";
import { SigninComponent } from "../components/SigninComponent";

const Signin = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div>
        <SigninComponent />
      </div>
      <div className="hidden lg:block">
        <Quote />
      </div>
    </div>
  );
};

export default Signin;
