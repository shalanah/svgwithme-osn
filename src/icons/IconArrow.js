const IconArrow = (props) => {
  return (
    <svg viewBox="0 0 10 10" {...props}>
      <path
        vectorEffect={"non-scaling-stroke"}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M0,3.5 5,8.5 10,3.5"
        fill="transparent"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default IconArrow;
