import { Button } from "@chakra-ui/core";
import React from "react";

export default function BorrowButton({ borrowedBookCopy }) {
    return (
        <Button onClick={() => console.log("User wants to return the book copy")}>
            Return
        </Button>
    );
}
