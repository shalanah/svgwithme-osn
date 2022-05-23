export const lerp = (v0, v1, t) => v0 * (1 - t) + v1 * t;
export const pickRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];
export const clamp = (val, min, max) => Math.min(Math.max(val, min), max);

export const isElDescendentOf = (el, tags = []) => {
  if (tags.includes(el.tagName.toLowerCase())) return true;
  if (["body", "html"].includes(el.tagName.toLowerCase())) return false;
  return isElDescendentOf(el.parentElement, tags);
};

export const textIsSelected = () => {
  // https://stackoverflow.com/a/4713197
  var text = "";
  if (typeof window.getSelection != "undefined") {
    text = window.getSelection().toString();
  } else if (
    typeof document.selection != "undefined" &&
    document.selection.type === "Text"
  ) {
    text = document.selection.createRange().text;
  }
  return text !== "";
};
