import React from "react";

import { Button } from "@nextui-org/react";
import CreateVideoImg from "@public/assets/create-video.png";
import CommiApiImg from "@public/assets/commi-api.png";

const WhatsApp = () => {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col md:flex-row items-center px-14 py-20">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://cdn.clare.ai/aigc/FemaleIllustration2.png"
              alt="WhatsApp Integration"
              className="rounded-lg shadow-lg max-w-[509px] h-auto"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Personalized WhatsApp Video Messages
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Generate Personalized Video Messages and send them to WhatsAPP by
              easy steps!
            </p>
            <Button className="bg-wati-green text-[#2C2C2C] w-[178px] font-bold px-4 py-2 rounded-md">
              Book A Demo!
            </Button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse items-center px-14 py-20">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pl-12">
            <img
              src={CreateVideoImg}
              alt="Bulk Video Creation"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Switch variables to create bulk of videos!
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Generate bulk of videos by switching variables, for example,
              &#123;&#123;name&#125;&#125;...
            </p>
            <Button className="bg-wati-green text-Text/Brand/Default w-[178px] font-bold px-4 py-2 rounded-md">
              Book A Demo!
            </Button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center px-14 py-20">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src={CommiApiImg}
              alt="WhatsApp Integration"
              className="rounded-lg shadow-lg max-w-[509px] h-auto"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Personalized WhatsApp Video Messages
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Generate Personalized Video Messages and send them to WhatsAPP by
              easy steps!
            </p>
            <Button className="bg-wati-green text-Text/Brand/Default w-[178px] font-bold px-4 py-2 rounded-md">
              Book A Demo!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsApp;
