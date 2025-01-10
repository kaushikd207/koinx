import { useEffect, useRef, memo } from "react";

function TradingViewWidget() {
  const container: any = useRef(null);

  useEffect(() => {
    if (!container.current) return;

    const existingScript = container.current.querySelector("script");
    if (existingScript) {
      container.current.removeChild(existingScript);
    }

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "autosize": true,
        "width": "881px",
        "height": "771px",
        "symbol": "NASDAQ:AAPL",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "light",
        "style": "1",
        "backgroundColor": "rgba(255, 255, 255, 1)",
        "locale": "en",
        "allow_symbol_change": true,
        "calendar": false,
        "support_host": "https://www.tradingview.com"
      }`;
    container.current.appendChild(script);

    return () => {
      if (container.current && script) {
        container.current.removeChild(script);
      }
    };
  }, []);

  return (
    <div
      className="tradingview-widget-wrapper"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 1)",
        padding: "16px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        className="tradingview-widget-container"
        ref={container}
        style={{
          width: "881px",
          height: "771px",
          maxWidth: "100%",
        }}
      >
        <div className="tradingview-widget-copyright">
          <a
            href="https://www.tradingview.com/"
            rel="noopener nofollow"
            target="_blank"
          ></a>
        </div>
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
