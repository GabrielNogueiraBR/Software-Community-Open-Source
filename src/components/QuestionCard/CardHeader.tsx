import {
  Flex,
  Text,
  Grid,
  GridItem,
  Tooltip,
  LinkOverlay,
  LinkBox,
} from "@chakra-ui/react";
import React from "react";

interface CardHeaderProps {
  id: string;
  title: string;
  complexity: number;
}

export default function CardHeader({ id, title, complexity }: CardHeaderProps) {
  return (
    <Flex
      direction="row"
      justifyContent="space-between"
      w="100%"
      alignItems="center"
    >
      <Tooltip
        label={title}
        placement="top"
        borderRadius={4}
        background="pink.500"
      >
        <LinkBox>
          <LinkOverlay href={`/questions/${id}`}>
            <Text fontWeight={700} fontSize="lg" noOfLines={1}>
              {title}
            </Text>
          </LinkOverlay>
        </LinkBox>
      </Tooltip>
      <Tooltip label="Valor de complexidade" placement="top" bg="pink.500">
        <Grid templateColumns="repeat(5, 1fr)" w="6" h="3" gap="0.5">
          <GridItem
            w="100%"
            h="100%"
            bg={complexity >= 1 ? "pink.500" : "gray.600"}
            borderRadius="1px"
          />
          <GridItem
            w="100%"
            h="100%"
            bg={complexity >= 2 ? "pink.500" : "gray.600"}
            borderRadius="1px"
          />
          <GridItem
            w="100%"
            h="100%"
            bg={complexity >= 3 ? "pink.500" : "gray.600"}
            borderRadius="1px"
          />
          <GridItem
            w="100%"
            h="100%"
            bg={complexity >= 4 ? "pink.500" : "gray.600"}
            borderRadius="1px"
          />
          <GridItem
            w="100%"
            h="100%"
            bg={complexity >= 5 ? "pink.500" : "gray.600"}
            borderRadius="1px"
          />
        </Grid>
      </Tooltip>
    </Flex>
  );
}
