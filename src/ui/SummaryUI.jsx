const SummaryUI = ({ data }) => {
  return (
    <>
      {/* header */}
      <div className=" bg-gray-100 px-6 py-4 border-b border-gray-300">
        <h2 className="text-text-primary font-semibold">Summary results</h2>
      </div>

      {/* body */}
      <div className="p-6 space-y-1">
        <div className="mb-8">
          <h3 className="text-text-primary font-semibold border-b border-gray-500 mb-2">
            Summary
          </h3>
          <p>{data.summary}</p>
        </div>
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
        <div className="flex flex-row-reverse">
          <button
            className="shadow-card bg-gray-100
               p-2 lg:cursor-pointer transition hover:bg-primary-hover rounded-md hover:text-white  hover:brightness-110"
          >
            📕Copy Summary
          </button>
        </div>
      </div>
    </>
  );
};

export default SummaryUI;
