import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header>
      <div className="flex items-center justify-center md:w-1/5">
        <Link href="/">
          <div className="opacity relative h-10 w-5 cursor-pointer transition hover:opacity-100">
            <Image src="https://rb.gy/vsvv2o" width={14} height={16} alt="" />
          </div>
        </Link>
      </div>
      <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
        <a className="headerLink">Product</a>
        <a className="headerLink">Explore</a>
        <a className="headerLink">Support</a>
        <a className="headerLink">Business</a>
      </div>
    </header>
  );
}

export default Header;
