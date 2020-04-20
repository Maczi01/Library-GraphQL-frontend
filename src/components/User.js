import React from 'react'
import {Flex, Avatar, Box, Text, Badge , List, ListItem} from '@chakra-ui/core'

const User = ({user}) => (
    <Box p={5} shadow="md" borderWidth="1px" flex="1" width="400px" height="300px" rounded="lg" mx="25px">
        <Avatar
            size="xl"
            src={user.avatar.image.url}
            background={user.avatar.color}
        />
        <Box ml="3">
            <Text fontWeight="bold">
                {user.name}
            </Text>
            <Text fontSize="m">Author</Text>
            <List mt="10px" styleType="disc">
                <ListItem>Harry Poter i volkswagen passat</ListItem>
                <ListItem>Facilisis in pretium nisl aliquet</ListItem>
            </List>
        </Box>
    </Box>
);

export default User
        {/*<Avatar align="center" size="xl" src={user.avatar.image.url} background="teal.300" ml="4%" mb="4%"/>*/}
