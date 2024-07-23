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
      viewBox="0 0 400 400"
    >
      <g transform="translate(-471 -959)">
        <g transform="matrix(.96386 0 0 .96386 -1206.11 894.422)">
          <path fill="none" d="M1740 67H2155V482H1740z"></path>
          <clipPath id="_clip1">
            <path d="M1740 67H2155V482H1740z"></path>
          </clipPath>
          <g clipPath="url(#_clip1)">
            <path
              fill="none"
              d="M871 979v360c0 11.04-8.962 20-20 20H491c-11.038 0-20-8.96-20-20V979c0-11.038 8.962-20 20-20h360c11.038 0 20 8.962 20 20z"
              transform="translate(1251.34 -927.963) scale(1.0375)"
            ></path>
            <path
              fill="#7B8BDE"
              d="M169 168l20-18c13.03 11.781 32.615-4.3 18-21l18-19-18-18c-17.133 12.778-32.619-3.424-18-20l-21-17-19 16c-14.756-12.533-28.915 6.385-20 19l-19 21 19 19c18.916-11.6 33.063 5.62 20 20l20 18z"
              transform="rotate(90 1282.65 1021.45) scale(3.19821)"
            ></path>
            <path
              fill="none"
              stroke="#000"
              strokeWidth="3.24"
              d="M169 168l20-18c13.03 11.781 32.615-4.3 18-21l18-19-18-18c-17.133 12.778-32.619-3.424-18-20l-21-17-19 16c-14.756-12.533-28.915 6.385-20 19l-19 21 19 19c18.916-11.6 33.063 5.62 20 20l20 18z"
              transform="rotate(90 1282.65 1021.45) scale(3.19821)"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Icon;
