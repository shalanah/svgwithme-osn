import { IconContainer } from "./Intro";
import IconGithub from "../icons/IconGithub";

const Performance = () => {
  return (
    <>
      <h1>Performance</h1>
      <p className="animateIn">
        Code along - svgwithme.com{" "}
        <IconContainer
          style={{ display: "inline-flex", marginLeft: 8 }}
          target={"_blank"}
          href={"https://github.com/shalanah/svgwithme-osn"}
        >
          <IconGithub
            style={{ width: "55%", transform: "translate(0%, 0%)" }}
          />
        </IconContainer>
      </p>
      <p className="animateIn">Pagination</p>
      <p className="animateIn">Ask questions along the way!</p>
    </>
  );
};

export default Performance;
