import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IoEyeSharp } from "react-icons/io5";
import { useCoinContext } from "../useContext/UseContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CoinListDisplay = ({ coins, searchTerm, currency, onToggleCoin }) => {
  const { selectedCoins, toggleCoin } = useCoinContext();

  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleIconClick = (coin) => {
    const isSelected = selectedCoins.some((c) => c.id === coin.id);

    if (isSelected) {
      toast.info("Coin is Added");
    } else {
      toast.success("Coin is Deleted");
    }

    onToggleCoin(coin);
  };

  return (
    <>
      <ToastContainer />
      <ul className="list-none p-0 m-0">
        {filteredCoins.map((coin) => (
          <li
            className="flex flex-col sm:flex-row items-center border-b h-auto sm:h-24 mb-4 px-2 py-4"
            key={coin.id}
          >
            <motion.div
              initial={{ opacity: 0, rotate: 180 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 1 }}
            >
              <Link to={`/single/${coin.id}`}>
                <img
                  src={coin.image}
                  alt={coin.name}
                  className="w-12 h-12 mr-4 transition-transform transform hover:scale-110"
                />
              </Link>
            </motion.div>
            <div className="flex flex-col sm:flex-row justify-between w-full">
              <div className="flex-1 mb-2 sm:mb-0">
                <Link to={`/single/${coin.id}`}>
                  <p className="text-xl sm:text-2xl">
                    {coin.symbol.toUpperCase()}
                  </p>
                  <p className="text-sm text-gray-300">{coin.name}</p>
                </Link>
              </div>
              <div className="flex items-center mb-2 sm:mb-0 w-full sm:w-1/4 text-center">
                <p>
                  {currency === "USD"
                    ? `$${coin.current_price.toFixed(2)}`
                    : currency === "AED"
                    ? `AED ${coin.current_price.toFixed(2)}`
                    : `${coin.current_price.toFixed(2)} EUR`}
                </p>
              </div>
              <p
                className={`flex items-center mb-2 sm:mb-0 w-full sm:w-1/4 text-center ${
                  coin.price_change_percentage_24h >= 0
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                <IoEyeSharp
                  className={`h-5 w-5 mr-2 cursor-pointer ${
                    selectedCoins.some((c) => c.id === coin.id)
                      ? "text-green-500"
                      : "text-white"
                  }`}
                  aria-hidden="true"
                  onClick={() => handleIconClick(coin)}
                />
                {coin.price_change_percentage_24h.toFixed(2)}%
              </p>
              <div className="w-full sm:w-1/4 text-center">
                <p>{coin.market_cap}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CoinListDisplay;
