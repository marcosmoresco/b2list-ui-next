import { styled } from "../../config/stitches.config";

const Button = styled("button", {
  backgroundColor: "gray",
  color: "white",
  borderRadius: 5,
  fontSize: "$md",
  display: "block",
  border: 0,
  width: 150,
  height: 40,
  cursor: "pointer",
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

export default Button;
