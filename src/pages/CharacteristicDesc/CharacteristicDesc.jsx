import { Link, useParams } from "react-router-dom";
import "./CharacteristicDesc.css";
import { useContext } from "react";
import extractAndDecodeHtml from "../../utils/decodingDesc/extractAndDecodeHtml";
import { CharacteristicsContext } from "../../context/CharacteristicsContext";
import ClipLoader from "react-spinners/ClipLoader";

function CharacteristicDesc() {
  const { id } = useParams();
  const { characteristics, loading } = useContext(CharacteristicsContext);

  const charDesc =
    characteristics.find((c) => String(c.ID) === String(id)) || null;

  if (loading) {
    return (
      <div className="characteristics-desc">
        <Link to="/variables">Back to Characteristics</Link>
        <div className="loader">
          <ClipLoader size={40} />
        </div>
      </div>
    );
  }

  if (!charDesc) {
    return (
      <div className="characteristics-desc">
        <Link to="/variables">Back to Characteristics</Link>
        <p>Characteristic not found.</p>
      </div>
    );
  }

  return (
    <div className="characteristics-desc">
      <Link to="/variables">Back to Characteristics</Link>
      <h1>{charDesc.Name}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: extractAndDecodeHtml(charDesc.Description),
        }}
      />
    </div>
  );
}

export default CharacteristicDesc;
