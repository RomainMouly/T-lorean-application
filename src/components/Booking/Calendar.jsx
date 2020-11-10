import React, { useState } from 'react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { DateRangePickerCalendar, START_DATE } from 'react-nice-dates';
import 'react-nice-dates/build/style.css';

const Calendar = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [focus, setFocus] = useState(START_DATE);
  const handleFocusChange = (newFocus) => {
    setFocus(newFocus || START_DATE);
  };
  return (
    <div className="calendar">
      <form>
        <select name="peopleNumber" type="number" min="1" max="5">
          <option value="">Combien de voyageurs seront de la partie ?</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </form>
      <p>
        Arrivée{' '}
        {startDate ? format(startDate, 'dd MMM yyyy', { locale: fr }) : 'none'}{' '}
        - Départ{' '}
        {endDate ? format(endDate, 'dd MMM yyyy', { locale: fr }) : 'none'}
      </p>
      <DateRangePickerCalendar
        startDate={startDate}
        endDate={endDate}
        focus={focus}
        onStartDateChange={setStartDate}
        onEndDateChange={setEndDate}
        onFocusChange={handleFocusChange}
        locale={fr}
      />
    </div>
  );
};

export default Calendar;
