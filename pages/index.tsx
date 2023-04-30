import type { NextPage } from 'next'
import { useState } from 'react'
import AppHeader from '../components/AppHeader';
import Head from 'next/head';
import Image from 'next/image'

const Home: NextPage = () => {
  const [location, setLocation] = useState<string>('');
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState<Object>();

  return (
    // Base Container
    <div className='bg-white min-h-screen'>
      {/* Title */}
      <Head>
        <title>airbnb</title>
      </Head>
      {/* Logo */}
      <div className='pt-10 pl-10'>
        <Image width={96} height={30} quality={100} src={require('../assets/airbnb_logo.png')} alt="Logo" />
      </div>

      <AppHeader  query={{ location, checkIn, checkOut, guests }} />

      {/* Horizontal Rule */}
      <hr className='my-8 border-gray-200 border'/>
    </div>
  );
}

export default Home
