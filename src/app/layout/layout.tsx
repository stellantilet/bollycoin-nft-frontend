/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import Footer from "./footer/footer";
import Header from "./header/header";

export const Layout = (props: React.PropsWithChildren<{}>) => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
      <a href="#" className="scrollToTop">
        <i className="icofont-stylish-up"></i>
      </a>
    </div>
  );
};
