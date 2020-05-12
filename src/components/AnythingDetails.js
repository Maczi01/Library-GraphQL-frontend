import React from "react";

const AnythingDetails = ({anything}) => {
    switch (anything.__typename) {
        default: {
            return <p>Unsupported __typename - [{anything.__typename}]</p>;
        }
    }
}

export default AnythingDetails;