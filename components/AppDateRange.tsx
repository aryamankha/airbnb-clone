import {FC} from 'react'
import {DateRange} from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

// context
import { DATA_ACTION_TYPES } from './../context/actionTypes';
import { useDataContext } from './../hooks/useDataContext';

interface AppDateRangeProps{
    months?:number,
}
const AppDateRange :FC<AppDateRangeProps> = ({months})=>{
   const [{ checkIn, checkOut }, dispatch] = useDataContext();

  let selectionRange = {
    startDate: checkIn ? checkIn: new Date(),
    endDate: checkOut ? checkOut: new Date(),
    key: 'selection',
  };

  const handleDatePicker = (range: any) => {
    console.log('range: ', range);
    const { startDate, endDate } = range.selection;
    dispatch({ type: DATA_ACTION_TYPES.SET_CHECK_IN, payload: startDate });
    dispatch({ type: DATA_ACTION_TYPES.SET_CHECK_OUT, payload: endDate });
  };

  return (
     <div className="mx-auto md:py-4 rounded-3xl">
      <DateRange
        ranges={[selectionRange]}
        onChange={handleDatePicker}
        months={2}
        direction="horizontal"
        showPreview={true}
        showMonthAndYearPickers={false}
        showDateDisplay={false}
        moveRangeOnFirstSelection={false}
      />
    </div>
  );
};
export default AppDateRange;