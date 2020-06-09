import {Button, useToast} from "@chakra-ui/core";
import React from "react";
import {gql, useMutation} from "@apollo/client";
import {BOOK_COPY_PARTS_FRAGMENT} from "./fragments";
import {GET_USER_QUERY} from "../../views/UserDetailsView";

const BORROW_RANDOM_BOOK_COPY_MUTATION = gql`
    mutation BorrowRandomBookCopy {
        borrowRandomBook{
            ...bookCopyParts
        }
    }
    ${BOOK_COPY_PARTS_FRAGMENT}
`;

export default function BorrowRandomButton() {
    const toast = useToast();
    const [borrowBook, {loading}] = useMutation(BORROW_RANDOM_BOOK_COPY_MUTATION
        , {
            onCompleted: (book) => {
                book.borrowRandomBook === null ?
                    toast({
                        title: "Could not borrow book",
                        description: "Any free books to borrow",
                        status: "info",
                        duration: 1500,
                        position: "top",
                        isClosable: false
                    })
                    :
                    toast({
                        title: "Success",
                        description: "You've borrowed random book",
                        status: "success",
                        duration: 1500,
                        position: "top",
                        isClosable: false
                    })
            },
            refetchQueries: ({data}) => {
                return data.borrowRandomBook ? [
                    {
                        query: GET_USER_QUERY,
                        variables: {userId: data.borrowRandomBook.borrower.id}
                    }
                ] : null
            }
        });
    return (
        <Button mt="10px" variantColor="blue" variant="solid" disabled={loading} onClick={borrowBook}>
            Borrow Random Book
        </Button>
    );
}
