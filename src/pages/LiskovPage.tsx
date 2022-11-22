import {
  Button,
  Flex,
  useDisclosure,
  Text,
  Textarea,
  Icon,
  Image,
} from "@chakra-ui/react";
import BaseDialog from "../components/BaseDialog";
import ErrorDialog from "../components/ErrorDialog";
import WarningDialog from "../components/WarningDialog";
import { GoPrimitiveDot } from "react-icons/go";
import InterfaceProps from "../assets/images/carbon2.png";
import LiskovRascunho from "../assets/images/LiskovRascunho.png";
import ViolacaoLSP from "../assets/images/viaolacaoLSP.png";

function Topico(descricao) {
  return (
    <Flex ml="40px" direction="row" alignItems="center" gap="10px" mb="10px">
      <Icon color="pink.500" as={GoPrimitiveDot} fontSize="20" />
      <Text fontSize="lg" fontWeight={400} lineHeight="150%">
        {descricao}
      </Text>
    </Flex>
  );
}

export default function Teste() {
  const {
    isOpen: isBaseOpen,
    onOpen: onBaseOpen,
    onClose: onBaseClose,
  } = useDisclosure();

  const {
    isOpen: isErrorOpen,
    onOpen: onErrorOpen,
    onClose: onErrorClose,
  } = useDisclosure();

  const {
    isOpen: isWarningOpen,
    onOpen: onWarningOpen,
    onClose: onWarningClose,
  } = useDisclosure();

  return (
    <Flex direction="column" justify="center" gap="30px">
      <Flex
        ml="60px"
        mt="40px"
        letterSpacing="3px"
        fontWeight={700}
        fontSize="30px"
      >
        SO
        <Text color="pink.500">L</Text>
        ID
      </Flex>
      <Flex direction="column" ml="10%">
        <Text mb="10px" fontWeight={700} fontSize="54px">
          Liskov Substitution Principle
        </Text>
        <Flex direction="row" mb="30px">
          <Text color="gray.400" fontWeight={400} fontSize="24px" as="i">
            "Classes derivadas devem poder ser substitutas de suas classes base"
          </Text>
          <Text color="gray.400" fontWeight={500} fontSize="24px">
            - Robert C. Martin
          </Text>
        </Flex>
        {Topico("Introduzido por Barbara Liskov em 1987")}
        {Topico(
          "Uma classe derivada, é uma classe que herda atributos da classe pai, ou classe base"
        )}
      </Flex>

      <Flex direction="column" padding="0px 10%">
        <Text mb="30px" fontWeight={700} fontSize="54px">
          Objetivo
        </Text>
        {Topico(
          "Garantir novas classes derivadas estão estendendo das classes base mas sem alterar o seu comportamento"
        )}
        {Topico("Segurança na implementação dos subtipos")}
        {Topico("Auxilio nos testes unitários")}
      </Flex>

      <Flex direction="column" padding="0px 10%">
        <Text fontWeight={700} fontSize="54px">
          Violação do principio
        </Text>
        <Flex direction="row">
          <Image boxSize="700px" objectFit="cover" src={ViolacaoLSP.src} />
          <Flex direction="column" justify="center">
            {Topico(
              "Bicicleta se enquadra como um meio de transporte, porém não apresenta motor"
            )}
            {Topico(
              "Uma possivel solução deveria ser trabalhar novamente nosso modelo dentro da interface que levam em consideração o estado sem motor do nosso transporte."
            )}
          </Flex>
        </Flex>
      </Flex>

      <Flex direction="column" gap={"8"} justify="center" alignItems="center">
        <Text mb="30px" fontWeight={700} fontSize="54px">
          Implementação no Front End
        </Text>

        <Image src={LiskovRascunho.src} />

        <Image boxSize="700px" objectFit="cover" src={InterfaceProps.src} />

        <Flex
          direction="row"
          gap={"8"}
          justify="center"
          mb="60px"
          alignItems="center"
        >
          <Button w="60" background={"gray.500"} onClick={onBaseOpen}>
            Base
          </Button>
          <Button w="60" background={"red.500"} onClick={onErrorOpen}>
            Error
          </Button>
          <Button w="60" background={"orange.500"} onClick={onWarningOpen}>
            Warning
          </Button>
        </Flex>
      </Flex>

      <BaseDialog
        title="Title"
        content={
          <Flex direction="column" w="100%">
            <Text fontWeight={700} fontSize="lg"></Text>
            <Text fontSize="sm" fontWeight={400} lineHeight="150%">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              iste eius earum ipsum eum cupiditate consectetur!
            </Text>
          </Flex>
        }
        cancelButtonText="Cancel"
        isOpen={isBaseOpen}
        onClose={onBaseClose}
      ></BaseDialog>

      <ErrorDialog
        title="Error"
        content={
          <Flex direction="column" w="100%" gap="4px">
            <Text fontSize="sm" fontWeight={400} lineHeight="150%">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              iste eius earum ipsum eum cupiditate maxime consectetur!
            </Text>
            <Text fontWeight={700} fontSize="md">
              Comments
            </Text>
            <Textarea
              focusBorderColor={"red.500"}
              placeholder="Comentários..."
              size="sm"
            />
          </Flex>
        }
        confirmHandler={() => console.log("confirmHandler")}
        isOpen={isErrorOpen}
        onClose={onErrorClose}
      ></ErrorDialog>

      <WarningDialog
        title="Warning"
        content={
          <Flex direction="column" w="100%">
            <Text fontWeight={700} fontSize="lg"></Text>
            <Text fontSize="sm" fontWeight={400} lineHeight="150%">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              iste eius earum ipsum eum cupiditate maxime consectetur?
            </Text>
          </Flex>
        }
        confirmHandler={() => console.log("confirmHandler")}
        isOpen={isWarningOpen}
        onClose={onWarningClose}
      ></WarningDialog>
    </Flex>
  );
}
