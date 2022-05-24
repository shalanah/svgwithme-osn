import styled from "styled-components";
import IconTwitter from "../icons/IconTwitter";
import IconLinkedIn from "../icons/IconLinkedIn";
import IconGithub from "../icons/IconGithub";

export const IconContainer = styled.a`
  color: #000 !important;
  width: 3rem;
  height: 3rem;
  background: #fff;
  display: inline-block;
  border-radius: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  ::before {
    content: "";
    z-index: -1;
    left: 0;
    top: 0;
    border-radius: 100%;
    position: absolute;
    width: 100%;
    height: 100%;
    background: #000;
    transform: translate(-10px, 10px);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
  a {
    white-space: nowrap;
  }
`;

const Intro = () => {
  return (
    <Container>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div className="animateIn">
          <p>Grew up in Chicagoland call TC my home</p>
        </div>
        <div className="animateIn">
          <p>
            <a href="https://mathigon.org" rel="noreferrer" target={"_blank"}>
              Mathigon
            </a>{" "}
            (part of{" "}
            <a href={"https://amplify.com"} rel="noreferrer" target={"_blank"}>
              Amplify
            </a>
            ) on{" "}
            <a
              href={"https://mathigon.org/polypad"}
              rel="noreferrer"
              target={"_blank"}
            >
              Polypad
            </a>
          </p>
        </div>
        <div className="animateIn">
          <p>
            <a
              href="https://spiralbetty.com"
              target={"_blank"}
              rel="noreferrer"
            >
              Spiral Betty
            </a>{" "}
            (viral on{" "}
            <a
              href="https://www.tiktok.com/tag/spiralbetty"
              target={"_blank"}
              rel="noreferrer"
            >
              TikTok
            </a>
            ) •{" "}
            <a href="https://kindcloud.app" target={"_blank"} rel="noreferrer">
              Kind Cloud
            </a>
          </p>
        </div>
        <div className="animateIn">
          <p>
            Watching{" "}
            <a
              href="https://www.youtube.com/c/Taskmaster"
              target={"_blank"}
              rel="noreferrer"
            >
              British panel shows
            </a>{" "}
            with husband, learning German, and{" "}
            <a
              href="https://www.youtube.com/watch?v=jXegEec5dC8&t=1973s"
              target="_blank"
              rel="noreferrer"
            >
              playing broomball
            </a>
          </p>
        </div>
      </div>
      <div className="animateIn" style={{ display: "flex", gap: 15 }}>
        <IconContainer
          href={"https://twitter.com/shalanahfaith"}
          target="_blank"
          rel="noreferrer"
        >
          <IconTwitter
            style={{ width: "52%", transform: "translate(0, -3%)" }}
          />
        </IconContainer>
        <IconContainer
          href={"https://github.com/shalanah"}
          target="_blank"
          rel="noreferrer"
        >
          <IconGithub style={{ width: "55%" }} />
        </IconContainer>
        <IconContainer
          href={"https://www.linkedin.com/in/shalanah/"}
          target="_blank"
          rel="noreferrer"
        >
          <IconLinkedIn
            style={{ width: "42%", transform: "translate(2%, -4%)" }}
          />
        </IconContainer>
      </div>
    </Container>
  );
};

export default Intro;
