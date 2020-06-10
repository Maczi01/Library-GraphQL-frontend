import React from "react";
import Book from "./Book";
import {gql} from "@apollo/client";
import BookDetails, {BOOK_DETAILS_PARTS_FRAGMENT} from "./BookDetails";
import UserDetails, {USER_DETAILS_PARTS_FRAGMENT} from "./UserDetails";
import AuthorDetails, {AUTHOR_DETAILS_PARTS_FRAGMENT} from "./AuthorDetails";
import BookCopy from "./BookCopy";
import {BOOK_COPY_PARTS_FRAGMENT} from "./BookCopy/fragments";

export const RESOURCE_DETAILS_FIELDS_FRAGMENT = gql`
    fragment resourceDetailsFields on Resource {
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

const ResourceDetails = ({resource}) => {
    switch (resource.__typename) {
        case "User":
            return <UserDetails user={resource}/>;
        case "Book":
            return <BookDetails book={resource}/>;
        case "BookCopy":
            return <BookCopy bookCopy={resource} showBorrower showOwner/>;
        case "Author":
            return <AuthorDetails author={resource}/>
        default: {
            return <p>Unsupported __typename - [{resource.__typename}]</p>;
        }
    }
}

export default ResourceDetails;