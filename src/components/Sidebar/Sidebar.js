import Link from "next/link";
import SidebarItem from "./SidebarItem";
import { useSelector } from "react-redux";
import { Box, Flex, Text } from "@chakra-ui/react";

const Sidebar = () => {
  const users = useSelector((state) => state["users"]);
  return (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg="white"
      borderColor="blackAlpha.300"
      borderRightWidth="1px"
      w="60"
    >
      <Flex px="4" py="5" align="center" justify="center">
        <Link href="/" passHref>
          <Text
            cursor="pointer"
            fontSize="2xl"
            ml="2"
            color="brand.500"
            fontWeight="semibold"
          >
            Mapsa HR
          </Text>
        </Link>
      </Flex>
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
      >
        {users.map((user) => (
          <SidebarItem key={user.id} name={user.name} />
        ))}
      </Flex>
    </Box>
  );
};

export default Sidebar;
