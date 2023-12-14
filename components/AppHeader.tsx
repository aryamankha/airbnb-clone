import React,{useState, FC, useEffect} from 'react';
import {exploreNearby,HeaderProps,HeaderOptions, SearchMenu,EAppLogo} from './interfaces/interfaces'; 
import { formatGuests } from '../utils/guestUtils';
import {Navbar} from './Navbar';
import AppLogo from './Applogo';
import Link from 'next/link';
import { formatRangeDate } from '../utils/datesutils';
import AppHeaderOption from './AppHeaderOption';
import AppSearchBar from './AppSearchBar';
import {GlobeAltIcon,MenuIcon,SearchIcon,UserCircleIcon} from '@heroicons/react/outline';
import {Pricing} from "./Pricing";
const AppHeader: FC<HeaderProps> = ({ exploreNearby, searchPage, query }) => {
  const [isSnapTop, setIsSnapTop] = useState<boolean>(searchPage ? false : true);
  const [isActiveSearch, setIsActiveSearch] = useState<boolean>(
    searchPage ? false : true
  );
  const [activeMenu, setActiveMenu] = useState<HeaderOptions | null>(
    HeaderOptions.PLACES_TO_STAY
  );

  const handleOnScroll = () => {
    const position = window.scrollY;
    if (position >= 50) {
      setIsSnapTop(false);
      setIsActiveSearch(false);
    } else {
      setIsSnapTop(true);
      setIsActiveSearch(true);
    }
  };
  
  const headerBehaviour = () => {
    let style = [];
    if (!isSnapTop) style.push('bg-white shadow-lg');
    if (!isActiveSearch) style.push('h-[86px] pb-5');
    if (isActiveSearch) style.push('pb-8');
    return style.join(' ');
  };

  useEffect(() => {
    // listen to scroll
    if (!searchPage) {
      window.addEventListener('scroll', handleOnScroll);
    }
    return () => window.removeEventListener('scroll', handleOnScroll);
  }, [searchPage]);

  return(
  <>
    <header  className={`${headerBehaviour()} z-50 fixed top-0 w-full pt-5 duratio-300 md:transition-none `}>
        <div className={`${searchPage?'px-7':'container'} hidden md:grid-cols-[auto,1fr,auto] xl:grid-cols-[1.5fr,3fr,1.5fr] 2xl:grid-cols-[1fr,3fr,1fr] items-start`} >
            <div className="flex items-center h-12">
              <Link href="/">
              <a>
                <AppLogo
                  className={`${
                    isSnapTop ? 'text-white' : 'text-primary'
                  } hidden xl:block`}
                  type={EAppLogo.TEXT}
                />
                <AppLogo
                  className={`${
                    isSnapTop ? 'text-white' : 'text-primary'
                  } block xl:hidden`}
                  type={EAppLogo.LOGO}
                />
              </a>
            </Link>
            </div>
            {/* SearchBar */}
            <button className={`${isActiveSearch && 'scale-[1.33] translate-y-[75px] opacity-0 z-[-50]'} ${searchPage?'pl-3':'pl-6'} relative flex items-center h-12 pr-2 mx-auto text-left transform bg-white border border-gray-200 rounded-full shadow-md cursor-pointer min-w-[350px] hover:shadow-lg md:absolute left-24 lg-left-auto lg-righ-1/2 lg:translate-x-1/2 duration-200`}
            onClick={()=>setIsActiveSearch(true)} 
            >
              {searchPage ? (
              <span className="flex-grow text-sm font-medium tracking-wide text-gray-500">
                <span className="px-4 py-1 border-r border-gay-200">
                  {query.location || (
                    <span className="font-normal text-gray-300">Location</span>
                  )}
                </span>
                <span className="px-4 py-1 border-r border-gay-200">
                  {formatRangeDate(query.checkIn, query.checkOut) || (
                    <span className="font-normal text-gray-300">Add dates</span>
                  )}
                </span>
                <span className="px-4 py-1">
                  {formatGuests(query.guests, { noInfants: true }) || (
                    <span className="font-normal text-gray-300">Add guests</span>
                  )}
                </span>
              </span>
            ) : (
              <span className="flex-grow text-sm font-medium tracking-wide text-gray-500">
                Start your search
              </span>
            )}
            <SearchIcon className = "h-8 p-2 ml-3 text-white rounded-full bg-primary"/>
            </button>
              {/* middle side navigation */}
          <div className="relative flex flex-col items-center justify-center order-last col-span-2 xl:order-none xl:col-span-1">
            <div className="text-white">
              <AppHeaderOption
                isSnap={isSnapTop}
                isActiveHeader={isActiveSearch}
                active={activeMenu === HeaderOptions.PLACES_TO_STAY}
                onClick={() => setActiveMenu(HeaderOptions.PLACES_TO_STAY)}
              >
                Places to stay
              </AppHeaderOption>
              <AppHeaderOption
                isSnap={isSnapTop}
                isActiveHeader={isActiveSearch}
                active={activeMenu === HeaderOptions.FIND_EXPERIENCES}
                onClick={() => setActiveMenu(HeaderOptions.FIND_EXPERIENCES)}
              >
                Experiences
              </AppHeaderOption>
              <AppHeaderOption isSnap={isSnapTop} isActiveHeader={isActiveSearch}>
                <Link href="/">
                  <a>Online Experiences</a>
                </Link>
              </AppHeaderOption>
            </div>
          </div>
          {/* right side */}
          <div className="flex items-center justify-end">
            <Link href="/">
              <a
                className={`${
                  isSnapTop
                    ? 'text-white hover:bg-white hover:bg-opacity-10'
                    : 'text-gray-500 hover:bg-gray-100 '
                } flex items-center h-10 px-4 rounded-full font-medium tracking-wide text-sm`}
              >
                Become a host
              </a>
            </Link>
            <Link href="/">
              <a
                className={`${
                  isSnapTop
                    ? 'text-white hover:bg-white hover:bg-opacity-10'
                    : 'text-gray-500 hover:bg-gray-100 '
                } flex items-center h-10 px-3 mr-1 rounded-full `}
              >
                <GlobeAltIcon className="h-5" />
              </a>
            </Link>
            <button className="flex items-center pl-3 pr-1 bg-white border border-gray-200 rounded-full h-11 hover:shadow-md">
              <MenuIcon className="h-5 mr-2 text-gray-300" />
              <UserCircleIcon className="h-10 text-gray-300" />
            </button>
          </div>
        </div>
        {/* main search bar */}
        <AppSearchBar
          menu={activeMenu}
          isActiveHeader={isActiveSearch}
          searchPage={searchPage}
          closeSearch={() => setIsActiveSearch(false)}
        />
        {/* mobile search bar */}
        {/* Left to be done */}
      </header>
      {/* background layer */}
      {isActiveSearch && !isSnapTop && (
        <div
          className="fixed inset-0 z-40 bg-transparent-black"
          onClick={() => setIsActiveSearch(false)}
        />
      )}
      <div className="divtest">
          <Pricing></Pricing>
      </div>
  </>);
};
export default AppHeader;