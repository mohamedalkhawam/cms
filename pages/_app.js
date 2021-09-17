import "tailwindcss/tailwind.css";
import "../styles/index.css";
import "../locales/i18n";
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
