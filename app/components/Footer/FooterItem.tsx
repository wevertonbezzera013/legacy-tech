"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../lib/utils";
import { Icon } from "../icons/icons";

type FooterItemProps = {
  label: string;
  href: string;
  icon: string;
};

export const FooterItem = ({ label, href, icon }: FooterItemProps) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      target="_blank"
      className={cn(
        "flex items-center ease-in-out p-2 rounded-sm text-white gap-2",
        isActive && "text-white"
      )}
    >
      <div className="text-xl">
        <Icon name={icon} />
      </div>
      {label}
    </Link>
  );
};
