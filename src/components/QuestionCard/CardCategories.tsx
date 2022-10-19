import { Badge, HStack } from "@chakra-ui/react";
import React from "react";

interface CardCategoriesProps {
  category: string;
}

export default function CardCategories({ category }: CardCategoriesProps) {
  return (
    <HStack
      justifyContent="flex-start"
      alignItems="center"
      overflowX="auto"
      sx={{
        "&::-webkit-scrollbar": { display: "none" },
        "&": { "user-select": "none" },
      }}
    >
      <Badge
          background="gray.400"
          color="gray.800"
          borderRadius="4px"
        >
          {category}
        </Badge>
    </HStack>
  );
}
