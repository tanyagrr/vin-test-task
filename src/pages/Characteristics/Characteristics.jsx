import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Characteristics.css";
import { CharacteristicsContext } from "../../context/CharacteristicsContext";

function Characteristics() {
  const { characteristics } = useContext(CharacteristicsContext);

  return (
    <div className="characteristics">
      <h1 className="characteristics-title">Vehicle Characteristics</h1>
      <ul>
        {characteristics
          .sort((a, b) => a.Name.localeCompare(b.Name))
          .map((char) => (
            <li key={char.ID}>
              <Link
                className="characteristics-link"
                to={`/variables/${String(char.ID)}`}
              >
                {char.Name}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Characteristics;
