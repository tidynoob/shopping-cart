import { useContext } from "react";
import { HeaderContext } from "../layouts/Header";

import { HStack, StackProps } from "@chakra-ui/react";
import NavMenuButton from "./NavMenuButton";

const DesktopNav = ({ children }: StackProps) => {
  const { isDesktop } = useContext(HeaderContext);
  return isDesktop ? (
    <HStack as="nav" spacing="2">
      {children}
    </HStack>
  ) : (
    <NavMenuButton />
  );
};

export default DesktopNav;
