import Image from "next/image";
import React from "react";

function Header() {
    return (
        <header>
            <div className="relative w-10 h-5">
                <Image src="https://rb.gy/vsvv2o" fill objectFit="contain" alt=""/>
            </div>
        </header>
    )
}

export default Header;

/* function Header () {
    return (
        <header>
            <div className="relative h-10 w-5">
                <Image src="https://rb.gy/vsvv2o" layout="fill" objectFit="contain"/>
            </div>
        </header>
    )
}

export default Header */
