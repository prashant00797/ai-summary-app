import { apiWarning } from "../constants/staticData";

const Overlay = ({ onClose }) => {
  return (
    <div className="absolute shadow-card text-xs w-64 flex flex-col gap-4 z-50 p-2 rounded-card right-10 bg-secondary md:w-[320px] ">
      <button
        onClick={(e) => {
          (e.stopPropagation(), onClose());
        }}
        className="block lg:hidden self-end text-primary"
      >
        X
      </button>
      <h3 className="text-text-primary text-center">{apiWarning.title}</h3>
      <p className="text-text-secondary">{apiWarning.descp}</p>
    </div>
  );
};

export default Overlay;
