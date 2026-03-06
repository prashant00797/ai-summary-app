import SearchUI from "../ui/SearchUI";
import { aiSummary } from "../mock/data";
import SummaryUI from "../ui/SummaryUI";
import { useState } from "react";
import { IsLoadingCard, ServiceFailure } from "../generic/ErrorBoundary";
// import { geminiRequest } from "../service/aiService";

const SearchLayout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [reset, setReset] = useState(false);
  const [error, setError] = useState(false);
  const [inputDataForSummary, setInputDataForSummary] = useState({
    text: "",
    mode: "keyInsight",
    length: "medium",
  });
  const [result, setResult] = useState({});
  const [copied, setCopied] = useState(false);
  const [copyingError, setCopyingError] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputDataForSummary((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSummaryGeneration = async () => {
    try {
      setIsLoading(true);
      // const aiResponse = await geminiRequest(inputDataForSummary);
      // console.log("API response:", aiResponse);
      setResult(aiSummary);
    } catch {
      setError(true);
    } finally {
      setIsLoading(false);
      setIsFetching(true);
    }
  };

  const handleReset = (e) => {
    e.preventDefault;
    setReset(true);
    setInputDataForSummary({
      text: "",
      mode: "keyInsight",
      length: "medium",
    });
    setResult({});
  };

  const handleCopySummary = async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(result.summary);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopyingError(true);
    }
  };

  return (
    <div className="card mt-10">
      <SearchUI
        handleSummaryGeneration={handleSummaryGeneration}
        onChange={onChange}
        inputDataForSummary={inputDataForSummary}
        handleReset={handleReset}
        isLoading={isLoading}
      />
      {isLoading ? (
        <IsLoadingCard />
      ) : error ? (
        <ServiceFailure />
      ) : (
        isFetching &&
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
