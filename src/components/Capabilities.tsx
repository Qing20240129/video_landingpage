import React from "react";

import { Button } from "@nextui-org/react";

const Capabilities = () => {
  const capabilities = [
    "Personalized Videos",
    "Personal Video Record",
    "AI Generated Videos",
    "WhatsApp Video Message",
    "WhatsApp Video",
    "Video For WhatsApp",
    "Personal Thanks Video",
    "Thank You Video",
    "Welcome Video",
    "Abandoned Cart Recovery Video",
    "Get Customer Feedback",
    "High ROI Video",
    "High Conversion Rate Video",
    "Build Trust Video",
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          What we could do?
        </h2>
        <p className="text-2xl text-center text-gray-600 mb-8">
          Come and join us!
        </p>
        <div className="flex justify-center mb-12">
          <Button className="bg-wati-green text-[#2C2C2C] w-[178px] font-bold px-4 py-2 rounded-md">
            Book A Demo!
          </Button>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="bg-white border border-green-200 rounded-full px-6 py-2 text-gray-700 hover:bg-green-100 transition duration-300"
            >
              {capability}
            </div>
          ))}
          <div className="bg-white border border-green-200 rounded-full px-6 py-2 text-gray-700 hover:bg-green-100 transition duration-300">
            ...
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
