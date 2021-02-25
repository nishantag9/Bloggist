import React from "react";
import Routes from "./routes";
import { useThemer } from "./helpers/useThemer";

import Header from "./components/header"

function App() {
  const [theme] = useThemer();

  return (
    <div className={`theme-wrapper theme-wrapper--${theme}`}>
      <div className="app-body">
        <Header/>
        <Routes />
      </div>
    </div>
  );
}

export default App;
