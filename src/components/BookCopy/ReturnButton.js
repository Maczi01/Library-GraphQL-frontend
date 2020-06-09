import {Button, useToast} from "@chakra-ui/core";
import React from "react";
import {gql, useMutation} from "@apollo/client";
import {BOOK_COPY_PARTS_FRAGMENT} from "./fragments";
import {GET_USER_QUERY} from "../../views/UserDetailsView";


const RETURN_BOOK_COPY_MUTATION = gql`
    mutation BorrowBookCopy($bookCopyId: ID!) {
        returnBookCopy(id: $bookCopyId) {
            ...bookCopyParts
        }
    }
    ${BOOK_COPY_PARTS_FRAGMENT}
`;


export default function ReturnButton({borrowedBookCopy}) {
    const toast = useToast();
    const [returnBook, {loading}] = useMutation(RETURN_BOOK_COPY_MUTATION, {
        variables: { bookCopyId: borrowedBookCopy.id },
        onCompleted: () => {
            toast({
                title: "Success",
                description: "You've returned the book",
                status: "success",
                duration: 1500,
                position: "top",
                isClosable: false
            });
        },
        onError: error => {
            toast({
                title: "Could not return the book",
                // description: "You can't return this book, you aren't owner",
                description: error.message,
                status: "error",
                duration: 1500,
                position: "top",
                isClosable: false
            });
        },
        refetchQueries: [
            {
                query: GET_USER_QUERY,
                variables: { userId: borrowedBookCopy.borrower.id }
            }
        ]
    });
    return (
        <Button disabled={loading} onClick={returnBook}>
            Return
        </Button>
    );
}
