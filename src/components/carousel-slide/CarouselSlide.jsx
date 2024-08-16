import CoinItem from "../coin-item/CoinItem";
import { motion } from "framer-motion";

const CarouselSlide = ({ chunk }) => {
  return (
    <>
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div
          className="relative h-full w-full flex flex-col items-center justify-center text-center"
          style={{
            backgroundImage: `url(/background.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <div className="absolute -top-16 sm:top-24 xl:-mt-32 2xl:top-40">
            <h1 className="text-3xl xl:text-5xl 2xl:text-6xl font-bold text-primary">
              CRYPTOFOLIO WATCH LIST
            </h1>
            <p className="text-sm xl:text-lg 2xl:text-xl text-gray-400 mt-2">
              Get all the Info regarding your favorite Crypto Currency
            </p>
          </div>
          <div className="relative flex flex-wrap items-center justify-center space-x-4 sm:space-x-6 xl:space-x-8 2xl:space-x-10 mt-24">
            {chunk.map((coin, coinIndex) => (
              <CoinItem key={coinIndex} coin={coin} />
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default CarouselSlide;
