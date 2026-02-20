const fetchChars = async (vin) => {
  try {
    const response = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vin}?format=json`);
    const data = await response.json();
    return data.Results.slice(7).filter(item => item.Value != null && String(item.Value).trim() !== '');
    } catch (error) {
    console.error("Error fetching VIN data:", error);
    return null;
    }
};

export default fetchChars;
