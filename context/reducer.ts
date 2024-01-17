import { DATA_ACTION_TYPES, IDataAction } from "./actionTypes";
import { IDataContext, initialState } from "./store";

export const dataReducer = (state: IDataContext, action: IDataAction) => {
  const { type, payload } = action;
  const { adults, children, infants } = state.guests;
  switch (type) {
    case DATA_ACTION_TYPES.SET_LOCATION:
      return { ...state, location: payload };

    case DATA_ACTION_TYPES.SET_CHECK_IN:
      return { ...state, checkIn: payload };

    case DATA_ACTION_TYPES.SET_CHECK_OUT:
      return { ...state, checkOut: payload };

    case DATA_ACTION_TYPES.SET_GUESTS:
      return { ...state, guests: payload };

    case DATA_ACTION_TYPES.RESET_DATES:
      return { ...state, checkOut: null, checkIn: null };

    case DATA_ACTION_TYPES.RESET_GUESTS:
      return { ...state, guests: initialState.guests };

    case DATA_ACTION_TYPES.INCREASE_ADULTS:
      if (adults >= 16) return state;
      return { ...state, guests: { ...state.guests, adults: adults + payload } };

    case DATA_ACTION_TYPES.INCREASE_CHILDREN:
      if (children >= 5) return state;
      if (adults == 0) {
        return {
          ...state,
          guests: {
            ...state.guests,
            children: children + payload,
            adults: adults + payload,
          },
        };
      }
      return { ...state, guests: { ...state.guests, children: children + payload } };

    case DATA_ACTION_TYPES.INCREASE_INFANTS:
      if (infants >= 5) return state;
      if (adults == 0) {
        return {
          ...state,
          guests: { ...state.guests, infants: infants + payload, adults: adults + payload },
        };
      } else {
        return { ...state, guests: { ...state.guests, infants: infants + 1 } };
      }

    case DATA_ACTION_TYPES.DECREASE_ADULTS:
      if (adults <= 0) return state;
      if (adults <= 1 && (children >= 1 || infants >= 1)) return state;
      return { ...state, guests: { ...state.guests, adults: adults - payload } };

    case DATA_ACTION_TYPES.DECREASE_CHILDREN:
      if (children <= 0) return state;
      return { ...state, guests: { ...state.guests, children: children - payload } };

    case DATA_ACTION_TYPES.DECREASE_INFANTS:
      if (infants <= 0) return state;
      return { ...state, guests: { ...state.guests, infants: infants - payload } };
    default:
      return state;
  }
};
