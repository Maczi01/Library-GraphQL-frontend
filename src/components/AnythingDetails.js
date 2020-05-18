import React from "react";
import Book from "./Book";
import {gql} from "@apollo/client";
import BookDetails, {BOOK_DETAILS_PARTS_FRAGMENT} from "./BookDetails";
import UserDetails, {USER_DETAILS_PARTS_FRAGMENT} from "./UserDetails";
import AuthorDetails, {AUTHOR_DETAILS_PARTS_FRAGMENT} from "./AuthorDetails";

export const ANYTHING_DETAILS_FIELDS_FRAGMENT = gql`
    fragment anythingDetailsFields on Anything {
        ...bookDetailsParts
        ...authorDetailsParts
        ...userParts
    }
    ${BOOK_DETAILS_PARTS_FRAGMENT}
    ${AUTHOR_DETAILS_PARTS_FRAGMENT}
    ${USER_DETAILS_PARTS_FRAGMENT}
`;

const AnythingDetails = ({anything}) => {
    switch (anything.__typename) {
        case "User":
            return <UserDetails user={anything}/>;
        case "Book":
            return <BookDetails book={anything}/>;
        case "Author":
            return <AuthorDetails author={anything}/>
        default: {
            return <p>Unsupported __typename - [{anything.__typename}]</p>;
        }
    }
}

export default AnythingDetails;