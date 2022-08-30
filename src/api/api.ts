import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_REACT_APP_URL;

const instance = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_URL,
  headers: {
    accept: 'application/json',
  },
});

export const pushData = () => {
  return instance({
    url: '/push',
    method: 'POST',
    data: {
      pushDate: '2022-08-30',
      pushTime: '12:00:00',
      mon: false,
      tue: false,
      wed: false,
      thu: false,
      fri: false,
      sat: false,
      sun: false,
      title: '불러보자',
      level1: '딸~',
      level2: '딸.',
      level3: '딸!',
    },
  })
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
};

export { instance };
