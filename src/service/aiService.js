import { GEMINI_KEY, GEMINI_URL } from "../constants/url";

export const geminiRequest = async ({ length, mode, text }) => {
  console.log(length, "length");
  console.log(mode, "mode");
  console.log(text, "text");
  const response = await fetch(`${GEMINI_URL}${GEMINI_KEY}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [
        {
          parts: [
            {
              text: `You are an AI text summarization assistant.

Your task is to analyze the provided text and generate a summary based on the selected mode and length.

Mode determines the structure of the output:
- summary → return only a summary paragraph
- keyInsight → return summary, key_points, and keywords
- bullet → return only key_points

Length determines how detailed the summary should be:
- short → very concise
- medium → balanced explanation
- long → more detailed explanation

Return the response strictly in valid JSON using this structure:

{
  "summary": "",
  "key_points": [],
  "keywords": []
}

Rules:
- If mode = summary → fill only "summary"
- If mode = bullet → fill only "key_points"
- If mode = keyInsight → fill all fields
- key_points should contain 3–6 concise bullet points
- keywords should contain 3–6 important keywords
- keywords should be single words or short phrases
- Do not include explanations or markdown
- Return valid JSON only

Mode: ${mode}
Length: ${length}

Text:
${text}`,
            },
          ],
        },
      ],
      generationConfig: {
        temperature: 0,
      },
    }),
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error("Gemini API request failed");
  }

  const originalText = data.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!originalText) {
    throw new Error("Invalid Gemini response");
  }

  const cleanedResponse = originalText.replace(/```json|```/g, "").trim();

  return JSON.parse(cleanedResponse);
};
