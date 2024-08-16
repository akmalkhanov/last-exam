import { motion } from "framer-motion";

const CoinDetail = ({ coin }) => (
  <div className="border-r w-[400px] h-[700px] flex flex-col items-center justify-center">
    <motion.div
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.svg
        className="ml-24 bg-transparent"
        fill="transparent"
        viewBox="0 0 800 800"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="253"
          cy="253"
          r="250"
          stroke="#87ceeb"
          strokeWidth="4"
          strokeLinejoin="round"
          strokeLinecap="round"
          initial={{ strokeDasharray: "24 10 0 0" }}
          animate={{
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate: [120, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.svg>
      <img
        src={coin?.image?.large}
        alt={`${coin?.name} logo`}
        className="w-28 h-28 xl:ml-[135px] ml-[135px] object-cover absolute -mt-[260px] rounded"
      />
      <div>
        <h1 className="text-3xl text-center -mt-20 font-bold mb-2">
          {coin?.name}
        </h1>
        <p className="text-sm text-gray-500">
          {coin?.description?.en?.split(".")[0]}
        </p>
        <h1 className="text-2xl py-2 font-bold">
          Rank: {coin?.market_cap_rank}
        </h1>
        <h2 className="text-2xl py-2 font-bold">
          Current Price: {coin?.market_data?.current_price?.usd}
        </h2>
        <h3 className="text-2xl py-2 font-bold">
          Market Cap: {coin?.market_data?.market_cap?.usd}
        </h3>
      </div>
    </motion.div>
  </div>
);

export default CoinDetail;
