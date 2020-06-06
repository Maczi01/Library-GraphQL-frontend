import React from "react";
import {gql, useQuery} from "@apollo/client";
import {Box, Heading} from "@chakra-ui/core";
import NormalizedAnything, {
    normalizeAnything,
    NORMALIZED_ANYTHING_PARTS_FRAGMENT
} from "../components/NormalizedAnything";
import Link from "@chakra-ui/core/dist/Link";

const GET_EVERYTHING_QUERY = gql`
    query GetEverything {
        everything {
            ...normalizedAnythingParts
        }
    }
    ${NORMALIZED_ANYTHING_PARTS_FRAGMENT}
`;

const EverythingView = () => {

    const {loading, error, data} = useQuery(GET_EVERYTHING_QUERY);
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Could not load everything</p>;
    }

    const {everything} = data;

    const normalizedAnything = everything.map(normalizeAnything)
    return (
        <Box w="100%" bg="red.100" p={5}>
            <Heading textAlign="center" color="red.500">
                Warning! Admin area!
            </Heading>
            {normalizedAnything.map(anything => (
                <Link
                    to={`/admin/anything/${anything.id}`}
                    key={anything.id}
                      >
                <NormalizedAnything normalizedAnything={anything}/>
                </Link>
            ))}
        </Box>
    );
}

export default EverythingView;