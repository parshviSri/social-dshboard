import '../styles/globals.css'
import configureStore from "../state/store";
import { Provider } from "react-redux";
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import { Analytics } from "@vercel/analytics/react";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={configureStore}>
        <Analytics/>
          <Navbar/>
          <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp
