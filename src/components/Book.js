import React from 'react'

import {Avatar, Box, Text} from '@chakra-ui/core'
import Heading from "@chakra-ui/core/dist/Heading";
import Image from "@chakra-ui/core/dist/Image";
import Flex from "@chakra-ui/core/dist/Flex";
import Badge from "@chakra-ui/core/dist/Badge";

const Book = ({book}) => (


    <Box
        mt="10"
        w="300px"
        border="1px"
        rounded="20px"
        borderColor="gray.200"
        bg="gray.200"
        overflow="hidden"
        p="20px"
        align="center"
    >
        <Box>
            <Image width="250px" height="350px" objectFit="cover" src={book.cover.url} m="auto"/>
            <Flex direction="column" mx="2" justify="center">
                <Heading as="h3" size="md" color="gray.700">
                    {book.title}
                </Heading>
                <Heading as="h4" size="sm" color="gray.400">
                    {book.author.name}
                </Heading>
            </Flex>
        </Box>
    </Box>


);

export default Book