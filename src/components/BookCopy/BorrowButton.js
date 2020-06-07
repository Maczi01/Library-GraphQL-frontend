import {Button, useToast} from "@chakra-ui/core";
import React from "react";
import {gql, useMutation} from "@apollo/client";
import {BOOK_COPY_PARTS_FRAGMENT} from "./fragments";

const BORROW_BOOK_COPY_MUTATION = gql`
    mutation BorrowBookCopy($bookCopyId: ID!) {
        borrowBookCopy(id: $bookCopyId) {
            ...bookCopyParts
        }
    }
    ${BOOK_COPY_PARTS_FRAGMENT}
`;

export default function BorrowButton({availableBookCopy}) {
    const toast = useToast();
    const [borrowBook, { loading }] = useMutation(BORROW_BOOK_COPY_MUTATION, {
        variables: { bookCopyId: availableBookCopy.id },
        onCompleted: () => {
            toast({
                title: "Success",
                description: "You've borrowed the book",
                status: "success",
                duration: 1500,
                position: "top",
                isClosable: false
            });
        },
        onError: error => {
            toast({
                title: "Could not borrow the book",
                description: "Book already borrowed by someone else",
                status: "error",
                duration: 1500,
                position: "top",
                isClosable: false
            });
        }
    });
    return (
        <Button disabled={loading} onClick={borrowBook}>
            Borrow
        </Button>
    );
}
