import { Box, Button, Checkbox, Flex, Heading, Icon, Link, Table, Tbody, Td, Th, Thead, Tr, Text } from "@chakra-ui/react";
import Header from "../../components/Header";

export default function QuestionList() {
   return (
      <Box>
         <Header />
         <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
            <Box flex="1" borderRadius={8} bg="gray.800" p="8">
               <Flex mb="8" justify="space-between" align="center">
                  <Heading size="lg" fontWeight="normal">
                     Minhas Dúvidas
                  </Heading>

                  <Link href="/user/question/create">
                  <Button
                     as="a"
                     size="sm"
                     fontSize="small"
                     colorScheme="pink"
                  >
                     Nova Dúvida
                  </Button>
                  </Link>
               </Flex>
               <Table colorScheme="whiteAlpha">
                  <Thead>
                     <Tr px={["4", "4", "6"]} color="gray.300" width="8">
                        <Th><Checkbox colorScheme={"pink"} /></Th>
                        <Th>Dúvida</Th>
                        <Th>Data de cadastro</Th>
                     </Tr>
                  </Thead>
                  <Tbody>
                     <Tr>
                        <Td px={["4", "4", "6"]}>
                           <Checkbox colorScheme={"pink"} />
                        </Td>
                        <Td>
                           <Box>
                              <Text fontWeight={"bold"}>Como trocar versão do Node usando nvm?</Text>
                           </Box>
                        </Td>
                        <Td>19 de Setembro, 2022</Td>
                        <Td width="8">
                           <Button
                              as="a"
                              size="sm"
                              fontSize="small"
                              colorScheme="purple"
                           >
                              Editar Dúvida
                           </Button>
                        </Td>
                     </Tr>
                  </Tbody>
               </Table>
            </Box>
         </Flex>
      </Box>
   )
}