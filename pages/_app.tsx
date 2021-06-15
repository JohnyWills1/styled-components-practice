import React from 'react';
import { Navbar } from '../components/Navbar/Navbar';
import ThemeProvider, { ThemeContext } from '../context/ThemeContext';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider>
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
