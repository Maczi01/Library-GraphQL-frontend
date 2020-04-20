import React from "react";
import ReactDOM from "react-dom";
import {ApolloClient, InMemoryCache} from "@apollo/client";
import {ApolloProvider} from "@apollo/client";
import {theme, ThemeProvider, CSSReset} from '@chakra-ui/core'
import App from "./App";
import {BrowserRouter as Router,} from 'react-router-dom'

// const GRAPHQL_ENDPOINT = "https://desolate-caverns-39326.herokuapp.com/";
const GRAPHQL_ENDPOINT = "https://examples.devmastery.pl/library-lists/graphql";

const cache = new InMemoryCache({
    addTypename: false,
    resultCaching: false
});
const client = new ApolloClient({
    uri: GRAPHQL_ENDPOINT,
    cache
});

const rootElement = document.getElementById("root");
ReactDOM.render(
    <ApolloProvider client={client}>
        <Router>
            <ThemeProvider theme={theme}>
                <CSSReset/>
                <App/>
            </ThemeProvider>
        </Router>
    </ApolloProvider>,
    rootElement
);
