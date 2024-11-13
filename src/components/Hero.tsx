import React from "react";
import GradualSpacing from "./ui/gradual-spacing";
import TypingAnimation from "./ui/typing-animation";
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
const Hero = () => {
  return (
    <div>
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 w-[100%]"
        )}
      />
      <div className=" container m-auto ">
        <div className=" flex justify-between items-center  h-screen">
          <div className=" w-[50%] mx-3 flex flex-col justify-start items-start  ">
            <GradualSpacing
              className="font-display  text-4xl font-bold -tracking-widest  text-blue-700 dark:text-white  md:text-7xl md:leading-[5rem]"
              text="Harnessing Data"
            />
            <GradualSpacing
              className="font-display  text-4xl font-bold -tracking-widest  text-gray-800 dark:text-white md:text-5xl md:leading-[5rem]"
              text="For Informed Investment Decisions"
            />
            <TypingAnimation
              duration={10}
              className=" text-sm font-extralight text-gray-600 text-left dark:text-white"
              text="At Sahaj Research Services, we empower investors like you with meticulously curated research services tailored for the dynamic world of stock market . With years of expertise, we provide comprehensive analysis and tools to bring clarity to your decision-making process. Our philosophy revolves around empowering you with strategies that you truly own, ensuring they work effectively for your goals. "
            />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
