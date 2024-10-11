import React from "react";

import Logo from "@public/assets/logo.png";

const Footer = () => {
  const features = [
    {
      label: "AI Personalized Videos",
      key: "ai-personalized-videos",
    },
    {
      label: "WhatsApp Video Messages",
      key: "whatsapp-video-messages",
    },
    {
      label: "Bulk of Video At Scale",
      key: "bulk-of-video-at-scale",
    },
    {
      label: "API Video Generation",
      key: "api-video-generation",
    },
  ];
  return (
    <footer className="bg-white py-12 border-t border-gray-200">
      <div className="container mx-auto px-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
          <img className="h-8" src={Logo} />
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
                Features
              </h3>
              <ul className="space-y-2">
                {features.map((feature) => (
                  <li key={feature.key}>
                    <a
                      href={`#${feature.key}`}
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      {feature.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
                Resources
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/blog"
                    className="text-base text-gray-500 hover:text-gray-900"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.wati.io/"
                    target="_blank"
                    className="text-base text-gray-500 hover:text-gray-900"
                  >
                    WATI: No.1 WhatsApp Chatbot
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p className="text-base text-gray-400">
            &copy; 2024 Commi.ai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
