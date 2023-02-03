import { defineStyleConfig } from "@chakra-ui/react";

export const Button = defineStyleConfig({
  baseStyle: {
    borderRadius: "sm",
  },
  variants: {
    black: {
      bg: "black",
      color: "white",
    },
    outlined: {
      border: "1px solid",
      borderColor: "gray",
      _hover: {
        bg: "black",
        color: "white.0",
      },
    },
  },
  defaultProps: {
    variant: "black",
  },
});
