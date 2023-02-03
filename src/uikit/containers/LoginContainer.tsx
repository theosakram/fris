import {
  Button,
  Center,
  Checkbox,
  Flex,
  Heading,
  Link,
  VStack,
  Text,
  SimpleGrid,
  Icon,
  Box,
} from "@chakra-ui/react";
import { Input } from "src/uikit/components/form/Input";
import { InputField } from "src/uikit/components/form/InputField";
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineGoogle,
} from "react-icons/ai";
import { useForm } from "react-hook-form";
import { signInWithGoogle } from "src/modules/Auth/authService";

interface Person {
  email: string;
  password: string;
  keepLoggedIn: boolean;
}

const buttons = [
  {
    label: "Google",
    icon: AiOutlineGoogle,
    onClick: () => signInWithGoogle(),
  },
  {
    label: "GitHub",
    icon: AiOutlineGithub,
  },
  {
    label: "LinkedIn",
    icon: AiFillLinkedin,
  },
];

export const LoginContainer = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Person>({
    defaultValues: {
      email: "",
      keepLoggedIn: false,
      password: "",
    },
  });

  return (
    <Center w="100%" h="100vh">
      <Flex direction="column" gap="1rem" w="50%">
        <VStack mt="-10rem !important" mb="5rem" align="start" spacing={0}>
          <Heading>FRIS</Heading>
          <Text fontSize="0.85rem">For your HR needs.</Text>
        </VStack>
        <Heading size="md">Log In</Heading>

        {/* Login Form */}
        <form onSubmit={handleSubmit((e) => alert(JSON.stringify(e)))}>
          <VStack w="100%" spacing="2rem">
            <InputField
              isInvalid={!!errors.email?.message}
              errorMessage={errors.email?.message}
              name="email"
              label="EMAIL"
              formLabelProps={{ color: "gray" }}
            >
              <Input
                {...register("email", {
                  required: {
                    value: true,
                    message: "Cannot be empty",
                  },
                  pattern: {
                    message: "Wrong email format",
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  },
                })}
                type="email"
                placeholder="Email"
              />
            </InputField>
            <InputField
              isInvalid={!!errors.password?.message}
              errorMessage={errors.password?.message}
              name="password"
              label="PASSWORD"
              formLabelProps={{ color: "gray" }}
            >
              <Input
                {...register("password", {
                  required: { message: "Cannot be empty", value: true },
                })}
                type="password"
                placeholder="Password"
              />
            </InputField>
            <InputField
              isInvalid={!!errors.keepLoggedIn?.message}
              errorMessage={errors.keepLoggedIn?.message}
              name="keepLoggedIn"
              formLabelProps={{ color: "gray" }}
            >
              <Checkbox
                {...register("keepLoggedIn")}
                borderColor="gray.50"
                colorScheme="gray"
              >
                Keep me logged in
              </Checkbox>
            </InputField>
            <Button variant="black" w="100%" size="lg" type="submit">
              LOG IN NOW
            </Button>
          </VStack>
        </form>

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
        <SimpleGrid w="100%" columns={3} spacing="1rem">
          {buttons.map((button, i) => (
            <Button
              key={i}
              leftIcon={<Icon as={button.icon} />}
              variant="outlined"
              onClick={button.onClick}
            >
              {button.label}
            </Button>
          ))}
        </SimpleGrid>

        {/* Register */}
        <Text fontSize="0.85rem" position="absolute" bottom="1rem">
          Not a member yet?{" "}
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
