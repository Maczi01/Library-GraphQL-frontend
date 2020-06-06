import { Button } from "@chakra-ui/core";
import React from "react";

export default function BorrowButton({ availableBookCopy }) {
    return (
        <Button onClick={() => console.log("User wants to borrow the book copy")}>
            Borrow
        </Button>
    );
}
