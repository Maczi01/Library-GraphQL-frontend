    import React from "react";
    import {gql, useQuery} from "@apollo/client";
    import Author from "../components/Author";
    import {Flex, CircularProgress, Grid} from '@chakra-ui/core'
    import Link from "../components/Link";
    import Book, {BOOK_PARTS_FRAGMENT} from "../components/Book";
    // import Grid from "@chakra-ui/core/dist/Grid";
    import {AUTHOR_DETAILS_PARTS_FRAGMENT} from "../components/AuthorDetails";

    const ALL_AUTHORS_QUERY = gql`
        query GetAllAuthors {
            authors {
                ...authorDetailsParts
            }
        }
        ${AUTHOR_DETAILS_PARTS_FRAGMENT}
    `;

    const AuthorsView = () => {
        const {loading, error, data} = useQuery(ALL_AUTHORS_QUERY);
        if (loading) {
            return <CircularProgress isIndeterminate color="green" my="20%"></CircularProgress>;
        }
        if (error) {
            return <p>Could not load authors...</p>;
        }
        const {authors} = data;
        return (
            <Flex wrap="wrap" justify="space-around" my="20px" width="75%">
                {authors.map(author =>
                    <Link key={author.id} to={`/authors/${author.id}`}>
                        <Author author={author}/>
                    </Link>
                )}
            </Flex>
        )
    };

    export default AuthorsView;