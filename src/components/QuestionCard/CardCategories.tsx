import { Badge, HStack } from "@chakra-ui/react";
import React from "react";

interface CardCategoriesProps {
  categories: string[];
}

export default function CardCategories({ categories }: CardCategoriesProps) {
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
      {categories.map((category, index) => (
        <Badge
          key={index}
          background="gray.400"
          color="gray.800"
          borderRadius="4px"
        >
          {category}
        </Badge>
      ))}
    </HStack>
  );
}
