import { useEffect, useState } from "react";
import Carousel from "./Caraousal";
function Like() {
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
    <div>
      <div className=" mt-8 p-8 bg-white">
        <h1 className="text-lg font-bold my-3">You May Also Like</h1>
        <Carousel items={coins} />
      </div>
      <div className=" p-8 bg-white">
        <h1 className="text-lg font-bold my-3">Trending Coins</h1>
        <Carousel items={coins} />
      </div>
    </div>
  );
}

export default Like;
