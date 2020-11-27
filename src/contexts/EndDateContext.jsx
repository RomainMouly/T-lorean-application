import { createContext } from 'react';

const EndDateContext = createContext({
  endDate: '',
  updateEndDate: () => {},
});

export default EndDateContext;
