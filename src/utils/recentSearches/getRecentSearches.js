const getRecentSearches = () => {
  const recentSearches = JSON.parse(localStorage.getItem("recentSearches")) || [];
  return recentSearches;
};

export default getRecentSearches;