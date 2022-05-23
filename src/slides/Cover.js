// import Background from "../Background";

import { colors } from "../colors";

const Cover = () => (
  <>
    {/* <Background /> */}
    <div className="pos-center" style={{ textAlign: "center" }}>
      <h1
        style={{
          width: "100%",
          fontSize: "max(2rem, 6.5vw)",
        }}
      >
        Svg with me
      </h1>
      <p style={{ fontSize: "3rem", color: colors.ltPurple }}>svgwithme.com</p>
    </div>
  </>
);

export default Cover;
