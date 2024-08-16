import { useState, useEffect } from "react";
import { useCoinContext } from "../useContext/UseContext";
import { useCurrencyContext } from "../currency/CurrencyContext";
import { Link } from "react-router-dom";
import CurrencySelector from "../select/CurrencySelector";
import WatchListDrawer from "../watch-list/WatchListDrawer";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [coinAdd, setCoinAdd] = useState([]);
  const { selectedCoins, setSelectedCoins } = useCoinContext();
  const { currency, setCurrency } = useCurrencyContext();

  const handleScroll = () => {
    setIsSticky(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClose = () => setIsOpen(false);

  return (
    <nav
      className={`sticky top-0 z-50 h-20 flex items-center justify-around px-6 transition-all duration-300 ${
        isSticky
          ? "bg-gray-800 shadow-lg rounded-b-xl"
          : "bg-black shadow-none "
      }`}
    >
      <div>
        <Link to="/">
          <h2 className="text-primary text-xl font-bold hover:shadow-custom-hover transition-shadow duration-300">
            CRYPTOFOLIO
          </h2>
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <CurrencySelector currency={currency} setCurrency={setCurrency} />
        <button
          className="bg-primary hover:bg-primary text-white px-4 text-sm py-4 font-bold xl:px-6 xl:py-3 rounded-md transition-transform transform hover:scale-105"
          onClick={() => setIsOpen(true)}
        >
          WATCH LIST
        </button>
        <WatchListDrawer
          isOpen={isOpen}
          handleClose={handleClose}
          selectedCoins={selectedCoins}
          setSelectedCoins={setSelectedCoins}
          currency={currency}
        />
      </div>
    </nav>
  );
};

export default Navbar;
