import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import Header from "../../../components/Header";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import Sidebar from "../../../components/Sidebar";
import { InferGetServerSidePropsType } from "next";
import { findQuestionsAtFirestore } from "../../../services/firebase/firestore/read";

export default function QuestionList({
  questions,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Minhas Dúvidas
            </Heading>

            <Link href="/user/questions/create">
              <Button
                as="a"
                size="sm"
                fontSize="small"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Nova Dúvida
              </Button>
            </Link>
          </Flex>
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr px={["4", "4", "6"]} color="gray.300" width="8">
                <Th>
                  <Checkbox colorScheme={"pink"} />
                </Th>
                <Th>Dúvida</Th>
                <Th>Data de cadastro</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {questions.map((question, index) => (
                <Tr key={index}>
                  <Td px={["4", "4", "6"]}>
                    <Checkbox colorScheme={"pink"} />
                  </Td>
                  <Td>
                    <Box>
                      <Text fontWeight={"bold"}>{question.title}</Text>
                    </Box>
                  </Td>
                  <Td>{question.created}</Td>
                  <Td width="8">
                    <Link href={`/user/questions/${question.id}/editor`}>
                      <Button
                        as="a"
                        size="sm"
                        fontSize="small"
                        colorScheme="purple"
                        leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                      >
                        Editar Dúvida
                      </Button>
                    </Link>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </Box>
  );
}

export async function getServerSideProps() {
  const questions = await findQuestionsAtFirestore();

  const formateDate = (date: Date) =>
    date
      ? Intl.DateTimeFormat("pt-BR", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }).format(new Date(date))
      : "";

  const questionsFormated = questions.map((question) => {
    return {
      ...question,
      created: formateDate(question.created),
      updated: formateDate(question.updated),
      resolvedDate: formateDate(question.resolvedDate),
    };
  });

  return {
    props: {
      questions: questionsFormated,
    },
  };
}
