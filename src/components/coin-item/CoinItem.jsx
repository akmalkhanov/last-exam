import React from "react";
import { motion } from "framer-motion";
import { useCurrencyContext } from "../currency/CurrencyContext";
import { Link } from "react-router-dom";

const CoinItem = ({ coin }) => {
  const { currency } = useCurrencyContext();

  return (
    <div className="flex xl:-ml-24 flex-col items-center text-white p-2 bg-opacity-60 rounded-lg mx-2 mb-4">
      <motion.div
        initial={{ opacity: 0, rotate: 180 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 1 }}
      >
        <Link to={`/single/${coin.id}`}>
          <img
            className="object-cover xl:ml-24 xl:mt-16 rounded-full w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32"
            src={coin.image}
            alt={`Coin ${coin.symbol}`}
          />
        </Link>
      </motion.div>
      <div className="flex flex-col xl:ml-24 items-center mt-2 text-sm sm:text-base xl:text-lg">
        <p className="font-semibold">{coin.symbol.toUpperCase()}</p>
        <span
          className={`${
            coin.price_change_percentage_24h > 0
              ? "text-green-500"
              : "text-red-500"
          }`}
        >
          {coin.price_change_percentage_24h?.toFixed(2)}%
        </span>
      </div>
    </div>
  );
};

export default CoinItem;
