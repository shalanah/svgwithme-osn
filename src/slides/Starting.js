import { IconContainer } from "./Intro";
import IconGithub from "../icons/IconGithub";

const Starting = () => {
  return (
    <>
      <p>
        Code along - svgwithme.com{" "}
        <IconContainer
          style={{
            display: "inline-flex",
            marginLeft: 8,
            width: "1em",
            height: "1em",
          }}
          target={"_blank"}
          href={"https://github.com/shalanah/svgwithme-osn"}
        >
          <IconGithub style={{ width: "55%" }} />
        </IconContainer>
      </p>
      <p className="animateIn">Pagination</p>
      <p className="animateIn">Ask questions along the way!</p>
    </>
  );
};

export default Starting;
