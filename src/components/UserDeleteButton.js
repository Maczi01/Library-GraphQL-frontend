import React from 'react'
import {Button} from "@chakra-ui/core";
import {useToast} from "./Toast";
import {gql, useMutation} from "@apollo/client";
import {GET_USER_QUERY} from "../views/UserDetailsView";
import {USER_DETAILS_PARTS_FRAGMENT} from "./UserDetails";

const DELETE_USER_MUTATION = gql`
    mutation DeleteUser($userId: ID!){
        deleteUser(id: $userId){
            success
            message
            id
        }
    }
`
export default function UserDeleteButton({userId, ...remainingProps}) {
    const toast = useToast();
    const [deleteUser, {loading}] = useMutation(DELETE_USER_MUTATION, {
        variables: {userId},
        onCompleted: ({deleteUser: {success, message, id}}) => {
            toast({
                description: message,
                status: success ? "success" : "error"
            });
        },
        update: cache => {
            try {
                const cachedData = cache.readQuery({
                    query: gql`
                        query GetAllUsers($searchQuery: String!) {
                            users(searchQuery: $searchQuery) {
                                ...userParts
                            }
                        }
                        ${USER_DETAILS_PARTS_FRAGMENT}
                    `,
                    variables: {searchQuery: ""}
                });
                cache.writeQuery({
                    query: gql`
                        query GetAllUsers($searchQuery: String!) {
                            users(searchQuery: $searchQuery) {
                                ...userParts
                            }
                        }
                        ${USER_DETAILS_PARTS_FRAGMENT}
                    `,
                    variables: {searchQuery: ""},
                    data: {
                        users: cachedData.users.filter(user => user.id !== userId)
                    }
                });
            } catch (e) {
            }
            cache.writeQuery({
                query: GET_USER_QUERY,
                variables: {userId},
                data: {
                    user: null
                }
            });
        }
    });
    return (
        <Button onClick={() =>
            deleteUser()
        } isLoading={loading} {...remainingProps}
        >
            Delete user!
        </Button>
    );
}