import React from "react";
import { BrowserRouter } from "react-router-dom";

//import a App mi componente que controla las rutas
import RoutesContainer from "../RoutesContainer";

function App() {
  return (
    <BrowserRouter>
      <RoutesContainer />
    </BrowserRouter>
  );
}

export default App;
