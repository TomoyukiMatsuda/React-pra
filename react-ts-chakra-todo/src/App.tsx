import React from 'react';
import {Button, ChakraProvider} from "@chakra-ui/react";
import './App.css';
import {theme} from "./theme/theme";
import {BrowserRouter} from "react-router-dom";
import {Router} from "./router/Router";

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  )
}
