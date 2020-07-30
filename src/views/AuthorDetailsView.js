import React from "react";
import {Box, CircularProgress} from "@chakra-ui/core";
import {gql, useQuery} from "@apollo/client";
import AuthorDetails, {AUTHOR_DETAILS_PARTS_FRAGMENT} from "../components/AuthorDetails";
import {useParams} from "react-router";
import AdminActions from "../components/AdminActions";
import ButtonLink from "../components/ButtonLink";
import ResetDataButton from "../components/ResetDataButton";
import AuthorDeleteButton from "../components/AuthorDeleteButton";

export const GET_AUTHOR_QUERY = gql`
    query GetBook($authorId: ID!) {
        author(id: $authorId) {
            ...authorDetailsParts
        }
    }
    ${AUTHOR_DETAILS_PARTS_FRAGMENT}
`;
const AuthorDetailsView = () => {

    const {authorId} = useParams();
    const {loading, error, data} = useQuery(GET_AUTHOR_QUERY, {
        variables: {
            authorId
        }
    })
    if (error) {
        return <p>Could not load author "{authorId}"</p>;
    }
    if (loading) {
        return <CircularProgress isIndeterminate color="green" my="20%"></CircularProgress>;
    }
    const {author} = data
    return (
        <Box>
            <AuthorDetails author={author}/>
            <AdminActions direction="column">
                <ButtonLink to={`/authors/${author.id}/edit`}>Edit author</ButtonLink>
                <AuthorDeleteButton
                    authorId={author.id}/>
                <ResetDataButton/>
            </AdminActions>
        </Box>
    );
}

export default AuthorDetailsView;