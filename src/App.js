import React from "react";
import AuthorsView from "./views/AuthorsView";
import {Flex} from '@chakra-ui/core'
import {Route, Routes} from "react-router-dom";
import UsersView from "./views/UsersView";
import BooksView from "./views/BooksView";
import RandomView from "./views/RandomView";
import Header from "./components/Header";
import CSSReset from "@chakra-ui/core/dist/CSSReset";
import ResourceDetailsView from "./views/ResourceDetailsView";
import BookDetailsView from "./views/BookDetailsView";
import UserDetailsView from "./views/UserDetailsView";
import AuthorDetailsView from "./views/AuthorDetailsView";
import ResourcesView from "./views/ResourcesView";

export default function App() {
    return (
        <>
            <CSSReset/>
            <Flex direction="column" align="center" justify="space-between" width="full" height="100px"
                  backgroundColor="#ffd803" mx="auto" py="2%">
                <Header/>

                <Routes>
                    <Route path="/" element={<BooksView/>}/>

                    <Route path="books/:bookId" element={<BookDetailsView/>}/>
                    <Route path="books/search/:searchQuery" element={<BooksView/>}/>
                    <Route path="books/search/" element={<BooksView/>}/>

                    <Route path="authors/" element={<AuthorsView/>}/>
                    <Route path="authors/:authorId" element={<AuthorDetailsView/>}/>
                    <Route path="authors/search/:searchQuery" element={<AuthorsView/>}/>
                    <Route path="authors/search/" element={<AuthorsView/>}/>

                    <Route path="users/" element={<UsersView/>}/>
                    <Route path="users/:userId" element={<UserDetailsView/>}/>
                    <Route path="users/search/:searchQuery" element={<UsersView/>}/>
                    <Route path="users/search/" element={<UsersView/>}/>

                    <Route path="random/" element={<RandomView/>}/>
                    <Route path="admin/resource/:anyId" element={<ResourceDetailsView />} />

                    <Route path="admin/resources" element={<ResourcesView/>}/>
                </Routes>
            </Flex>
        </>
    );
}
