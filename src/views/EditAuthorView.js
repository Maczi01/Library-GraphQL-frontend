import React from "react";
import {useNavigate, useParams} from "react-router";
import {useQuery} from "@apollo/client";
import {CircularProgress} from "@chakra-ui/core";
import {GET_USER_QUERY} from "./UserDetailsView";
import UserCreateForm from "../components/UserCreateForm";
import {useToast} from "../components/Toast";
import UserUpdateForm from "../components/UserUpdateForm";
import {GET_AUTHOR_QUERY} from "./AuthorDetailsView";
import AuthorUpdateForm from "../components/AuthorUpdateForm";

export default function EditAuthorView() {
    const toast = useToast();
    const navigate = useNavigate();
    const {authorId} = useParams();
    const {loading, error, data} = useQuery(GET_AUTHOR_QUERY, {
        variables: {authorId}
    });
    if (loading) {
        return <CircularProgress isIndeterminate color="green" my="20%"></CircularProgress>;
    }
    if (error) {
        return <p>Could not load user"</p>;
    }
    const {author} = data;
    if (!author) {
        return <p>author not found</p>
    }

    return <AuthorUpdateForm
        author={author}
        onUpdate={() => {
            toast({status: "warning", description: "Not implemented!"})
        }} onCancel={() => navigate(`/authors/${author.id}`)}
        isUpdating={false}/>
}
