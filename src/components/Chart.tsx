import { useEffect, useState } from "react";
import sidePic from "../assets/sidePic.png";
import TradingViewWidget from "./TradingViewWidget";

function Chart() {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const data = await fetch(
      "https://api.coingecko.com/api/v3/search/trending?x_cg_demo_api_key=CG-BF1EQ3zWLQwS4S82UzZTW4Bm"
    );
    const json = await data.json();
    setCoins(json?.coins);
  };
  return (
    <div className="max-w-full h-[100%] flex flex-wrap gap-[18px] mt-[20px] justify-center">
      <TradingViewWidget />
      <div className="max-w-[427px] max-h-[515px]">
        <img className="max-w-[427px] max-h-[515px]" src={sidePic} alt="" />
        <div className="bg-white h-[225px] mt-4">
          <h1 className="text-lg p-4">Trending coins(24h)</h1>
          <div className=" flex items-center justify-center flex-wrap">
            {coins.slice(0, 3).map((coin) => (
              <ul className="w-[100%]">
                <li className="flex  px-5 items-center my-1">
                  <span>
                    <img
                      className="rounded-full w-10 mr-3"
                      src={coin?.item?.small}
                      alt="icon"
                    />
                  </span>
                  <div className="flex w-[100%] justify-between items-center">
                    <p className="text-center">{coin?.item?.name}</p>
                    <p className="ml-[237px] text-blue-700">
                      {" "}
                      {`${coin?.item?.data?.price_change_percentage_24h?.aed.toFixed(
                        1
                      )}%`}
                    </p>
                  </div>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chart;
