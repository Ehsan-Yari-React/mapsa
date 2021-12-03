import { useRouter } from "next/router";
import Head from "next/head";
import React from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { Box, Flex, Text } from "@chakra-ui/react";

const Index = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <Head>
        <title>Mapsa/{id}</title>
      </Head>
      <Sidebar />
      <Box ml={60} minH="100vh">
        <Box as="main" p="4">
          <Flex
            justify="center"
            borderWidth="4px"
            borderStyle="dashed"
            rounded="md"
            h="96"
          >
            <Text fontSize="5xl">{id}</Text>
          </Flex>
        </Box>
      </Box>
    </div>
  );
};

export default Index;
