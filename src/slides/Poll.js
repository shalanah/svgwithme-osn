const list = [
  "Heard of SVG",
  "Used SVG assets in a site",
  "Exported SVGs using software",
  "Created SVGs using software",
  "Edited SVG code in file/inline",
  "Hand coded inline SVGs",
  "Animated SVGs",
];

const Poll = () => {
  return (
    <>
      <h1>Poll time 📊</h1>
      <ul>
        {list.map((item, i) => {
          return (
            <li className={"animateIn"} key={i}>
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Poll;
