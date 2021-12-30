import React from "react";
import Banner from "../Banner";
import Navbar from "../Navbar";

function App() {
  const isDevelopment = process.env.NODE_ENV === "development";

  return (
    <>
      <Navbar />
      {isDevelopment && (
        <Banner variant="amber">
          <span className="md:hidden">
            <span className="font-bold">Warning:</span> Development Mode! 🚧
          </span>
          <span className="hidden md:inline">
            <span className="font-bold">Warning:</span> Application is running
            in Development Mode. 🚧
          </span>
        </Banner>
      )}
      <h1 data-testid="h1App" className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </>
  );
}

export default App;
