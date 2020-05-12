import React from "react";
import {Box} from "@chakra-ui/core";
import {useParams} from "react-router";

const BookDetailsView = () => {
    const {id} = useParams();

    return (
        <Box>
            <p>Book details page {id}</p>
        </Box>
    );
}

export default BookDetailsView;