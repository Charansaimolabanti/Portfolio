'use client'

import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconHome,
  IconFileText,
  IconMail,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import React from "react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "/", // home page
    },
    {
      title: "Resume",
      icon: <IconFileText className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#resume", // anchor to resume section
    },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://www.linkedin.com/in/charan-sai-molabanti-49a022263/",
    },
    {
      title: "Instagram",
      icon: <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://instagram.com/_charan_sai__molabanti", // replace with your insta
    },
    {
      title: "Gmail",
      icon: <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "mailto:charansai.molabanti@gmail.com",
    },
    {
      title: "WhatsApp",
      icon: <IconBrandWhatsapp className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://wa.me/919032159979", // replace with your WhatsApp number
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://github.com/Charansaimolabanti",
    },
  ];

   
   return (
  <div className="fixed bottom-0 left-0 w-full flex items-center justify-center px-6 py-4 bg-transparent z-50">
    <FloatingDock mobileClassName="translate-y-20" items={links} />
  </div>
);

  
}
