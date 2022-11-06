import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import Link from "next/link";
import { FormEvent } from "react";
import { Input } from "../../../components/Form/Input";
import { NumberInput } from "../../../components/Form/NumberInput";
import { Select } from "../../../components/Form/Select";
import { TextArea } from "../../../components/Form/TextArea";
import Header from "../../../components/Header";

import * as yup from "yup";
import { QuestionPayload } from "../../../types/question";
import api from "../../../services/api";
import { useRouter } from "next/router";
import Head from "next/head";
import Sidebar from "../../../components/Sidebar";
import { findCategoriesAtFirestore } from "../../../services/firebase/firestore/read";
import { InferGetServerSidePropsType } from "next";

const formCreateSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  category: yup.string().required(),
  complexity: yup.number().min(0).max(5).required(),
});

export default function CreateUser({
  categories,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      title: "",
      category: "typescript",
      complexity: 0,
      description: "",
    },
    validationSchema: formCreateSchema,
    onSubmit: async ({ title, category, complexity, description }) => {
      const question: QuestionPayload = {
        assignee: {
          name: "admin",
        },
        title,
        category,
        complexity,
        description,
      };

      await api
        .post("/question/create", { ...question })
        .then(() => router.push("/user/questions"))
        .catch((e) => console.error(e));
    },
  });

  return (
    <>
      <Head>
        <title>Question create</title>
      </Head>
      <Box>
        <Header />
        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
          <Sidebar />
          <Box
            as="form"
            flex="1"
            borderRadius={8}
            bg="gray.800"
            p={["6", "8"]}
            onSubmit={(e: FormEvent<HTMLElement>) =>
              formik.handleSubmit(e as FormEvent<HTMLFormElement>)
            }
          >
            <Heading size="lg" fontWeight={"normal"}>
              Criar Dúvida
            </Heading>
            <Divider my="6" borderColor={"gray.700"} />
            <VStack spacing={"8"}>
              <HStack w="100%" spacing={["6", "8"]}>
                <SimpleGrid
                  minChildWidth={"240px"}
                  spacing={["6", "8"]}
                  w="100%"
                >
                  <Input
                    name="title"
                    label="Título"
                    error={formik.errors.title}
                    flex="2"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                  />
                </SimpleGrid>
                <SimpleGrid
                  minChildWidth={"240px"}
                  spacing={["6", "8"]}
                  w="100%"
                >
                  <Select
                    name="category"
                    label="Categoria"
                    options={categories.map((category) => category.name)}
                    error={formik.errors.category}
                    onChange={formik.handleChange}
                    value={formik.values.category}
                    flex="1"
                  />
                  <NumberInput
                    name="complexity"
                    label="Complexidade"
                    min={0}
                    max={5}
                    defaultValue={0}
                    error={formik.errors.complexity}
                    onChange={(valueString, valueNumber) =>
                      formik.setFieldValue("complexity", valueNumber)
                    }
                    value={formik.values.complexity}
                    flex="1"
                  />
                </SimpleGrid>
              </HStack>
              <SimpleGrid minChildWidth={"240px"} spacing={["6", "8"]} w="100%">
                <TextArea
                  name="description"
                  label="Descrição"
                  error={formik.errors.description}
                  onChange={formik.handleChange}
                  value={formik.values.description}
                />
              </SimpleGrid>
            </VStack>

            <Flex mt="8" justify={"flex-end"}>
              <HStack spacing={"4"}>
                <Link href="/user/questions" passHref>
                  <Button as="a" colorScheme={"whiteAlpha"} px="12" py="2.5">
                    Cancelar
                  </Button>
                </Link>
                <Button type="submit" colorScheme={"pink"} px="12" py="2.5">
                  Salvar
                </Button>
              </HStack>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export async function getServerSideProps() {
  const categories = await findCategoriesAtFirestore();

  return {
    props: {
      categories,
    },
  };
}
