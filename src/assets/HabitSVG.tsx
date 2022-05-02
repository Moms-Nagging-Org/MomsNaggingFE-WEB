interface Props {
  checking: boolean;
}

const HabitSVG = ({ checking }: Props) => {
  let stroke;
  if (checking) stroke = '#f43e51';
  else stroke = 'white';
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.5 2H5.5C4.39543 2 3.5 2.89543 3.5 4V8C3.5 9.10457 4.39543 10 5.5 10H9.5C10.6046 10 11.5 9.10457 11.5 8V4C11.5 2.89543 10.6046 2 9.5 2Z"
        stroke={stroke}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.5 14H5.5C4.39543 14 3.5 14.8954 3.5 16V20C3.5 21.1046 4.39543 22 5.5 22H9.5C10.6046 22 11.5 21.1046 11.5 20V16C11.5 14.8954 10.6046 14 9.5 14Z"
        stroke={stroke}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.5 16H14.5"
        stroke={stroke}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.5 20H14.5"
        stroke={stroke}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.5 8H14.5"
        stroke={stroke}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.5 4H14.5"
        stroke={stroke}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default HabitSVG;
