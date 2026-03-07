import SearchUI from "../ui/SearchUI";
import SummaryUI from "../ui/SummaryUI";
import { useState } from "react";
import { IsLoadingCard, ErrorCard, NoData } from "../generic/ErrorBoundary";
import { geminiRequest } from "../service/aiService";

const SearchLayout = () => {
  //loading and fetching states
  const [isLoading, setIsLoading] = useState(false);
  const [hasFetched, sethasFetched] = useState(false);

  //reset everything
  const [reset, setReset] = useState(false);

  //error state controller
  const [error, setError] = useState("");

  // on change state handler
  const [inputDataForSummary, setInputDataForSummary] = useState({
    text: "",
    mode: "keyInsight",
    length: "medium",
  });

  //final summary result
  const [result, setResult] = useState({});

  //states required to show copied status for a time frame and one to handle copy error just incase any browser doesnt support copy to clipboard
  const [copied, setCopied] = useState(false);
  const [copyingError, setCopyingError] = useState(false);

  //onChange handle to fetch the value changes in the text area and two select boxes - text, mode, length respectively
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputDataForSummary((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //fn to submit request to ai and fetch response
  const handleSummaryGeneration = async () => {
    //guard check to keep word count above 100
    if (inputDataForSummary.text.trim().split(/\s+/).length < 100) {
      setError("Text too short to summarize. Please enter at least 100 words.");
      return;
    }
    try {
      setIsLoading(true);
      setError("");
      setReset(false);

      //Ai call
      const aiResponse = await geminiRequest(inputDataForSummary);

      setResult(aiResponse);
    } catch {
      setError(
        "Oops! Something went wrong while generating the summary. Please try again later",
      );
    } finally {
      setIsLoading(false);
      sethasFetched(true);
    }
  };

  //reset handler
  const handleReset = (e) => {
    e.preventDefault();
    setReset(true);
    setInputDataForSummary({
      text: "",
      mode: "keyInsight",
      length: "medium",
    });
    setResult({});
    setError("");
    sethasFetched(false);
  };

  //copy to clipboard handler
  const handleCopySummary = async (e) => {
    e.preventDefault();
    try {
      let copied = "";
      if (inputDataForSummary?.mode === "summary") {
        copied = `Summary : ${result?.summary}`;
      } else if (inputDataForSummary?.mode === "keyInsight") {
        copied = `Summary: ${result?.summary} ${"\n"}${"\n"} Key Points: ${result?.key_points.map((key, idx) => `${idx + 1}.${key}`).join(" ")} ${"\n"}${"\n"} Keywords: ${result?.keywords.map((key) => key)}`;
      } else if (inputDataForSummary?.mode === "bullet") {
        copied = `KeyPoints: ${result?.key_points.map((key, idx) => `${idx + 1}.${key}`).join(" ")}`;
      }

      await navigator.clipboard.writeText(copied);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopyingError(true);
    }
  };

  //word and character counter variables
  const text = inputDataForSummary.text;
  const charCount = text.length;
  const wordCount = text.trim() !== "" ? text.split(/\s+/).length : 0;

  return (
    <div className="card mt-10">
      <SearchUI
        handleSummaryGeneration={handleSummaryGeneration}
        onChange={onChange}
        inputDataForSummary={inputDataForSummary}
        handleReset={handleReset}
        isLoading={isLoading}
        charCount={charCount}
        wordCount={wordCount}
      />
      {isLoading ? (
        <IsLoadingCard />
      ) : error ? (
        <ErrorCard error={error} />
      ) : hasFetched && Object.keys(result).length === 0 ? (
        <NoData />
      ) : (
        hasFetched &&
        !reset && (
          <SummaryUI
            data={result}
            handleCopySummary={handleCopySummary}
            copied={copied}
            copyingError={copyingError}
          />
        )
      )}
    </div>
  );
};

export default SearchLayout;
