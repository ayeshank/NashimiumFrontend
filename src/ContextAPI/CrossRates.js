import React, {createContext,useState, useEffect} from 'react';
import axios from 'axios';

export const CrossRatesContext = createContext();

export const CrossRatesProvider = (props) => {
    const [crossRates, setCrossRates] = useState([
        {"data": {
            "USD": 0.741477,
            "RUB": 61.914063,
            "JPY": 93.034909,
            "CNY": 4.723081,
            "CHF": 0.690693,
            "CAD": 0.937301,
            "INR": 56.233202,
            "TRY": 10.874943,
            "SAR": 2.78076,
            "SEK": 7.052608,
            "NOK": 6.542205,
            "TWD": 21.548137,
            "DKK": 5.069017,
            "MYR": 3.136877,
            "SGD": 1.01262,
            "PKR": 135.619215,
            "QAR": 2.699783,
            "SDG": 331.8171,
            "MMK": 1374.131597,
            "MWK": 600.98216,
            "STD": 15347.071173,
            "AUD": 1,
            "GBP": 0.56938,
            "EUR": 0.681669,
            }}
    ])

    // useEffect(() =>{
    //     axios.get('https://freecurrencyapi.net/api/v2/latest?apikey=6cfea260-497f-11ec-94b3-adf08d2418fe&base_currency=AUD')  
    //     .then(response=>{   
    //         console.log(response.data);
    //         setCrossRates(response.data);      
    //     })
    //     .catch(function(error){
    //         console.log(error);
    //     })  
    //   },[])
const value = {
        cRates: [crossRates, setCrossRates]
    }

    return (
        <CrossRatesContext.Provider value={value}>
        {props.children}
    </CrossRatesContext.Provider>
        
    )
}
