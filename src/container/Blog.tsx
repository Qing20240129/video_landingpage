import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import BlogCardList from "../components/BlogCardList";
import FreeVideo from "../components/FreeVideo";
import BlogMarkdown from "../components/BlogMarkdown";
import GenerateAtScaleContent from "@public/markdown/generate_personalized_videos/generate_personalized_videos.md?raw";
import SendWhatsappMessageContent from "@public/markdown/send_whatsapp_video_message/send_whatsapp_video_message.md?raw";

const Blog = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="" element={<BlogCardList />} />
        <Route
          path="generate-personalized-videos-at-scale"
          element={
            <BlogMarkdown
              title="Generate AI Personalized Videos At Scale"
              mdContent={GenerateAtScaleContent}
              path="/markdown/generate_personalized_videos"
            />
          }
        />
        <Route
          path="send-whatsapp-personalized-video-messages"
          element={
            <BlogMarkdown
              title="Send WhatsApp AI Video Messages"
              mdContent={SendWhatsappMessageContent}
              path="/markdown/send_whatsapp_video_message"
            />
          }
        />
        <Route path="*" element={<Navigate to="" />} />
      </Routes>
      <FreeVideo />
    </React.Fragment>
  );
};

export default Blog;
