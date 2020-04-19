import React from "react";
import AuthorsView from "./views/AuthorsView";
import {Heading, Flex} from '@chakra-ui/core'
export default function App() {
    return (
        <Flex direction="column" align="center" width="75%" mx="auto" my="20px">
            <Heading as="h1">Personal Library</Heading>
            <AuthorsView/>
        </Flex>
    );
}
