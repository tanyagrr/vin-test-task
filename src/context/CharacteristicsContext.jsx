import { createContext, useEffect, useState } from "react";
import fetchCharsDesc from "../api/charsDesc";

export const CharacteristicsContext = createContext();

export function CharacteristicsProvider({ children }) {
  const [characteristics, setCharacteristics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchCharsDesc()
      .then((data) => {
        setCharacteristics(data || []);
        setError(null);
      })
      .catch((err) => {
        console.error("Error fetching characteristics:", err);
        setError(err);
        setCharacteristics([]);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <CharacteristicsContext.Provider
      value={{ characteristics, loading, error }}
    >
      {children}
    </CharacteristicsContext.Provider>
  );
}
