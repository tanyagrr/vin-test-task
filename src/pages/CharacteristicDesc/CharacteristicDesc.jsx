import { Link, useParams } from "react-router-dom";
import "./CharacteristicDesc.css";
import fetchCharsDesc from "../../api/charsDesc";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import extractAndDecodeHtml from "../../utils/decodingDesc/extractAndDecodeHtml";

function CharacteristicDesc() {
  const { id } = useParams();
  const [charDesc, setCharDesc] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchCharsDesc()
      .then((data) => {
        if (data) {
          const char = data.find((c) => String(c.ID) === String(id));
          setCharDesc(char || null);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="characteristics-desc">
        <Link to="/variables">Back to Characteristics</Link>
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
