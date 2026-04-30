/* eslint-disable no-undef */
export const handler = async (event) => {
  const { length, mode, text } = JSON.parse(event.body);

  const prompt = `You are an AI text summarization assistant.

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
- Ensure the summary and key points reflect the main topics from the entire text, not just the beginning
- If mode = summary → fill only "summary"
- If mode = bullet → fill only "key_points"
- If mode = keyInsight → fill all fields
- key_points should contain 4–7 concise bullet points
- keywords should contain 4–6 important keywords
- keywords should be single words or short phrases
- Do not include explanations or markdown
- Return valid JSON only

Mode: ${mode}
Length: ${length}

Text:
${text}`;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY?.trim()}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0,
      response_format: { type: "json_object" },
    }),
  });

  const data = await response.json();

  const result = data.choices?.[0]?.message?.content;

  if (!result) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed", details: data }),
    };
  }

  return {
    statusCode: 200,
    body: result,
  };
};
