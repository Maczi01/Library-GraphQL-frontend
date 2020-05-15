import React from "react";
import Flex from "@chakra-ui/core/dist/Flex";
import Avatar from "@chakra-ui/core/dist/Avatar";
import Box from "@chakra-ui/core/dist/Box";
import Text from "@chakra-ui/core/dist/Text";
import Badge from "@chakra-ui/core/dist/Badge";
import Image from "@chakra-ui/core/dist/Image";
import Heading from "@chakra-ui/core/dist/Heading";
import {gql} from "@apollo/client";

export const USER_DETAILS_PARTS_FRAGMENT = gql`
    fragment userParts on User {
        id
        name
        email
        info
        avatar {
            image{
                url
            }
            color
        }
    }
`

const UserDetails = ({ user }) => {
    return (
        <Flex alignItems="center">
            <Flex alignItems="center" direction="column" w="100%" mt="5">
                <Avatar
                    size="xl"
                    src={user.avatar.image.url}
                    background={user.avatar.color}
                />
                <Heading mx="4" color="gray.700">
                    {user.name}
                </Heading>
            </Flex>
            <Box as="article">{user.info}</Box>
        </Flex>
    );
}


export default UserDetails