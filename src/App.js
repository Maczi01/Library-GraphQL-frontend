import React from "react";
import AuthorsView from "./views/AuthorsView";
import {Divider, Flex, Heading, Link} from '@chakra-ui/core'
import {Link as RouterLink, Route, Routes} from "react-router-dom";
import UsersView from "./views/UsersView";
import Box from "@chakra-ui/core/dist/Box";
import BooksView from "./views/BooksView";
import RandomView from "./views/RandomView";
import Button from "@chakra-ui/core/dist/Button";

export default function App() {
    return (
        <>
            <Flex direction="column" align="center" justify="space-between" width="75%" height="100px"
                  background="#9DECF9" mx="auto" py="2%">

                <Flex direction={["column", null, "row"]}width="80%" align="center" justify="space-between">

                    <Box>
                        <Link to="/" as={RouterLink}>
                            <Heading as="h1">personal library</Heading>
                        </Link>
                    </Box>
                    <Flex>
                        <Button to="/authors" as={RouterLink} variantColor="teal" variant="solid">
                            <Box as="span">Authors</Box>
                        </Button>
                        <Divider orientation="vertical"/>
                        <Button to="/users" as={RouterLink} variantColor="teal" variant="solid">
                            <Box as="span">Users</Box>
                        </Button>
                        <Divider orientation="vertical"/>
                        <Button to="/books" as={RouterLink} variantColor="teal" variant="solid">
                            <Box as="span">Books</Box>
                        </Button>
                        <Divider orientation="vertical"/>
                        <Button to="/random" as={RouterLink} variantColor="teal" variant="solid">
                            <Box as="span">Random</Box>
                        </Button>
                    </Flex>

                </Flex>

                <Routes>
                    <Route path="/" element={<BooksView/>}/>
                    <Route path="authors/" element={<AuthorsView/>}/>
                    <Route path="books/" element={<BooksView/>}/>
                    <Route path="users/" element={<UsersView/>}/>
                    <Route path="random/" element={<RandomView/>}/>
                </Routes>
            </Flex>
        </>

    );
}
// {/*<AuthorsView/>*/}//

