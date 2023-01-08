import "./App.css";
import { useState, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./componentss/Header";
import RoutesNav from "./componentss/Routes";
import LocaleContext from "./LocaleContext";
import Loading from "./componentss/Loading";
import i18n from "./i18n";
import { DataProvider } from "./ContextAPI/CurrencyRates.js";
import { CrossRatesProvider } from "./ContextAPI/CrossRates.js";

function App() {
  const [locale, setLocale] = useState(i18n.language);

  i18n.on("languageChanged", (lng) => setLocale(i18n.language)); // i18n.on('languageChanged', (lng) => setLocale(i18n.language));
  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <Suspense fallback={<Loading />}>
        <DataProvider>
          <CrossRatesProvider>
            <div className="App">
              <BrowserRouter>
                <RoutesNav />
                <Header />
              </BrowserRouter>
            </div>
          </CrossRatesProvider>
        </DataProvider>
      </Suspense>
    </LocaleContext.Provider>
    // <div>Hello</div>
  );
}

export default App;
