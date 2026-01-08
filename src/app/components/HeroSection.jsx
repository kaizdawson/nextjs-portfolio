"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
            <h1 className="text-white mb-4 font-extrabold">
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal">
      Hello, I&apos;m
    </span>

    <br />

    <span className="block text-4xl sm:text-5xl lg:text-8xl lg:leading-normal">
      Kaiz Dawson
    </span>

    <span className="block h-[1.2em] text-xl sm:text-2xl lg:text-3xl text-muted-foreground mt-2 overflow-hidden">
      <TypeAnimation
        sequence={[
          "Backend Developer",
          1500,
          "ASP.NET Core Developer",
          1500,
          "Game Developer",
          1500,
        ]}
        speed={50}
        repeat={Infinity}
      />
    </span>
  </h1>

          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Backend developer specializing in ASP.NET Core Web API, with experience deploying to VPS using CI/CD.

          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] 
                w-[250px] h-[250px] 
                lg:w-[400px] lg:h-[400px] 
                relative overflow-hidden">

  <div
  className="
    rounded-full 
    bg-gradient-to-r from-pink-500 to-purple-500
    p-[4px]
    w-[260px] h-[260px]
    lg:w-[410px] lg:h-[410px]
  "
>
  <div
    className="
      rounded-full 
      bg-[#181818]
      w-full h-full
      relative overflow-hidden
    "
  >
    <Image
      src="/images/kaiz.jpg"
      alt="Kaiz Dawson avatar"
      fill
      className="object-cover"
      priority
    />
  </div>
</div>

</div>

        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
