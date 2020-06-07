import React from "react";
import {Box, CircularProgress} from "@chakra-ui/core";
import {gql, useQuery} from "@apollo/client";
import UserDetails, {USER_DETAILS_PARTS_FRAGMENT} from "../components/UserDetails";
import {useParams} from "react-router";
import BookCopy from "../components/BookCopy";
import {BOOK_COPY_PARTS_FRAGMENT} from "../components/BookCopy/fragments";
import Flex from "@chakra-ui/core/dist/Flex";
import Heading from "@chakra-ui/core/dist/Heading";

export default function UserDetailsPage() {

    const GET_USER_QUERY = gql`
        query GetUser($userId: ID!) {
            user(id: $userId) {
                ...userParts
                borrowedBookCopies {
                    ...bookCopyParts
                }
                ownedBookCopies{
                    ...bookCopyParts
                }
            }
        }
        ${USER_DETAILS_PARTS_FRAGMENT}
        ${BOOK_COPY_PARTS_FRAGMENT}
    `;

    const {userId} = useParams();
    const {loading, error, data} = useQuery(GET_USER_QUERY, {
        variables: {userId}
    });
    if (loading) {
        return <CircularProgress isIndeterminate color="green" my="20%"></CircularProgress>;
    }
    if (error) {
        return <p>Could not load user"</p>;
    }
    const {user} = data;
    return (
        <Box>
            <UserDetails user={user}/>

            <Heading as="h3" size="lg" textAlign="center"> Owned books</Heading>
            <Flex wrap="wrap" width="60vw">
                {user.ownedBookCopies.map(bookCopy => (
                    <BookCopy
                        key={bookCopy.id}
                        bookCopy={bookCopy}
                        showBorrower
                    />
                ))}
            </Flex>

            <Heading as="h3" size="lg" textAlign="center"> Borrowed books </Heading>
            <Flex wrap="wrap" width="60vw">
                {user.borrowedBookCopies.map(bookCopy => (
                    <BookCopy
                        key={bookCopy.id}
                        bookCopy={bookCopy}
                        showOwner
                        showActions
                    />
                ))}
            </Flex>

        </Box>
    );
}

