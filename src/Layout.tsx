import Header from "@b2list/components/Header";
import { styled } from "@b2list/config/stitches.config";
import React, { FC } from "react";

const Box = styled("div", {});

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Box>
      <Header />
      {children}
    </Box>
  );
};

export default Layout;
