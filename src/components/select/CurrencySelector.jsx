import "./styles.css";

const CurrencySelector = ({ currency, setCurrency }) => {
  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <select
      className="currency-selector"
      value={currency}
      onChange={handleCurrencyChange}
    >
      <option className="currency-option" value="EUR">
        EUR
      </option>
      <option className="currency-option" value="USD">
        USD
      </option>
      <option className="currency-option" value="AED">
        AED
      </option>
    </select>
  );
};

export default CurrencySelector;
