import Form from "../../components/Form/Form";
import Results from "../../components/Results/Results";
import RecentSearches from "../../components/RecentSearches/RecentSearches";
import "./Main.css";
import { useState } from "react";

function Main() {
  const [results, setResults] = useState([]);
  const [recentSearch, setRecentSearch] = useState([]);
  const [selectedVin, setSelectedVin] = useState("");

  return (
    <section className="main">
      <div className="info-section">
        <Form
          setResults={setResults}
          setRecentSearch={setRecentSearch}
          selectedVin={selectedVin}
        ></Form>
        <Results results={results}></Results>
      </div>
      <RecentSearches
        recentSearch={recentSearch}
        setResults={setResults}
        setRecentSearch={setRecentSearch}
        setSelectedVin={setSelectedVin}
      ></RecentSearches>
    </section>
  );
}

export default Main;
