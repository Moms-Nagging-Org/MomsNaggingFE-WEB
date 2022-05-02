import { atom } from 'recoil';

const selectTitleState = atom<string>({
  key: 'selectTitleState',
  default: '대시보드',
});

export { selectTitleState };
