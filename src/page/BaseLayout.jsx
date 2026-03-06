import HeaderUI from "../ui/HeaderUI";
import { GeminiLogo } from "../utility/icons";
import SearchLayout from "./SearchLayout";

const BaseLayout = () => {
  return (
    <div className="app-container">
      <div className="absolute top-0 right-1">
        <GeminiLogo className="w-15 md:w-30  h-auto" />
      </div>
      <HeaderUI />
      <SearchLayout />
    </div>
  );
};

export default BaseLayout;
