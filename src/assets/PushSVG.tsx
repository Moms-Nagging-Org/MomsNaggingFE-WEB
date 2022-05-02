interface Props {
  checking: boolean;
}

const PushSVG = ({ checking }: Props) => {
  let stroke;
  if (checking) stroke = '#f43e51';
  else stroke = 'white';
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.13 21.67L15.74 19.07C15.699 19.0367 15.6478 19.0185 15.595 19.0185C15.5422 19.0185 15.491 19.0367 15.45 19.07L12.24 21.82C12.1983 21.8559 12.145 21.8756 12.09 21.8756C12.035 21.8756 11.9817 21.8559 11.94 21.82L8.3 19.07C8.2615 19.0355 8.21166 19.0165 8.16 19.0165C8.10834 19.0165 8.0585 19.0355 8.02 19.07L4.88 21.65C4.84517 21.6751 4.80423 21.6904 4.76145 21.6944C4.71868 21.6983 4.67563 21.6907 4.63681 21.6723C4.59799 21.6539 4.56482 21.6254 4.54076 21.5898C4.51669 21.5542 4.50262 21.5129 4.5 21.47V4.10999C4.5 3.57955 4.71071 3.07084 5.08579 2.69577C5.46086 2.3207 5.96957 2.10999 6.5 2.10999H17.5C18.0304 2.10999 18.5391 2.3207 18.9142 2.69577C19.2893 3.07084 19.5 3.57955 19.5 4.10999V21.49C19.4995 21.5327 19.4872 21.5744 19.4643 21.6105C19.4415 21.6466 19.409 21.6756 19.3706 21.6943C19.3322 21.713 19.2894 21.7206 19.2469 21.7163C19.2044 21.712 19.1639 21.696 19.13 21.67V21.67Z"
        stroke={stroke}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.08984 6.21997H15.0898"
        stroke={stroke}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.08984 10.22H12.0898"
        stroke={stroke}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.08984 14.22H16.0898"
        stroke={stroke}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default PushSVG;
