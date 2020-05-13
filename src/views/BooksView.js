import React from 'react'
import {gql, useQuery} from "@apollo/client";
import Book from "../components/Book";
import {CircularProgress, Flex} from '@chakra-ui/core'
import Heading from "@chakra-ui/core/dist/Heading";
import Box from "@chakra-ui/core/dist/Box";
import Grid from "@chakra-ui/core/dist/Grid";
import Link from "../components/Link";

const ALL_USERS_BOOKS = gql`
    query GetAllBooks{
        books{
            id
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
        const {loading, error, data} = useQuery(ALL_USERS_BOOKS)
        if (loading) {
            return <CircularProgress isIndeterminate color="green" my="20%"></CircularProgress>;
        }
        if (error) {
            return <p>Could not load books...</p>;
        }
        const {books} = data;
        return (
            <Box width="75%">
                <Heading m="20px 0 10px 0">Books View</Heading>
                <Grid templateColumns="repeat(3, 1fr)">
                    {books.map(book =>
                        <Link key={book.id} to={`/books/${book.id}`}>
                            <Book book={book}/>
                        </Link>
                    )}
                </Grid>
            </Box>
        )
    }
;

export default BooksView;