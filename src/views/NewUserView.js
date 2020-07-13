import React from "react";
import UserCreateForm from "../components/UserCreateForm";
import {useToast} from "../components/Toast";
import {useNavigate} from "react-router";

export default function NewUserView() {
    const toast = useToast();
    const navigate = useNavigate();
    return <UserCreateForm onCreate={() => {
        toast({status: "warning", description: "Not implemented!"})
    }} onCancel={() => navigate("/users")}
                           isCreating={false}/>
}

