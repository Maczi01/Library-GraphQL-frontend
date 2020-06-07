import React from "react";
import Book from "./Book";
import {gql} from "@apollo/client";
import BookDetails, {BOOK_DETAILS_PARTS_FRAGMENT} from "./BookDetails";
import UserDetails, {USER_DETAILS_PARTS_FRAGMENT} from "./UserDetails";
import {AUTHOR_DETAILS_PARTS_FRAGMENT} from "./AuthorDetails";
import BookCopy from "./BookCopy";
import {BOOK_COPY_PARTS_FRAGMENT} from "./BookCopy/fragments";

export const ANYTHING_DETAILS_FIELDS_FRAGMENT = gql`
    fragment anythingDetailsFields on Anything {
        ...bookDetailsParts
        ...authorDetailsParts
        ...userParts
        ...bookCopyParts
    }
    ${BOOK_DETAILS_PARTS_FRAGMENT}
    ${AUTHOR_DETAILS_PARTS_FRAGMENT}
    ${USER_DETAILS_PARTS_FRAGMENT}
    ${BOOK_COPY_PARTS_FRAGMENT}
`;

const AnythingDetails = ({anything}) => {
    switch (anything.__typename) {
        case "User":
            return <UserDetails user={anything}/>;
        case "Book":
            return <BookDetails book={anything}/>;
        case "BookCopy":
            return <BookCopy bookCopy={anything} showBorrower showOwner/>;
        case "Author":
            return <BookCopy author={anything}/>
        default: {
            return <p>Unsupported __typename - [{anything.__typename}]</p>;
        }
    }
}

export default AnythingDetails;