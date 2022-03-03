import React, { FC } from "react";
import { styled } from "@b2list/config/stitches.config";

const Box = styled('div', {});

export type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  
  return (
    <Box>             
        {children}                    
    </Box>
  );
};

export default Layout;