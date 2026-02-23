import { useState } from "react";
import "./Results.css";
import ResultItem from "../ResultItem/ResultItem";

function Results({ results }) {
  const [showAll, setShowAll] = useState(false);
  const handleClick = () => {
    setShowAll(!showAll);
  };

  if (results === null) return null;

  if (results.length === 0) {
    return (
      <h4 className="no-results">
        Couldn't find any results for the provided VIN.
      </h4>
    );
  }

  return (
    <>
      {results?.length > 0 && (
        <div className="results">
          {showAll
            ? results.map((item, index) => (
                <ResultItem key={index} item={item} />
              ))
            : results
                .slice(0, 8)
                .map((item, index) => <ResultItem key={index} item={item} />)}
        </div>
      )}
      {results?.length > 0 && (
        <button className="info-loader" onClick={handleClick}>
          {!showAll ? "Load more info" : "Hide"}
        </button>
      )}
    </>
  );
}

export default Results;
