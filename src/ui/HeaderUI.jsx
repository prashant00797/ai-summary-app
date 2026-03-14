import { headerComponentConstants } from "../constants/staticData";
import { HeaderLogo } from "../utility/icons";

const HeaderUI = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-5 md:mt-0 ">
      <div className="flex flex-row pr-5.25 md:pr-12 ">
        <HeaderLogo className="w-15 md:w-20  h-auto" />
        <div className="pt-1.5">
          <h1 className="text-text-primary whitespace-nowrap text-sm md:text-4xl font-semibold text-center  ">
            {headerComponentConstants.appName}
          </h1>
        </div>
      </div>
      <div className="text-text-secondary text-sm text-center md:whitespace-nowrap  md:text-2xl">
        <p>{headerComponentConstants.appDescription}</p>
      </div>
    </div>
  );
};

export default HeaderUI;
