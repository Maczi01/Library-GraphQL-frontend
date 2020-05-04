import React from "react";
import {gql, useQuery} from "@apollo/client";
import {CircularProgress, Flex} from '@chakra-ui/core'
import User from "../components/User";
import UserDetails from "../components/UserDetails";

const ALL_USERS_QUERY = gql`
    query GetAllUsers {
        users {
            name
            email
            avatar {
                image{
                    url
                    
                }   
                color
            }
        }
    }
`;

const UsersView = () => {
    const {loading, error, data} = useQuery(ALL_USERS_QUERY);
    if (loading) {
        return <CircularProgress isIndeterminate color="green" my="20%"></CircularProgress>;
    }
    if (error) {
        return <p>Could not load users...</p>;
    }
    const {users} = data;
    return (
        <Flex direction="column"  width="75%" wrap="wrap" mt="40px">
            {users.map(user => <User key={user.name} user={user}/>)}
        </Flex>
    )
}


export default UsersView;