import React from "react";
import {gql, useQuery} from "@apollo/client";
import Author from "../components/Author";
import {CircularProgress, Flex} from '@chakra-ui/core'
import Link from "../components/Link";
import {AUTHOR_DETAILS_PARTS_FRAGMENT} from "../components/AuthorDetails";
import SearchBox, {useSearchQuery} from "../components/SearchBox";
import AdminActions from "../components/AdminActions";
import ButtonLink from "../components/ButtonLink";
import UserDeleteButton from "../components/UserDeleteButton";
import Stack from "@chakra-ui/core/dist/Stack";
import AuthorDeleteButton from "../components/AuthorDeleteButton";
import ResetDataButton from "../components/ResetDataButton";

const ALL_AUTHORS_QUERY = gql`
    query GetAllAuthors($searchQuery: String) {
        authors(searchQuery: $searchQuery) {
            ...authorDetailsParts
        }
    }
    ${AUTHOR_DETAILS_PARTS_FRAGMENT}
`;

const AuthorsView = () => {
    const [searchQuery, handleSearchQueryChange] = useSearchQuery("/authors/search/")
    const {loading, error, data} = useQuery(ALL_AUTHORS_QUERY, {
        variables: {
            searchQuery
        }
    });
    if (loading) {
        return <CircularProgress isIndeterminate color="green" my="20%"></CircularProgress>;
    }
    if (error) {
        return <p>Could not load authors...</p>;
    }
    const {authors} = data;

    return (
        <>
            <SearchBox
                searchQuery={searchQuery}
                onSearchQueryChange={handleSearchQueryChange}/>
            <Flex wrap="wrap" justify="space-around" my="20px" width="75%">

                {authors.map(author =>
                    <Stack key={author.id}>
                        <Link to={`/authors/${author.id}`}>
                            <Author author={author}/>
                        </Link>
                        <AdminActions direction="column">
                            <ButtonLink to={`/authors/${author.id}/edit`}> Edit author</ButtonLink>
                            <AuthorDeleteButton authorId={author.id}/>
                        </AdminActions>
                    </Stack>
                )}

                <AdminActions>
                    <ButtonLink to="/authors/new"> Create new author</ButtonLink>
                    <ResetDataButton/>
                </AdminActions>
            </Flex>
        </>
    )
};

export default AuthorsView;