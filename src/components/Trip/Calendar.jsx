import React, { useState, useContext } from 'react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { DateRangePickerCalendar, START_DATE } from 'react-nice-dates';

import PeopleNumberContext from '../../contexts/PeopleNumberContext';
import StartDateContext from '../../contexts/StartDateContext';
import EndDateContext from '../../contexts/EndDateContext';

import 'react-nice-dates/build/style.css';

const Calendar = () => {
  const [focus, setFocus] = useState(START_DATE);
  const handleFocusChange = (newFocus) => {
    setFocus(newFocus || START_DATE);
  };

  const { updatePeopleNumber } = useContext(PeopleNumberContext);
  const { startDate, updateStartDate } = useContext(StartDateContext);
  const { endDate, updateEndDate } = useContext(EndDateContext);

  const HandlePeople = (e) => {
    updatePeopleNumber(e.target.value);
  };
  return (
    <div className="calendar">
      <form>
        {' '}
        <p>
          {' '}
          Nombre de voyageurs :
          <select
            id="people"
            name="peopleNumber"
            type="number"
            min="1"
            max="5"
            onChange={HandlePeople}
          >
            <option value=""> </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>{' '}
        </p>
      </form>
      <p>
        Arrivée{' '}
        {startDate
          ? format(startDate, 'dd MMM yyyy', { locale: fr })
          : 'JJ/MM/AAAA'}{' '}
        - Départ{' '}
        {endDate
          ? format(endDate, 'dd MMM yyyy', { locale: fr })
          : 'JJ/MM/AAAA'}
      </p>
      <DateRangePickerCalendar
        startDate={startDate}
        endDate={endDate}
        focus={focus}
        onStartDateChange={updateStartDate}
        onEndDateChange={updateEndDate}
        onFocusChange={handleFocusChange}
        locale={fr}
      />
    </div>
  );
};

export default Calendar;
