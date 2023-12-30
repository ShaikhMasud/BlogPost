import Link from "next/link";

import "../app/style/globals.css";
interface Props {
  title?: string;
  className?: string;
}

const Logo = ({ title, className }: Props) => {
  return (
    <Link href={"/"}>
      <h1 className={`text-3xl   ${className}`}>
        {title || "Bloggers"}
      </h1>
    </Link>
  );
};

export default Logo;