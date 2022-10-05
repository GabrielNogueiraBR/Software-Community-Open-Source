import {
  FormControl,
  FormLabel,
  Textarea as ChakraTextarea,
  TextareaProps as ChakraTextareaProps,
} from "@chakra-ui/react";

interface TextAreaProps extends ChakraTextareaProps {
  name: string;
  label?: string;
  error?: string;
}

export function TextArea({ name, label, error, ...rest }: TextAreaProps) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraTextarea
        name={name}
        id={name}
        focusBorderColor="pink.500"
        backgroundColor="gray.900"
        variant="filled"
        size="lg"
        _hover={{
          backgroundColor: "gray.900",
        }}
        {...rest}
        isInvalid={!!error}
      />
    </FormControl>
  );
}
