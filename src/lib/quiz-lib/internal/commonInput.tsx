import { InputProps, SelectProps } from "@chakra-ui/react";

export function commonInputStyles() {
  return {
    size: "lg",
    _hover: {
      borderColor: "bg.600",
    },
    _placeholder: {
      color: "text.300",
    },
    borderColor: "bg.500",
    borderWidth: 1,
    backgroundColor: "bg.100",
    color: "text.main",
  } satisfies InputProps | SelectProps;
}
