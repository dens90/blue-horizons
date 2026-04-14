import Link from "next/link";
import React from "react";

type ButtonProps = {
  buttonText: string;
  buttonLink: string;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ buttonText, buttonLink, className }) => {
  

  return (
    <Link
      href={buttonLink}
      className={`inline-flex items-center justify-center rounded-full bg-[var(--color-wb-accent)] px-8 py-3.5 text-base font-semibold text-sky-950 shadow-sm transition hover:bg-[var(--color-wb-accent-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-200 ${className ?? ""}`}
    >
      {buttonText}
    </Link>
  );
};

export default Button;
