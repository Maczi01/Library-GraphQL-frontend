import React, {useRef} from "react";
import {
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button,
    Box,
    ButtonGroup
} from "@chakra-ui/core";

export default function AuthorUpdateForm({
                                             author,
                                             onUpdate,
                                             onCancel,
                                             isUpdating
                                         }) {
    const nameRef = useRef();
    const bioRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        onUpdate({
            id: author.id,
            name: nameRef.current.value,
            bio: bioRef.current.value
        });
    }

    return (
        <Box as="form" mt="5" onSubmit={handleSubmit}>
            <FormControl isDisabled={isUpdating}>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                    ref={nameRef}
                    id="name"
                    placeholder="John"
                    defaultValue={author.name}
                />
            </FormControl>
            <FormControl isDisabled={isUpdating}>
                <FormLabel htmlFor="info">Info</FormLabel>
                <Textarea
                    ref={bioRef}
                    id="info"
                    placeholder="Here is a sample placeholder to input"
                    defaultValue={author.info}
                />
            </FormControl>
            <ButtonGroup mt="3">
                <Button
                    isLoading={isUpdating}
                    loadingText="Updating User... wait a moment"
                    type="submit"
                    variantColor="green"
                >
                    Update Author
                </Button>
                <Button onClick={onCancel}>Cancel edit</Button>
            </ButtonGroup>
        </Box>
    );
}
