import React from "react";
import {gql, useQuery} from "@apollo/client";
import UserDetails, {USER_DETAILS_PARTS_FRAGMENT} from "../components/UserDetails";
import {useParams} from "react-router";
import BookCopy from "../components/BookCopy";
import {BOOK_COPY_PARTS_FRAGMENT} from "../components/BookCopy/fragments";
import Flex from "@chakra-ui/core/dist/Flex";
import Heading from "@chakra-ui/core/dist/Heading";
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
    const { userId } = useParams();
    const { loading, error, data } = useQuery(GET_USER_QUERY, {
        variables: { userId }
    });

    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Could not load user...</p>;
    }
    const { user } = data;
    if (!user) {
        return <p>User not found</p>;
    }
    return (
        <Stack>
            <UserDetails user={user} />
            <AdminActions>
                <ButtonLink to={`/users/${userId}/edit`}>Edit user</ButtonLink>
                <UserDeleteButton userId={user.id} />
                <ResetDataButton />
            </AdminActions>
            {user.ownedBookCopies.length > 0 && (
                <>
                    <Heading as="h3" size="lg" textAlign="center">
                        Owned books
                    </Heading>
                    <Flex wrap="wrap">
                        {user.ownedBookCopies.map(bookCopy => (
                            <BookCopy
                                key={bookCopy.id}
                                bookCopy={bookCopy}
                                showBorrower
                                showActions
                            />
                        ))}
                    </Flex>
                </>
            )}
            {user.borrowedBookCopies.length > 0 && (
                <>
                    <Heading as="h3" size="lg" textAlign="center">
                        Borrowed books
                    </Heading>
                    <Flex wrap="wrap">
                        {user.borrowedBookCopies.map(bookCopy => (
                            <BookCopy
                                key={bookCopy.id}
                                bookCopy={bookCopy}
                                showOwner
                                showActions
                            />
                        ))}
                    </Flex>
                </>
            )}
        </Stack>
    );
}
