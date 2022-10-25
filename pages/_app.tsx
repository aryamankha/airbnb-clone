import "../styles/globals.css";
import type { AppProps } from "next/app";
import React,{useState} from 'react';
import AppHeader from "../components/AppHeader";
if (
  typeof window !== "undefined" &&
  process.env.NODE_ENV === "development"
  // && /VIVID_ENABLED=true/.test(document.cookie)
) {
  import("vivid-studio").then((v) => v.run());
  import("vivid-studio/style.css");
}

function MyApp({ Component, pageProps }: AppProps) {
  
  const [location, setLocation] = useState<string>('');
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState<Object>();

  return <>     
  <AppHeader  query={{ location, checkIn, checkOut, guests }} />
  <Component {...pageProps} /></>;
}

export default MyApp;
