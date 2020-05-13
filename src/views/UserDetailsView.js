import React from "react";
import {Box, CircularProgress, Flex} from "@chakra-ui/core";
import {gql, useQuery} from "@apollo/client";
import UserDetails from "../components/UserDetails";
import {useParams} from "react-router";
import BookDetails from "../components/BookDetails";


export default function UserDetailsPage() {

    const GET_USER_QUERY = gql`
        query GetUser($userId: ID!) {
            user(id: $userId) {
                id
                name
                email
                avatar {
                    image{
                        url
                    }
                    color
                }
                info
            }
        }
    `;


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
    return (
        <Box>
            <UserDetails user={user}/>
        </Box>
    );
}

