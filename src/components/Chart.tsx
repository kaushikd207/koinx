import sidePic from "../assets/sidePic.png";
import TradingViewWidget from "./TradingViewWidget";

function Chart() {
  return (
    <div className="max-w-full h-[100%] flex flex-wrap gap-[18px] mt-[20px] justify-center">
      <TradingViewWidget />
      <div className="max-w-[427px] max-h-[515px]">
        <img className="max-w-[427px] max-h-[515px]" src={sidePic} alt="" />
        <div className="bg-white h-[225px] mt-4">
          <h1 className="text-lg p-7">Trending coins(24h)</h1>
          <div className=" flex items-center justify-center flex-wrap">
            <ul className="w-[100%]">
              <li className="flex justify-between px-5">
                Etherium
                <span>
                  <img src="" alt="icon" />
                </span>
              </li>
            </ul>
            <ul className="w-[100%]">
              <li className="flex justify-between px-5">
                Bitcoin
                <span>
                  <img src="" alt="icon" />
                </span>
              </li>
            </ul>
            <ul className="w-[100%]">
              <li className="flex justify-between px-5">
                Polygon
                <span>
                  <img src="" alt="icon" />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chart;
