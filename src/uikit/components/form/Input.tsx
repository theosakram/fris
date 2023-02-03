import { InputProps, Input as CInput } from "@chakra-ui/react";
import { forwardRef, LegacyRef } from "react";

export const Input = forwardRef(
  (props: InputProps, ref: LegacyRef<HTMLInputElement>) => {
    return (
      <CInput
        ref={ref}
        borderColor="transparent"
        placeholder="Email or Username"
        _focus={{
          outline: "none",
          borderBottomColor: "black",
        }}
        _active={{ outline: "none" }}
        _focusVisible={{ outline: "none" }}
        _placeholder={{ color: "gray" }}
        bg="white.0"
        borderRadius="sm"
        {...props}
      />
    );
  }
);
