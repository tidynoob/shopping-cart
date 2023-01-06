import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
} from "@chakra-ui/react";
import { useContext } from "react";
import { HeaderContext } from "../layouts/Header";

type NavDrawerProps = {
  placement?: "left" | "right";
  children: React.ReactNode;
};

const NavDrawer = ({ placement = "right", children }: NavDrawerProps) => {
  const { isOpen, onClose } = useContext(HeaderContext);

  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement={placement}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton
            _hover={{ bg: "orange.100" }}
            _active={{ bg: "orange.100" }}
          />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Flex flexDir="column" gap="4">
              {children}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default NavDrawer;
