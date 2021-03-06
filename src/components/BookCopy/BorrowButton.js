import {Button, useToast} from "@chakra-ui/core";
import React from "react";
import {gql, useMutation} from "@apollo/client";
import {BOOK_COPY_PARTS_FRAGMENT} from "./fragments";
import {GET_USER_QUERY} from "../../views/UserDetailsView";

const BORROW_BOOK_COPY_MUTATION = gql`
    mutation BorrowBookCopy($bookCopyId: ID!) {
        borrowBookCopy(id: $bookCopyId) {
            ...bookCopyParts
        }
    }
    ${BOOK_COPY_PARTS_FRAGMENT}
`;




export default function BorrowButton({ availableBookCopy }) {
    const toast = useToast();
    const [borrowBook, { loading }] = useMutation(BORROW_BOOK_COPY_MUTATION, {
        variables: { bookCopyId: availableBookCopy.id },
        onCompleted: () => {
            toast({
                title: "Success",
                description: "You've borrowed the book",
                status: "success",
                duration: 1000,
                position: "top",
                isClosable: true
            });
        },
        onError: error => {
            toast({
                title: "Could not borrow the book",
                description: error.message,
                status: "error",
                duration: 1000,
                position: "top",
                isClosable: true
            });
        },
        update: (cache, { data: { borrowBookCopy } }) => {
        try{
            const cachedData = cache.readQuery({
                query: GET_USER_QUERY,
                variables: { userId: borrowBookCopy.borrower.id }
            });
            const data = JSON.parse(JSON.stringify(cachedData));
            data.user.borrowedBookCopies.push(borrowBookCopy);
            cache.writeQuery({
                query: GET_USER_QUERY,
                variables: { userId: borrowBookCopy.borrower.id },
                data
            });
        } catch (error){}
        }
    });
    return (
        <Button disabled={loading} onClick={borrowBook}>
            Borrow
        </Button>
    );
}
