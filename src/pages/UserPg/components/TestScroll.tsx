import {Triangle} from "lucide-react";

const TestScroll = () => {
  return (
    <div className="overflow-hidden bg-transparent flex">
              <ul className="flex gap-10  text-white py-4 animate-infinite-scroll">
                {[...stocks, ...stocks].map((stock) => {
                  const priceIncrease = stock.priceChange > 0 

                  return(
                  <li className="flex gap-2 items-center">
                    <p className="text-gray-300">{stock.ticker}</p>
                    <p className="text-gray-300">{stock.price}</p>
                    <Triangle fill="white" className={`size-3 ${!priceIncrease && "rotate-180"}`}/>
                    <p className={`${priceIncrease ? "text-green-500" : "text-red-500"}`}>{stock.priceChange}</p>
                    <p className={`${priceIncrease ? "text-green-500" : "text-red-500"}`}>{stock.percentChange}</p>
                    
                  </li>
                )})}
              </ul>
      </div>
  )
}

export default TestScroll;


const stocks = [
  { ticker: "AAPL", price: 191.34, priceChange: 1.56, percentChange: 0.82 },
  { ticker: "MSFT", price: 418.25, priceChange: -2.35, percentChange: -0.56 },
  { ticker: "GOOGL", price: 178.90, priceChange: 0.95, percentChange: 0.53 },
  { ticker: "AMZN", price: 183.70, priceChange: -1.02, percentChange: -0.55 },
  { ticker: "TSLA", price: 174.55, priceChange: 3.20, percentChange: 1.87 },
  { ticker: "NVDA", price: 1124.12, priceChange: -15.62, percentChange: -1.37 },
  { ticker: "META", price: 471.23, priceChange: 4.10, percentChange: 0.88 },
  { ticker: "NFLX", price: 641.50, priceChange: -7.25, percentChange: -1.12 },
  { ticker: "AMD", price: 164.00, priceChange: 2.50, percentChange: 1.55 },
  { ticker: "INTC", price: 30.48, priceChange: -0.74, percentChange: -2.37 },
  { ticker: "BA", price: 178.35, priceChange: 0.65, percentChange: 0.37 },
  { ticker: "JPM", price: 199.10, priceChange: 1.25, percentChange: 0.63 },
  { ticker: "V", price: 275.89, priceChange: -0.40, percentChange: -0.14 },
  { ticker: "MA", price: 454.73, priceChange: 3.12, percentChange: 0.69 },
  { ticker: "DIS", price: 102.23, priceChange: 0.85, percentChange: 0.84 },
  { ticker: "UBER", price: 68.45, priceChange: -1.10, percentChange: -1.58 },
  { ticker: "CRM", price: 261.42, priceChange: 2.60, percentChange: 1.01 },
  { ticker: "ORCL", price: 123.33, priceChange: -0.98, percentChange: -0.79 },
  { ticker: "PYPL", price: 65.20, priceChange: 0.20, percentChange: 0.31 },
  { ticker: "SHOP", price: 63.80, priceChange: -0.60, percentChange: -0.93 }
];