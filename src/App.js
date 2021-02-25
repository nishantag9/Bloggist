import React from "react";
import Routes from "./routes";
import { useThemer } from "./helpers/useThemer";

function App() {
  const [theme] = useThemer();

  return (
    <div className={`theme-wrapper--${theme}`}>
      <div className="app-body">
        <Routes />
      </div>
    </div>
  );
}

export default App;
