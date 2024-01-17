/** @format */

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "jquery/dist/jquery.js";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Footer />
          </>
        }
      />
      <Route
        path="/order"
        element={
          <>
            <Navbar />
            <Footer />
          </>
        }
      />
    </Routes>
  );
}

export default App;
