export const IsLoadingCard = () => {
  return (
    <div className=" mt-10 card animate-pulse text-text-primary">
      ...generating summary... please wait...
    </div>
  );
};

export const ServiceFailure = () => {
  return (
    <div className=" mt-10 card text-red-500">
      Oops! Something went wrong while generating the summary. Please try again
      later.
    </div>
  );
};
