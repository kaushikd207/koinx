import { useEffect, useState } from "react";
import bar from "../assets/barOnly.png";

// Define the structure of the coin data to ensure TypeScript type safety
type CoinData = {
  market_data?: {
    current_price?: {
      usd?: number;
    };
    low_24h?: {
      usd?: number;
    };
    high_24h?: {
      usd?: number;
    };
    price_change_percentage_30d_in_currency?: {
      usd?: number;
    };
    price_change_percentage_200d_in_currency?: {
      usd?: number;
    };
    total_volume?: {
      usd?: number;
    };
    market_cap_rank?: number; // Added market_cap_rank
    market_cap?: {
      usd?: number;
    };
    market_cap_change_percentage_24h?: number;
    ath?: {
      usd?: number;
    };
    atl?: {
      usd?: number;
    };
  };
};

function Performance() {
  useEffect(() => {
    getCoinData();
  }, []);

  const [coinData, setCoinData] = useState<CoinData>({});

  const getCoinData = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/bitcoin?x_cg_demo_api_key=CG-BF1EQ3zWLQwS4S82UzZTW4Bm"
      );
      const data = await response.json();
      setCoinData(data);
    } catch (error) {
      console.error("Failed to fetch coin data", error);
    }
  };

  const liStyle =
    "flex justify-between h-[54px] border-b-2 border-gray-300 items-center";

  return (
    <div className="h-auto min-h-screen p-4 sm:p-6 md:p-8 bg-white">
      <h1 className="text-xl sm:text-2xl font-bold pb-4">Performance</h1>

      <div className="flex flex-col items-center gap-6">
        {/* High/Low Section */}
        <div className="w-full sm:max-w-lg md:max-w-3xl flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex-1 text-center">
            <h2 className="text-base sm:text-lg">Today's Low</h2>
            <h1 className="text-lg sm:text-xl font-semibold">
              {coinData?.market_data?.low_24h?.usd ?? "-"}
            </h1>
          </div>
          <img src={bar} alt="Bar" className="w-[100%]" />
          <div className="flex-1 text-center">
            <h2 className="text-base sm:text-lg">Today's High</h2>
            <h1 className="text-lg sm:text-xl font-semibold">
              {coinData?.market_data?.high_24h?.usd ?? "-"}
            </h1>
          </div>
        </div>

        {/* 52W Low/High Section */}
        <div className="w-full sm:max-w-lg md:max-w-3xl flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex-1 text-center">
            <h2 className="text-base sm:text-lg">52W Low</h2>
            <h1 className="text-lg sm:text-xl font-semibold">
              {coinData?.market_data?.price_change_percentage_30d_in_currency
                ?.usd ?? "-"}
            </h1>
          </div>
          <img src={bar} alt="Bar" className="w-[100%]" />
          <div className="flex-1 text-center">
            <h2 className="text-base sm:text-lg">52W High</h2>
            <h1 className="text-lg sm:text-xl font-semibold">
              {coinData?.market_data?.price_change_percentage_200d_in_currency
                ?.usd ?? "-"}
            </h1>
          </div>
        </div>

        {/* Fundamentals Section */}
        <div className="w-full sm:max-w-lg md:max-w-4xl">
          <h1 className="text-lg font-bold text-gray-600 mb-4">Fundamentals</h1>
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div className="w-full md:w-1/2">
              <ul>
                <li className={liStyle}>
                  Bitcoin Price{" "}
                  <p>${coinData?.market_data?.current_price?.usd ?? "-"}</p>
                </li>
                <li className={liStyle}>
                  24h Low / High{" "}
                  <p>
                    $
                    {`${coinData?.market_data?.low_24h?.usd ?? "-"} / ${
                      coinData?.market_data?.high_24h?.usd ?? "-"
                    }`}
                  </p>
                </li>
                <li className={liStyle}>
                  7d Low / High{" "}
                  <p>{`$${coinData?.market_data?.low_24h?.usd ?? "-"} / ${
                    coinData?.market_data?.high_24h?.usd ?? "-"
                  }`}</p>
                </li>
                <li className={liStyle}>
                  Trading Volume{" "}
                  <p>${coinData?.market_data?.total_volume?.usd ?? "-"}</p>
                </li>
                <li className={liStyle}>
                  Market Cap Rank{" "}
                  <p>#{coinData?.market_data?.market_cap_rank ?? "-"}</p>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2">
              <ul>
                <li className={liStyle}>
                  Market Cap{" "}
                  <p>${coinData?.market_data?.market_cap?.usd ?? "-"}</p>
                </li>
                <li className={liStyle}>
                  Market Cap Dominance{" "}
                  <p>
                    {coinData?.market_data?.market_cap_change_percentage_24h ??
                      "-"}
                    %
                  </p>
                </li>
                <li className={liStyle}>
                  Volume / Market Cap{" "}
                  <p>
                    {coinData?.market_data?.total_volume?.usd &&
                    coinData?.market_data?.market_cap?.usd
                      ? (
                          coinData?.market_data?.total_volume?.usd /
                          coinData?.market_data?.market_cap?.usd
                        ).toFixed(2)
                      : "-"}
                  </p>
                </li>
                <li className={liStyle}>
                  All Time High{" "}
                  <p>
                    {coinData?.market_data?.ath?.usd
                      ? `$${coinData?.market_data?.ath?.usd}`
                      : "-"}
                  </p>
                </li>
                <li className={liStyle}>
                  All Time Low{" "}
                  <p>
                    {coinData?.market_data?.atl?.usd
                      ? `$${coinData?.market_data?.atl?.usd}`
                      : "-"}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Performance;
