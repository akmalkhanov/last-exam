import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import CoinDetail from "../components/coin-detail/CoinDetail";
import ChartSection from "../components/chart-section/ChartSection";
import ErrorMessage from "../components/error/ErrorMessage";
import LoadingSpinner from "../components/loading/LoadingSpinner";
import Buttons from "../components/buttons/Buttons";

const Single = () => {
  const { coinId } = useParams();
  const [coin, setCoin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${coinId}`
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setCoin(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCoin();
  }, [coinId]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!coin) return <ErrorMessage message="No data found" />;

  const prices = coin.market_data?.sparkline_7d?.price || [];
  const chartData = {
    labels: prices.map((_, index) => index),
    datasets: [
      {
        label: "Price Over Last 7 Days",
        data: prices,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="container mx-auto bg-black h-[800px] p-6 grid grid-cols-5 text-white">
      <Link
        className="absolute text-2xl hover:rotate-45 hover:text-primary transition-transform duration-500"
        to="/"
      >
        <FaArrowLeftLong />
      </Link>
      <span className="text-sm ml-8 absolute">Home</span>

      <CoinDetail coin={coin} />
      <ChartSection chartData={chartData} />
      <div className="absolute w-[1000px] h-12 mt-[600px] ml-[440px] flex items-center justify-between">
        <Buttons />
      </div>
    </div>
  );
};

export default Single;
