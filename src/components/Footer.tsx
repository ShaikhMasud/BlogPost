// Footer.jsx

import React from "react";
import Container from "./Container";
import Link from "next/link";
import { BsFacebook, BsYoutube, BsInstagram, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <Container className="p-8 bg-black text-gray-100 flex flex-col md:flex-row items-center justify-between">
      <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
        <p className="text-xl text-gray-300 mb-2">Follow Socials</p>
        <div className="flex items-center gap-7">
          <Link href="https://www.linkedin.com/in/masud-shaikh-1a53b2271" target="_blank">
            <BsLinkedin className="text-2xl hover:text-blue-500 duration-200" />
          </Link>
          <Link href="https://github.com/ShaikhMasud" target="_blank">
            <BsGithub className="text-2xl hover:text-orange-500 duration-200 cursor-pointer" />
          </Link>
          <Link href="https://twitter.com/iamMasud19" target="_blank">
            <BsTwitter className="text-2xl hover:text-blue-500 duration-200 cursor-pointer" />
          </Link>
          <Link href="https://www.instagram.com/masud._19/" target="_blank">
            <BsInstagram className="text-2xl hover:text-pink-500 duration-200 cursor-pointer" />
          </Link>
        </div>
      </div>
      <div className="text-sm text-gray-300">
        © {new Date().getFullYear()} All rights reserved{" "}
        <Link
          href="https://www.linkedin.com/in/masud-shaikh-1a53b2271"
          target="_blank"
          className="hover:text-white font-semibold duration-200"
        >
          MasudShaikh
        </Link>
      </div>
    </Container>
  );
};

export default Footer;
