import React from "react";

import LogoIcon from "@public/assets/logo.png";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";
import BookDemoBtn from "./BookDemoBtn";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {
      label: "AI Personalized Video",
      key: "ai-personalized-videos",
      href: "/#ai-personalized-videos",
    },
    {
      label: "WhatsApp Video Messages",
      key: "whatsapp-video-messages",
      href: "/#whatsapp-video-messages",
    },
    {
      label: "API Generation",
      key: "api-video-generation",
      href: "/#api-video-generation",
    },
    { label: "Blogs", key: "blogs", href: "/blogs" },
  ];

  return (
    <Navbar
      height={110}
      // position="static"
      isBordered
      classNames={{
        wrapper: "container px-8",
      }}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/">
            <img className="h-[46px] min-w-[129px]" src={LogoIcon} />
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-8" justify="end">
        {menuItems.map((item, index) => (
          <NavbarItem isActive={false} key={`${item}-${index}`}>
            <Link
              color={
                window.location.pathname.includes(item.key)
                  ? "primary"
                  : "foreground"
              }
              href={item.href}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <BookDemoBtn />
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                window.location.pathname.includes(item.key)
                  ? "primary"
                  : "foreground"
              }
              className="w-full"
              href={item.href}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
