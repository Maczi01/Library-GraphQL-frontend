import React from 'react'
import {gql, useQuery} from "@apollo/client";
import Book from "../components/Book";
import {CircularProgress, Flex} from '@chakra-ui/core'
import Heading from "@chakra-ui/core/dist/Heading";

const ALL_USERS_BOOKS = gql`
    query GetAllBooks{
        books{
            title
            cover{
                url
            }
            author{
                name
            }
        }
    }
`;

const BooksView = () => {
        const {error, loading, data} = useQuery(ALL_USERS_BOOKS)
        if (loading) {
            return <CircularProgress isIndeterminate color="green"></CircularProgress>;
        }
        if (error) {
            return <p>Could not load books...</p>;
        }
        const {books} = data;
        return (
            <>
                <Heading m="4%">Books View</Heading>
                <Flex wrap="wrap" justify="space-around" my="20px">
                    {books.map(book => <Book key={book.title} book={book}/>)}
                </Flex>
            </>
        )
    }
;

export default BooksView;