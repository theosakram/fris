import type {
  FormControlProps,
  FormErrorMessageProps,
  FormLabelProps,
} from "@chakra-ui/react";
import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react";
import type { PropsWithChildren } from "react";

export interface InputFieldProps {
  isInvalid: boolean;
  label?: string;
  errorMessage?: string;
  name: string;
  formControlProps?: FormControlProps;
  formLabelProps?: FormLabelProps;
  errorMessageProps?: FormErrorMessageProps;
}

export const InputField = ({
  children,
  isInvalid,
  label,
  name,
  errorMessage,
  ...props
}: PropsWithChildren<InputFieldProps>) => {
  return (
    <FormControl isInvalid={isInvalid} {...props.formControlProps}>
      {label && (
        <FormLabel
          htmlFor={name}
          {...props.formLabelProps}
          fontSize="0.75rem"
          color="gray.10"
        >
          {label}
        </FormLabel>
      )}
      {children}
      <FormErrorMessage {...props.errorMessageProps}>
        {isInvalid && errorMessage}
      </FormErrorMessage>
    </FormControl>
  );
};
