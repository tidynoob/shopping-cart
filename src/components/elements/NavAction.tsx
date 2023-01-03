import { HStack, Icon, Text } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import * as React from "react";

type NavActionProps = {
  to?: string;
  label: string;
  icon: React.ElementType;
  isActive?: boolean;
  children?: React.ReactNode;
};

const NavAction = (props: NavActionProps) => {
  const location = useLocation();
  const bgColor = location.pathname === props.to ? "primary.100" : "inherit";
  const { label, icon, to = "#" } = props;
  return (
    <Link to={to}>
      <HStack
        spacing="2"
        px="4"
        py="2"
        bg={bgColor}
        borderRadius={"base"}
        _hover={{ background: "primary.100" }}
      >
        <Text fontSize="md" fontWeight="semibold">
          {label}
        </Text>
        <Icon as={icon} boxSize="5" />
      </HStack>
    </Link>
  );
};

export default NavAction;
