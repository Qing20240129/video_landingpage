import React from "react";

import PlaygroundImg from "@public/assets/playground-image.png";
import ApiImg from "@public/assets/api-image.png";

const Integration = () => {
  return (
    <section>
      <div className="container px-20 py-16">
        <h2 className="text-2xl font-bold text-center mb-8">
          Commi = Playground + API
        </h2>
        <p className="text-2xl font-bold text-center mb-12">
          Choose the best way to implement into your workflow!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col items-center">
            <div className="w-[214px] text-center bg-[#FEF0FE] text-2xl font-semibold py-4 rounded-xl mb-4 border-4 border-black">
              AI Playground
            </div>
            <p className="text-xl mb-8">Easy Generation in 3 Clicks!</p>
            <img
              src={PlaygroundImg}
              alt="AI Playground"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[214px] text-center bg-[#FEF0FE] text-2xl font-semibold py-4 rounded-xl mb-4 border-4 border-black">
              API
            </div>
            <p className="text-xl mb-8">
              Bulk Video Messages Generation & Broadcast
            </p>
            <img
              src={ApiImg}
              alt="API Integration"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integration;
