import { HookForm } from "../../components/form/HookForm";
import { Input } from "../../components/form/Input";
import { InputField } from "../../components/form/InputField";
import { object, string, ref, InferType } from "yup";
import { Button, VStack } from "@chakra-ui/react";

const schema = object({
  username: string().required("Cannot be empty"),
  email: string().required("Cannot be empty").email("Wrong email format"),
  password: string()
    .required("Cannot be empty")
    .min(5, "Must be longer than 5 character"),
  repeatPassword: string()
    .required("Cannot be empty")
    .min(5, "Must be longer than 5 character")
    .oneOf([ref("password")], "Password do not match"),
});

type NewUser = InferType<typeof schema>;

export const RegisterForm = () => {
  return (
    <HookForm<NewUser>
      defaultValues={{
        email: "",
        password: "",
        repeatPassword: "",
        username: "",
      }}
      onSubmit={(e) => alert(JSON.stringify(e))}
      schema={schema}
    >
      {({ formState: { errors }, register }) => (
        <VStack w="100%" spacing="2rem">
          <InputField
            isInvalid={!!errors.username?.message}
            errorMessage={errors.username?.message}
            name="username"
            label="USERNAME"
            formLabelProps={{ color: "gray" }}
          >
            <Input
              {...register("username")}
              type="text"
              placeholder="Username"
            />
          </InputField>
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
            isInvalid={!!errors.repeatPassword?.message}
            errorMessage={errors.repeatPassword?.message}
            name="repeatPassword"
            label="REPEAT PASSWORD"
            formLabelProps={{ color: "gray" }}
          >
            <Input
              {...register("repeatPassword")}
              type="password"
              placeholder="Password"
            />
          </InputField>
          <Button variant="black" w="100%" size="lg" type="submit">
            CREATE NEW ACCOUNT
          </Button>
        </VStack>
      )}
    </HookForm>
  );
};
