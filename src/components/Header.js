import {Divider, Flex, Heading, Link} from "@chakra-ui/core";
import Box from "@chakra-ui/core/dist/Box";
import {Link as RouterLink} from "react-router-dom";
import Button from "@chakra-ui/core/dist/Button";
import React from "react";
import icon from "../assets/icon.svg"
import Image from "@chakra-ui/core/dist/Image";

const Header = () => (

    <Flex direction={["column", null, "row"]} width="100%" align="center" mb="20px" color="#2d334a" justify="space-between">
        <Box ml="50px">
            <Link to="/" as={RouterLink}>
                <Flex size="50px">
                    <Image src={icon} alt="logo" m="5px"/>
                    <Heading as="h1" color="#fffffe">library</Heading>
                </Flex>
            </Link>
        </Box>
        <Flex mr="50px">
            <Button to="/authors" as={RouterLink} variantColor="#3da9fc" variant="solid">
                <Box as="span">Authors</Box>
            </Button>
            <Divider orientation="vertical"/>
            <Button to="/users" as={RouterLink} variantColor="#3da9fc"  variant="solid">
                <Box as="span">Users</Box>
            </Button>
            <Divider orientation="vertical"/>
            <Button to="/books" as={RouterLink} variantColor="#3da9fc" variant="solid">
                <Box as="span">Books</Box>
            </Button>
            <Divider orientation="vertical"/>
            <Button to="/random" as={RouterLink} variantColor="#3da9fc" variant="solid">
                <Box as="span">Random</Box>
            </Button>
        </Flex>
    </Flex>
)

export default Header;
