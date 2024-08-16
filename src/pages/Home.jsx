import { useState, useEffect } from "react";
import { useCoinContext } from "../components/useContext/UseContext";
import { useCurrencyContext } from "../components/currency/CurrencyContext";
import axios from "axios";
import Header from "../components/header/Header";
import Pagination from "../components/pagination/Pagination";
import SearchInput from "../components/search-input/SearchInput";
import CoinListDisplay from "../components/coin-list/CoinListDisplay";
import ProductNames from "../components/coin-names/ProductNames";
import "./App.css";

const Home = () => {
  const { toggleCoin } = useCoinContext();
  const { currency } = useCurrencyContext();
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=${itemsPerPage}&page=${currentPage}&sparkline=false&price_change_percentage=24h`
        );
        setCoins(response.data);
        setTotalPages(10);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCoins();
  }, [currentPage, currency]);

  if (loading)
    return (
      <div className="loading-overlay">
        <div className="spinner"></div>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-800">
        <p className="text-red-500 text-xl font-semibold bg-red-100 border border-red-300 rounded-lg p-4">
          Error: {error.message}
        </p>
      </div>
    );

  return (
    <>
      <div className="bg-black text-white min-h-screen xl:h-[1800px]">
        <Header />
        <h1 className="text-4xl text-center pt-4">
          Cryptocurrency Prices by Market Cap
        </h1>
        <div className="flex flex-col justify-center items-center px-4">
          <SearchInput
            searchTerm={searchTerm}
            onSearchTermChange={setSearchTerm}
          />
          <div className="bg-transparent w-full max-w-4xl mt-4 rounded-xl shadow-md">
            <ProductNames />
            <CoinListDisplay
              coins={coins}
              searchTerm={searchTerm}
              currency={currency}
              onToggleCoin={toggleCoin}
            />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
