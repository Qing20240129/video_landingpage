import React from "react";
import { Info } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Personal Welcome",
      description:
        "Personal message to provide heartfelt welcome to customers, boost trust and loyalty!",
      video: "https://cdn.clare.ai/aigc/01-Abheek.mp4",
      name: "Abheek",
    },
    {
      title: "Abandoned Cart Recovery",
      description:
        "Story-telling tone to awake the cart recovery, recover lost sales and encourage purchases!",
      video: "https://cdn.clare.ai/aigc/02-John.mp4",
      name: "John",
    },
    {
      title: "Post-Purchase Thank",
      description:
        "Express personal thanks for customers and collect feedback to upgrade the product!",
      video: "https://cdn.clare.ai/aigc/03-cai.mp4",
      name: "Caiyao",
    },
  ];

  return (
    <section id="ai-personalized-videos">
      <div className="container p-16">
        <h2 className="text-2xl font-semibold mb-2">
          Why use personalized video?
        </h2>
        <p className="text-xl text-Text/Default/Secondary mb-12">
          Empower your Customer Success Process and Create Personal Touch to
          improve ROI!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-6">
              <Info className="w-[26px] h-[26px]" />
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-Text/Default/Secondary">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md px-10 py-6"
            >
              <video controls className="max-w-full object-cover rounded-lg">
                <source src={feature.video} type="video/mp4" />
              </video>
              <div className="pt-4">
                <h4 className="text-2xl font-semibold text-center">
                  {feature.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
