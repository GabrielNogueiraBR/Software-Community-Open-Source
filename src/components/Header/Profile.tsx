import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Nome do usuário</Text>
          <Text color="gray.300" fontSize="small">
            e-mail@mail.com
          </Text>
        </Box>
      )}
      <Avatar size="md" name="Nome do Usuário" />
    </Flex>
  );
}
