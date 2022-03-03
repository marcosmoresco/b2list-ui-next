import StitchesLogo from "@b2list/icons/Logo";
import Link from "next/link";
import React from "react";

import { styled } from "../../config/stitches.config";

const Box = styled("div", {
  backgroundColor: "#0e6cd1",
  color: "white",
  fontSize: "$md",
  display: "block",
  height: 70,
  padding: "0px 10px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  variants: {
    color: {
      primary: {
        backgroundColor: "$primary",
      },
      secondary: {
        backgroundColor: "$secondary",
      },
    },
  },
});

const Text = styled("span", {
  marginLeft: 10,
});

const BoxLink = styled("div", {
  display: "flex",
  alignItems: "center",
});

const Header = () => {
  return (
    <Box>
      <Link href="/">
        <BoxLink>
          <StitchesLogo />
          <Text>B2List</Text>
        </BoxLink>
      </Link>
    </Box>
  );
};

export default Header;
