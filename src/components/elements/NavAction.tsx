import { Icon, Text, Button } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { HeaderContext } from "../layouts/Header";
import CartCount from "./CartCount";

type NavActionProps = {
  to: string;
  label: string;
  icon: React.ElementType;
  isActive?: boolean;
  children?: React.ReactNode;
  count?: number;
};

const NavAction = (props: NavActionProps) => {
  const { label, icon, to = "#", count = 0 } = props;
  const countDisplay = count > 0 ? <CartCount>{count}</CartCount> : null;
  const { isDesktop, onClose } = useContext(HeaderContext);

  const location = useLocation();
  const bgColor = location.pathname === props.to ? "primary.100" : "inherit";

  return (
    <Link to={to}>
      <Button
        bg={bgColor}
        w="full"
        variant={"ghost"}
        justifyContent="left"
        gap={"4"}
        _hover={{ bg: "primary.100" }}
        _active={{ bg: "primary.100" }}
        onClick={onClose}
      >
        {isDesktop ? (
          <>
            <Text>{label}</Text>
            <Icon boxSize={"5"} as={icon} />
            {countDisplay}
          </>
        ) : (
          <>
            <Icon boxSize={"5"} as={icon} />
            {countDisplay}
            <Text>{label}</Text>
          </>
        )}
      </Button>
    </Link>
  );
};

export default NavAction;
