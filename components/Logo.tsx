import Link from "next/link";
import { FunctionComponent } from "react";

const Logo: FunctionComponent = () => {
  return (
    <div>
      <Link href="/">
        <a>
            <h1>{`</>`}</h1>
        </a>
      </Link>
    </div>
  );
};

export default Logo;
