import Cookies from "js-cookie";
import React, { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [currency, setCurrency] = useState([]);
  var arr = [];

  const value = {
    currency: [currency, setCurrency],
    arr: [arr],
  };

  useEffect(() => {
    async function fetchBooks() {
      const response = await fetch(
        "https://nashimiumbackend.herokuapp.com/prefferedCurrencyGET"
      );
      const json = await response.json();
      setCurrency(json.pfg);
      // console.log("SETCURRENCY DATACONTEXT", json.pfg);
    }
    fetchBooks();
  }, [currency]);
  if (currency.length) {
    const selectedCurrency = () => {
      arr.push(currency[0].PCurr_One);
      arr.push(currency[0].PCurr_Two);
      arr.push(currency[0].PCurr_Three);
      arr.push(currency[0].PCurr_Four);
      arr.push(currency[0].PCurr_Five);
    };
    selectedCurrency();
  }
  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
