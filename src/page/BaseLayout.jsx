import { useState } from "react";
import Footer from "../ui/Footer";
import HeaderUI from "../ui/HeaderUI";
import { GeminiLogo } from "../utility/icons";
import SearchLayout from "./SearchLayout";
import Overlay from "../generic/Overlay";

const BaseLayout = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <div className="min-h-screen flex flex-col">
      <div className="app-container">
        <div
          className="absolute top-0 right-1"
          onMouseEnter={() => setShowOverlay(true)}
          onMouseLeave={() => setShowOverlay(false)}
          onClick={() => setShowOverlay(true)}
        >
          <GeminiLogo className="w-15 md:w-30 h-auto animate-pulse cursor-pointer" />
          {showOverlay && <Overlay onClose={() => setShowOverlay(false)} />}
        </div>
        <HeaderUI />
        <SearchLayout />
      </div>
      <Footer />
    </div>
  );
};

export default BaseLayout;
