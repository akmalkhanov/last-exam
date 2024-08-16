const Buttons = () => {
  return (
    <div className='ml-'>
      <button className="border-2 ml-4 w-56 h-10 rounded-lg border-primary hover:bg-primary hover:text-black hover:font-bold transition-all duration-500 font-bold">
        24 Hours
      </button>
      <button className="border-2 ml-4 w-56 h-10 rounded-lg border-primary hover:bg-primary hover:text-black hover:font-bold transition-all duration-500 font-bold">
        30 Days
      </button>
      <button className="border-2 ml-4 w-56 h-10 rounded-lg border-primary hover:bg-primary hover:text-black hover:font-bold transition-all duration-500 font-bold">
        3 Month
      </button>
      <button className="border-2 ml-4 w-56 h-10 rounded-lg border-primary hover:bg-primary hover:text-black hover:font-bold transition-all duration-500 font-bold">
        1 Year
      </button>
    </div>
  );
}

export default Buttons