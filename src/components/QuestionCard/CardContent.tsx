import { Flex, Text } from "@chakra-ui/react";
import React from "react";

interface CardContentProps {
  content: string;
}

export default function CardContent({ content }: CardContentProps) {
  return (
    <Flex direction="row" justifyContent="flex-start" alignItems="center" w='100%'>
      <Text fontSize="sm" fontWeight={400} lineHeight="150%" noOfLines={2}>
        {content}
      </Text>
    </Flex>
  );
}
