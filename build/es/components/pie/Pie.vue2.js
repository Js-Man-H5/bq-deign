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
    const a = G;
    let g = ["#93DBFF", "#4B84F0", "#FFD982", "#00D7FF", "#49C384"];
    const c = S();
    let f = null, h = null;
    const m = new l.Scene();
    let p = null;
    const O = () => {
      if (c.value) {
        const e = c.value?.clientWidth / c.value.clientHeight, n = Math.min(c.value.clientWidth, c.value.clientHeight) / 2;
        p = new l.OrthographicCamera(-n * e, n * e, n, -n, 1, 1e3), p.position.set(0, 0, 686), p.lookAt(m.position), f && m.remove(f), f = W(), I(), m.add(f), h = new l.WebGLRenderer({ canvas: c.value, antialias: !0, alpha: !0 }), h.setSize(c.value.clientWidth, c.value.clientHeight), h.setClearColor(16777215, 0), h.setPixelRatio(2), h.render(m, p);
      }
    }, W = () => {
      const e = new l.Group();
      return i.value.forEach((t, n) => {
        const r = g[n % g.length], o = a.colorList[n % a.colorList.length], v = x(t.startAngle, t.endAngle, r, "sector");
        e.add(v);
        const u = x(t.startAngle, t.endAngle, o, "bottomSector");
        u.renderOrder = 999, e.add(u);
        const d = H(t.startAngle, t.endAngle);
        e.add(d);
      }), e;
    }, P = X(() => ({
      curveSegments: 40,
      //曲线分段数，数值越高曲线越平滑
      depth: a.depth,
      bevelEnabled: !1,
      bevelSegments: 9,
      steps: 2,
      bevelSize: 0,
      bevelThickness: 0
    })), _ = (e, t, n, r) => {
      const o = new l.Shape();
      return o.moveTo(a.outRadius, 0), o.absarc(0, 0, n, e, t, !0), o.absarc(0, 0, r, t, e, !1), o;
    }, x = (e, t, n, r) => {
      const o = _(e, t, a.innerRadius, a.outRadius), v = D(P.value);
      let u = 0.9;
      r === "bottomSector" && (u = 0.6, v.depth = 1);
      const d = new l.ExtrudeGeometry(o, v), N = new l.MeshBasicMaterial({ color: n, opacity: u, transparent: !0, depthTest: !0 }), b = new l.Mesh(d, N);
      return b.position.set(0, 0, 0), b.renderOrder = 2, b.rotateX(-(k / 180) * Math.PI), b;
    }, H = (e, t) => {
      const n = _(e, t, a.innerRadius + 1, a.outRadius - 1), r = D(P.value), o = new l.ExtrudeGeometry(n, r), v = new l.EdgesGeometry(o, 10), u = new l.MeshStandardMaterial({
        fog: !1,
        color: 16777215,
        emissive: 16777215,
        transparent: !0,
        opacity: 0.5,
        roughness: 0
      }), d = new l.LineSegments(v, u);
      return d.rotateX(-(k / 180) * Math.PI), d.renderOrder = 4, d;
    }, q = function() {
      let e = !1;
      return a.data.length !== a.colorList.length && (console.warn("颜色和数据长度不匹配"), e = !0), e;
    }(), z = 0.3 * Math.PI * 2, s = S(0), i = S([]);
    let C = 0;
    U(() => {
      if (q)
        return !1;
      if (g = a.colorList || g, i.value = D(a.data) || [], i.value.length === 0)
        return;
      C = i.value.reduce((t, n) => typeof n.value == "number" ? t + n.value : t, 0);
      let e = z;
      i.value.forEach((t) => {
        t.startAngle = e, t.endAngle = t.startAngle - t.value / C * Math.PI * 2, e = t.endAngle;
      }), J(() => {
        O(), w();
      });
    });
    const R = S(0);
    let A = 0;
    const w = () => {
      const e = i.value.length;
      if ((s.value % 1 > 0.99 || s.value % 1 < 0.01) && A < 1) {
        R.value = Math.round(s.value) >= e ? 0 : Math.round(s.value), A += 0.01, L && (M = requestAnimationFrame(w));
        return;
      }
      A = 0, s.value += 0.01, s.value > e && (s.value = 0), I(), p && h?.render(m, p), L && (M = requestAnimationFrame(w));
    }, I = () => {
      const e = i.value.length, t = (s.value + 1) * 10 % (e * 10) / 10;
      f?.children.forEach((n, r) => {
        if (Math.floor(s.value) === Math.ceil((r - 2) / 3)) {
          const o = 1 - s.value % 1;
          n.scale.set(1, 1, 1 + o);
        }
        if (Math.floor(t) === Math.ceil((r - 2) / 3)) {
          const o = s.value % 1;
          n.scale.set(1, 1, 1 + o);
        }
      });
    };
    return Y(() => {
      cancelAnimationFrame(M);
    }), (e, t) => (y(), E("div", te, [
      F("div", ne, [
        F("canvas", {
          ref_key: "pieRef",
          ref: c,
          class: "pie-canvas"
        }, null, 512),
        a.centerTooltip ? (y(!0), E($, { key: 0 }, j(a.data, (n, r) => (y(), E("div", {
          key: n.value,
          class: "pie-info",
          style: K({ opacity: T(R) === r ? 1 : 0 })
        }, [
          F("div", ae, B(T(ee)(n.value)), 1),
          F("div", oe, B(n.label), 1)
        ], 4))), 128)) : Q("", !0)
      ]),
      Z(e.$slots, "footer", {}, void 0, !0)
    ]));
  }
});
export {
  se as default
};
