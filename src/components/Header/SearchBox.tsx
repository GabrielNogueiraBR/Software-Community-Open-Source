import { Flex, Icon, Input, InputProps } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

interface SearchBoxProps extends InputProps {}

export function SearchBox({ ...rest }: SearchBoxProps) {
  return (
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      ml="6"
      maxWidth={400}
      alignSelf="center"
      color="gray.200"
      position="relative"
      bg="gray.800"
      borderRadius={"full"}
    >
      <Input
        color="gray.50"
        variant="unstyled"
        px="4"
        mr="4"
        placeholder="Buscar na plataforma"
        _placeholder={{ color: "gray.400" }}
        {...rest}
      />
      <Icon as={RiSearchLine} fontSize="20" />
    </Flex>
  );
}
