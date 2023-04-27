import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Head from 'next/head';

const store = configureStore({
  reducer: {},
  });

export default function App({ Component, pageProps }) {
  return  (
<Provider store={store}>
<Head>
<title>Best friends</title>
</Head>
<Component {...pageProps} />
</Provider>
);
}
