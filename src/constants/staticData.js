export const headerComponentConstants = {
  appName: "Insight AI",
  appDescription: "Transforming long texts into concise insights using AI",
};

export const textAreaLength = 5000;
export const selector = [
  {
    name: "mode",
    id: "mode",
    labelName: "Mode: ",
    options: [
      {
        optionName: "Summary",
        optionValue: "summary",
      },
      {
        optionName: "Key Insights",
        optionValue: "keyInsight",
      },
      {
        optionName: "Bullet Points",
        optionValue: "bullet",
      },
    ],
  },
  {
    name: "length",
    id: "length",
    labelName: "Length:",
    options: [
      {
        optionName: "Short",
        optionValue: "short",
      },
      {
        optionName: "Medium",
        optionValue: "medium",
      },
      {
        optionName: "Long",
        optionValue: "long",
      },
    ],
  },
];

export const btnLabelSummarize = "Summarize";
export const btnLabelReset = "Reset";
export const copyMessageSuccess = "✔️ Copied to clipboard";
export const copyMessageFailure = "❌ Failed to copy";
export const copyToClipboardLabel = "📕Copy Summary";
export const summaryLabel = "Summary";
export const keyPointsLabel = "Key Points";
export const keywordLabel = "Keywords";
export const summaryHeaderLabel = "Summary results";
