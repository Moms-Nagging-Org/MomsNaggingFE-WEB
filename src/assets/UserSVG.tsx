interface Props {
  checking: boolean;
}

const UserSVG = ({ checking }: Props) => {
  let stroke;
  if (checking) stroke = '#f43e51';
  else stroke = 'white';
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V4C20 2.89543 19.1046 2 18 2Z"
        stroke={stroke}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2 6.74109H6"
        stroke={stroke}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2 17.0006H6"
        stroke={stroke}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.61377 16.4515L8.96477 15.1749C10.1262 10.9511 15.1013 10.9511 16.2627 15.1749L16.6137 16.4515"
        stroke={stroke}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.6138 11.9929C13.8411 11.9929 14.836 10.998 14.836 9.77068C14.836 8.54338 13.8411 7.54846 12.6138 7.54846C11.3865 7.54846 10.3916 8.54338 10.3916 9.77068C10.3916 10.998 11.3865 11.9929 12.6138 11.9929Z"
        stroke={stroke}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="bevel"
      />
    </svg>
  );
};

export default UserSVG;
