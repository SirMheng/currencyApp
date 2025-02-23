// Array of currency codes
const currencyCodes = {
  AED: "United Arab Emirates Dirham",
  AFN: "Afghan Afghani",
  ALL: "Albanian Lek",
  AMD: "Armenian Dram",
  ANG: "Netherlands Antillean Guilder",
  AOA: "Angolan Kwanza",
  ARS: "Argentine Peso",
  AUD: "Australian Dollar",
  AWG: "Aruban Florin",
  AZN: "Azerbaijani Manat",
  BAM: "Bosnia-Herzegovina Convertible Mark",
  BBD: "Barbadian Dollar",
  BDT: "Bangladeshi Taka",
  BGN: "Bulgarian Lev",
  BHD: "Bahraini Dinar",
  BIF: "Burundian Franc",
  BMD: "Bermudian Dollar",
  BND: "Brunei Dollar",
  BOB: "Bolivian Boliviano",
  BRL: "Brazilian Real",
  BSD: "Bahamian Dollar",
  BTN: "Bhutanese Ngultrum",
  BWP: "Botswana Pula",
  BYN: "Belarusian Ruble",
  BZD: "Belize Dollar",
  CAD: "Canadian Dollar",
  CHF: "Swiss Franc",
  CNY: "Chinese Yuan",
  COP: "Colombian Peso",
  CZK: "Czech Koruna",
  DKK: "Danish Krone",
  EGP: "Egyptian Pound",
  EUR: "Euro",
  GBP: "British Pound Sterling",
  HKD: "Hong Kong Dollar",
  IDR: "Indonesian Rupiah",
  ILS: "Israeli New Shekel",
  INR: "Indian Rupee",
  JPY: "Japanese Yen",
  KES: "Kenyan Shilling",
  KRW: "South Korean Won",
  KWD: "Kuwaiti Dinar",
  LKR: "Sri Lankan Rupee",
  MAD: "Moroccan Dirham",
  MXN: "Mexican Peso",
  MYR: "Malaysian Ringgit",
  NGN: "Nigerian Naira",
  NOK: "Norwegian Krone",
  NZD: "New Zealand Dollar",
  OMR: "Omani Rial",
  PHP: "Philippine Peso",
  PKR: "Pakistani Rupee",
  PLN: "Polish Złoty",
  QAR: "Qatari Riyal",
  RUB: "Russian Ruble",
  SAR: "Saudi Riyal",
  SEK: "Swedish Krona",
  SGD: "Singapore Dollar",
  THB: "Thai Baht",
  TRY: "Turkish Lira",
  TWD: "New Taiwan Dollar",
  UAH: "Ukrainian Hryvnia",
  USD: "United States Dollar",
  UYU: "Uruguayan Peso",
  VND: "Vietnamese Đồng",
  ZAR: "South African Rand",
};

const CurrencyOpt = ({ selectedCurrency, handleCurrency }) => {
  // Extract the country code from the selected currency code
  const countryCode = selectedCurrency.substring(0, 2);

  return (
    <div className="flex items-center px-[10px]  min-h-[45px] rounded-md bg-white/10 border border-white/50">
      <img
        src={`https://flagsapi.com/${countryCode}/shiny/64.png`}
        alt="Flag"
        className="w-[25px] mr-2"
      />
      <select
        onChange={handleCurrency}
        value={selectedCurrency}
        className="outline-none"
      >
        {Object.keys(currencyCodes).map((currency) => (
          <option className="text-black " key={currency} value={currency}>
            {`${currency} - ${currencyCodes[currency]}`}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyOpt;
