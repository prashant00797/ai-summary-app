import { aiSummary } from "../mock/data";
import SummaryUI from "../ui/SummaryUI";

const SummaryLayout = () => {
  return (
    <div className="card p-0 mt-10">
      <SummaryUI data={aiSummary} />
    </div>
  );
};

export default SummaryLayout;
