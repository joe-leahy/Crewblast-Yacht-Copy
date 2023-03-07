import "@/styles/globals.css";
import Script from "next/script";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-TKTYJKD5MW"
      />
      <Script
      id='google-analytics'
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-TKTYJKD5MW', {
            page_path: window.location.pathname,
          });
        `,
        }}
    />
      <Component {...pageProps} />
    </>
  );
};

App.getInitialProps = () => {
  return {};
};

export default App;
