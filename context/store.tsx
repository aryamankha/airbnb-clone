import { createContext, useReducer,type Dispatch } from 'react';
import { dataReducer } from './reducer';


interface IInitialState {
  location: string;
  checkIn: Date | null;
  checkOut: Date | null;
  guests: {
    adults: number;
    children: number;
    infants: number;
  };
}

export const initialState: IInitialState = {
  location: '',
  checkIn: null,
  checkOut: null,
  guests: { adults: 0, children: 0, infants: 0 },
  // Use a type assertion on the line below, like this:
  // dispatch: (() => undefined) as Dispatch<any>,
};

// export const DataContext = createContext<IInitialState>(initialState);
export const DataContext = createContext<any>(initialState);
interface IIProps{
  children:React.ReactNode ,
}
export const ContextProvider = ({children}:any ) => {
  const [state,dispatch] = useReducer(dataReducer,initialState);
  return (
    <>
  <DataContext.Provider value={
    {
      location:state.location,
      checkIn:state.checkIn,
      checkOut:state.checkOut,
      guests:state.guests
    }
  }>
    {children}
  </DataContext.Provider></>);
};
