import { FunctionComponent } from "react";
import Logo from "./Logo";
import image from "../public/logo.png";
import { Navbar } from "./Navbar";

const Nav: FunctionComponent = () => {
  return (
    <div className="bg-gray-800 flex py-5 px-10 text-white justify-between">
      <Logo />
      <Navbar />
    </div>
  );
};

export default Nav;
