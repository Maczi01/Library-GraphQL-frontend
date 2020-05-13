import React from "react";
import {Box, CircularProgress} from "@chakra-ui/core";
import {useParams} from "react-router";
import {gql, useQuery} from "@apollo/client";
import BookDetails from "../components/BookDetails";


const GET_BOOK_QUERY = gql`
    query GetBook($bookId: ID!) {
        book(id: $bookId) {
            id
            title
            description
            cover {
                url
            }
            author {
                id
                name
            }
        }
    }
`;

export default function BookDetailsView() {
    const { bookId } = useParams();
    console.log(bookId)
    const { loading, error, data } = useQuery(GET_BOOK_QUERY, {
        variables:  {bookId}
    });
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Could not load book "{bookId}"</p>;
    }
    const { book } = data;
    return (
        <Box>
            <BookDetails book={book} />
        </Box>
    );
}
