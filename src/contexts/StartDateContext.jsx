import { createContext } from 'react';

const StartDateContext = createContext({
  startDate: '',
  updateStartDate: () => {},
});

export default StartDateContext;
