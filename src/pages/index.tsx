import { Flex } from "@chakra-ui/react";
import React from "react";
import Header from "../components/Header";
import QuestionCardList from "../components/QuestionCardList";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <Flex flex="1">
          <QuestionCardList />
        </Flex>
      </Flex>
    </Flex>
  );
}
