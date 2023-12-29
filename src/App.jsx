import React from "react";
import { QuantityProvider } from "./components/QuantityContext";
import YourComponent from "./components/YourComponent";

const App = () => {
  return (
    <QuantityProvider>
      <YourComponent />
    </QuantityProvider>
  );
};

export default App;
