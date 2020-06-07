import { gql } from "@apollo/client";
import { AVATAR_FIELDS_FRAGMENT } from "../Avatar";

export const BOOK_COPY_PARTS_FRAGMENT = gql`
    fragment bookCopyParts on BookCopy {
        id
        book {
            cover {
                url
            }
        }
        owner {
            id
            name
            avatar {
                ...avatarFields
            }
        }
        borrower {
            id
            name
            avatar {
                ...avatarFields
            }
        }
    }
    ${AVATAR_FIELDS_FRAGMENT}
`;
