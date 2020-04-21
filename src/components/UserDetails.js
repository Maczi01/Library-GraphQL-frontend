import React from "react";
import Flex from "@chakra-ui/core/dist/Flex";
import Avatar from "@chakra-ui/core/dist/Avatar";
import Box from "@chakra-ui/core/dist/Box";
import Text from "@chakra-ui/core/dist/Text";
import Badge from "@chakra-ui/core/dist/Badge";
import Image from "@chakra-ui/core/dist/Image";


const UserDetails = ({user}) => (
    <Flex>
        <Image src={user.avatar.image.url}/>
        <Box ml="3">
            <Text fontWeight="bold">
                {user.name}
            </Text>
            <Badge variantColor="green">{user.email}</Badge>
        </Box>
    </Flex>
);

export default UserDetails