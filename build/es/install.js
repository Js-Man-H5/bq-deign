import * as o from "./components/index.js";
const r = (i) => {
  for (const n in o)
    i.use(o[n]);
};
export {
  r as installer
};
