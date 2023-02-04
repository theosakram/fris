import { VStack, Checkbox, Button } from "@chakra-ui/react";
import { HookForm } from "src/uikit/components/form/HookForm";
import { Input } from "src/uikit/components/form/Input";
import { InputField } from "src/uikit/components/form/InputField";
import { object, string, InferType, boolean } from "yup";

const schema = object({
  email: string().required("Cannot be empty").email("Wrong email format"),
  password: string().required("Cannot be empty"),
  keepLoggedIn: boolean().optional(),
});

type LoginUser = InferType<typeof schema>;

export const LoginForm = () => {
  return (
    <HookForm<LoginUser>
      defaultValues={{
        email: "",
        keepLoggedIn: false,
        password: "",
      }}
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
            formLabelProps={{ color: "gray" }}
          >
            <Input {...register("email")} type="email" placeholder="Email" />
          </InputField>
          <InputField
            isInvalid={!!errors.password?.message}
            errorMessage={errors.password?.message}
            name="password"
            label="PASSWORD"
            formLabelProps={{ color: "gray" }}
          >
            <Input
              {...register("password")}
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
      )}
    </HookForm>
  );
};
