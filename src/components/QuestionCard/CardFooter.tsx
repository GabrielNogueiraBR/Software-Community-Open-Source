import { Badge, Flex } from "@chakra-ui/react";
import React from "react";
import { useDateFormater } from "../../hooks/useDateFormater";

interface CardFooterProps {
  date: Date;
}

export default function CardFooter({ date }: CardFooterProps) {
  const { dateFormater } = useDateFormater();

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
        {dateFormater(date)}
      </Badge>
    </Flex>
  );
}
