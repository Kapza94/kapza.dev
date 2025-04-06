import React from "react";
import Image from "next/image";
import Squares from "./squares";
import StarBorder from "./starborder";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero relative h-[50vh] w-full overflow-hidden">
      {/* Adjusted height for Squares */}
      <div className="absolute inset-0 z-0 h-[50vh]">
        <Squares
          speed={0.3}
          squareSize={60}
          direction="diagonal"
          borderColor="rgba(255, 255, 255, 0.1)"
        />
      </div>
      <div className="relative z-10 hero-top flex justify-around items-center w-full md:w-1/5 mb-6">
        <Image
          src={"/luka.jpg"}
          width={80}
          height={80}
          className="mr-4"
          alt="Picture of Luka"
          style={{
            transition: "transform 0.3s ease",
          }}
        />
        <div>
          <StarBorder as="button" className="connect-btn" color="orange" speed="8s">
            Hi I&apos;m Luka!
          </StarBorder>
          <div className="flex justify-between mt-2">
            <h2>Based in Belgrade, Serbia </h2>
            <Image
              src={"/flag.png"}
              width={24}
              height={22}
              className="ml-4"
              alt="Picture of Serbian Flag"
              style={{
                transition: "transform 0.3s ease",
              }}
            />
          </div>
        </div>
      </div>
      <div className="relative z-10 hero-mid m-6">
        <div className="hero-mid-top flex justify-center items-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl">
            <span className="custom-orange-font">MANAGING </span>TEAMS
          </h2>
        </div>
        <div className="hero-mid-mid flex justify-center items-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl">
            & <span className="custom-lime-font">BUILDING </span>
          </h2>
        </div>
        <div className="hero-mid-bottom flex justify-center items-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl">
            <span className="custom-purple-font">TECH </span>SOLUTIONS
          </h2>
        </div>
      </div>
      <div className="subheading relative z-10 flex items-center justify-center md:m-2">
        <h2 className="text-sm md:text-lg pl-4 pr-6">
          Blending leadership, problem-solving, and a passion for building efficient tech solutions
          through web development.
        </h2>
      </div>
      <div className="connect-btn-container mt-4">
        <Link href="/contact">
          <StarBorder as="button" className="connect-btn drop-shadow-xl" color="lime" speed="8s">
            Lets Connect ?
          </StarBorder>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
