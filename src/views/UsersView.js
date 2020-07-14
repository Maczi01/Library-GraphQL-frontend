import React from "react";
import {gql, useQuery} from "@apollo/client";
import {CircularProgress, Flex} from "@chakra-ui/core";
import User from "../components/User";
import Link from "../components/Link";
import {USER_DETAILS_PARTS_FRAGMENT} from "../components/UserDetails";
import SearchBox, {useSearchQuery} from "../components/SearchBox";
import AdminActions from "../components/AdminActions";
import ButtonLink from "../components/ButtonLink";
import ResetDataButton from "../components/ResetDataButton";
import Stack from "@chakra-ui/core/dist/Stack";
import UserDeleteButton from "../components/UserDeleteButton";

const ALL_USERS_QUERY = gql`
    query GetAllUsers($searchQuery: String!) {
        users(searchQuery: $searchQuery) {
            ...userParts
        }
    }
    ${USER_DETAILS_PARTS_FRAGMENT}
`;

const UsersView = () => {
    const [searchQuery, handleSearchQueryChange] = useSearchQuery("/users/search/")
    const {loading, error, data} = useQuery(ALL_USERS_QUERY, {
        variables: {
            searchQuery
        }
    });

    if (loading) {
        return <CircularProgress isIndeterminate color="green" my="20%"/>;
    }
    if (error) {
        return <p>Could not load users...</p>;
    }
    const {users} = data;
    const anyUsers = users.length > 0;

    return (
        <Flex direction="column" width="75%" wrap="wrap" mt="40px">
            <SearchBox searchQuery={searchQuery}
                       onSearchQueryChange={handleSearchQueryChange}/>
            {anyUsers ? users.map(user => (
                <Stack key={user.id} >
                    <Link to={`/users/${user.id}`}>
                        <User user={user}/>
                    </Link>
                    <AdminActions direction="column">
                        <ButtonLink to={`/users/${user.id}/edit`}> Edit user</ButtonLink>
                        <UserDeleteButton userId={user.id}/>
                    </AdminActions>
                </Stack>
                )) :
                <p> No books found</p>
            }
            <AdminActions>
                <ButtonLink to="/users/new"> Create new user</ButtonLink>
                <ResetDataButton/>
            </AdminActions>
        </Flex>
    );
};

export default UsersView;
