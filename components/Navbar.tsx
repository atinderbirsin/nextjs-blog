import Link from "next/link";

export function Navbar() {
  return (
    <>
      <div className="nav-bar">
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
