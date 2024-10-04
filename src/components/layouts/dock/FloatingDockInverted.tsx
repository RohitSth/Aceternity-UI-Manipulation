import React from "react";
import { FloatingDockInverted } from "@/components/ui/dock/floating-dock-inverted";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";

export default function FloatingDockInvertedComponent() {
  const links = [
    {
      title: "Home",
      icon: <IconHome className="size-full" />,
      href: "/",
    },

    {
      title: "Floating Dock",
      icon: <IconTerminal2 className="size-full" />,
      href: "/floating-dock",
    },
    {
      title: "Shop",
      icon: <IconNewSection className="size-full" />,
      href: "/shop",
    },
    {
      title: "Grid Demo",
      icon: (
        <Image
          src="https://assets.aceternity.com/logo-dark.png"
          width={20}
          height={20}
          alt="Aceternity Logo"
          unoptimized
          loading="lazy"
        />
      ),
      href: "/grid-demo",
    },
    {
      title: "Changelog",
      icon: <IconExchange className="size-full" />,
      href: "#",
    },

    {
      title: "Twitter",
      icon: <IconBrandX className="size-full" />,
      href: "#",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="size-full" />,
      href: "#",
    },
  ];
  return (
    <div className="flex items-center justify-center w-full">
      <FloatingDockInverted items={links} />
    </div>
  );
}
