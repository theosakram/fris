import {
  Button,
  Center,
  Flex,
  Heading,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { AuthLayout } from "src/uikit/components/AuthLayout";
import { Input } from "src/uikit/components/form/Input";
import { InputField } from "src/uikit/components/form/InputField";

interface Person {
  email: string;
}

const ForgotPasswordPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Person>({
    defaultValues: {
      email: "",
    },
  });

  return (
    <AuthLayout>
      <Center w="100%" h="100vh">
        <Flex direction="column" gap="2rem" w="50%">
          <Heading as="h1" size="md">
            Forgot your password
          </Heading>
          <Text>
            Enter your username or email address and we will send you a link to
            reset your password.
          </Text>
          <form onSubmit={handleSubmit((e) => alert(JSON.stringify(e)))}>
            <VStack w="100%" spacing="2rem">
              <InputField
                isInvalid={!!errors.email?.message}
                errorMessage={errors.email?.message}
                name="email"
                label="EMAIL"
                formLabelProps={{ color: "gray.50" }}
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
              <Button variant="black" w="100%" size="lg" type="submit">
                Forgot your password
              </Button>
            </VStack>
          </form>

          <Link
            textDecoration="underline"
            fontWeight="bold"
            href="login"
            alignSelf="center"
          >
            Back
          </Link>
        </Flex>
      </Center>
    </AuthLayout>
  );
};

export default ForgotPasswordPage;
