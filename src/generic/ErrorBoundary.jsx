export const IsLoadingCard = () => {
  return (
    <div className=" mt-10 card animate-pulse text-text-primary">
      ...generating summary... please wait...
    </div>
  );
};

export const ErrorCard = ({ error }) => {
  return <div className=" mt-10 card text-red-500">{error}</div>;
};

export const NoData = () => {
  return (
    <div className="card text-red-500">
      Oops AI responsed with empty data try again
    </div>
  );
};
