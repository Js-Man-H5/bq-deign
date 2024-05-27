import { defineComponent as u, ref as i, resolveDirective as m, withDirectives as p, openBlock as v, createElementBlock as _, createElementVNode as w, normalizeStyle as x, unref as g, renderSlot as S, toRefs as B } from "vue";
const k = /* @__PURE__ */ u({
  name: "BqScaleBox",
  __name: "ScaleBox",
  props: {
    width: { default: 1920 },
    height: { default: 1080 }
  },
  setup(r) {
    const e = r, c = i(0), s = i(), d = () => {
      const { width: t, height: l } = B(e), { clientWidth: o, clientHeight: f } = s.value, n = f / l.value, a = o / t.value;
      return a < n ? a : n;
    }, h = () => {
      console.log("执行了"), c.value = d();
    };
    return (t, l) => {
      const o = m("dom-resize");
      return p((v(), _("div", {
        class: "bq-scale-box",
        ref_key: "scaleContainer",
        ref: s
      }, [
        w("div", {
          class: "scale-box",
          ref: "ScaleBox",
          style: x({
            "--scale": g(c),
            width: e.width + "px",
            height: e.height + "px"
          })
        }, [
          S(t.$slots, "default")
        ], 4)
      ])), [
        [o, h]
      ]);
    };
  }
});
export {
  k as default
};
