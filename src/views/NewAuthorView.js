import React from "react";
import UserCreateForm from "../components/UserCreateForm";
import {useToast} from "../components/Toast";
import {useNavigate} from "react-router";
import AuthorCreateForm from "../components/AuthorCreateForm";

export default function NewAuthorView() {
    const toast = useToast();
    const navigate = useNavigate();
    return <AuthorCreateForm onCreate={() => {
        toast({status: "warning", description: "Not implemented!"})
    }} onCancel={() => navigate("/authors")}
                           isCreating={false}/>
}

