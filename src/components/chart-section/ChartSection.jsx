import { motion } from "framer-motion";
import LineChart from "../linechart/LineChart";

const ChartSection = ({ chartData }) => (
  <div className="mt-6 ml-80 absolute w-[1000px] col-span-3">
    <motion.div
      initial={{ opacity: 0, rotate: 180 }}
      animate={{ opacity: 1, rotate: 0 }}
      transition={{ duration: 1 }}
    >
      <LineChart data={chartData} />
    </motion.div>
  </div>
);

export default ChartSection;
