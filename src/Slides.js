import Poll from "./slides/Poll";
import Overview from "./slides/Overview";
import Starting from "./slides/Starting";
import Intro from "./slides/Intro";
import Cover from "./slides/Cover";
import Slide from "./Slide";
import Performance from "./slides/Performance";
import End from "./slides/End";

const slides = [
  { content: <Cover />, layout: "none" },
  { content: <Intro />, layout: "none" },
  { content: <Poll />, title: "Poll Time 📊", layout: "center" },
  { content: <Overview />, title: "Covering", layout: "center" },
  { content: <Starting />, title: "Getting Started", layout: "center" },
  {
    hash: "QWQMOEa",
    title: "Viewport",
    layout: "codepen",
    links: [{ href: "https://mapsvg.com/maps/world", text: "Map Source" }],
  },
  {
    hash: "YzexYwx",
    title: "Preserve Aspect Ratio",
    layout: "codepen",
    links: [
      { href: "https://app.haikei.app/", text: "Svg background generator" },
    ],
  },
  {
    hash: "QWQMapP",
    title: "Shapes",
    layout: "codepen",
    links: [
      {
        href: "https://developer.mozilla.org/en-US/docs/Web/SVG#getting_started_with_svg",
        text: "MDN SVG Guide",
      },
      {
        href: "https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d",
        text: "MDN Heart",
      },
      {
        href: "https://css-tricks.com/svg-path-syntax-illustrated-guide/",
        text: "CSS Tricks Path Syntax",
      },
    ],
  },
  {
    hash: "mdXMpjG",
    title: "Mask + clipPath",
    layout: "codepen",
    links: [
      {
        href: "https://codepen.io/yoksel/full/GRodvp",
        text: "CSS and SVG Masks",
      },
    ],
  },
  {
    hash: "PoQKeLL",
    title: "Color matrix",
    layout: "codepen",
    links: [
      {
        href: "https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feColorMatrix",
        text: "MDN: feColorMatrix",
      },
      {
        href: "https://alistapart.com/article/finessing-fecolormatrix/",
        text: "A List Apart: Finessing feColorMatrix",
      },
      {
        href: "https://codepen.io/lentilz/pen/KybBdg",
        text: "Codepen Dual tone",
      },
      { href: "https://codepen.io/bobannbg/pen/BZrXqz", text: "Gooey SVG" },
    ],
  },
  { content: <Performance />, title: "Performance", layout: "center" },
  { content: <End />, title: "Thank You!", layout: "center" },
];

export const slideLength = slides.length;

const Slides = () => {
  return slides.map(({ layout, ...props }, i) => {
    return <Slide {...props} layout={layout} key={i} id={i + 1} />;
  });
};

export default Slides;
