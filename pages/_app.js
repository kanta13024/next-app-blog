import Head from "next/dist/next-server/lib/head";
import { Provider } from "react-redux";
import createStore from "../reducks/store/store";
import "tailwindcss/tailwind.css";
import "@material-tailwind/react/tailwind.css";

export const store = createStore();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>

      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
