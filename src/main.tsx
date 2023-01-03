import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { extendTheme } from "@chakra-ui/react";
import { theme as proTheme } from "@chakra-ui/pro-theme";
import "@fontsource/inter/variable.css";
import "@fontsource/acme";
import App from "./App";

const theme = extendTheme(
  {
    fonts: {
      heading: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
      body: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
      test: "Acme, -apple-system, BlinkMacSystemFont, sans-serif",
    },
    colors: {
      primary: proTheme.colors.orange,
    },
  },
  proTheme
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
