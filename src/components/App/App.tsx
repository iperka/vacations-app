import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "../../pages/NotFoundPage";
import Layout from "../Layout";

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 transition-all">
      <Routes>
        <Route path="/dashboard" element={<Layout children={<Home />} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

export default App;
