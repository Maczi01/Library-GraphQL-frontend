import React from "react";
import {gql, useQuery} from "@apollo/client";
import Author from "../components/Author";
import {Flex, CircularProgress} from '@chakra-ui/core'
import User from "../components/User";

const ALL_USERS_QUERY = gql`
    query GetAllUsers {
        users {
            name
            avatar {
                image{
                    url
                    
                }
            }
        }
    }
`;

const UsersView = () => {
    const {loading, error, data} = useQuery(ALL_USERS_QUERY);
    if (loading) {
        return <CircularProgress isIndeterminate color="green"></CircularProgress>;
    }
    if (error) {
        return <p>Could not load users...</p>;
    }
    const {users} = data;
    return (
        <Flex wrap="wrap" justify="space-around" my="20px">
            {users.map(user => <User key={user.name} user={user}/>)}
        </Flex>
    )
}


export default UsersView;