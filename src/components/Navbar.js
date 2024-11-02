import { Box, Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";

function Navbar() {
  return (
    <Box bg="teal.500" p={4}>
      <Flex justify="space-around">
        <NextLink href="/" passHref>
          <Link color="white">Homepage</Link>
        </NextLink>
        <NextLink href="/search" passHref>
          <Link color="white">Search</Link>
        </NextLink>
        <NextLink href="/city" passHref>
          <Link color="white">City Page</Link>
        </NextLink>
        <NextLink href="/favorites" passHref>
          <Link color="white">Favorites</Link>
        </NextLink>
      </Flex>
    </Box>
  );
}

export default Navbar;
