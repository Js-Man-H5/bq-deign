import { defineComponent as c, useAttrs as f, ref as i, onMounted as k, watch as C, openBlock as _, createBlock as x, unref as o, mergeProps as y, withCtx as A, createVNode as s, createElementVNode as U, isRef as N, createTextVNode as w } from "vue";
import { Select as V, Divider as b, Checkbox as B } from "ant-design-vue";
const S = { style: { "padding-left": "11px" } }, D = /* @__PURE__ */ c({
  name: "BqSelectAll",
  __name: "SelectAll",
  emits: ["change"],
  setup(q, { emit: p }) {
    const v = p, e = f(), a = i(!1), d = i(!1), h = c({
      props: {
        vnodes: {
          type: Object,
          required: !0
        }
      },
      render() {
        return this.vnodes;
      }
    }), l = (t, n) => {
      v("change", t, n);
    }, m = (t) => {
      if (e["onUpdate:value"] || console.warn("v-model:value 不存在"), t.target.checked)
        if (e.options && e.options.length > 0) {
          a.value = t.target.value;
          const n = e.options.map((r) => r.value);
          e["onUpdate:value"] && e["onUpdate:value"](n), l(n, e.options);
        } else
          a.value = !1;
      else
        e["onUpdate:value"] && e["onUpdate:value"]([]), a.value = t.target.value, l([], []);
    }, u = () => {
      var t, n;
      d.value = Array.isArray(e.value) && !!e.value.length && e.value.length !== ((t = e.options) == null ? void 0 : t.length), a.value = Array.isArray(e.value) && e.value.length === ((n = e.options) == null ? void 0 : n.length);
    };
    return k(() => {
      u();
    }), C(
      () => e.value,
      () => {
        u();
      },
      { deep: !0 }
    ), (t, n) => (_(), x(o(V), y(t.$attrs, {
      mode: "multiple",
      onChange: l
    }), {
      dropdownRender: A(({ menuNode: r }) => [
        s(o(h), { vnodes: r }, null, 8, ["vnodes"]),
        s(o(b), { style: { margin: "4px 0" } }),
        U("div", S, [
          s(o(B), {
            indeterminate: o(d),
            checked: o(a),
            "onUpdate:checked": n[0] || (n[0] = (g) => N(a) ? a.value = g : null),
            onChange: m
          }, null, 8, ["indeterminate", "checked"]),
          w(" 全选")
        ])
      ]),
      _: 1
    }, 16));
  }
});
export {
  D as default
};
