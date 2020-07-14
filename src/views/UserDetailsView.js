import React from "react";
import {Box, CircularProgress} from "@chakra-ui/core";
import {gql, useQuery} from "@apollo/client";
import UserDetails, {USER_DETAILS_PARTS_FRAGMENT} from "../components/UserDetails";
import {useParams} from "react-router";
import BookCopy from "../components/BookCopy";
import {BOOK_COPY_PARTS_FRAGMENT} from "../components/BookCopy/fragments";
import Flex from "@chakra-ui/core/dist/Flex";
import Heading from "@chakra-ui/core/dist/Heading";
import BorrowRandomButton from "../components/BookCopy/BorrowRandomButton";
import AdminActions from "../components/AdminActions";
import ButtonLink from "../components/ButtonLink";
import UserDeleteButton from "../components/UserDeleteButton";
import Stack from "@chakra-ui/core/dist/Stack";
import ResetDataButton from "../components/ResetDataButton";


export const GET_USER_QUERY = gql`
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


export default function UserDetailsPage() {

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
    if(!user){
        return <p>User not found</p>
    }

    return (
        <Box>
            <UserDetails user={user}/>
            <BorrowRandomButton/>
            <Heading as="h3" size="lg" textAlign="center"> Owned books</Heading>
            <Flex wrap="wrap" width="60vw">
                {user.ownedBookCopies.map(bookCopy => (
                    <BookCopy
                        key={bookCopy.id}
                        bookCopy={bookCopy}
                        showBorrower
                        showActions

                    />
                ))}
            </Flex>
            <AdminActions direction="column">
                <ButtonLink to={`/users/${user.id}/edit`}> Edit user</ButtonLink>
                <UserDeleteButton userId={user.id}/>
                <ResetDataButton/>
            </AdminActions>
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

