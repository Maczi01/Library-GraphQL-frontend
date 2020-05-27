import React from 'react'
import {Avatar, Box, List, ListItem, Text} from '@chakra-ui/core'

const Author = ({author}) => (
    <Box p={5} shadow="md" borderWidth="1px" flex="1" width="500px" bg="teal.300" rounded="lg" mx="25px">
        <Avatar align="center" size="xl" src={author.photo.url} ml="4%" mb="4%"/>
        <Box ml="3">
            <Text fontWeight="bold">
                {author.name}
            </Text>
            <List styleType="disc">
                {author.books.map(book =>
                    <ListItem key={book.title}>{book.title}</ListItem>
                )}
            </List>

        </Box>
    </Box>
);

export default Author;