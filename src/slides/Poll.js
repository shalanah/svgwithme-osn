const list = [
  "Heard of SVG",
  "Used SVG assets in a site",
  "Exported SVGs using software",
  "Created SVGs using software",
  "Edited SVG code in file/inline",
  "Animated SVGs",
  "Hand coded inline SVGs",
];

const Poll = () => {
  return (
    <ul>
      {list.map((item, i) => {
        return (
          <li className={"animateIn"} key={i}>
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default Poll;
