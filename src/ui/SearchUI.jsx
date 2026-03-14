import {
  btnLabelReset,
  btnLabelSummarize,
  selector,
  textAreaLength,
} from "../constants/staticData";

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
            maxLength={textAreaLength}
            onChange={(e) => onChange(e)}
          ></textarea>
          <div className="absolute -bottom-4 right-0">
            <span className="text-xs md:text-sm text-text-secondary z-10">{`Word count : ${wordCount} | Char count : ${charCount}/${textAreaLength}`}</span>
          </div>
        </div>
      </div>

      <div
        id="selector-cum-button-wrapper"
        className="flex items-center justify-between flex-wrap  gap-2 mt-0 md:mt-2"
      >
        {selector.map((select) => {
          return (
            <div
              key={select.id}
              className="flex flex-col  md:items-center gap-1  md:flex-row md:mr-10"
            >
              <label
                htmlFor={select.id}
                className="pl-1 md:pl-0 text-xs md:text-[16px]"
              >
                {select.labelName}
              </label>
              <select
                name={select.name}
                id={select.id}
                value={inputDataForSummary[select.name]}
                className="select-input "
                onChange={(e) => onChange(e)}
              >
                {select.options.map((option) => {
                  return (
                    <option key={option.optionName} value={option.optionValue}>
                      {option.optionName}
                    </option>
                  );
                })}
              </select>
            </div>
          );
        })}
        <div className="ml-auto mt-3.5 md:mt-0" id="main-button">
          <button
            disabled={inputDataForSummary.text.trim() === "" || isLoading}
            className="primary-btn disabled:cursor-not-allowed disabled:bg-gray-400 disabled:border-gray-400"
            onClick={(e) => handleSummaryGeneration(e)}
          >
            {btnLabelSummarize}
          </button>
          <button
            disabled={inputDataForSummary.text.trim() === "" || isLoading}
            className="ml-2 primary-btn bg-red-500 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:border-gray-400"
            onClick={handleReset}
          >
            {btnLabelReset}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchUI;
