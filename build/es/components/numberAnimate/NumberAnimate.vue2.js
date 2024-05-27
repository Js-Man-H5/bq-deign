import { defineComponent as x, ref as f, watch as w, nextTick as T, onMounted as S, openBlock as i, createElementBlock as m, normalizeStyle as y, unref as v, Fragment as b, renderList as _, createElementVNode as D, normalizeClass as E, toDisplayString as Y } from "vue";
const B = /* @__PURE__ */ x({
  name: "NumberAnimate",
  __name: "NumberAnimate",
  props: {
    value: { default: 0 },
    math: { default: "ceil" },
    textMaxWidth: { default: "9.6px" }
  },
  setup(k) {
    const s = f(["0"]), n = f(["0"]), N = f("20px"), c = k;
    w(
      () => c.value,
      (e, t) => {
        e !== t && g(e);
      }
    );
    const o = f([]);
    let h = null;
    const d = (e) => {
      let t = e;
      switch (c.math) {
        case "ceil":
          t = Math.ceil(e);
          break;
        case "floor":
          t = Math.floor(e);
          break;
        case "abs":
          t = Math.abs(e);
          break;
        case "none":
          t = e;
          break;
      }
      return t;
    }, g = (e) => {
      const t = d(e).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      for (n.value = s.value, s.value = Array.from(t); n.value.length < s.value.length; )
        n.value.unshift("0");
      const a = s.value.length - n.value.length;
      a < 0 && n.value.splice(0, Math.abs(a)), o.value.forEach((r) => {
        r.style.transform = "translateY(0)", r.style.transition = "transform 0s ease-in-out";
      }), T(() => {
        h && clearTimeout(h), h = setTimeout(() => {
          o.value.forEach((r, l) => {
            const u = M(n.value[l], s.value[l]);
            u ? (r.style.transform = u.transform, r.style.transition = u.transition) : (r.style.transform = "none", r.style.transition = "none");
          });
        }, 50);
      });
    }, p = (e, t) => {
      if (isNaN(Number(t)))
        return [t];
      if (e === t)
        return [t];
      const a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      let r = [];
      return isNaN(Number(e)) ? r = a.filter((l) => l <= Number(t)) : e > t ? (r.push(...a.filter((l) => l >= Number(e))), r.push(...a.filter((l) => l <= Number(t)))) : r.push(...a.filter((l) => l >= Number(e) && l <= Number(t))), r;
    }, M = (e, t) => {
      const a = p(e, t).length;
      return a === 1 ? null : {
        transform: `translateY(-${(a - 1) / a * 100}%)`,
        transition: "transform 1s ease-in-out"
      };
    };
    return S(() => {
      if (g(c.value), o.value.length > 0) {
        const e = window.getComputedStyle(o.value[0]);
        N.value = e.height;
      }
    }), (e, t) => (i(), m("div", {
      class: "bq-animate-number",
      style: y({ height: v(N) }),
      ref: ""
    }, [
      (i(!0), m(b, null, _(v(s), (a, r) => (i(), m("div", {
        key: "num_" + r
      }, [
        D("div", {
          ref_for: !0,
          ref_key: "numDiv",
          ref: o,
          class: E(["num-item", a === "," ? "comma" : ""])
        }, [
          (i(!0), m(b, null, _(p(v(n)[r], a), (l, u) => (i(), m("div", {
            style: y({ width: isNaN(l) ? "" : c.textMaxWidth }),
            key: "div_" + r + "_" + u,
            class: "num-line"
          }, Y(l), 5))), 128))
        ], 2)
      ]))), 128))
    ], 4));
  }
});
export {
  B as default
};
