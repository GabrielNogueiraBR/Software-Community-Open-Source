import { SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import api from "../../services/api";
import QuestionCard from "../QuestionCard";

export default function QuestionCardList() {
  const [ questions, setQuestions ] = useState([]);

  useEffect(() => {
    api.get('/question/read')
      .then((res) => setQuestions(res.data))
  }, []);

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
