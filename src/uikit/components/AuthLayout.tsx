import { Flex, SimpleGrid } from "@chakra-ui/react";
import Head from "next/head";

import { PropsWithChildren } from "react";

export const AuthLayout = ({
  children,
  head,
}: PropsWithChildren<{ head?: string }>) => {
  return (
    <SimpleGrid columns={2} minChildWidth="50%" w="100%" h="100vh">
      <Head>
        <title>{head}</title>
      </Head>
      <Flex bg="gray.20">
        <h1>Hehe</h1>
      </Flex>
      {children}
    </SimpleGrid>
  );
};
