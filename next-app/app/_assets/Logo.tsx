type SVGLogoProps = {
  width: string;
};

const Icon: React.FC<SVGLogoProps> = ({ width }) => {
  return (
    <svg
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="1.5"
      clipRule="evenodd"
      viewBox="0 0 600 600"
    >
      <path
        fill="#EBEBEB"
        stroke="#000"
        strokeWidth="18"
        d="M518 116.411v374.178C518 517.308 496.308 539 469.589 539H95.411C68.692 539 47 517.308 47 490.589V116.411C47 89.692 68.692 68 95.411 68h374.178C496.308 68 518 89.692 518 116.411z"
        transform="translate(17.5 -3.5)"
      ></path>
      <path
        fill="#C0E6DE"
        stroke="#000"
        strokeWidth="23.89"
        d="M518 102.645v401.71C518 523.476 504.604 539 488.105 539H76.895C60.396 539 47 523.476 47 504.355v-401.71C47 83.524 60.396 68 76.895 68h411.21C504.604 68 518 83.524 518 102.645z"
        transform="matrix(.8068 0 0 .69618 72.08 115.16)"
      ></path>
      <text
        x="252"
        y="381"
        fontFamily="'ArialRoundedMTBold', 'Arial Rounded MT Bold', sans-serif"
        fontSize="154.961"
        transform="translate(-224.517 -249.026) scale(1.76818)"
      >
        ?
      </text>
      <g>
        <circle
          cx="121"
          cy="111"
          r="11"
          transform="translate(-60 -56.545) scale(1.54545)"
        ></circle>
        <circle
          cx="121"
          cy="111"
          r="11"
          transform="translate(-15.24 -56.545) scale(1.54545)"
        ></circle>
        <circle
          cx="121"
          cy="111"
          r="11"
          transform="translate(29.52 -56.545) scale(1.54545)"
        ></circle>
      </g>
    </svg>
  );
};

export default Icon;
