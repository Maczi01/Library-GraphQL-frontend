import React from 'react'
import {gql, useQuery} from "@apollo/client";
import {Box, CircularProgress, Flex, Text} from '@chakra-ui/core'
import Heading from "@chakra-ui/core/dist/Heading";
import Button from "@chakra-ui/core/dist/Button";

const RANDOM_DATA_QUERY = gql`
    query GetRandomUser {
        randomUser {
            name
        }
        randomBook {
            title
        }
        randomAuthor {
            name
        }
    }
`;

const RandomView = () => {
    const {error, loading, data, refetch} = useQuery(RANDOM_DATA_QUERY)
    if (loading) {
        return <CircularProgress isIndeterminate color="green"></CircularProgress>;
    }
    if (error) {
        return <p>Could not load random data...</p>;
    }
    const {randomBook, randomAuthor, randomUser} = data;

    return (
        <>
            <Flex my="3%">

                <Box p={5} shadow="md" borderWidth="1px" flex="1" width="400px" height="300px" bg="teal.300"
                     rounded="lg"
                     mx="25px">
                    <Box ml="3">
                        <Heading> Random book</Heading>
                        <Text fontWeight="bold">
                            {randomBook.title}
                        </Text>
                    </Box>
                </Box>


                <Box p={5} shadow="md" borderWidth="1px" flex="1" width="400px" height="300px" bg="teal.300"
                     rounded="lg"
                     mx="25px">
                    <Box ml="3">
                        <Heading>Random user</Heading>
                        <Text fontWeight="bold">
                            {randomUser.name}
                        </Text>
                    </Box>
                </Box>

                <Box p={5} shadow="md" borderWidth="1px" flex="1" width="400px" height="300px" bg="teal.300"
                     rounded="lg"
                     mx="25px">
                    <Box ml="3">
                        <Heading>Random author</Heading>
                        <Text fontWeight="bold">
                            {randomAuthor.name}
                        </Text>
                    </Box>
                </Box>

            </Flex>
            <Button variantColor="teal" variant="solid" onClick={() => refetch()}> Get some random data</Button>
        </>
    )

}

export default RandomView