import React from "react";
import {gql, useQuery} from "@apollo/client";
import Author from "../components/Author";
import {CircularProgress, Flex} from '@chakra-ui/core'
import Link from "../components/Link";
import {AUTHOR_DETAILS_PARTS_FRAGMENT} from "../components/AuthorDetails";
import SearchBox, {useSearchQuery} from "../components/SearchBox";

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

    return (<>
            <SearchBox
                searchQuery={searchQuery}
                onSearchQueryChange={handleSearchQueryChange}/>
            <Flex wrap="wrap" justify="space-around" my="20px" width="75%">
                {authors.map(author =>
                    <Link key={author.id} to={`/authors/${author.id}`}>
                        <Author author={author}/>
                    </Link>
                )}
            </Flex>
        </>
    )
};

export default AuthorsView;