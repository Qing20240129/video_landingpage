import React from "react";

import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import ReactMarkdown, { Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

interface IProps {
  title: string;
  mdContent: string;
  path: string;
}

const BlogMarkdown: React.FC<IProps> = ({ title, mdContent, path }) => {
  const renderers: Components = {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    img: ({ node, ...props }) => {
      const imageUrl = `${path}/${props.src}`;
      return (
        <Zoom>
          <img
            {...props}
            src={imageUrl}
            alt={props.alt}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Zoom>
      );
    },
  };

  return (
    <section>
      <div className="container prose max-w-full text-sm p-10">
        <Breadcrumbs
          separator="/"
          size="lg"
          itemClasses={{
            base: "pl-0",
            separator: "px-2",
          }}
          classNames={{
            list: "pl-0 mt-0 mb-10",
          }}
        >
          <BreadcrumbItem href="/blogs">Blog</BreadcrumbItem>
          <BreadcrumbItem>{title}</BreadcrumbItem>
        </Breadcrumbs>
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={renderers}>
          {mdContent}
        </ReactMarkdown>
      </div>
    </section>
  );
};

export default BlogMarkdown;
