import { useRef } from "react";

function Carousel({ items }) {
  const carouselRef = useRef(null);
  console.log(items);
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -262, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 262, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-lg"
      >
        &#10094;
      </button>
      <div
        ref={carouselRef}
        className="flex gap-4 overflow-x-hidden w-full"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {items?.map((item, index) => {
          console.log(item, "item");
          const priceChangeUsd =
            item?.item?.data?.price_change_percentage_24h?.usd || 0;
          return (
            <div
              key={index}
              className="min-w-[262px] bg-gray-100 rounded-lg shadow-md p-4 flex flex-col gap-2"
              style={{ scrollSnapAlign: "center" }}
            >
              <div className="text-lg font-semibold text-gray-700 flex">
                <img className="w-6 rounded-full mr-3"src={item?.item?.small} alt="" />
                {item?.item?.name}
              </div>
              <div className="text-sm">
                <span className="font-medium"></span> $
                {item?.item?.price_btc?.toFixed(8)}
              </div>
              <div
                className={`text-sm ${
                  priceChangeUsd >= 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                <span className="font-medium">24h Change:</span>{" "}
                {item?.item?.data?.price_change_percentage_24h?.usd?.toFixed(2)}
                %
              </div>
              <div className="flex justify-center">
                <img
                  src={item?.item?.data?.sparkline}
                  alt={`${item?.item?.name} sparkline`}
                  className="w-full h-10 object-contain"
                />
              </div>
            </div>
          );
        })}
      </div>
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-lg"
      >
        &#10095;
      </button>
    </div>
  );
}

export default Carousel;
