import React from "react";
import { FloatingDockInverted } from "@/components/ui/dock/floating-dock-inverted";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
  IconTimeline,
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
      title: "Expandable Card",
      icon: <IconExchange className="size-full" />,
      href: "/expandable-card",
    },

    {
      title: "Expandable Card 2",
      icon: <IconBrandX className="size-full" />,
      href: "/expandable-card-2",
    },
    {
      title: "Test Console",
      icon: <IconBrandGithub className="size-full" />,
      href: "/console",
    },
    {
      title: "Timeline",
      icon: <IconTimeline className="size-full" />,
      href: "/timeline",
    },
  ];
  return <FloatingDockInverted items={links} />;
}
