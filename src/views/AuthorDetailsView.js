import React from "react";
import {Box, CircularProgress} from "@chakra-ui/core";
import {gql, useQuery} from "@apollo/client";
import AuthorDetails from "../components/AuthorDetails";
import {useParams} from "react-router";

const AuthorDetailsView = () => {

    const GET_AUTHOR_QUERY = gql`
        query GetBook($authorId: ID!) {
            author(id: $authorId) {
                id
                name
                bio
                photo {
                    url
                }
                books{
                    id
                    title
                    cover{
                        url
                    }
                }
            }
        }
    `;

    const {authorId} = useParams();
    const {loading, error, data} = useQuery(GET_AUTHOR_QUERY, {
        variables: {
            authorId
        }
    })
    if (error) {
        return <p>Could not load book "{authorId}"</p>;
    }
    if (loading) {
        return <CircularProgress isIndeterminate color="green" my="20%"></CircularProgress>;
    }
    const {author} = data
    console.log(author)
    return (
        <Box>
            <AuthorDetails author={author}/>
        </Box>
    );
}

export default AuthorDetailsView;