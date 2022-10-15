import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import QuestionCard from "../QuestionCard";

// temporário
const questionList = [
  {
    id: "1",
    title: "Como instalar git?",
    description:
      "Preciso subir um projeto no github, porém não tenho git instalado na minha maquina, como faço para instalar?",
    complexity: 1,
    date: "10/15/2022",
    categories: ["Git"],
  },
  {
    id: "2",
    title: "Como alterar versão do node?",
    description:
      "Instalei nvm porém não sei o comando para alterar a versão atual do node na minha maquina, como faço para alterar....",
    complexity: 2,
    date: "10/14/2022",
    categories: ["Node", "Nvm"],
  },
  {
    id: "3",
    title: "Erro ao utilizar comando 'yarn install'?",
    description:
      "Ao realizar o comando yarn install, ocorre diversos erros na tentativa de instação dos pacotes, não sei se é por conta...",
    complexity: 3,
    date: "10/13/2022",
    categories: ["Node", "Nvm"],
  },
  {
    id: "4",
    title: "Erro ao utilizar comando 'yarn install'?",
    description:
      "Ao realizar o comando yarn install, ocorre diversos erros na tentativa de instação dos pacotes, não sei se é por conta...",
    complexity: 3,
    date: "10/13/2022",
    categories: ["Node", "Nvm"],
  },
  {
    id: "5",
    title: "Erro ao utilizar comando 'yarn install'?",
    description:
      "Ao realizar o comando yarn install, ocorre diversos erros na tentativa de instação dos pacotes, não sei se é por conta...",
    complexity: 3,
    date: "10/13/2022",
    categories: ["Node", "Nvm"],
  },
  {
    id: "6",
    title: "Erro ao utilizar comando 'yarn install'?",
    description:
      "Ao realizar o comando yarn install, ocorre diversos erros na tentativa de instação dos pacotes, não sei se é por conta...",
    complexity: 3,
    date: "10/13/2022",
    categories: ["Node", "Nvm"],
  },
  {
    id: "7",
    title: "Erro ao utilizar comando 'yarn install'?",
    description:
      "Ao realizar o comando yarn install, ocorre diversos erros na tentativa de instação dos pacotes, não sei se é por conta...",
    complexity: 3,
    date: "10/13/2022",
    categories: ["Node", "Nvm"],
  },
];

export default function QuestionCardList() {
  return (
    <SimpleGrid
      flex="1"
      minChildWidth={{ base: "80%", sm: "300px", md: "350px" }}
      spacing="40px"
    >
      {questionList.map((question) => (
        <QuestionCard
          key={question.id}
          id={question.id}
          title={question.title}
          description={question.description}
          complexity={question.complexity}
          categories={question.categories}
          date={question.date}
        />
      ))}
    </SimpleGrid>
  );
}
