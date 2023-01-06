import { useContext } from "react";
import { HeaderContext } from "../layouts/Header";
import { RxHamburgerMenu } from "react-icons/rx";
import { IconButton } from "@chakra-ui/react";

const NavMenuButton = () => {
  const { onOpen } = useContext(HeaderContext);

  return (
    <IconButton
      variant="ghost"
      _hover={{ bg: "orange.100" }}
      _active={{ bg: "orange.100" }}
      aria-label="Open Menu"
      onClick={onOpen}
      icon={<RxHamburgerMenu />}
    />
  );
};

export default NavMenuButton;
