import React from "react";
import {useParams} from "react-router";
import {useQuery} from "@apollo/client";
import {CircularProgress} from "@chakra-ui/core";
import {GET_USER_QUERY} from "./UserDetailsView";

export default function EditUserPage() {

    const {userId} = useParams();
    const {loading, error, data} = useQuery(GET_USER_QUERY, {
        variables: {userId}
    });
    if (loading) {
        return <CircularProgress isIndeterminate color="green" my="20%"></CircularProgress>;
    }
    if (error) {
        return <p>Could not load user"</p>;
    }
    const {user} = data;
    if(!user){
        return <p>User not found</p>
    }
    return <p>Edit user({user.name}) page</p>;
}
