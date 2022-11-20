import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Divider,
  Flex,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import { VscError } from "react-icons/vsc";
import { MdOutlineErrorOutline, MdWarning } from "react-icons/md";
import {
  EDialogTypes,
  IBaseDialogProps,
} from "../../interfaces/IBaseDialogProps";

export const EDialogTypesColorMap = new Map<number, string>([
  [EDialogTypes.Default, "gray.700"],
  [EDialogTypes.Warning, "orange.500"],
  [EDialogTypes.Error, "red.500"],
]);

export default function BaseDialog({
  type = EDialogTypes.Default,
  title,
  content,
  confirmButtonText,
  cancelButtonText,
  cancelHandler,
  confirmHandler,
  isOpen,
  onClose,
}: IBaseDialogProps) {
  const cancelRef = React.useRef();

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isCentered={true}
    >
      <AlertDialogOverlay color={"gray.50"}>
        <AlertDialogContent background={"gray.900"}>
          <AlertDialogHeader
            color={
              type !== EDialogTypes.Default
                ? EDialogTypesColorMap.get(type)
                : "gray.50"
            }
            fontSize="lg"
            fontWeight="bold"
          >
            <Flex direction="row" gap="1" alignItems="center">
              <Icon
                as={
                  type === EDialogTypes.Error
                    ? VscError
                    : type === EDialogTypes.Warning
                    ? MdWarning
                    : MdOutlineErrorOutline
                }
                fontSize="24"
              />
              {title}
            </Flex>
          </AlertDialogHeader>

          <Divider
            borderColor={
              type !== EDialogTypes.Default
                ? EDialogTypesColorMap.get(type)
                : "gray.90"
            }
            width="95%"
            alignSelf="center"
          />

          <AlertDialogBody>{content}</AlertDialogBody>

          <AlertDialogFooter>
            {cancelButtonText && (
              <Button
                background={"gray.500"}
                ref={cancelRef}
                onClick={cancelHandler ?? onClose}
              >
                {cancelButtonText}
              </Button>
            )}
            <Button
              background={
                type !== EDialogTypes.Default
                  ? EDialogTypesColorMap.get(type)
                  : "pink.500"
              }
              onClick={() => {
                if (confirmHandler) confirmHandler();
                onClose();
              }}
              ml={3}
            >
              {confirmButtonText ?? "Ok"}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}
