import React from 'react'
import {Button} from "@chakra-ui/core";
import {useToast} from "./Toast";
import {gql, useMutation} from "@apollo/client";


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
    const [deleteUser, { loading }] = useMutation(DELETE_USER_MUTATION, {
        onCompleted: ({ deleteUser: { success, message } }) => {
            toast({
                description: message,
                status: success ? "success" : "error"
            });
        }
    });
    return (
        <Button onClick={() =>
            deleteUser({
                variables: {userId}
            })
        } isLoading={loading} {...remainingProps}
        >
            Delete user!
        </Button>
    );
}