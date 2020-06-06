import React from "react";
import { Image, Box, AspectRatioBox } from "@chakra-ui/core";
import Avatar, { AVATAR_FIELDS_FRAGMENT } from "./Avatar";
import Link from "./Link";
// import BookCopyActions from "./BookCopy/BookCopyActions";
import { gql } from "@apollo/client";
import BookCopyActions from "./BookCopy/BookCopyActions";

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

export default function BookCopy({
                                     bookCopy,
                                     showOwner = false,
                                     showBorrower = false,
                                     showActions = false
                                 }) {
    const { book, owner, borrower } = bookCopy;
    return (
        <Box p={2}>
            <Box position="relative" p={2}>
                <AspectRatioBox minW="120px" maxW="300px" ratio={317 / 475}>
                    <Image src={book.cover.url} objectFit="cover" mr="3" />
                </AspectRatioBox>
                {showOwner && (
                    <Link to={`/users/${owner.id}`}>
                        <Avatar
                            position="absolute"
                            bottom="0"
                            left="0"
                            avatar={owner.avatar}
                            showBorder
                        />
                    </Link>
                )}

                {showBorrower && borrower && (
                    <Link to={`/users/${borrower.id}`}>
                        <Avatar
                            position="absolute"
                            bottom="0"
                            right="0"
                            avatar={borrower.avatar}
                            showBorder
                        />
                    </Link>
                )}
            </Box>
            {showActions && <BookCopyActions bookCopy={bookCopy} pt={3} />}
        </Box>
    );
}
