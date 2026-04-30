export const openaiRequest = async ({ length, mode, text }) => {
  const response = await fetch("/.netlify/functions/summarize", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ length, mode, text }),
  });
 
  if (!response.ok) {
    throw new Error("Request failed");
  }

  const data = await response.json();
  return data;
};
