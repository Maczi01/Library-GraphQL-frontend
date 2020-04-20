import React from "react";
import AuthorsView from "./views/AuthorsView";
import {Heading, Flex, ThemeProvider, Link, Divider} from '@chakra-ui/core'
import {Routes, Route, Link as RouterLink} from "react-router-dom";
import UsersView from "./views/UsersView";
import Box from "@chakra-ui/core/dist/Box";
import BooksView from "./views/BooksView";

export default function App() {
    return (
        <Flex direction="column" align="center" width="75%" mx="auto" my="20px">
            <Flex align="center" justify="spacee-between" width="100%">
                <Link to="/" as={RouterLink}>
                    <Heading as="h1">Personal Library</Heading>
                </Link>
                <Flex>
                    <Link to="/authors" as={RouterLink}>
                        <Box as="span">Authors</Box>
                    </Link>
                    <Divider orientation="vertical"/>
                    <Link to="/" as={RouterLink}>
                        <Box as="span">Users</Box>
                    </Link>
                    <Divider orientation="vertical"/>
                    <Link to="/books" as={RouterLink}>
                        <Box as="span">Books</Box>
                    </Link>
                </Flex>
            </Flex>

            <Routes>

                <Route path="/" element={<UsersView/>}/>
                <Route path="authors/" element={<AuthorsView/>}/>
                <Route path="books/" element={<BooksView/>}/>

            </Routes>


        </Flex>
    );
}
// {/*<AuthorsView/>*/}//