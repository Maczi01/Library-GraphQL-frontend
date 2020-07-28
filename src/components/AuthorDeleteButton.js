import React from 'react'
import {Button} from "@chakra-ui/core";
import {useToast} from "./Toast";
import {gql, useMutation} from "@apollo/client";
import {AUTHOR_DETAILS_PARTS_FRAGMENT} from "./AuthorDetails";
import {GET_AUTHOR_QUERY} from "../views/AuthorDetailsView";

const DELETE_AUTHOR_MUTATION = gql`
    mutation DeleteAuthor($authorId: ID!){
        deleteAuthor(id: $authorId){
            success
            message
            id
        }
    }
`

export default function AuthorDeleteButton({authorId, ...remainingProps}) {
    const toast = useToast();
    const [deleteAuthor, {loading}] = useMutation(DELETE_AUTHOR_MUTATION, {
        variables: {authorId},
        onCompleted: ({deleteAuthor: {success, message, id}}) => {
            toast({
                description: message,
                status: success ? "success" : "error"
            });
        },
        update: cache => {
            try {
                const cachedData = cache.readQuery({
                    query: gql`
                        query GetAllAuthors($searchQuery: String) {
                            authors(searchQuery: $searchQuery) {
                                ...authorDetailsParts
                            }
                        }
                        ${AUTHOR_DETAILS_PARTS_FRAGMENT}
                    `,
                    variables: {searchQuery: ""}
                });
                cache.writeQuery({
                    query: gql`
                        query GetAllAuthors($searchQuery: String) {
                            authors(searchQuery: $searchQuery) {
                                ...authorDetailsParts
                            }
                        }
                        ${AUTHOR_DETAILS_PARTS_FRAGMENT}
                    `,
                    variables: {searchQuery: ""},
                    data: {
                        authors: cachedData.authors.filter(author => author.id !== authorId)
                    }
                });
                cache.writeQuery({
                    query: GET_AUTHOR_QUERY,
                    variables: {authorId},
                    data: {
                        author: null
                    }
                });
            } catch (e) {
            }
        }
    });
    return (
        <Button onClick={() =>
            deleteAuthor()
        } isLoading={loading} {...remainingProps}
        >
            Delete Author!
        </Button>
    );
}