import Email from '../components/Email'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Social from '../components/Social'
import '../styles/globals.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return <>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
    <Social />
    <Email />
    <ToastContainer
      position="top-center"
      theme="dark"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </>
}

export default MyApp
