import { defineComponent as V, ref as S, computed as X, watchEffect as U, nextTick as J, onUnmounted as Y, openBlock as y, createElementBlock as E, createElementVNode as F, Fragment as $, renderList as j, normalizeStyle as K, unref as T, toDisplayString as B, createCommentVNode as Q, renderSlot as Z } from "vue";
import * as l from "three";
import { deepClone as D, isWindow as L, toPercent as ee } from "../../utils/tool.js";
const te = { class: "three-pie-container" }, ne = { class: "three-pie-main" }, ae = { class: "pie-value" }, oe = { class: "pie-label" }, k = 65, se = /* @__PURE__ */ V({
  name: "BqPie",
  __name: "Pie",
  props: {
    data: { default: () => [
      {
        value: 0.6637,
        label: "TM"
      },
      {
        value: 0.2171,
        label: "DOUYIN"
      },
      {
        value: 0.0764,
        label: "JD"
      },
      {
        value: 0.0237,
        label: "VIP"
      },
      {
        value: 0.0191,
        label: "Others"
      }
    ] },
    colorList: { default: () => ["#93DBFF", "#4B84F0", "#FFD982", "#00D7FF", "#49C384"] },
    innerRadius: { default: 60 },
    outRadius: { default: 84 },
    depth: { default: 15 },
    centerTooltip: { type: Boolean, default: !0 }
  },
  setup(G) {
    let M = 0;
    const o = G;
    let g = ["#93DBFF", "#4B84F0", "#FFD982", "#00D7FF", "#49C384"];
    const c = S();
    let u = null, i = null;
    const m = new l.Scene();
    let v = null;
    const O = () => {
      var t;
      if (c.value) {
        const e = ((t = c.value) == null ? void 0 : t.clientWidth) / c.value.clientHeight, a = Math.min(c.value.clientWidth, c.value.clientHeight) / 2;
        v = new l.OrthographicCamera(-a * e, a * e, a, -a, 1, 1e3), v.position.set(0, 0, 686), v.lookAt(m.position), u && m.remove(u), u = W(), I(), m.add(u), i = new l.WebGLRenderer({ canvas: c.value, antialias: !0, alpha: !0 }), i.setSize(c.value.clientWidth, c.value.clientHeight), i.setClearColor(16777215, 0), i.setPixelRatio(2), i.render(m, v);
      }
    }, W = () => {
      const t = new l.Group();
      return d.value.forEach((e, n) => {
        const a = g[n % g.length], r = o.colorList[n % o.colorList.length], f = x(e.startAngle, e.endAngle, a, "sector");
        t.add(f);
        const h = x(e.startAngle, e.endAngle, r, "bottomSector");
        h.renderOrder = 999, t.add(h);
        const p = H(e.startAngle, e.endAngle);
        t.add(p);
      }), t;
    }, P = X(() => ({
      curveSegments: 40,
      //曲线分段数，数值越高曲线越平滑
      depth: o.depth,
      bevelEnabled: !1,
      bevelSegments: 9,
      steps: 2,
      bevelSize: 0,
      bevelThickness: 0
    })), _ = (t, e, n, a) => {
      const r = new l.Shape();
      return r.moveTo(o.outRadius, 0), r.absarc(0, 0, n, t, e, !0), r.absarc(0, 0, a, e, t, !1), r;
    }, x = (t, e, n, a) => {
      const r = _(t, e, o.innerRadius, o.outRadius), f = D(P.value);
      let h = 0.9;
      a === "bottomSector" && (h = 0.6, f.depth = 1);
      const p = new l.ExtrudeGeometry(r, f), N = new l.MeshBasicMaterial({ color: n, opacity: h, transparent: !0, depthTest: !0 }), b = new l.Mesh(p, N);
      return b.position.set(0, 0, 0), b.renderOrder = 2, b.rotateX(-(k / 180) * Math.PI), b;
    }, H = (t, e) => {
      const n = _(t, e, o.innerRadius + 1, o.outRadius - 1), a = D(P.value), r = new l.ExtrudeGeometry(n, a), f = new l.EdgesGeometry(r, 10), h = new l.MeshStandardMaterial({
        fog: !1,
        color: 16777215,
        emissive: 16777215,
        transparent: !0,
        opacity: 0.5,
        roughness: 0
      }), p = new l.LineSegments(f, h);
      return p.rotateX(-(k / 180) * Math.PI), p.renderOrder = 4, p;
    }, q = function() {
      let t = !1;
      return o.data.length !== o.colorList.length && (console.warn("颜色和数据长度不匹配"), t = !0), t;
    }(), z = 0.3 * Math.PI * 2, s = S(0), d = S([]);
    let C = 0;
    U(() => {
      if (q)
        return !1;
      if (g = o.colorList || g, d.value = D(o.data) || [], d.value.length === 0)
        return;
      C = d.value.reduce((e, n) => typeof n.value == "number" ? e + n.value : e, 0);
      let t = z;
      d.value.forEach((e) => {
        e.startAngle = t, e.endAngle = e.startAngle - e.value / C * Math.PI * 2, t = e.endAngle;
      }), J(() => {
        O(), w();
      });
    });
    const R = S(0);
    let A = 0;
    const w = () => {
      const t = d.value.length;
      if ((s.value % 1 > 0.99 || s.value % 1 < 0.01) && A < 1) {
        R.value = Math.round(s.value) >= t ? 0 : Math.round(s.value), A += 0.01, L && (M = requestAnimationFrame(w));
        return;
      }
      A = 0, s.value += 0.01, s.value > t && (s.value = 0), I(), v && (i == null || i.render(m, v)), L && (M = requestAnimationFrame(w));
    }, I = () => {
      const t = d.value.length, e = (s.value + 1) * 10 % (t * 10) / 10;
      u == null || u.children.forEach((n, a) => {
        if (Math.floor(s.value) === Math.ceil((a - 2) / 3)) {
          const r = 1 - s.value % 1;
          n.scale.set(1, 1, 1 + r);
        }
        if (Math.floor(e) === Math.ceil((a - 2) / 3)) {
          const r = s.value % 1;
          n.scale.set(1, 1, 1 + r);
        }
      });
    };
    return Y(() => {
      cancelAnimationFrame(M);
    }), (t, e) => (y(), E("div", te, [
      F("div", ne, [
        F("canvas", {
          ref_key: "pieRef",
          ref: c,
          class: "pie-canvas"
        }, null, 512),
        o.centerTooltip ? (y(!0), E($, { key: 0 }, j(o.data, (n, a) => (y(), E("div", {
          key: n.value,
          class: "pie-info",
          style: K({ opacity: T(R) === a ? 1 : 0 })
        }, [
          F("div", ae, B(T(ee)(n.value)), 1),
          F("div", oe, B(n.label), 1)
        ], 4))), 128)) : Q("", !0)
      ]),
      Z(t.$slots, "footer", {}, void 0, !0)
    ]));
  }
});
export {
  se as default
};
