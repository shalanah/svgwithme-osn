import { colors } from "../colors";

const Performance = () => {
  return (
    <>
      <p className="animateIn">Reduce digits for viewBox and path data</p>
      <p
        className="animateIn"
        style={{ marginLeft: "2rem", fontSize: ".8em", color: colors.ltTeal }}
      >
        Select good viewBoxes
        <br />
        `0 0 100 100`
        <br />
        better than `0 0 1000 1000`
        <br />
        or `0 0 .000001 .000001`
      </p>
      <p className="animateIn">Reduce number of elements</p>
      <p className="animateIn">
        Filters can be expensive - use sparingly or unmount if not using
      </p>
      <p className="animateIn">
        Resources{" "}
        <a
          href="https://jakearchibald.github.io/svgomg/"
          target={"_blank"}
          rel="noreferrer"
        >
          SVGOMG
        </a>
        ,{" "}
        <a
          href="https://github.com/svg/svgo"
          target={"_blank"}
          rel="noreferrer"
        >
          SVGO
        </a>
        ,{" "}
        <a href="https://imageoptim.com/mac" target={"_blank"} rel="noreferrer">
          ImageOptim
        </a>
      </p>
      <p className="animateIn">Illustrator has the best export reputation</p>
      <p
        className="animateIn"
        style={{ marginLeft: "2rem", fontSize: ".8em", color: colors.ltTeal }}
      >
        Use Export {">"} Export As {">"} Select SVG
      </p>
    </>
  );
};

export default Performance;
