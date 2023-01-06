import {
  Box,
  Container,
  Flex,
  HStack,
  useBreakpointValue,
  Heading,
  useDisclosure,
} from "@chakra-ui/react";
import { createContext } from "react";

import DesktopNav from "../elements/NavDesktop";
import NavDrawer from "../elements/NavDrawer";
import NavAction from "../elements/NavAction";

type HeaderProps = {
  title: string;
  children?: React.ReactNode;
};

type HeaderContextType = {
  isDesktop: boolean | undefined;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const HeaderContext = createContext({
  isDesktop: false,
  isOpen: false,
  onOpen: () => {},
  onClose: () => {},
} as HeaderContextType);

const ResponsiveHeader = ({ title, children }: HeaderProps) => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { Provider } = HeaderContext;

  return (
    <Provider value={{ isDesktop, isOpen, onOpen, onClose }}>
      <Box as="header">
        <Container maxW="container.lg">
          <Flex justify="space-between" align="center" wrap="wrap" p="4">
            <Heading as="h1" size="md" fontFamily="test" letterSpacing={"wide"}>
              {title}
            </Heading>
            <DesktopNav>{children}</DesktopNav>
          </Flex>
        </Container>
      </Box>
      <NavDrawer placement="right">{children}</NavDrawer>
    </Provider>
  );
};

ResponsiveHeader.NavAction = NavAction;

export default ResponsiveHeader;
