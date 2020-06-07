import {Button, useToast} from "@chakra-ui/core";
import React from "react";
import {gql, useMutation} from "@apollo/client";
import {BOOK_COPY_PARTS_FRAGMENT} from "./fragments";


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
    const [returnBook, { loading }] = useMutation(RETURN_BOOK_COPY_MUTATION, {
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
                description: "You can't return this book, you aren't owner",
                status: "error",
                duration: 1500,
                position: "top",
                isClosable: false
            });
        }
    });
    return (
        <Button disabled={loading} onClick={returnBook}>
            Return
        </Button>
    );
}
