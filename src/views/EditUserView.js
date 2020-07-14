import React from "react";
import {useNavigate, useParams} from "react-router";
import {useQuery} from "@apollo/client";
import {CircularProgress} from "@chakra-ui/core";
import {GET_USER_QUERY} from "./UserDetailsView";
import UserCreateForm from "../components/UserCreateForm";
import {useToast} from "../components/Toast";
import UserUpdateForm from "../components/UserUpdateForm";

export default function EditUserPage() {
    const toast = useToast();
    const navigate = useNavigate();
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
    if (!user) {
        return <p>User not found</p>
    }

    return <UserUpdateForm
        user={user}
        onUpdate={() => {
            toast({status: "warning", description: "Not implemented!"})
        }} onCancel={() => navigate(`/users/${user.id}`)}
        isUpdating={false}/>
}
