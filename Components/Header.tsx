import Image from "next/image";
import React from "react";

const Header = () => {
    return (
        <header>
            <div className="relative h-10 w-5">
                <Image  src="https://rb.gy/vsvv2o" layout="fill" objectFit="contain"/>
            </div>
        </header>
    )
}

export default Header
