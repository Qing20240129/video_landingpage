import React from "react";

import LogoIcon from "@public/assets/logo.png";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

const Header = () => {
  return (
    <Navbar
      height={110}
      position="static"
      isBordered
      classNames={{
        wrapper: "container px-0",
      }}
    >
      <NavbarBrand>
        <img className="h-[46px]" src={LogoIcon} />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-8" justify="end">
        <NavbarItem isActive>
          <Link color="foreground" href="#">
            AI Personalized Video
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            WhatsApp Video Messages
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            API Generation
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Blogs
          </Link>
        </NavbarItem>
        <Button className="bg-wati-green text-Text/Brand/Default w-[178px] font-bold px-4 py-2 rounded-md">
          Book a Demo!
        </Button>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
