import React from "react";
import Image from "next/image";

import Logo1 from "../../../public/Logo-1.png";
import Logo2 from "../../../public/Logo-2.png";
import Logo3 from "../../../public/Logo-3.png";
import Logo4 from "../../../public/Logo-4.png";
import Logo5 from "../../../public/Logo-5.png";

const logos = [Logo1, Logo2, Logo3, Logo4, Logo5];

const Logo = () => {
  return (
    <div className="logo-wrapper py-">
      <div className="logo-track gap-10 items-center">
        {[...logos, ...logos].map((logo, index) => (
          <Image
            key={index}
            width={120}
            height={80}
            alt="logo"
            src={logo}
            className="mx-5 opacity-80 hover:opacity-100 transition"
          />
        ))}
      </div>
    </div>
  );
};

export default Logo;
