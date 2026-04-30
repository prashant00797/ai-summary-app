import Footer from "../ui/Footer";
import HeaderUI from "../ui/HeaderUI";
import SearchLayout from "./SearchLayout";
import Overlay from "../generic/Overlay";

const BaseLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="app-container">
        <HeaderUI />
        <SearchLayout />
      </div>
      <Footer />
    </div>
  );
};

export default BaseLayout;
