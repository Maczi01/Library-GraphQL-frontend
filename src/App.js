import React from "react";
import AuthorsView from "./views/AuthorsView";
import {Divider, Flex, Heading, Link} from '@chakra-ui/core'
import {Link as RouterLink, Route, Routes} from "react-router-dom";
import UsersView from "./views/UsersView";
import Box from "@chakra-ui/core/dist/Box";
import BooksView from "./views/BooksView";
import RandomView from "./views/RandomView";
import Button from "@chakra-ui/core/dist/Button";
import Header from "./components/Header";
import CSSReset from "@chakra-ui/core/dist/CSSReset";
import AnythingDetailsView from "./views/AnythingDetailsView";
import EverythingView from "./views/EverythingView";
import BookDetailsView from "./views/BookDetailsView";

export default function App() {
    return (
        <>
            <CSSReset/>
            <Flex direction="column" align="center" justify="space-between" width="full" height="100px"
                  backgroundColor="#ffd803" mx="auto" py="2%">
                <Header/>

                <Routes>
                    <Route path="/" element={<BooksView/>}/>
                    <Route path="authors/" element={<AuthorsView/>}/>
                    {/*<Route path="books/" element={<BooksView/>}/>*/}
                    <Route path="books/:id" element={<BookDetailsView/>}/>
                    <Route path="users/" element={<UsersView/>}/>
                    <Route path="random/" element={<RandomView/>}/>
                    <Route path="admin/anything/:anyId" element={<AnythingDetailsView/>}/>
                    <Route path="admin/everything" element={<EverythingView/>}/>
                </Routes>
            </Flex>
        </>
    );
}
