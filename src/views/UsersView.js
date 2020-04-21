import React from "react";
import {gql, useQuery} from "@apollo/client";
import {CircularProgress, Flex} from '@chakra-ui/core'
import User from "../components/User";
import UserDetails from "../components/UserDetails";

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
            {users.map(user => <UserDetails key={user.name} user={user}/>)}
        </Flex>
    )
}


export default UsersView;