import React from "react";
import { Box } from "@mui/material";

import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Box component="main">{children}</Box>
      <Footer />
    </>
  );
};

export default Layout;
