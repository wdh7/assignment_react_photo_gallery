import { instagramResponse } from '../photos';

const dropDown = (filterType) => {
  return new Promise((resolve, reject) => {
    if (filterType === 'all') {
     setTimeout(() => {
        return resolve(instagramResponse.data);
      }, 1000);
    }

    if (['normal', 'lark', 'reyes', 'valencia', 'inkwell', 'ludwig'].includes(filterType)) {
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

const inputSearch = (filterType) => {
  return new Promise((resolve, reject) => {
    const feed = instagramResponse.data.filter(card => {
      const username = card.user.username.toLowerCase();
      const hashtags = card.tags;

      if (hashtags.includes(filterType) || username.includes(filterType.toLowerCase())) {
        return card;
      }
    });

    setTimeout(() => {
      return resolve(feed);
    }, 1000);
  });
};

export const getPhotos = (filterType, id) => {
  return new Promise((resolve, reject) => {
    if (id === 'dropDown') {
      dropDown(filterType).then(filtered => resolve(filtered));
    }

    if (id === 'inputSearch') {
      inputSearch(filterType).then(filtered => resolve(filtered));
    }
  });
};
