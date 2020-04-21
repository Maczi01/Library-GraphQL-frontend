import React from "react";
import AuthorsView from "./views/AuthorsView";
import {Divider, Flex, Heading, Link} from '@chakra-ui/core'
import {Link as RouterLink, Route, Routes} from "react-router-dom";
import UsersView from "./views/UsersView";
import Box from "@chakra-ui/core/dist/Box";
import BooksView from "./views/BooksView";
import RandomView from "./views/RandomView";

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
                    <Link to="/users" as={RouterLink}>
                        <Box as="span">Users</Box>
                    </Link>
                    <Divider orientation="vertical"/>
                    <Link to="/books" as={RouterLink}>
                        <Box as="span">Books</Box>
                    </Link>
                    <Divider orientation="vertical"/>
                    <Link to="/random" as={RouterLink}>
                        <Box as="span">Random</Box>
                    </Link>
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
    );
}
// {/*<AuthorsView/>*/}//