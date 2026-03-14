export const textResolver = (type, text) => {
  if (type === "length") {
    text = text.trim().split(/\s+/).length;
    return text;
  }
  return null;
};
