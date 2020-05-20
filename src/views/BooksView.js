import React from 'react'
import {gql, useQuery} from "@apollo/client";
import Book, {BOOK_PARTS_FRAGMENT} from "../components/Book";
import {CircularProgress} from '@chakra-ui/core'
import Heading from "@chakra-ui/core/dist/Heading";
import Box from "@chakra-ui/core/dist/Box";
import Grid from "@chakra-ui/core/dist/Grid";
import Link from "../components/Link";
import SearchBox, {useSearchQuery} from "../components/SearchBox";


const ALL_USERS_BOOKS = gql`
    query GetAllBooks($searchQuery: String){
        books(searchQuery: $searchQuery){
            ...bookParts
        }
    }
    ${BOOK_PARTS_FRAGMENT}
`;

const BooksView = () => {
        const [searchQuery, handleSearchQueryChange] = useSearchQuery("/books/search/")
        const {loading, error, data} = useQuery(ALL_USERS_BOOKS, {
            variables: {
                searchQuery
            }
        })
        if (loading) {
            return <CircularProgress isIndeterminate color="green" my="20%"></CircularProgress>;
        }
        if (error) {
            return <p>Could not load books...</p>;
        }
        const {books} = data;
        const anyBooks = books.length > 0 ? true : false;

        return (
            <Box width="75%">
                <Heading m="20px 0 10px 0">Books View</Heading>
                <SearchBox searchQuery={searchQuery}
                           onSearchQueryChange={handleSearchQueryChange}/>
                <Grid templateColumns="repeat(3, 1fr)">
                    {anyBooks ? books.map(book =>
                            <Link key={book.id} to={`/books/${book.id}`}>
                                <Book book={book}/>
                            </Link>
                        ) :
                        <p> No books found</p>
                    }
                </Grid>
            </Box>
        )
    }
;

export default BooksView;