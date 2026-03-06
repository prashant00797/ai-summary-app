const SummaryUI = ({ data, handleCopySummary, copied, copyingError }) => {
  return (
    <div className="card p-0 mt-10">
      {/* header */}
      <div className=" bg-gray-100 px-6 py-4 border-b border-gray-300">
        <h2 className="text-text-primary font-semibold">Summary results</h2>
      </div>

      {/* body */}
      <div className="p-6 space-y-1">
        {data?.summary && (
          <div className="mb-8">
            <h3 className="text-text-primary font-semibold border-b border-gray-500 mb-2">
              Summary
            </h3>
            <p>{data.summary}</p>
          </div>
        )}
        {data?.key_points && (
          <div className="mb-8">
            <h3 className="text-text-primary font-semibold border-b border-gray-500 mb-2">
              Key Points
            </h3>
            {data.key_points.map((point, idx) => {
              return (
                <ul key={idx} className="list-disc list-inside">
                  <li>{point}</li>
                </ul>
              );
            })}
          </div>
        )}
        {data?.keywords && (
          <div className="mb-4">
            <h3 className="text-text-primary font-semibold border-b border-gray-500 mb-2">
              Keywords
            </h3>
            <div className="flex items-center flex-wrap">
              {data.keywords.map((keyword, idx) => {
                return (
                  <div key={idx} className="inline-block mr-2 mb-2">
                    <span className="tag">{keyword}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        <div className="flex flex-row-reverse relative">
          <button
            onClick={handleCopySummary}
            disabled={copied}
            className="shadow-card bg-primary
               p-2 lg:cursor-pointer transition  rounded-md hover:text-white  hover:brightness-110 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-700"
          >
            📕Copy Summary
          </button>
          {copied && (
            <span className="text-green-500 absolute text-[9px] -bottom-4">
              {!copyingError ? "✔️ Copied to clipboard" : "❌ Failed to copy"}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default SummaryUI;
