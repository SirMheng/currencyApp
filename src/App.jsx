import React from "react";
import CurrencyOpt from "./components/CurrencyData";
import { useState } from "react";

const App = () => {
  const [amount, setAmount] = useState(100);
  const [fromCurrency, setFromCurrency] = useState("KRW");
  const [toCurrency, setToCurrency] = useState("PHP");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const getExchangeRate = async () => {
    const API_KEY = import.meta.env.VITE_EXCHANGE_RATE_API_KEY;
    const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromCurrency}/${toCurrency}`;

    if (isLoading) return;
    setIsLoading(true);

    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw Error("Something went wrong!");

      const data = await response.json();
      const rate = (data.conversion_rate * amount).toFixed(2);
      setResult(`${amount} ${fromCurrency} = ${rate} ${toCurrency}`);
    } catch (error) {
      setResult("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    getExchangeRate();
  };

  return (
    <div className="flex items-center justify-center h-screen bg-slate-900">
      <div className="border rounded-lg border-indigo-600 text-white bg-gray-900 backdrop-blur-sm p-12">
        <h2 className="text-center font-extrabold">Currency Converter</h2>

        <form className="mt-[45px]" onSubmit={handleFormSubmit}>
          <div className="flex flex-col  mb-[30px]">
            <label id="form-label" className="block">
              Enter Amount
            </label>
            <input
              type="number"
              className={`flex items-center px-[10px] min-h-[45px] rounded-md bg-white/10 border transition 
  ${
    amount && !isNaN(amount)
      ? "border-white/50"
      : "border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]"
  }`}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>

          <div className=" flex flex-col items-center justify-between">
            <div>
              <label>From</label>
              <CurrencyOpt
                selectedCurrency={fromCurrency}
                handleCurrency={(e) => setFromCurrency(e.target.value)}
              />
            </div>

            <div
              className="h-10 w-10 cursor-pointer flex items-center justify-center mt-6 rounded-full bg-white/10 border border-white/50"
              onClick={handleSwapCurrencies}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                />
              </svg>
            </div>

            <div className="form-section">
              <label className="form-label">To</label>
              <CurrencyOpt
                selectedCurrency={toCurrency}
                handleCurrency={(e) => setToCurrency(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            className={`${
              isLoading ? "loading" : ""
            } mt-[45px] rounded-md bg-white/5 border-white hover:border w-full min-h-[52px] outline-none text-base font-semibold cursor-pointer transition duration-200 ease-in-out flex items-center justify-center`}
          >
            {isLoading ? (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                />
              </svg>
            ) : (
              "Convert Currency"
            )}
          </button>

          {result && (
            <p className="text-white text-[1.1rem] font-semibold text-center py-[25px] mt-[25px] rounded-md tracking-[0.5px] bg-white/15">
              {isLoading ? "Converting..." : result}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default App;
