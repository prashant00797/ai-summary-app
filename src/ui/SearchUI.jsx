const SearchUI = () => {
  return (
    <div className="flex flex-col">
      <div id="textarea-wrapper" className="relative">
        <textarea
          name="rawText"
          id="rawText"
          className="textarea h-45 [scrollbar-width:none] pr-15"
          maxLength={5000}
        ></textarea>
        <div className="absolute bottom-2 right-2  ">
          <span className="text-text-secondary z-10">0/1000</span>
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
          <select name="mode" id="mode" className="select-input ">
            <option value="summary">Summary</option>
            <option value="keyInsight" selected>
              Key Insights
            </option>
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
          <select name="length" id="length" className="select-input ">
            <option value="short">Short</option>
            <option value="medium" selected>
              Medium
            </option>
            <option value="long">Long</option>
          </select>
        </div>
        <div className="ml-auto mt-3.5 md:mt-0" id="main-button">
          <button className="primary-btn">Summarize</button>
        </div>
      </div>
    </div>
  );
};

export default SearchUI;
