import { get } from './client';

const getPictures = () => get('travels/:id/pictures');
console.log(getPictures);

export { getPictures };
