"use client";

import React from "react";
import {  AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import {  CiTwitter, CiInstagram } from "react-icons/ci";
import { BsChevronRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
import profile from "@/images/profile.jpg";
import Image from "next/image";

const projects = [
  {
    img: "/img/pizza.png",
    title: "Goven",
    subtitle: "framer template",
    icon: <BsChevronRight />,
  },
  {
    img: "/img/wink.png",
    title: "Upshifts",
    subtitle: "Web design collections",
  },
  {
    img: "/img/foot.png",
    title: "Subtle Folio",
    subtitle: "framer template",
  },
];

function page() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { duration: 0.2 } }}
      className="bg-white top-24 relative dark:bg-[#212121] shadow-md rounded-xl max-w-xl lg:mx-auto mx-4 lg:max-w-xl  max-2xl  md:mx-auto sm:mx-auto lg:px-0 "
    >
      <div className=" lg:p-6 p-5 ">
        <div className="flex mt-4  gap-x-2 font-InterRe text-center">
          <h1 className="text-neutral-700  dark:text-[#C0C0C0] text-lg font-InterMe text-center">
            About me
          </h1>
        </div>

        <div>
          <h1 className="text-3xl font-InterBo mt-7 my-3 dark:text-white text-neutral-800">
            Its Me Masud Shaikh
          </h1>
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.4, delay: 0.3 },
            }}
            className="text-neutral-700 text-lg my-7 leading-8 font-InterRe dark:text-[#C0C0C0]"
          >
            I amm Masud Shaikh, a student with lot of curiosity and excitment,
            currently residing in Mumbai, India. I have a deeppassion for 
            crafting purposeful interfaces and learning new Technologies.
            My main goal is to bridge the divide between people and technology,
            transforming intricate challenges into meaningful and seamless
            experiences.
          </motion.p>
        </div>

        <div className="p-4  rounded-lg dark:bg-[#373737] bg-white border dark:border-neutral-700/70">
            <Image
            src={profile}
            alt="banner image"
            className="aspect-square object-cover rounded-lg"
            />
            </div>
       

        <div>
          <motion.h1
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{
              scale: 1,
              opacity: 1,
              transition: { duration: 0.4, delay: 0.5 },
            }}
            className="text-3xl font-InterBo mt-7 my-3 dark:text-white text-neutral-800"
          >
            More About Me
          </motion.h1>

          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.4, delay: 0.5 },
            }}
            className="text-neutral-700 text-lg my-7 leading-8 font-InterRe dark:text-[#C0C0C0]"
          >
            I am Masud Shaikh, a dedicated student currently pursuing a
            Bachelors degree in Software Engineering at Mumbai university
            in the India. My passion lies in staying at the forefront
            of cutting-edge technologies and design trends.Current I have 
            Interest on newest technologies and currently I am learrning web
            development in deep.
          </motion.p>

          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.4, delay: 0.5 },
            }}
            className="text-neutral-700 text-lg my-7 leading-8 font-InterRe dark:text-[#C0C0C0]"
          >
            When I am not delving into the world of design, I find joy in exploring
            new destinations and immersing myself in diverse cultures. My love for
            travel fuels my curiosity, and I take every opportunity to discover
            unique places. Beyond that, I am an avid table tennis enthusiast, always
            up for a friendly match. When I unwind, you will often find me engrossed
            in various video games, exploring virtual worlds and challenging my
            gaming skills. Striking a balance between my passions,
            I believe in the importance of a healthy work-life equilibrium.
          </motion.p>

         
        </div>

        <div className="mt-24 lg:p-2 ">
          <div className="mx-auto max-w-md">
            <div>
              <h2 className=" text-4xl text-center dark:text-white text-[#353849] font-InterBo">
                Lets work together.
              </h2>
              <p className="text-center mt-3 dark:text-neutral-300 text-[#666D80] text-lg">
                Creating user experience and visual appealing design
              </p>
            </div>
          </div>

          <div className="bg-[#F6F8FA] p-6 dark:bg-[#2C2C2C]  mt-14 rounded-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-2 font-InterRe">
                <div className="w-[6px] h-[6px] rounded-full  bg-[#6b6b6b]" />
                <h1 className="text-neutral-700 dark:text-[#C0C0C0] text-lg font-InterMe">
                  Follow Socials
                </h1>
              </div>

              <div className="flex gap-x-2">
                <Link href='https://twitter.com/iamMasud19'>
                <div className="border-neutral-300 bg-white dark:bg-[#373737] dark:border-none shadow-md drop-shadow-md border  w-9 h-9 px-2 rounded-full flex items-center justify-center gap-x-1 ">
                  <CiTwitter className="text-neutral-500 dark:text-white" />
                </div>
                </Link>
                <Link href='https://www.instagram.com/masud._19'>
                <div className="border-neutral-300 bg-white shadow-md drop-shadow-md border dark:bg-[#373737]  dark:border-none w-9 h-9 px-2 rounded-full flex items-center justify-center gap-x-1 ">
                  <CiInstagram className="text-neutral-500 dark:text-white" />
                </div>
                </Link>
                <Link href='https://github.com/ShaikhMasud'>
                <div className="border-neutral-300 bg-white shadow-md drop-shadow-md border dark:bg-[#373737]  dark:border-none w-9 h-9 px-2 rounded-full flex justify-center items-center  gap-x-1 ">
                  <AiFillGithub className="text-neutral-500 dark:text-white" />
                </div>
                </Link>
                <Link href='https://www.linkedin.com/in/masud-shaikh-1a53b2271'>
                <div className="border-neutral-300 bg-white shadow-md drop-shadow-md border dark:bg-[#373737]  dark:border-none w-9 h-9 px-2 rounded-full flex items-center justify-center gap-x-1  ">
                  <FaLinkedinIn className="text-neutral-500 dark:text-white" />
                </div>
                </Link>
              </div>
            </div>
          </div>

          <Link href={"https://www.linkedin.com/in/masud-shaikh-1a53b2271"}>
          <div className="bg-[#F6F8FA] dark:bg-[#2C2C2C] p-6  mt-4 rounded-md">
            <div className="text-center">
              <span className="text-neutral-700 dark:text-neutral-400">
                © 2023 Masud BlogPost 
              </span>
              <p className="text-neutral-500">
                By{" "}
                <span className="hover:underline  hover:text-neutral-400 text-neutral-700 dark:text-neutral-300">
                  Masud Shaikh
                </span>
              </p>
            </div>
          </div>
         </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default page;