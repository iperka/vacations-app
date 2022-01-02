import React from "react";
import { Link, To } from "react-router-dom";

type NavItemProps = {
  active: boolean;
  text: string;
  to: To
};

const NavItem = (props: NavItemProps): JSX.Element => {
  const { active, text, to } = props;

  return (
    <div
      className={
        active
          ? "border-blue-500 text-gray-900 dark:text-gray-50 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
          : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
      }
    >
      <Link to={to}>{text}</Link>
    </div>
  );
};

export default NavItem;
