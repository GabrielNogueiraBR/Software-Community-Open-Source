import {
  FormControl,
  FormLabel,
  NumberInput as ChakraNumberInput,
  NumberInputProps as ChakraNumberInputProps,
  NumberInputField as ChakraNumberInputField,
  NumberInputStepper as ChakraNumberInputStepper,
  NumberIncrementStepper as ChakraNumberIncrementStepper,
  NumberDecrementStepper as ChakraNumberDecrementStepper,
} from "@chakra-ui/react";

interface NumberInputProps extends ChakraNumberInputProps {
  name: string;
  label?: string;
  error?: string;
}

export function NumberInput({ name, label, error, ...rest }: NumberInputProps) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraNumberInput
        name={name}
        id={name}
        focusBorderColor="pink.500"
        backgroundColor="gray.900"
        size="lg"
        borderRadius="md"
        _hover={{
          backgroundColor: "gray.900",
        }}
        isInvalid={!!error}
        {...rest}
      >
        <ChakraNumberInputField border="none" />
        <ChakraNumberInputStepper>
          <ChakraNumberIncrementStepper border="none" />
          <ChakraNumberDecrementStepper border="none" />
        </ChakraNumberInputStepper>
      </ChakraNumberInput>
    </FormControl>
  );
}
