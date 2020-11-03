import { get } from './client';

const getTravels = () => get('travels');
const getTravel = (id) => get('travels/${id}');

export { getTravels, getTravel };
