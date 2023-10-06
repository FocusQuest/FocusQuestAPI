import React from "react";
import GlobalStyle from "./styles/global";
import RoutesApp from "./routes/"; // Ajuste o caminho para routes.js

const App = () => {
    return (
        <>
           <RoutesApp />
           <GlobalStyle />
        </>
    );
};

export default App;

