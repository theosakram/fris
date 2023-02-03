import { yupResolver } from "@hookform/resolvers/yup";
import { DeepPartial, SubmitHandler, useForm } from "react-hook-form";
import { AnyObjectSchema } from "yup";

interface UseHookFormProps<T> {
  schema: AnyObjectSchema;
  defaultValues: DeepPartial<T>;
}

export const useHookForm = <T extends object>(props: UseHookFormProps<T>) => {
  const methods = useForm<T>({
    defaultValues: props.defaultValues,
    resolver: yupResolver(props.schema),
  });

  return methods;
};
