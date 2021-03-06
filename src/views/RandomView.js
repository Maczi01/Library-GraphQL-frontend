import React from 'react'
import {gql, useQuery} from "@apollo/client";
import {Box, CircularProgress, Flex, Text} from '@chakra-ui/core'
import Heading from "@chakra-ui/core/dist/Heading";
import Button from "@chakra-ui/core/dist/Button";
import Image from "@chakra-ui/core/dist/Image";

const RANDOM_DATA_QUERY = gql`
    query GetRandomUser {
        randomUser {
            name
            avatar {
                image{
                    url
                }
            }
        }
        randomBook {
            title
            cover{
                url
            }
        }
        randomAuthor {
            name
            photo{
                url
            }
        }
    }
`;

const RandomView = () => {
    const {error, loading, data, refetch} = useQuery(RANDOM_DATA_QUERY)
    if (loading) {
        return <CircularProgress isIndeterminate color="green" my="20%"></CircularProgress>;
    }
    if (error) {
        return <p>Could not load random data...</p>;
    }
    const {randomBook, randomAuthor, randomUser} = data;

    return (
        <Box  width="75%">
            <Flex direction={["column", null, null, null, "row"]} w="80%" wrap="wrap" mt="40px">
                <Box p={5} shadow="md" borderWidth="1px" flex="1" height="300px" width="30vw" bg="teal.300"
                     rounded="lg"
                     mx="25px">
                    <Box ml="3">
                        <Heading as="h2"> Random book</Heading>
                        <Image size="100px" objectFit="cover" src={randomBook.cover.url}/>
                        <Text fontWeight="bold">
                            {randomBook.title}
                        </Text>
                    </Box>
                </Box>


                <Box p={5} shadow="md" borderWidth="1px" flex="1"  height="300px"width="30vw" bg="teal.300"
                     rounded="lg"
                     mx="25px">
                    <Box ml="3">
                        <Heading>Random user</Heading>
                        <Image size="100px" objectFit="cover" src={randomUser.avatar.image.url}/>
                        <Text fontWeight="bold">
                            {randomUser.name}
                        </Text>
                    </Box>
                </Box>

                <Box p={5} shadow="md" borderWidth="1px" flex="1" width="30vw" height="300px" bg="teal.300"
                     rounded="lg"
                     mx="25px">
                    <Box ml="3">
                        <Heading>Random author</Heading>
                        <Image size="100px" objectFit="cover" src={randomAuthor.photo.url}/>
                        <Text fontWeight="bold">
                            {randomAuthor.name}
                        </Text>
                    </Box>
                </Box>

            </Flex>
            <Button variantColor="teal" variant="solid" my="15px" p="10px" onClick={() => refetch()}> Get some random
                data</Button>
        </Box>
    )

}

export default RandomView