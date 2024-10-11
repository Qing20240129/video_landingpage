import { Card, CardBody, CardFooter } from "@nextui-org/react";

interface BlogCardProps {
  title: string;
  desc: string;
  date: string;
  image: string;
  handleClick: () => void;
}

const BlogCard = ({ title, desc, date, image, handleClick }: BlogCardProps) => {
  return (
    <Card className="max-w-[280px]" isPressable={true} onPress={handleClick}>
      <CardBody className="p-6">
        <div className="space-y-4">
          <img
            src={image}
            alt={title}
            width={238}
            className="w-full object-cover"
          />
          <h2 className="font-semibold text-greyscale/text/title">{title}</h2>
          <p className="text-sm text-greyscale/text/body">{desc}</p>
        </div>
      </CardBody>
      <CardFooter className="px-6 py-4">
        <p className="text-sm text-Text/Default/Tertiary">{date}</p>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
