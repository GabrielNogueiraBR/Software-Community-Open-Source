import { SimpleGrid } from "@chakra-ui/react";
import React from "react";

import { Question } from "../../types/question";

import QuestionCard from "../QuestionCard";

interface QuestionCardListProps {
  questions: Question[];
}

export default function QuestionCardList({ questions }: QuestionCardListProps) {
  return (
    <SimpleGrid
      flex="1"
      minChildWidth={{ base: "80%", sm: "300px", md: "350px" }}
      spacing="40px"
    >
      {questions.map((question) => (
        <QuestionCard
          key={question.id}
          id={question.id}
          title={question.title}
          description={question.description}
          complexity={question.complexity}
          category={question.category}
          date={question.created}
        />
      ))}
    </SimpleGrid>
  );
}
