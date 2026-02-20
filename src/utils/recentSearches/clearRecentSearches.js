const clearRecentSearches = (setRecentSearch) => {
  localStorage.removeItem("recentSearches");
  setRecentSearch([]);
};

export default clearRecentSearches;