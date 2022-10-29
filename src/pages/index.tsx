import { Flex } from "@chakra-ui/react";
import React from "react";
import Header from "../components/Header";
import QuestionCardList from "../components/QuestionCardList";
import Sidebar from "../components/Sidebar";
import { findQuestionsAtFirestore } from "../services/firebase/firestore/read";

export default function Home({ questions }) {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <Flex flex="1">
          <QuestionCardList questions={questions} />
        </Flex>
      </Flex>
    </Flex>
  );
}

export async function getServerSideProps() {
  const questions = await findQuestionsAtFirestore();

  return {
    props: {
      questions,
    },
  };
}
