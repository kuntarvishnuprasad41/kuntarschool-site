import React from "react";

interface NavigationItem {
  label: string;
  width: string;
}

interface NavigationProps {
  items: NavigationItem[];
}

const Navigation: React.FC<NavigationProps> = ({ items }) => {
  return (
    <nav className="flex gap-5 items-center self-stretch my-auto text-2xl font-medium tracking-wide min-w-[240px] w-[818px] max-md:max-w-full">
      {items.map((item, index) => (
        <a
          key={index}
          href="#"
          className={`self-stretch my-auto ${item.width}`}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};

export default Navigation;
