import React from "react";
import Navbar from "../Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = (props: LayoutProps): JSX.Element => {
  return (
    <>
      <Navbar />

      {props.children}
    </>
  );
};

export default Layout;
