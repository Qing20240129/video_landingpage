import React, { useState } from "react";

import { Input, Button } from "@nextui-org/react";

const FreeVideo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Submitted:", { name, email });
    // Reset form fields
    setName("");
    setEmail("");
  };

  return (
    <section className="bg-Background/Default/Secondary">
      <div className="container p-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Create Free Personal Video for you!
        </h2>
        <p className="text-xl text-gray-600">
          We will send you a personal welcome video!
        </p>
        <p className="text-xl text-gray-600 mb-12">
          And we plan to empower{" "}
          <span className="font-bold">1000 business</span> to grow with
          personalized video messages, Join us for FREE!
        </p>
        <form onSubmit={handleSubmit} className="flex gap-4">
          <Input
            variant="bordered"
            className="max-w-60"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="email"
            variant="bordered"
            className="max-w-60"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button className="bg-Background/Brand/Default text-white w-[127px] px-4 py-2 rounded-md">
            Join us for FREE!
          </Button>
        </form>
      </div>
    </section>
  );
};

export default FreeVideo;
