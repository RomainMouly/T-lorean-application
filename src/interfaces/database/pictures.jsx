import { get } from './client';

const getPictures = (id) => get(`/travels/${id}/pictures`);

export { getPictures };
