import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout/Layout";
import Characteristics from "./pages/Characteristics/Characteristics";
import Main from "./pages/Main/Main";
import CharacteristicDesc from "./pages/CharacteristicDesc/CharacteristicDesc";
import { CharacteristicsProvider } from "./context/CharacteristicsContext";
import NotFound from "./pages/NotFound/NotFound";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

function App() {
  return (
    <>
      <ErrorBoundary>
        <BrowserRouter>
          <CharacteristicsProvider>
            <Layout>
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/variables/" element={<Characteristics />} />
                <Route path="/variables/:id" element={<CharacteristicDesc />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </CharacteristicsProvider>
        </BrowserRouter>
      </ErrorBoundary>
    </>
  );
}

export default App;
