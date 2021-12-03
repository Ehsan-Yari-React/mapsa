import { Flex } from "@chakra-ui/react";
import Link from "next/link";
const NavItem = ({ name }) => {
  return (
    <Link href={`/users/${name.toLowerCase()}`} passHref>
      <Flex
        align="center"
        px="4"
        mx="2"
        rounded="md"
        py="3"
        cursor="pointer"
        _hover={{
          bg: "blackAlpha.500",
          color: "whiteAlpha.900",
        }}
        role="group"
        fontWeight="semibold"
        transition=".15s ease"
      >
        {name}
      </Flex>
    </Link>
  );
};

export default NavItem;
