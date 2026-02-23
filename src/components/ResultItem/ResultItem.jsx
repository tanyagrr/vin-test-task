import "./ResultItem.css";

function ResultItem({ item, index }) {
  return (
    <div key={index} className="result-item">
      <strong>{item.Variable}:</strong> {item.Value}
    </div>
  );
}

export default ResultItem;
