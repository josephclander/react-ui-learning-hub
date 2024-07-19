type SVGLogoProps = {
  width: string;
};

const OpenBookLogo: React.FC<SVGLogoProps> = ({ width }) => {
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
      <path
        fill="#7B8CDE"
        stroke="#000"
        strokeWidth="7.47"
        d="M298 122h27v176c-38.85-22.224-88.327-33.983-136-17-47.673-16.983-97.15-5.224-136 17V122h245"
        transform="translate(-52.926 -66.796) scale(1.33824)"
      ></path>
      <path
        fill="#EBEEFA"
        stroke="#000"
        strokeWidth="7.47"
        d="M80 110v153c40.654-8.27 76.604-1.002 109 18V122c-29.63-26.529-67.831-25.44-109-12z"
        transform="translate(-52.926 -66.796) scale(1.33824)"
      ></path>
      <path
        fill="#EBEEFA"
        stroke="#000"
        strokeWidth="7.47"
        d="M80 110v153c40.654-8.27 76.604-1.002 109 18V122c-29.63-26.529-67.831-25.44-109-12z"
        transform="translate(-52.926 -66.796) scale(1.33824) matrix(-1 0 0 1 378 0)"
      ></path>
    </svg>
  );
};

export default OpenBookLogo;
