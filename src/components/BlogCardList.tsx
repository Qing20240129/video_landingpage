import { useNavigate } from "react-router-dom";

import CreateVideoImg from "@public/assets/create-video.png";
import WhatsappImg from "@public/assets/whatsapp.png";
import BlogCard from "./BlogCard";

const BlogCardList = () => {
  const navigate = useNavigate();

  return (
    <section>
      <div className="container px-16 py-20 flex items-center flex-wrap gap-10">
        <BlogCard
          title="Generate AI Personalized Videos At Scale"
          desc="Generate personalized video at scale by switching value of the script variables."
          image={CreateVideoImg}
          date="Oct 2024"
          handleClick={() =>
            navigate("/blogs/generate-personalized-videos-at-scale")
          }
        />
        <BlogCard
          title="Send WhatsApp AI Video Messages"
          desc="Generate and send personalized video messages on WhatsAPP via WATI. Take “Abandoned Cart Recovery” as an example."
          image={WhatsappImg}
          date="Oct 2024"
          handleClick={() =>
            navigate("/blogs/send-whatsapp-personalized-video-messages")
          }
        />
      </div>
    </section>
  );
};

export default BlogCardList;
