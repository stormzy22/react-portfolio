import * as React from "react";

const SvgComponent: React.FC = (): JSX.Element => {
  return (
    <svg
      width={75}
      height={75}
      fill="none"
      stroke="#000"
      xmlns="http://www.w3.org/2000/svg"
      className="i-scroll"
    >
      <path
        d="M40.5 15l-6-6-6 6M28.5 24l6 6 6-6M9 37.5h51"
        strokeWidth={3}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34.5 27V9"
        strokeWidth={2.99}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 27C9 12.918 20.418 1.5 34.5 1.5 48.586 1.5 60 12.918 60 27v21c0 14.082-11.414 25.5-25.5 25.5C20.418 73.5 9 62.082 9 48V27z"
        strokeWidth={3}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SvgComponent;
