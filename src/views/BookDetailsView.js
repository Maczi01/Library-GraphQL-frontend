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
const BookDetailsView = () => {

    const {bookId} = useParams();
    const {loading, error, data} = useQuery(GET_BOOK_QUERY, {
        variables: {bookId}
    });
    useQuery(GET_BOOK_QUERY, {
        variables: {bookId}
    })
    if (loading) {
        return <CircularProgress isIndeterminate color="green" my="20%"></CircularProgress>;
    }
    if (error) {
        return <p>Could not load book "{bookId}"</p>;
    }
    const {book} = data;
    console.log(book)
    return (
        <Box>
            <BookDetails book={book}/>
        </Box>
    );
}

export default BookDetailsView;
