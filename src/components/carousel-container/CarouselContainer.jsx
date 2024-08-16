import { Carousel } from "flowbite-react";
import CarouselSlide from "../carousel-slide/CarouselSlide";

const CarouselContainer = ({ coinChunks }) => {
  return (
    <div
      style={{
        backgroundImage: `url(/background.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
      className="relative h-56 sm:h-64 xl:h-80 2xl:h-96 border border-black overflow-hidden rounded-lg shadow-lg bg-transparent"
    >
      <Carousel
        slideInterval={3000}
        indicators={false}
        controls={true}
        className="carousel-container"
      >
        {coinChunks.map((chunk, chunkIndex) => (
          <CarouselSlide key={chunkIndex} chunk={chunk} />
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselContainer;
