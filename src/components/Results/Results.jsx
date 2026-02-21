import { useState } from "react";
import "./Results.css";

function Results({ results }) {
  const [showAll, setShowAll] = useState(false);
  const handleClick = () => {
    setShowAll(!showAll);
  };

  if (!results || results.length === 0) {
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
                <div key={index} className="result-item">
                  <strong>{item.Variable}:</strong> {item.Value}
                </div>
              ))
            : results.slice(0, 8).map((item, index) => (
                <div key={index} className="result-item">
                  <strong>{item.Variable}:</strong> {item.Value}
                </div>
              ))}
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
