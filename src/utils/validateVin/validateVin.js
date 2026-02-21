export default function validateVin(values) {
  const errors = {};
  const vin = String(values.vin || "").trim();

  if (!vin) {
    errors.vin = "This field is required.";
  } else {
    const vinRegex = /^[A-HJ-NPR-Z0-9]{17}$/;
    if (!vinRegex.test(vin.toUpperCase())) {
      errors.vin =
        "Invalid VIN format. VIN must only include upper-case letters and numbers and be at least 17 characters.";
    }
  }

  return errors;
};