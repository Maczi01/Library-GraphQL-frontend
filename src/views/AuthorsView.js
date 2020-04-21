import React from "react";
import {gql, useQuery} from "@apollo/client";
import Author from "../components/Author";
import {Flex, CircularProgress} from '@chakra-ui/core'

const ALL_AUTHORS_QUERY = gql`
    query GetAllAuthors {
        authors {
            name
            photo {
                url
            }
            books{
                title
            }
        }
    }
`;

const AuthorsView = () => {
    const {loading, error, data} = useQuery(ALL_AUTHORS_QUERY);
    if (loading) {
        return <CircularProgress isIndeterminate color="green" my="20%"></CircularProgress>;
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