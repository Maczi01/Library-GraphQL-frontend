import React from 'react'

import {Avatar, Box, Text} from '@chakra-ui/core'
import Heading from "@chakra-ui/core/dist/Heading";
import Image from "@chakra-ui/core/dist/Image";
import Flex from "@chakra-ui/core/dist/Flex";

const Book = ({book}) => (


    <Flex
        mt="5"
        w="100%"
        border="1px"
        borderRadius="md"
        borderColor="gray.200"
        overflow="hidden"
        bg="gray.50"
    >
        <Image size="100px" objectFit="cover" src={book.cover.url} />
        <Flex direction="column" mx="2" justify="center">
            <Heading as="h3" size="md" color="gray.700">
                {book.title}
            </Heading>
            <Heading as="h4" size="sm" color="gray.400">
                {book.author.name}
            </Heading>
        </Flex>
    </Flex>









);

export default Book