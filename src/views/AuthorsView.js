import React from "react";
import {gql, useQuery} from "@apollo/client";
import Author from "../components/Author";
import {Flex, CircularProgress} from '@chakra-ui/core'

const ALL_AUTHORS_QUERY = gql`
    query AllAuthors {
        authors {
            name
            photo {
                url
            }
        }
    }
`;

const AuthorsView = () => {
    const {loading, error, data} = useQuery(ALL_AUTHORS_QUERY);
    if (loading) {
        return <CircularProgress isIndeterminate color="green"></CircularProgress>;
    }
    if (error) {
        return <p>Could not load authors...</p>;
    }
    const {authors} = data;
    return (
        <Flex wrap="wrap" justify="space-around" my="20px">
            {authors.map(author => <Author key={author.name} author={author}/>)}
        </Flex>
    )
}


export default AuthorsView;