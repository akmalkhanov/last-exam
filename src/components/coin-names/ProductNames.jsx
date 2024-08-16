const ProductNames = () => {
  return (
    <div>
      <div className="flex bg-primary h-12 rounded-t-xl text-md text-black font-bold items-center px-2 sm:px-4">
        <p className="flex-1">Coin</p>
        <p className="hidden sm:block sm:w-1/4 text-center">Price</p>
        <p className="hidden sm:block sm:w-1/4 text-center">24h Change</p>
        <p className="hidden sm:block sm:w-1/4 text-center">Market Cap</p>
      </div>
    </div>
  );
}

export default ProductNames