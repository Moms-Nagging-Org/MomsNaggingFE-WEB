import { useEffect } from 'react';

interface Props {
  checking: boolean;
}

const DashBoardSVG = ({ checking }: Props) => {
  let stroke;
  if (checking) stroke = '#f43e51';
  else stroke = 'white';
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.5 21V9L12 3L19.5 9V21H4.5Z"
        stroke={stroke}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.5 14.5V21H14.5V14.5H9.5Z"
        stroke={stroke}
        stroke-width="2"
        stroke-linejoin="round"
      />
      <path d="M4.5 21H19.5" stroke={stroke} stroke-width="1.5" stroke-linecap="round" />
    </svg>
  );
};

export default DashBoardSVG;
