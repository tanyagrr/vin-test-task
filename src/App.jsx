import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout/Layout";
import Characteristics from "./pages/Characteristics/Characteristics";
import Main from "./pages/Main/Main";
import CharacteristicDesc from "./pages/CharacteristicDesc/CharacteristicDesc";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/variables/" element={<Characteristics />} />
            <Route path="/variables/:id" element={<CharacteristicDesc />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
