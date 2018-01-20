import { instagramResponse } from '../photos';

export const getPhotos = (filterType) => {
  return new Promise((resolve, reject) => {
    if (filterType === 'all') {
     setTimeout(() => {
        return resolve(instagramResponse.data);
      }, 1000);
    }

    if (filterType !== 'all') {
      const feed = instagramResponse.data;
      const filtered = feed.filter(card => {
        return card['filter'].toLowerCase() === filterType.toLowerCase();
      });

      setTimeout(() => {
        return resolve(filtered);
      }, 1000);
    }
  });
};
