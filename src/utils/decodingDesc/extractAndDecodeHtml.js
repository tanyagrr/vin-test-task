function extractAndDecodeHtml(input) {
  if (input == null) return "";
  const asString = String(input);
  if (asString.includes("\\u")) {
    return asString.replace(/\\u([0-9a-fA-F]{4})/g, (_, hex) =>
      String.fromCharCode(parseInt(hex, 16)),
    );
  }
  return asString;
}

export default extractAndDecodeHtml;