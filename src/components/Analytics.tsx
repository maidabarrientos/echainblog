import Script from "next/script";
import React from "react";

const Analytics = () => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-26M95JNPHT`}
      />
      <Script strategy="afterInteractive" id="google-analytics">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        
        gtag('config', 'G-26M95JNPHT');
        `}
      </Script>
    </>
  );
};

export default Analytics;
