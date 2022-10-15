import { Stack } from "@chakra-ui/react";
import {
  RiSearchLine,
  RiBarChart2Fill,
  RiUserLine,
  RiListCheck,
  RiSettings2Line,
  RiDatabaseLine,
} from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SideBarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink icon={RiBarChart2Fill} href="/">Principais dúvidas</NavLink>
        <NavLink icon={RiSearchLine} href="x">Encontrar dúvidas</NavLink>
      </NavSection>
      <NavSection title="PERFIL">
        <NavLink icon={RiListCheck} href="/user/questions">Minhas dúvidas</NavLink>
        <NavLink icon={RiUserLine} href="x">Meu Perfil</NavLink>
      </NavSection>
      <NavSection title="CATEGORIAS">
        <NavLink icon={RiSettings2Line} href="x">DevOps</NavLink>
        <NavLink icon={RiDatabaseLine} href="x">Banco de Dados</NavLink>
      </NavSection>
    </Stack>
  );
}
