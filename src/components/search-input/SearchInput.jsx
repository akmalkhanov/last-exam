const SearchInput = ({ searchTerm, onSearchTermChange }) => {
  return (
    <input
      className="bg-transparent outline-none w-full max-w-4xl mt-4 px-4 py-2 rounded"
      type="search"
      placeholder="Search For a Crypto Currency.."
      value={searchTerm}
      onChange={(e) => onSearchTermChange(e.target.value)}
    />
  );
};

export default SearchInput;
