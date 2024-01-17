import type { NextPage } from 'next'
// import { useState } from 'react'
import AppHeader from '../components/AppHeader';
import Head from 'next/head';
import Image from 'next/image'
import { ContextProvider } from '../context/store';


const Home: NextPage = () => {
  return (
    // Base Container
    <ContextProvider>
    <div className='bg-white min-h-screen'>
      {/* Title */}
      <Head>
        <title>airbnb</title>
      </Head>
      {/* Logo */}
      <div className='pt-10 pl-10'>
        <Image width={96} height={30} quality={100} src={require('../assets/airbnb_logo.png')} alt="Logo" />
      </div>

      <AppHeader searchPage={false} />

      {/* Horizontal Rule */}
      <hr className='my-8 border-gray-200 border'/>
    </div>
    </ContextProvider>
  );
}

export default Home
