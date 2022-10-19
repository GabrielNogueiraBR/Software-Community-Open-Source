import {
  Stack,
} from "@chakra-ui/react";
import React from "react";
import CardCategories from "./CardCategories";
import CardContent from "./CardContent";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";

interface QuestionCardProps {
  id: string;
  title: string;
  description: string;
  date: string;
  complexity: number;
  category: string;
}

export default function QuestionCard({
  id,
  title,
  description,
  date,
  complexity,
  category,
}: QuestionCardProps) {
  return (
    <Stack
      backgroundColor="gray.800"
      borderRadius="8"
      paddingX="4"
      paddingY="2.5"
      maxW={{ base: "300px", sm: "450px", md: "400px", lg: "400px" }}
      spacing="1"
      _hover={{
        transform: 'scale(1.05)',
        transition: 'all ease-in-out 250ms'
      }}
    >
      <CardHeader id={id} title={title} complexity={complexity} />
      <CardCategories category={category} />
      <CardContent content={description} />
      <CardFooter date={date} />
    </Stack>
  );
}
