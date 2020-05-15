import React from "react";
import {Flex, Heading, Image, Box} from "@chakra-ui/core";
import Link from "./Link";
import Book, {BOOK_PARTS_FRAGMENT} from "./Book";
import {gql} from "@apollo/client";

export const AUTHOR_DETAILS_PARTS_FRAGMENT = gql`
    fragment authorParts on Author{
        id
        name
        bio
        photo {
            url
        }
        books {
            ...bookParts
        }
    }
    ${BOOK_PARTS_FRAGMENT}
`

const AuthorDetails = ({author}) => {
    return (
        <Flex m="3" overflow="hidden" direction="column" align="center">
            {console.log(author.id)}
            <Heading as="h2" size="lg" color="gray.700" my="3">
                {author.name}
            </Heading>
            <Box as="article">
                <Image
                    w="40%"
                    objectFit="cover"
                    src={author.photo.url}
                    float="left"
                    mr="3"
                />
                <Box as="article">{author.bio}</Box>
            </Box>
            <Heading as="h3" size="sm">
                Books
            </Heading>
            {author.books.map(book => (
                <Link to={`/books/${book.id}`} key={book.id} w="100%">
                    <p>{book.title} </p>
                </Link>
            ))}
        </Flex>
    );
}

export default AuthorDetails;
