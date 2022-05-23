import React from "react";
import { colors } from "./colors";
import { pickRandom, lerp } from "./lib";

const getCircle = () => {
  return {
    type: "circle",
    r: lerp(5, 8, Math.random()),
  };
};
const getTriangle = () => {
  return {
    type: "triangle",
    r: 6, // close enough
    s: 6, // side equalateral triangle
  };
};

const getShapes = () => {
  let shapes = [];
  let counts = 0; // for safety sake... shouldn't need
  while (shapes.length < 18) {
    if (counts > 10000) {
      console.error(
        "Mayday, mayday, for some reason randomness is hard today."
      );
      break;
    }
    const i = shapes.length;
    let elem = {
      ...getCircle(),
      // ...(i % 3 !== 0 ? getCircle() : getTriangle()),
      cx: Math.random() * 100,
      cy: Math.random() * 100,
    };
    let overlapping = false;
    for (let j = 0, len = i; j < len; j++) {
      const prev = shapes[j];
      overlapping =
        Math.hypot(prev.x - elem.x, prev.y - elem.y) <= prev.r + elem.r + 6;
      if (overlapping) break;
    }
    if (!overlapping) shapes.push(elem);
    counts++;
  }
  return shapes;
};

function Background() {
  const bgShapes = getShapes();
  return (
    <div className="pos-full">
      <svg
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 100 100"
        style={{ width: "100%", height: "100%" }}
      >
        {bgShapes.map(({ type, ...props }, i) => {
          if (type === "circle") {
            const fill = pickRandom([
              colors.yellow,
              colors.pink,
              colors.softPink,
            ]);
            return <circle key={i} {...props} opacity={1} fill={fill} />;
          }
          // Triangle here
          return <circle key={i} {...props} opacity={1} fill={colors.teal} />;
        })}
      </svg>
    </div>
  );
}

export default Background;
