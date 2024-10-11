import React from "react";

import { Button } from "@nextui-org/react";
import { useGlobalContext } from "../contexts/GlobalContext";

interface BookDemoBtnProps {
  content?: string;
}

const BookDemoBtn = ({ content = "Book a Demo!" }: BookDemoBtnProps) => {
  const { updateShowBookDemo } = useGlobalContext();

  return (
    <Button
      className="bg-wati-green text-Text/Brand/Default w-[178px] font-bold px-4 py-2 rounded-md"
      onPress={() => updateShowBookDemo(true)}
    >
      {content}
    </Button>
  );
};

export default BookDemoBtn;
