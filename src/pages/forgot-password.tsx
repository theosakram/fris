import {
  Button,
  Center,
  Flex,
  Heading,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AuthLayout } from "src/uikit/components/AuthLayout";
import { HookForm } from "src/uikit/components/form/HookForm";
import { Input } from "src/uikit/components/form/Input";
import { InputField } from "src/uikit/components/form/InputField";
import { string, InferType, object } from "yup";

const schema = object({
  email: string().required("Cannot be empty").email("Wrong email format"),
});

type ForgotPassword = InferType<typeof schema>;

const ForgotPasswordPage = () => {
  return (
    <AuthLayout>
      <Center w="100%" h="100vh">
        <Flex direction="column" gap="2rem" w="50%">
          <VStack mt="-10rem !important" mb="5rem" align="start" spacing={0}>
            <Heading>FRIS</Heading>
            <Text fontSize="0.85rem">For your HR needs.</Text>
          </VStack>
          <Heading as="h1" size="md">
            Forgot your password
          </Heading>
          <Text>
            Enter your username or email address and we will send you a link to
            reset your password.
          </Text>

          {/* Forgot password form */}
          <HookForm<ForgotPassword>
            defaultValues={{ email: "" }}
            onSubmit={(e) => alert(JSON.stringify(e))}
            schema={schema}
          >
            {({ formState: { errors }, register }) => (
              <VStack w="100%" spacing="2rem">
                <InputField
                  isInvalid={!!errors.email?.message}
                  errorMessage={errors.email?.message}
                  name="email"
                  label="EMAIL"
                  formLabelProps={{ color: "gray.50" }}
                >
                  <Input
                    {...register("email")}
                    type="email"
                    placeholder="Email"
                  />
                </InputField>
                <Button variant="black" w="100%" size="lg" type="submit">
                  Forgot your password
                </Button>
              </VStack>
            )}
          </HookForm>

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
