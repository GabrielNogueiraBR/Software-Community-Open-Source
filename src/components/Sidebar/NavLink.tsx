import {
  Icon,
  Link as ChakraLink,
  Text,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";

import Link from "next/link";

import { ElementType } from "react";
import { ActiveLink } from "./ActiveLink";

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  children: string;
  href: string;
  isDisabled?: boolean;
  shouldMatchExactHref?: boolean;
}

export function NavLink({
  icon,
  children,
  href,
  isDisabled = false,
  shouldMatchExactHref,
  ...rest
}: NavLinkProps) {
  return (
    <ActiveLink
      href={href}
      isDisabled={isDisabled}
      shouldMatchExactHref={shouldMatchExactHref}
      passHref
    >
      <ChakraLink display="flex" alignContent="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}
