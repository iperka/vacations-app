import React from "react";
import { Link, To, useMatch, useResolvedPath } from "react-router-dom";

type NavItemProps = {
  text: string;
  to: To;
};

const NavItem = (props: NavItemProps): JSX.Element => {
  const { text, to } = props;
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div
      className={
        match
          ? "border-blue-500 text-gray-900 dark:text-gray-50 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
          : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
      }
    >
      <Link to={to}>{text}</Link>
    </div>
  );
};

export default NavItem;
