import { instagramResponse } from '../photos';

export const getPhotos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(instagramResponse.data);
    }, 1000);
  });
};
