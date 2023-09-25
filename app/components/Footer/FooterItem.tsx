import Link from "next/link";
import { Icon } from "../icons/icons";

type FooterItemProps = {
  label: string;
  href: string;
  icon: string;
};

export const FooterItem = ({ label, href, icon }: FooterItemProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      className={
        "flex items-center p-2 rounded-sm text-white gap-2 hover:text-green-blue ease-in-out duration-300"
      }
    >
      <div className="text-xl">
        <Icon name={icon} />
      </div>
      {label}
    </Link>
  );
};
