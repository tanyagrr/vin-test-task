const saveSearch = (vin, results, setRecentSearch) => {
  const recentSearches = JSON.parse(localStorage.getItem("recentSearches")) || [];
  const newSearch = { vin, results };

  // Remove any previous entry with the same VIN
  const filtered = recentSearches.filter((s) => String(s.vin) !== String(vin));
  // Prepend the new search and keep a maximum of 3 items
  const updatedSearches = [newSearch, ...filtered].slice(0, 3);
  localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
  if (typeof setRecentSearch === "function") {
    setRecentSearch(updatedSearches);
  }
  return updatedSearches;
};

export default saveSearch;