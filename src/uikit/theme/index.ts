import { extendTheme } from "@chakra-ui/react";
import { Button } from "./button";
import { colors } from "./colors";

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = {
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
};

const theme = extendTheme({
  colors,
  fonts,
  breakpoints,
  components: {
    Button,
  },
});

export default theme;
