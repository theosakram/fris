import { yupResolver } from "@hookform/resolvers/yup";
import type { ReactNode } from "react";
import type {
  DeepPartial,
  SubmitHandler,
  UseFormReturn,
} from "react-hook-form";
import { useForm } from "react-hook-form";
import type { AnyObjectSchema } from "yup";

export interface HookFormProps<T extends object> {
  onSubmit: SubmitHandler<T>;
  schema: AnyObjectSchema;
  defaultValues: DeepPartial<T>;
  children: (data: UseFormReturn<T>) => ReactNode;
}

export const HookForm = <T extends object>({
  defaultValues,
  onSubmit,
  schema,
  children,
}: HookFormProps<T>) => {
  const methods = useForm<T>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>{children(methods)}</form>
  );
};
