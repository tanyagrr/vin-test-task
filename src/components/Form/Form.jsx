import { Formik, Form, Field, ErrorMessage } from "formik";
import fetchChars from "../../api/chars";
import "./Form.css";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import saveSearch from "../../utils/recentSearches/saveSearch";
import validate from "../../utils/validateVin/validateVin";

function VinForm({ setResults, setRecentSearch, selectedVin }) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (values) => {
    const vin = String(values.vin || "")
      .trim()
      .toUpperCase();
    setLoading(true);
    setResults(null);
    fetchChars(vin)
      .then((data) => {
        if (Array.isArray(data)) {
          setResults(data);
          saveSearch(vin, data, setRecentSearch);
        } else {
          setResults([]);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  return (
    <Formik
      enableReinitialize
      initialValues={{
        vin: selectedVin || "",
      }}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
      validate={validate}
    >
      <Form className="form">
        <div className="form-inp-but">
          <div>
            <label htmlFor="vin">Vin: </label>
            <Field type="text" placeholder="Enter VIN" id="vin" name="vin" />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Decoding…" : "Decode"}
          </button>
        </div>
        <ErrorMessage className="error" name="vin" component="div" />
        {loading && (
          <div className="loader">
            <ClipLoader size={40} />
          </div>
        )}
      </Form>
    </Formik>
  );
}

export default VinForm;
