import "./App.css";
import Header from "./components/Header/Header";

import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Privacy from "./components/UI/Privacy";
import Home from "./components/UI/Home";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/home" element={<Home />} />

        <Route path="/privacy" element={<Privacy />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
