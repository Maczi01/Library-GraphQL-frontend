import React from 'react'
import {Avatar, Box, List, ListItem, Text} from '@chakra-ui/core'

const User = ({user}) => (
    <Box p={5} shadow="md" borderWidth="1px" flex="1" width="400px"  rounded="lg" mx="25px">
        <Avatar
            size="xl"
            src={user.avatar.image.url}
            background={user.avatar.color}
        />
        <Box ml="3">
            <Text fontWeight="bold">
                {user.name}
            </Text>
        </Box>
    </Box>
);

export default User
        {/*<Avatar align="center" size="xl" src={user.avatar.image.url} background="teal.300" ml="4%" mb="4%"/>*/}
