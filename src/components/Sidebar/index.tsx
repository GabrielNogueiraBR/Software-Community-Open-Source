import * as react from "@chakra-ui/react";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { SideBarNav } from "./SideBarNav";

export default function Sidebar() {
  const { isOpen, onClose } = useSidebarDrawer();

  const isDrawerSidebar = react.useBreakpointValue({
    base: true,
    lg: false,
  });

  if (isDrawerSidebar) {
    return (
      <react.Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <react.DrawerOverlay>
          <react.DrawerContent bg="gray.800" p="4">
            <react.DrawerCloseButton mt="6" />
            <react.DrawerHeader>Navegação</react.DrawerHeader>

            <react.DrawerBody>
              <SideBarNav />
            </react.DrawerBody>
          </react.DrawerContent>
        </react.DrawerOverlay>
      </react.Drawer>
    );
  }

  return (
    <react.Box as="aside" w="64" mr="8">
      <SideBarNav />
    </react.Box>
  );
}
