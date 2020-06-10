import React from "react";
import {Stack, Image, Heading, Box} from "@chakra-ui/core";
import {gql} from "@apollo/client";

export const normalizedResource = resource => ({
    ...resource.nested,
    ...resource
})

export const NORMALIZED_RESOURCE_PARTS_FRAGMENT = gql`
    fragment normalizedResourceParts on Resource{
        
        ... on Author{
            name
            info: bio
            img: photo {
                url
            }
        }
        ... on User {
            name
            info
            nested: avatar{
                img: image{
                    url
                }
            }
        }
        ...on Book{
            name: title
            info: description
            img: cover {
                url
            }
        }

        ... on BookCopy {
            nested: book {
                name: title
                info: description
                img: cover {
                    url
                }
            }
        }
    }
`


const COLORS_BY_TYPENAME = {
    Book: "red.200",
    Author: "green.200",
    User: "blue.200",
    BookCopy: "yellow.200"
};

const NormalizedResource = ({normalizedResource}) => {
    return (
        <Stack
            w="100%"
            my={3}
            bg={COLORS_BY_TYPENAME[normalizedResource.__typename]}
            p={3}
            overflow="hidden"
            rounded={5}
        >
            <Stack isInline>
                <Image
                    size="100px"
                    rounded={5}
                    objectFit="cover"
                    src={normalizedResource.img && normalizedResource.img.url}
                />
                <Stack>
                    <Heading as="h4" size="sm">
                        {normalizedResource.__typename}
                    </Heading>
                    <Heading as="h3" size="md">
                        {normalizedResource.name}
                    </Heading>
                    <Box
                        as="article"
                        w="300px"
                        whiteSpace="nowrap"
                        overflow="hidden"
                        textOverflow="ellipsis"
                    >
                        {normalizedResource.info}
                    </Box>
                </Stack>
            </Stack>
        </Stack>
    );
}

export default NormalizedResource;
