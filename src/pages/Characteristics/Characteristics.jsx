import { useEffect, useState } from "react";
import fetchCharsDesc from "../../api/charsDesc";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import "./Characteristics.css";

function Characteristics() {
  const [characteristics, setCharacteristics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchCharsDesc()
      .then((data) => {
        if (data) {
          setCharacteristics(data);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <>
        <h1>Vehicle Characteristics</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginTop: 20,
            marginLeft: 12,
          }}
        >
          <ClipLoader />
        </div>
      </>
    );
  }

  return (
    <div className="characteristics">
      <h1>Vehicle Characteristics</h1>
      <ul>
        {characteristics
          .sort((a, b) => a.Name.localeCompare(b.Name))
          .map((char) => (
            <li key={char.ID}>
              <Link to={`/variables/${String(char.ID)}`}>{char.Name}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Characteristics;
