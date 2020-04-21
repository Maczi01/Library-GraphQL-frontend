import React from 'react'
import {Avatar, Box, List, ListItem, Text} from '@chakra-ui/core'

const Author = ({author}) => (
    <Box p={5} shadow="md" borderWidth="1px" flex="1" width="400px" height="300px" bg="teal.300" rounded="lg" mx="25px">
            <Avatar align="center" size="xl" src={author.photo.url} ml="4%" mb="4%"/>
        <Box ml="3">
            <Text fontWeight="bold">
                {author.name}
            </Text>
            <Text fontSize="m">Author</Text>
            <List mt="10px" styleType="disc">
                <ListItem>Harry Poter i volkswagen passat</ListItem>
                <ListItem>Facilisis in pretium nisl aliquet</ListItem>
            </List>
        </Box>
    </Box>
);

export default Author


//
// <>
// <h2>{author.name}</h2>
// <img src={author.photo.url} alt={author.name}/>
// </>