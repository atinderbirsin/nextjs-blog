import { FunctionComponent } from "react";

const Header: FunctionComponent = () => {
  return (
    <div className="flex py-24 px-10 font-bold justify-center items-center border-b border-slate-300">
      <h1 className="text-5xl">Welcome to my blog</h1>
    </div>
  );
};

export default Header;
