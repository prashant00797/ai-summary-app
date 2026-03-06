import HeaderUI from "../ui/HeaderUI";
import { GeminiLogo, HeaderLogo } from "../utility/icons";
import SearchLayout from "./SearchLayout";
import SummaryLayout from "./SummaryLayout";
const isActivated = true;
const BaseLayout = () => {
  return (
    <div className="app-container">
      <div className="absolute top-0 right-1">
        <GeminiLogo className="w-15 md:w-30  h-auto" />
      </div>
      <HeaderUI />
      <SearchLayout />
      {isActivated && <SummaryLayout />}
    </div>
  );
};

export default BaseLayout;
