import React, { useState } from "react";

import { Button, Modal, ModalContent } from "@nextui-org/react";
import LogoImg from "@public/assets/logo.png";
import {
  inputFields,
  InputFieldProps,
  OptionsProps,
  videoTypeOptions,
  sourceOptions,
} from "../constants/bookDemoForm";

interface ModalContentProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

interface FormData {
  name: string;
  email: string;
  whatsapp: string;
  videoType: string;
  industry: string;
  website: string;
  source: string;
}

const defaultFormData: FormData = {
  name: "",
  email: "",
  whatsapp: "",
  videoType: videoTypeOptions[0].key,
  industry: "",
  website: "",
  source: sourceOptions[0].key,
};

const BookDemoModal = ({ isOpen, onOpenChange }: ModalContentProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);
  const [formData, setFormData] = useState<FormData>(defaultFormData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxXNLhCMKgoHOpXohTTTfon4CZkAd5Fa468WS7a-2xiDXI5niw-yoTG5L52ZdeC0WzM/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      setIsLoading(false);
      console.log("Form submitted successfully", response);
      if (response) setIsSubmited(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleOnClose = () => {
    setFormData(defaultFormData);
    setIsSubmited(false);
    onOpenChange(false);
  };

  const features = [
    "Boost Personal Engagement",
    "Drive Sales & Conversion",
    "Improve ROI",
  ];

  return (
    <Modal isOpen={isOpen} onClose={handleOnClose} isDismissable={false}>
      <ModalContent className={"max-w-[900px] flex-row"}>
        <div className="w-[375px] min-w-[375px] bg-[#34C759] p-8">
          <img src={LogoImg} alt="Logo" className="w-[107px] h-[38px] mb-8" />
          <h3 className="text-white text-[26px] font-bold mb-8">
            Join the AI Video Revolution in Sale / Customer Service!
          </h3>
          <ul className="text-white text-lg font-bold mb-8">
            {features.map((feature: string) => {
              return (
                <li key={feature} className="flex items-center h-[27px]">
                  <span className="text-4xl mx-2">·</span>
                  {feature}
                </li>
              );
            })}
          </ul>
          <img
            className="w-[310px] h-auto"
            src="https://cdn.clare.ai/aigc/FemaleIllustration2.png"
          />
        </div>
        {isSubmited ? (
          <div className="w-full p-10 flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold mb-[40px]">
              Thanks for your support!
            </h2>
            <p className="w-[341px] text-2xl mb-[80px] text-center">
              We will soon connect you to make a free demo for you!
            </p>
            <div className="w-[324px] text-center border border-wati-green py-2 rounded-md">
              Connect us by support@commi.ai
            </div>
          </div>
        ) : (
          <div className="flex-1 px-6 py-4">
            <h4 className="text-xl font-bold mb-5">Book A Free Demo Now!</h4>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              {inputFields.map((field: InputFieldProps) => (
                <div key={field.key}>
                  <p className="text-sm font-bold mb-1">
                    {field.label}
                    {field.required && "*"}
                  </p>
                  {field.fieldType === "input" && (
                    <input
                      id={field.key}
                      name={field.key}
                      type={field.type}
                      value={formData[field.key as keyof FormData]}
                      placeholder={field.placeholder}
                      className="mt-1 block w-full h-[40px] border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                      required={field.required}
                      onChange={handleChange}
                    />
                  )}
                  {field.fieldType === "select" && field.options && (
                    <select
                      id={field.key}
                      name={field.key}
                      value={formData[field.key as keyof FormData]}
                      onChange={handleChange}
                      className="block w-full h-[40px] border border-gray-300 rounded-md shadow-sm px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                      required={field.required}
                    >
                      {field.options.map((option: OptionsProps) => (
                        <option key={option.key} value={option.key}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
              ))}
              <Button
                type="submit"
                // isDisabled={isLoading}
                isLoading={isLoading}
                className="bg-wati-green text-white font-bold py-2 rounded-md"
              >
                Book a Free Demo Now!
              </Button>
            </form>
          </div>
        )}
      </ModalContent>
    </Modal>
  );
};

export default BookDemoModal;
