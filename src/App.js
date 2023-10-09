import React from "react";
import GlobalStyle from "./login/styles/global";
import RoutesApp from "./login/routes"; // Ajuste o caminho para routes.js

const App = () => {
    return (
        <>
           <RoutesApp />
           <GlobalStyle />
        </>
    );
};

export default App;

