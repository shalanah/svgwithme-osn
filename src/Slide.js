import Section from "./Section";
import Codepen from "react-codepen-embed";
import useSlideAnimate from "./hooks/useSlideAnimate";
import useCodepenSize from "./hooks/useCodepenSize";
import useWinSize from "./hooks/useWinSize";
import { colors } from "./colors";

const pad = [40, 80, 20, 40];
const Slide = ({ content, layout, id, title, hash, links = [] }) => {
  const dim = useWinSize();
  const headerFontSize = Math.max(dim.height * 0.04, 20);
  const header = headerFontSize * 1.5;
  const [width, height, scale] = useCodepenSize([
    pad[0] + header,
    pad[1],
    pad[2],
    pad[3],
  ]);
  const [ref, onClick] = useSlideAnimate();
  switch (layout) {
    case "center":
      return (
        <Section ref={ref} id={id} onClick={onClick}>
          <div className="layout-center">{content}</div>
        </Section>
      );
    case "codepen":
      return (
        <Section
          style={{
            background: `linear-gradient(#111, ${colors.purple})`,
            backgroundAttachment: "fixed",
          }}
          ref={ref}
          id={id}
          onClick={onClick}
        >
          <div style={{ position: "absolute", left: pad[3], top: pad[0] }}>
            <header
              style={{
                width: dim.width - pad[1] - pad[3],
                fontSize: headerFontSize,
                lineHeight: 1,
                marginBottom: headerFontSize * 0.5,
                display: "flex",
                gap: 20,
                alignItems: "self-end",
                justifyContent: "space-between",
              }}
            >
              <a href={`#${id}`} style={{ textDecoration: "none" }}>
                <h1
                  style={{
                    color: "#fff",
                    whiteSpace: "nowrap",
                    fontSize: headerFontSize,
                  }}
                >
                  {title}
                </h1>
              </a>
              <div
                style={{
                  justifyContent: "end",
                  fontSize: "1.5rem",
                  display: "flex",
                  flexWrap: "wrap",
                  lineHeight: 1,
                  color: colors.ltPurple,
                  gap: "7px 20px",
                }}
              >
                {links.map(({ text, href }) => {
                  return (
                    <a rel="noreferrer" target="_blank" href={href}>
                      {text}
                    </a>
                  );
                })}
              </div>
            </header>
            <div
              style={{
                height,
                width,
                transform: `scale(${scale})`,
                transformOrigin: "0 0",
              }}
            >
              <Codepen
                hash={hash}
                user="shalanah"
                height={`${height}px`}
                editable
                preview={false}
                defaultTab={"html,result"}
              />
            </div>
          </div>
        </Section>
      );
    default:
      return (
        <Section ref={ref} onClick={onClick} id={id}>
          {content}
        </Section>
      );
  }
};

export default Slide;
