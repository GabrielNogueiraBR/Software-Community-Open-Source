import {
  FormControl,
  FormLabel,
  Select as ChakraSelect,
  SelectProps as ChakraSelectProps,
} from "@chakra-ui/react";

interface SelectProps extends ChakraSelectProps {
  name: string;
  options: string[];
  label?: string;
  error?: string;
}

export function Select({ name, options, error, label, ...rest }: SelectProps) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraSelect
        name={name}
        id={name}
        focusBorderColor="pink.500"
        backgroundColor="gray.900"
        variant="filled"
        size="lg"
        _hover={{
          backgroundColor: "gray.900",
        }}
        sx={{
          ".select-option": { backgroundColor: "gray.900" },
          ".select-option:checked": {
            backgroundColor: "pink.500",
          },
        }}
        isInvalid={!!error}
        {...rest}
      >
        {options.map((option, index) => (
          <option
            key={index}
            value={option.toLowerCase()}
            className="select-option"
          >
            {option}
          </option>
        ))}
      </ChakraSelect>
    </FormControl>
  );
}
