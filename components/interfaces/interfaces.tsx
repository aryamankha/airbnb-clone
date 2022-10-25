interface exploreNearby {
  location: string;
  img: string;
  distance: string;
}

interface HeaderProps {
  exploreNearby?: exploreNearby[];
  searchPage?: boolean;
  query?: any;
}


export enum HeaderOptions {
  PLACES_TO_STAY = 'placesToStay',
  FIND_EXPERIENCES = 'findExperiences',
};

export enum EAppLogo {
  LOGO = 'logo',
  TEXT = 'text',
};
export enum  SearchMenu{
  LOCATION= 'location',
  CHECK_IN = 'checkIn',
  CHECK_OUT = 'checkOut',
  GUESTS = 'guests',
};

interface SearchBarProps{
  menu: HeaderOptions | null;
  isActiveHeader: boolean;
  searchPage?: boolean;
  closeSearch?: () => void;
};
interface LogoProps {
  className?:string,
  type?:EAppLogo,
};


interface FormatGuestOptions{
  noInfants?:boolean
}

export type { HeaderProps, exploreNearby,SearchBarProps,LogoProps, FormatGuestOptions};
