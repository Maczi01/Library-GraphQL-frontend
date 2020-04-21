import React from 'react'
import {Avatar, Box, List, ListItem, Text} from '@chakra-ui/core'
import Flex from "@chakra-ui/core/dist/Flex";

const User = ({user}) => (

    <Flex p={5}
          shadow="md"
          borderWidth="1px"
          flex="1"
          my="5px"
          justify="space-between"
          align="center"
          background="#81E6D9"
          rounded="lg"
          mx="30px">
        <Avatar
            size="md"
            mx="30px"
            src={user.avatar.image.url}
            background={user.avatar.color}
        />
        <Box>
            <Text fontWeight=" bold">
                {user.name}
            </Text>
        </Box>
        <Box mx="30px">
            <Text fontWeight=" bold">
                {user.email}
            </Text>
        </Box>
    </Flex>
);

export default User

// <Box p={5} shadow=" md" borderWidth="1px" flex="1" width="400px" rounded="lg" mx="25px">
// <Avatar
// size="xl"
// src={user.avatar.image.url}
// background={user.avatar.color}
// />
// <Box ml="3">
//     <Text fontWeight="bold">
//         {user.name}
//
//     </Text>
// </Box>
// </Box>