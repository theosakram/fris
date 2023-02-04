import { Center, Flex, Heading, Link, VStack, Text } from "@chakra-ui/react";
import { SocialMediaButtonGroup } from "../../components/SocialMediaButtonGroup";
import { LoginForm } from "./LoginForm";

export const LoginContainer = () => {
  return (
    <Center w="100%" h="100vh">
      <Flex direction="column" gap="1rem" w="50%">
        <VStack mt="-10rem !important" mb="5rem" align="start" spacing={0}>
          <Heading>FRIS</Heading>
          <Text fontSize="0.85rem">For your HR needs.</Text>
        </VStack>
        <Heading size="md">Log In</Heading>

        {/* Login Form */}
        <LoginForm />

        {/* Forgot Password */}
        <Link
          href="forgot-password"
          textDecoration="underline"
          alignSelf="end"
          fontSize="0.85rem"
        >
          Forgot your password?
        </Link>

        {/* External Login Buttons */}
        <Text>Or sign in with</Text>
        <SocialMediaButtonGroup variant="login" />

        {/* Register */}
        <Text fontSize="0.85rem" position="absolute" bottom="1rem">
          Haven't join yet?{" "}
          <Link
            href="register"
            textDecoration="underline"
            fontWeight="bold"
            letterSpacing="1px"
          >
            Register now
          </Link>
        </Text>
      </Flex>
    </Center>
  );
};
