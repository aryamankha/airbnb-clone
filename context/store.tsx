import React, { createContext, useReducer, type Dispatch } from "react";
import { dataReducer } from "./reducer";
import { IDataAction } from "./actionTypes";

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

/**
 * TODO add documentation all types
 * with tsdoc!
 */
export interface IDataContext {
  location: string;
  checkIn: Date | null;
  checkOut: Date | null;
  guests: {
    adults: number;
    children: number;
    infants: number;
  };
}

export const initialState: IDataContext = {
  location: "",
  checkIn: null,
  checkOut: null,
  guests: { adults: 0, children: 0, infants: 0 },
};

// export const DataContext = createContext<IInitialState>(initialState);
export const DataContext = createContext<[IDataContext, Dispatch<IDataAction>]>(
  [
    initialState,
    () => {
      return initialState;
    },
  ]
);

export type Props = {
  children: React.ReactNode;
};

export const ContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  return (
    <DataContext.Provider
      value={[
        {
          location: state.location,
          checkIn: state.checkIn,
          checkOut: state.checkOut,
          guests: state.guests,
        },
        dispatch,
      ]}
    >
      {children}
    </DataContext.Provider>
  );
};
