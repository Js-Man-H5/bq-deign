const c = (t) => (t.install = (r) => {
  const n = t.name;
  n && r.component(n, t);
}, t);
function f(t, r = 1, n = "normal") {
  if (!t && t !== 0)
    return t;
  r < 0 && (r = 0);
  const i = Number(t);
  let e = (i * 100).toFixed(r) + "%";
  return e !== "0.00" && n === "yoy" && i > 0 && (e = "+" + e), e;
}
const o = (t, r = []) => {
  if (t === null || typeof t != "object")
    return t;
  if (Object.prototype.toString.call(t) === "[object Date]")
    return new Date(t);
  if (Object.prototype.toString.call(t) === "[object RegExp]")
    return new RegExp(t);
  if (Object.prototype.toString.call(t) === "[object Error]")
    return new Error(t);
  const n = r.filter((e) => e.origin === t)[0];
  if (n)
    return n.newObj;
  const i = Array.isArray(t) ? [] : {};
  return r.push({
    origin: t,
    newObj: i
  }), Object.keys(t).forEach((e) => {
    typeof t[e] == "object" ? i[e] = o(t[e], r) : i[e] = t[e];
  }), i;
}, l = typeof window < "u";
export {
  o as deepClone,
  l as isWindow,
  f as toPercent,
  c as withInstall
};
