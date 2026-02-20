import { useEffect, useState } from "react";
import getRecentSearches from "../../utils/recentSearches/getRecentSearches";
import clearRecentSearches from "../../utils/recentSearches/clearRecentSearches";
import "./RecentSearches.css";

function RecentSearches({
  recentSearch,
  setResults,
  setRecentSearch,
  setSelectedVin,
}) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (recentSearch && recentSearch.length) {
      setItems(recentSearch);
    } else {
      setItems(getRecentSearches());
    }
  }, [recentSearch]);

  const handleClick = (entry) => {
    if (setResults) setResults(entry.results);
    if (setSelectedVin) setSelectedVin(entry.vin);
  };

  const handleClear = () => {
    if (setRecentSearch) {
      clearRecentSearches(setRecentSearch);
      setItems([]);
    } else {
      localStorage.removeItem("recentSearches");
      setItems([]);
    }
  };

  return (
    <aside className="recent-column">
      <h3>Recent Searches</h3>
      {items.length === 0 ? (
        <p>No recent searches</p>
      ) : (
        <>
          <ul>
            {items.map((s, idx) => (
              <li key={s.vin + idx}>
                <button
                  className="recent-search-button"
                  type="button"
                  onClick={() => handleClick(s)}
                >
                  {s.vin}
                </button>
              </li>
            ))}
          </ul>
          <button className="clear-button" type="button" onClick={handleClear}>
            Clear
          </button>
        </>
      )}
    </aside>
  );
}

export default RecentSearches;
