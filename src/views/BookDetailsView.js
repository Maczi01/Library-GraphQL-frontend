import React from "react";
import {Box, CircularProgress} from "@chakra-ui/core";
import {useParams} from "react-router";
import {gql, useQuery} from "@apollo/client";
import BookDetails, {BOOK_DETAILS_PARTS_FRAGMENT} from "../components/BookDetails";
import {BOOK_COPY_PARTS_FRAGMENT} from "../components/BookCopy/fragments";
import Heading from "@chakra-ui/core/dist/Heading";
import Flex from "@chakra-ui/core/dist/Flex";
import BookCopy from "../components/BookCopy";

const GET_BOOK_QUERY = gql`
    query GetBook($bookId: ID!) {
        book(id: $bookId) {
            ...bookDetailsParts
            copies {
                ...bookCopyParts
            }
        }
    }
    ${BOOK_DETAILS_PARTS_FRAGMENT}
    ${BOOK_COPY_PARTS_FRAGMENT}
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
    // const {book, copies} = data;
    return (
        <Box>
            <BookDetails book={book}/>
            <Heading as="h3" size="lg" textAlign="center"> Copies </Heading>
            <Flex wrap="wrap">
                {book.copies.map(bookCopy => (
                    <BookCopy
                        key={bookCopy.id}
                        bookCopy={bookCopy}
                        showOwner
                        showBorrower
                        showActions
                    />
                ))}
            </Flex>
        </Box>
    );
}

export default BookDetailsView;
