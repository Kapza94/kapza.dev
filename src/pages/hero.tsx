import React from "react";
import Image from "next/image";
import Squares from "./squares";
import StarBorder from "./starborder";

const Hero = () => {
  return (
    <div className="hero relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        {" "}
        <Squares
          speed={0.3}
          squareSize={60}
          direction="diagonal"
          borderColor="rgba(255, 255, 255, 0.1)"
          // hoverFillColor="#222"
        />
      </div>
      <div className="relative z-10 hero-top flex justify-around items-center w-full md:w-1/5">
        <Image src={"/luka.jpg"} width={80} height={80} className="mr-4" alt="Picture of Luka" />
        <div className="">
          <StarBorder
            as="button"
            className="connect-btn"
            color="orange"
            speed="8s"
            // onClick={scrollToView}
          >
            Hi I&apos;m Luka!
          </StarBorder>
        </div>
      </div>
      <div className="relative z-10 hero-mid m-10">
        <div className="hero-mid-top flex justify-center items-center">
          <h2 className="text-4xl md:text-6xl lg:text-8xl">
            <span className="custom-orange-font">MANAGING </span>TEAMS
          </h2>
        </div>
        <div className="hero-mid-mid flex justify-center items-center">
          <h2 className="text-4xl md:text-6xl lg:text-8xl">
            TO <span className="custom-lime-font">BUILDING </span>
          </h2>
        </div>
        <div className="hero-mid-bottom flex justify-center items-center">
          <h2 className="text-4xl md:text-6xl lg:text-8xl">
            <span className="custom-purple-font">TECH </span>SOLUTIONS
          </h2>
        </div>
      </div>

      <div className="subheading relative z-10 flex items-center justify-center md:m-4">
        <h2 className="text-base md:text-xl pl-8 pr-10">
          Blending leadership, problem-solving, and a passion for building efficient tech solutions
          through web development and software testing.
        </h2>
      </div>

      <div className="connect-btn-container">
        <StarBorder
          as="button"
          className="connect-btn drop-shadow-xl"
          color="lime"
          speed="8s"
          // onClick={contactForm}
        >
          Lets Connect ?
        </StarBorder>
      </div>
    </div>
  );
};

export default Hero;
