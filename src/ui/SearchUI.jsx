const SearchUI = ({
  handleReset,
  handleSummaryGeneration,
  onChange,
  inputDataForSummary,
  isLoading,
  charCount,
  wordCount,
}) => {
  return (
    <div className="flex flex-col">
      <div id="textarea-wrapper" className="mb-5">
        <div className="relative">
          <textarea
            name="text"
            id="text"
            className="textarea h-45 [scrollbar-width:none]  "
            value={inputDataForSummary.text}
            maxLength={5000}
            onChange={(e) => onChange(e)}
          ></textarea>
          <div className="absolute -bottom-4 right-0">
            <span className="text-xs md:text-sm text-text-secondary z-10">{`Word count : ${wordCount} | Char count : ${charCount}/5000`}</span>
          </div>
        </div>
      </div>

      <div
        id="selector-cum-button-wrapper"
        className="flex items-center justify-between flex-wrap  gap-2 mt-0 md:mt-2"
      >
        <div className="flex flex-col  md:items-center gap-1  md:flex-row md:mr-10">
          <label htmlFor="mode" className="pl-1 md:pl-0 text-xs md:text-[16px]">
            Mode:
          </label>
          <select
            name="mode"
            id="mode"
            value={inputDataForSummary.mode}
            className="select-input "
            onChange={(e) => onChange(e)}
          >
            <option value="summary">Summary</option>
            <option value="keyInsight">Key Insights</option>
            <option value="bullet">Bullet Points</option>
          </select>
        </div>
        <div className="flex flex-col  md:items-center gap-1 md:flex-row">
          <label
            htmlFor="length"
            className="pl-1 md:pl-0 text-xs md:text-[16px]"
          >
            Length:
          </label>
          <select
            name="length"
            id="length"
            value={inputDataForSummary.length}
            className="select-input "
            onChange={(e) => onChange(e)}
          >
            <option value="short">Short</option>
            <option value="medium">Medium</option>
            <option value="long">Long</option>
          </select>
        </div>
        <div className="ml-auto mt-3.5 md:mt-0" id="main-button">
          <button
            disabled={inputDataForSummary.text.trim() === "" || isLoading}
            className="primary-btn disabled:cursor-not-allowed disabled:bg-gray-400 disabled:border-gray-400"
            onClick={(e) => handleSummaryGeneration(e)}
          >
            Summarize
          </button>
          <button
            disabled={inputDataForSummary.text.trim() === "" || isLoading}
            className="ml-2 primary-btn bg-red-500 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:border-gray-400"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchUI;
