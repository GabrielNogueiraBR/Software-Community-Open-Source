import { Badge, Flex } from "@chakra-ui/react";
import React from "react";

interface CardFooterProps {
  date: Date;
}

export default function CardFooter({ date }: CardFooterProps) {
  const formatedDate = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(date));

  return (
    <Flex
      w="100%"
      direction="row"
      justifyContent="flex-end"
      alignItems="center"
      paddingTop="3"
    >
      <Badge
        background="purple.500"
        color="gray.800"
        borderRadius="4px"
        textTransform="none"
      >
        {formatedDate}
      </Badge>
    </Flex>
  );
}
