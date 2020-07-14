import React from 'react'
import {Button} from "@chakra-ui/core";
import {useToast} from "./Toast";

export default function UserDeleteButton(props) {
    const toast = useToast();
    return <Button
        onClick={() =>
            toast({status: "warning", description: "Not implemented!"})
        }
        isLoading={false}
        {...props}
    >
        Delete User
    </Button>
}