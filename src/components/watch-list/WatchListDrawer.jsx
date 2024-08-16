import { Drawer } from "flowbite-react";
import Crypto from "../../assets/coinn.png";
import { FaXmark } from "react-icons/fa6";

const WatchListDrawer = ({
  isOpen,
  handleClose,
  selectedCoins,
  setSelectedCoins,
  currency,
}) => {
  const removeButton = (coinId) => {
    const updatedCoins = selectedCoins.filter((coin) => coin.id !== coinId);
    setSelectedCoins(updatedCoins);
    localStorage.setItem("selectedCoins", JSON.stringify(updatedCoins));
  };

  return (
    <Drawer
      className="bg-gray-900"
      open={isOpen}
      onClose={handleClose}
      position="right"
      size="md"
    >
      <Drawer.Header className="text-white border-b border-gray-700" />
      <div className="p-4">
        {selectedCoins.length === 0 ? (
          <div className="text-center text-white">
            <p className="text-lg mb-4">No Products</p>
            <img className="mx-auto mt-6" src={Crypto} alt="No Products" />
          </div>
        ) : (
          <div className="space-y-4">
            {selectedCoins.map((coin) => (
              <div
                key={coin.id}
                className="border border-gray-700 rounded-lg p-4 flex items-center justify-between bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={coin.image}
                    alt={`Logo of ${coin.name}`}
                    className="h-14 w-14 rounded-full"
                  />
                  <p className="text-white text-xl font-semibold">
                    {currency === "USD"
                      ? `$${coin.current_price}`
                      : currency === "AED"
                      ? `AED ${coin.current_price}`
                      : `${coin.current_price} EUR`}
                  </p>
                </div>
                <button
                  onClick={() => removeButton(coin.id)}
                  className="text-red-400 hover:text-red-600 transition-colors duration-300"
                >
                  <FaXmark size={24} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </Drawer>
  );
};

export default WatchListDrawer;
