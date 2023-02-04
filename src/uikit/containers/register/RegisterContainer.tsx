import { Center, Flex, VStack, Heading, Text } from "@chakra-ui/react";
import { SocialMediaButtonGroup } from "../../components/SocialMediaButtonGroup";
import { RegisterForm } from "./RegisterForm";

export const RegisterContainer = () => {
  return (
    <Center w="100%" h="100vh">
      <Flex direction="column" gap="2rem" w="50%">
        <VStack mt="-5rem" mb="5rem" align="start" spacing={0}>
          <Heading>FRIS</Heading>
          <Text fontSize="0.85rem">For your HR needs.</Text>
        </VStack>

        {/* Social media button */}
        <Text>Choose one option</Text>
        <SocialMediaButtonGroup variant="register" />

        {/* Email Register */}
        <Text>Or with your email</Text>
        <RegisterForm />
      </Flex>
    </Center>
  );
};
