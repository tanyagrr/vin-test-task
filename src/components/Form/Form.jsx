import { Formik, Form, Field, ErrorMessage } from "formik";
import fetchChars from "../../api/chars";
import "./Form.css";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import saveSearch from "../../utils/recentSearches/saveSearch";

function VinForm({ setResults, setRecentSearch, selectedVin }) {
  const [loading, setLoading] = useState(false);

  const validate = (values) => {
    const errors = {};
    if (!values.vin) {
      errors.vin = "This field is required";
    } else if (values.vin.length < 17) {
      errors.vin = "Should be at least 17 characters";
    }
    return errors;
  };

  const handleSubmit = (values) => {
    setLoading(true);
    fetchChars(values.vin)
      .then((data) => {
        if (data) {
          setResults(data);
          saveSearch(values.vin, data, setRecentSearch);
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
        {loading && (
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginBottom: 12,
            }}
          >
            <ClipLoader size={20} />
          </div>
        )}

        <div>
          <label htmlFor="vin">Vin:</label>
          <Field type="text" placeholder="Enter VIN" id="vin" name="vin" />
          <ErrorMessage name="vin" component="div" />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Decoding…" : "Decode"}
        </button>
      </Form>
    </Formik>
  );
}

export default VinForm;
