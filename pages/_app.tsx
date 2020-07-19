import { AppProps } from "next/app";

import "./style.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="page">
      <Component {...pageProps} />
    </div>
  );
};

export default App;
