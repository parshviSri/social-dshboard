import '../styles/globals.css'
import store from '../state/store';
import { Provider } from "react-redux";
import Navbar from './components/Navbar';
import Contact from './components/Contact';
function MyApp({ Component, pageProps }) {
  return (
    <Provider store ={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp
