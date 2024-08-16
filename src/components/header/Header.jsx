import React from "react";
import { useCoinContext } from "../useContext/UseContext";
import { useCurrencyContext } from "../currency/CurrencyContext";
import CarouselContainer from "../carousel-container/CarouselContainer";

const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const Carusel = () => {
  const { selectedCoins } = useCoinContext();
  const { currency } = useCurrencyContext();

  const coinChunks = chunkArray(selectedCoins, 4);

  return <CarouselContainer coinChunks={coinChunks} />;
};

export default Carusel;
