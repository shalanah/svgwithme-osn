const Cover = () => (
  <>
    {/* <img
      src="/imgs/svg-you-and-me-cover.svg"
      alt={"background"}
      style={{
        objectFit: "cover",
        width: "100%",
        height: "100%",
        position: "absolute",
      }}
    /> */}
    <div
      className="pos-center"
      style={{ textAlign: "center", marginTop: "2vh" }}
    >
      <h1
        style={{
          width: "100%",
          fontSize: "max(2rem, 6.5vw)",
        }}
      >
        Svg with me
      </h1>
      <p style={{ fontSize: "3rem" }}>svgwithme.com</p>
    </div>
  </>
);

export default Cover;
