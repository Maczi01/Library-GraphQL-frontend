import React from 'react'
import {Button} from "@chakra-ui/core";
import {useToast} from "./Toast";
import {gql} from "@apollo/client";


const RESET_DATA_MUTATION = gql`
    mutation ResetData{
        resetData{
            success
            message
        }
    }
    
`

export default function ResetDataButton(props) {
    const toast = useToast();
    return <Button
        onClick={() =>
            toast({status: "warning", description: "Not implemented!"})
        }
        isLoading={false}
        {...props}
    >
        Reset Data
    </Button>
}