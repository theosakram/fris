import { Box } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <Box w="100%" h="100vh" bg="white.10">
      {children}
    </Box>
  );
};
