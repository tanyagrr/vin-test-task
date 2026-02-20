const fetchCharsDesc = async () => {
  try {
    const response = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/getvehiclevariablelist?format=json`);
    const data = await response.json();
    return data.Results;
    } catch (error) {
    console.error("Error fetching car characteristics data:", error);
    return null;
    }
};

export default fetchCharsDesc;
