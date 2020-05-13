import React from "react";
import {gql, useQuery} from "@apollo/client";
import {CircularProgress, Flex} from '@chakra-ui/core'
import User from "../components/User";
import Link from "../components/Link";

const ALL_USERS_QUERY = gql`
    query GetAllUsers {
        users {
            id
            name
            email
            info
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
        <Flex direction="column" width="75%" wrap="wrap" mt="40px">
            {users.map(user =>
                <Link key={user.id} to={`/user/${user.id}`}>
                    <User user={user}/>
                </Link>
            )}
        </Flex>
    )
}


export default UsersView;