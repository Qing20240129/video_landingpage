import React from "react";

import WatiLogo from "@public/assets/wati-logo.png";
import { Button } from "@nextui-org/react";

const Hero = () => {
  return (
    <section>
      <div className="container px-16 py-20 flex items-center justify-between">
        <div className="max-w-[470px]">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 leading-tight">
            Improve ROI with personal engagement and high efficient AI videos!
          </h1>
          <p className="text-xl text-Text/Default/Secondary mb-8">
            AI Generate Personal Video Messages At Scale by switching names!
          </p>
          <Button className="bg-wati-green text-[#2C2C2C] w-[178px] font-bold px-4 py-2 rounded-md">
            Book a Demo!
          </Button>
          <div className="mt-8 flex items-center text-Text/Default/Secondary">
            <span className="text-sm mr-1">Powered by</span>
            <b className="text-sm mr-1">No.1 WhatsApp Chatbot -</b>
            <img src={WatiLogo} alt="Wati logo" className="h-[30px] w-auto" />
          </div>
        </div>
        <img
          src="https://cdn.clare.ai/aigc/FemaleIllustration1.png"
          alt="AI Video Generation"
          className="flex-1 rounded-2xl shadow-lg max-w-[518px] h-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
