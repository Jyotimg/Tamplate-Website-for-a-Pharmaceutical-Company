/* clarity-js v0.6.41: https://github.com/microsoft/clarity (License: MIT) */
!(function () {
  "use strict";
  var t = Object.freeze({
      __proto__: null,
      get start() {
        return Mn;
      },
      get stop() {
        return Sn;
      },
      get parse() {
        return xn;
      },
      get getId() {
        return _n;
      },
      get add() {
        return Tn;
      },
      get update() {
        return Dn;
      },
      get sameorigin() {
        return In;
      },
      get iframe() {
        return Cn;
      },
      get getNode() {
        return An;
      },
      get getValue() {
        return Rn;
      },
      get get() {
        return Hn;
      },
      get lookup() {
        return Yn;
      },
      get has() {
        return Wn;
      },
      get updates() {
        return Xn;
      },
    }),
    e = Object.freeze({
      __proto__: null,
      get track() {
        return pa;
      },
      get start() {
        return ya;
      },
      get queue() {
        return wa;
      },
      get stop() {
        return ka;
      },
    }),
    n = Object.freeze({
      __proto__: null,
      get data() {
        return za;
      },
      get keys() {
        return La;
      },
      get fragments() {
        return Ha;
      },
      get start() {
        return Ya;
      },
      get clone() {
        return Wa;
      },
      get compute() {
        return Xa;
      },
      get reset() {
        return qa;
      },
      get update() {
        return Pa;
      },
      get stop() {
        return Ua;
      },
    }),
    a = Object.freeze({
      __proto__: null,
      get data() {
        return ja;
      },
      get start() {
        return Ga;
      },
      get check() {
        return Za;
      },
      get trigger() {
        return Ka;
      },
      get compute() {
        return Qa;
      },
      get stop() {
        return $a;
      },
    }),
    r = Object.freeze({
      __proto__: null,
      get data() {
        return tr;
      },
      get updates() {
        return er;
      },
      get start() {
        return nr;
      },
      get stop() {
        return ar;
      },
      get log() {
        return rr;
      },
      get compute() {
        return ir;
      },
      get reset() {
        return or;
      },
    }),
    i = Object.freeze({
      __proto__: null,
      get data() {
        return ur;
      },
      get callbacks() {
        return cr;
      },
      get start() {
        return lr;
      },
      get stop() {
        return dr;
      },
      get metadata() {
        return fr;
      },
      get id() {
        return hr;
      },
      get consent() {
        return pr;
      },
      get clear() {
        return vr;
      },
      get save() {
        return gr;
      },
    }),
    o = Object.freeze({
      __proto__: null,
      get data() {
        return Sr;
      },
      get start() {
        return Nr;
      },
      get stop() {
        return xr;
      },
      get envelope() {
        return _r;
      },
    }),
    u = {
      projectId: null,
      delay: 1e3,
      lean: !1,
      track: !0,
      content: !0,
      mask: [],
      unmask: [],
      regions: [],
      extract: [],
      cookies: [],
      fraud: [],
      report: null,
      upload: null,
      fallback: null,
      upgrade: null,
      action: null,
    };
  function c(t) {
    return window.Zone && "__symbol__" in window.Zone
      ? window.Zone.__symbol__(t)
      : t;
  }
  var s = 0;
  function l(t) {
    return (
      void 0 === t && (t = null),
      (t = t || performance.now()),
      Math.max(Math.round(t - s), 0)
    );
  }
  var d = "0.6.41";
  function f(t) {
    for (var e = 5381, n = e, a = 0; a < t.length; a += 2) {
      if (((e = ((e << 5) + e) ^ t.charCodeAt(a)), a + 1 < t.length))
        n = ((n << 5) + n) ^ t.charCodeAt(a + 1);
    }
    return Math.abs(e + 11579 * n).toString(36);
  }
  var h = null,
    p = null,
    v = !1;
  function g() {
    v &&
      (h = {
        time: l(),
        event: 4,
        data: {
          visible: p.visible,
          docWidth: p.docWidth,
          docHeight: p.docHeight,
          screenWidth: p.screenWidth,
          screenHeight: p.screenHeight,
          scrollX: p.scrollX,
          scrollY: p.scrollY,
          pointerX: p.pointerX,
          pointerY: p.pointerY,
          activityTime: p.activityTime,
        },
      }),
      (p = p || {
        visible: 1,
        docWidth: 0,
        docHeight: 0,
        screenWidth: 0,
        screenHeight: 0,
        scrollX: 0,
        scrollY: 0,
        pointerX: 0,
        pointerY: 0,
        activityTime: 0,
      });
  }
  function m(t, e, n) {
    switch (t) {
      case 8:
        (p.docWidth = e), (p.docHeight = n);
        break;
      case 11:
        (p.screenWidth = e), (p.screenHeight = n);
        break;
      case 10:
        (p.scrollX = e), (p.scrollY = n);
        break;
      default:
        (p.pointerX = e), (p.pointerY = n);
    }
    v = !0;
  }
  function b(t) {
    p.activityTime = t;
  }
  function y(t, e) {
    (p.visible = "visible" === e ? 1 : 0), p.visible || b(t), (v = !0);
  }
  function w() {
    v && Ja(4);
  }
  var k = Object.freeze({
      __proto__: null,
      get state() {
        return h;
      },
      start: function () {
        (v = !1), g();
      },
      reset: g,
      track: m,
      activity: b,
      visibility: y,
      compute: w,
      stop: function () {
        g();
      },
    }),
    E = null;
  function O(t, e) {
    Vr() &&
      t &&
      e &&
      "string" == typeof t &&
      "string" == typeof e &&
      t.length < 255 &&
      e.length < 255 &&
      ((E = { key: t, value: e }), Ja(24));
  }
  var M,
    S = null,
    N = null;
  function x(t) {
    t in S || (S[t] = 0), t in N || (N[t] = 0), S[t]++, N[t]++;
  }
  function _(t, e) {
    null !== e &&
      (t in S || (S[t] = 0), t in N || (N[t] = 0), (S[t] += e), (N[t] += e));
  }
  function T(t, e) {
    null !== e &&
      !1 === isNaN(e) &&
      (t in S || (S[t] = 0),
      (e > S[t] || 0 === S[t]) && ((N[t] = e), (S[t] = e)));
  }
  function D(t, e, n) {
    return window.setTimeout(Ir(t), e, n);
  }
  function I(t) {
    return window.clearTimeout(t);
  }
  var C = 0,
    j = 0,
    z = null;
  function L() {
    z && I(z), (z = D(A, j)), (C = l());
  }
  function A() {
    var t = l();
    (M = { gap: t - C }),
      Ja(25),
      M.gap < 3e5
        ? (z = D(A, j))
        : Pr &&
          (O("clarity", "suspend"),
          ci(),
          ["mousemove", "touchstart"].forEach(function (t) {
            return jr(document, t, Jr);
          }),
          ["resize", "scroll", "pageshow"].forEach(function (t) {
            return jr(window, t, Jr);
          }));
  }
  var R = Object.freeze({
      __proto__: null,
      get data() {
        return M;
      },
      start: function () {
        (j = 6e4), (C = 0);
      },
      reset: L,
      stop: function () {
        I(z), (C = 0), (j = 0);
      },
    }),
    H = null;
  function Y(t, e) {
    if (t in H) {
      var n = H[t],
        a = n[n.length - 1];
      e - a[0] > 100 ? H[t].push([e, 0]) : (a[1] = e - a[0]);
    } else H[t] = [[e, 0]];
  }
  function W() {
    Ja(36);
  }
  function X() {
    H = {};
  }
  var q = Object.freeze({
      __proto__: null,
      get data() {
        return H;
      },
      start: function () {
        H = {};
      },
      stop: function () {
        H = {};
      },
      track: Y,
      compute: W,
      reset: X,
    }),
    P = null;
  function U(t) {
    Vr() &&
      u.lean &&
      ((u.lean = !1), (P = { key: t }), gr(), u.upgrade && u.upgrade(t), Ja(3));
  }
  var B = Object.freeze({
      __proto__: null,
      get data() {
        return P;
      },
      start: function () {
        !u.lean && u.upgrade && u.upgrade("Config"), (P = null);
      },
      upgrade: U,
      stop: function () {
        P = null;
      },
    }),
    V = null;
  function F(t, e) {
    G(t, "string" == typeof e ? [e] : e);
  }
  function J(t, e, n) {
    void 0 === e && (e = null),
      void 0 === n && (n = null),
      G("userId", [t]),
      G("sessionId", [e]),
      G("pageId", [n]);
  }
  function G(t, e) {
    if (Vr() && t && e && "string" == typeof t && t.length < 255) {
      for (var n = (t in V) ? V[t] : [], a = 0; a < e.length; a++)
        "string" == typeof e[a] && e[a].length < 255 && n.push(e[a]);
      V[t] = n;
    }
  }
  function Z() {
    Ja(34);
  }
  function K() {
    V = {};
  }
  function Q(t, e, n, a) {
    return new (n || (n = Promise))(function (r, i) {
      function o(t) {
        try {
          c(a.next(t));
        } catch (t) {
          i(t);
        }
      }
      function u(t) {
        try {
          c(a.throw(t));
        } catch (t) {
          i(t);
        }
      }
      function c(t) {
        var e;
        t.done
          ? r(t.value)
          : ((e = t.value),
            e instanceof n
              ? e
              : new n(function (t) {
                  t(e);
                })).then(o, u);
      }
      c((a = a.apply(t, e || [])).next());
    });
  }
  function $(t, e) {
    var n,
      a,
      r,
      i,
      o = {
        label: 0,
        sent: function () {
          if (1 & r[0]) throw r[1];
          return r[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (i = { next: u(0), throw: u(1), return: u(2) }),
      "function" == typeof Symbol &&
        (i[Symbol.iterator] = function () {
          return this;
        }),
      i
    );
    function u(i) {
      return function (u) {
        return (function (i) {
          if (n) throw new TypeError("Generator is already executing.");
          for (; o; )
            try {
              if (
                ((n = 1),
                a &&
                  (r =
                    2 & i[0]
                      ? a.return
                      : i[0]
                      ? a.throw || ((r = a.return) && r.call(a), 0)
                      : a.next) &&
                  !(r = r.call(a, i[1])).done)
              )
                return r;
              switch (((a = 0), r && (i = [2 & i[0], r.value]), i[0])) {
                case 0:
                case 1:
                  r = i;
                  break;
                case 4:
                  return o.label++, { value: i[1], done: !1 };
                case 5:
                  o.label++, (a = i[1]), (i = [0]);
                  continue;
                case 7:
                  (i = o.ops.pop()), o.trys.pop();
                  continue;
                default:
                  if (
                    !((r = o.trys),
                    (r = r.length > 0 && r[r.length - 1]) ||
                      (6 !== i[0] && 2 !== i[0]))
                  ) {
                    o = 0;
                    continue;
                  }
                  if (3 === i[0] && (!r || (i[1] > r[0] && i[1] < r[3]))) {
                    o.label = i[1];
                    break;
                  }
                  if (6 === i[0] && o.label < r[1]) {
                    (o.label = r[1]), (r = i);
                    break;
                  }
                  if (r && o.label < r[2]) {
                    (o.label = r[2]), o.ops.push(i);
                    break;
                  }
                  r[2] && o.ops.pop(), o.trys.pop();
                  continue;
              }
              i = e.call(t, o);
            } catch (t) {
              (i = [6, t]), (a = 0);
            } finally {
              n = r = 0;
            }
          if (5 & i[0]) throw i[1];
          return { value: i[0] ? i[1] : void 0, done: !0 };
        })([i, u]);
      };
    }
  }
  var tt = "CompressionStream" in window;
  function et(t) {
    return Q(this, void 0, void 0, function () {
      var e, n;
      return $(this, function (a) {
        switch (a.label) {
          case 0:
            return (
              a.trys.push([0, 3, , 4]),
              tt
                ? ((e = new ReadableStream({
                    start: function (e) {
                      return Q(this, void 0, void 0, function () {
                        return $(this, function (n) {
                          return e.enqueue(t), e.close(), [2];
                        });
                      });
                    },
                  })
                    .pipeThrough(new TextEncoderStream())
                    .pipeThrough(new window.CompressionStream("gzip"))),
                  (n = Uint8Array.bind),
                  [4, nt(e)])
                : [3, 2]
            );
          case 1:
            return [2, new (n.apply(Uint8Array, [void 0, a.sent()]))()];
          case 2:
            return [3, 4];
          case 3:
            return a.sent(), [3, 4];
          case 4:
            return [2, null];
        }
      });
    });
  }
  function nt(t) {
    return Q(this, void 0, void 0, function () {
      var e, n, a, r, i;
      return $(this, function (o) {
        switch (o.label) {
          case 0:
            (e = t.getReader()), (n = []), (a = !1), (r = []), (o.label = 1);
          case 1:
            return a ? [3, 3] : [4, e.read()];
          case 2:
            return (
              (i = o.sent()),
              (a = i.done),
              (r = i.value),
              a ? [2, n] : (n.push.apply(n, r), [3, 1])
            );
          case 3:
            return [2, n];
        }
      });
    });
  }
  var at = [
    k,
    r,
    Object.freeze({
      __proto__: null,
      get data() {
        return V;
      },
      start: function () {
        K();
      },
      set: F,
      identify: J,
      compute: Z,
      reset: K,
      stop: function () {
        K();
      },
    }),
    a,
    q,
    i,
    o,
    e,
    R,
    B,
    n,
  ];
  function rt() {
    (S = {}),
      (N = {}),
      x(5),
      at.forEach(function (t) {
        return Ir(t.start)();
      });
  }
  function it() {
    at
      .slice()
      .reverse()
      .forEach(function (t) {
        return Ir(t.stop)();
      }),
      (S = {}),
      (N = {});
  }
  function ot() {
    Z(), w(), ir(), Ja(0), W(), Qa(), Xa();
  }
  var ut = /\S/gi,
    ct = !0,
    st = null,
    lt = null,
    dt = null;
  function ft(t, e, n, a) {
    if ((void 0 === a && (a = !1), t))
      switch (n) {
        case 0:
          return t;
        case 1:
          switch (e) {
            case "*T":
            case "value":
            case "placeholder":
            case "click":
            case "input":
              return (function (t) {
                var e = -1,
                  n = 0,
                  a = !1,
                  r = !1,
                  i = !1,
                  o = null;
                if (ct && null === st)
                  try {
                    (st = new RegExp("\\p{N}", "gu")),
                      (lt = new RegExp("\\p{L}", "gu")),
                      (dt = new RegExp("\\p{Sc}", "gu"));
                  } catch (t) {
                    ct = !1;
                  }
                for (var u = 0; u < t.length; u++) {
                  var c = t.charCodeAt(u);
                  if (
                    ((a = a || (c >= 48 && c <= 57)),
                    (r = r || 64 === c),
                    (i = 9 === c || 10 === c || 13 === c || 32 === c),
                    0 === u || u === t.length - 1 || i)
                  ) {
                    if (a || r) {
                      null === o && (o = t.split(""));
                      var s = t.substring(e + 1, i ? u : u + 1);
                      (s =
                        ct && null !== dt
                          ? s.match(dt)
                            ? s
                            : s.replace(lt, "▪").replace(st, "▫")
                          : ht(s)),
                        o.splice(e + 1 - n, s.length, s),
                        (n += s.length - 1);
                    }
                    i && ((a = !1), (r = !1), (e = u));
                  }
                }
                return o ? o.join("") : t;
              })(t);
          }
          return t;
        case 2:
        case 3:
          switch (e) {
            case "*T":
              return a
                ? (function (t) {
                    var e = t.trim();
                    if (e.length > 0) {
                      var n = e[0],
                        a = t.indexOf(n),
                        r = t.substr(0, a),
                        i = t.substr(a + e.length);
                      return ""
                        .concat(r)
                        .concat(e.length.toString(36))
                        .concat(i);
                    }
                    return t;
                  })(t)
                : ht(t);
            case "src":
            case "srcset":
            case "title":
            case "alt":
              return 3 === n ? "" : t;
            case "value":
            case "click":
            case "input":
              return (function (t) {
                for (
                  var e = 5 * (Math.floor(t.length / 5) + 1), n = "", a = 0;
                  a < e;
                  a++
                )
                  n += a > 0 && a % 5 == 0 ? " " : "•";
                return n;
              })(t);
            case "placeholder":
              return ht(t);
          }
      }
    return t;
  }
  function ht(t) {
    return t.replace(ut, "•");
  }
  var pt,
    vt = [];
  function gt(t, e, n) {
    null !== t &&
      n &&
      n.length >= 5 &&
      ((pt = { id: t, target: e, hash: f(n) }),
      vt.indexOf(pt.hash) < 0 && (vt.push(pt.hash), Ta(41)));
  }
  var mt = "load,active,fixed,visible,focus,show,collaps,animat".split(","),
    bt = {};
  function yt(t, e) {
    var n = t.attributes,
      a = t.prefix ? t.prefix[e] : null,
      r =
        0 === e
          ? "".concat("~").concat(t.position - 1)
          : ":nth-of-type(".concat(t.position, ")");
    switch (t.tag) {
      case "STYLE":
      case "TITLE":
      case "LINK":
      case "META":
      case "*T":
      case "*D":
        return "";
      case "HTML":
        return "HTML";
      default:
        if (null === a) return "";
        (a = "".concat(a).concat(">")),
          (t.tag =
            0 === t.tag.indexOf("svg:") ? t.tag.substr("svg:".length) : t.tag);
        var i = "".concat(a).concat(t.tag).concat(r),
          o = "id" in n && n.id.length > 0 ? n.id : null,
          u =
            "BODY" !== t.tag && "class" in n && n.class.length > 0
              ? n.class
                  .trim()
                  .split(/\s+/)
                  .filter(function (t) {
                    return wt(t);
                  })
                  .join(".")
              : null;
        if (u && u.length > 0)
          if (0 === e) {
            var c = ""
              .concat(
                (function (t) {
                  for (var e = t.split(">"), n = 0; n < e.length; n++) {
                    var a = e[n].indexOf("~"),
                      r = e[n].indexOf(".");
                    e[n] = e[n].substring(
                      0,
                      r > 0 ? r : a > 0 ? a : e[n].length
                    );
                  }
                  return e.join(">");
                })(a)
              )
              .concat(t.tag)
              .concat(".")
              .concat(u);
            c in bt || (bt[c] = []),
              bt[c].indexOf(t.id) < 0 && bt[c].push(t.id),
              (i = "".concat(c).concat("~").concat(bt[c].indexOf(t.id)));
          } else i = "".concat(a).concat(t.tag, ".").concat(u).concat(r);
        return (
          (i =
            o && wt(o)
              ? ""
                  .concat(
                    (function (t) {
                      var e = t.lastIndexOf("*S"),
                        n = t.lastIndexOf("".concat("iframe:").concat("HTML")),
                        a = Math.max(e, n);
                      if (a < 0) return "";
                      return t.substring(0, t.indexOf(">", a) + 1);
                    })(a)
                  )
                  .concat("#")
                  .concat(o)
              : i),
          i
        );
    }
  }
  function wt(t) {
    if (!t) return !1;
    if (
      mt.some(function (e) {
        return t.toLowerCase().indexOf(e) >= 0;
      })
    )
      return !1;
    for (var e = 0; e < t.length; e++) {
      var n = t.charCodeAt(e);
      if (n >= 48 && n <= 57) return !1;
    }
    return !0;
  }
  var kt = {},
    Et = [],
    Ot = null,
    Mt = null,
    St = null;
  function Nt() {
    (kt = {}), (Et = []), (Ot = null), (Mt = null);
  }
  function xt(t, e) {
    return (
      void 0 === e && (e = 0),
      Q(this, void 0, void 0, function () {
        var n, a, r;
        return $(this, function (i) {
          for (n = 0, a = Et; n < a.length; n++)
            if (a[n].task === t) return [2];
          return (
            (r = new Promise(function (n) {
              Et[1 === e ? "unshift" : "push"]({
                task: t,
                resolve: n,
                id: hr(),
              });
            })),
            null === Ot && null === Mt && _t(),
            [2, r]
          );
        });
      })
    );
  }
  function _t() {
    var t = Et.shift();
    t &&
      ((Ot = t),
      t
        .task()
        .then(function () {
          t.id === hr() && (t.resolve(), (Ot = null), _t());
        })
        .catch(function (e) {
          t.id === hr() &&
            (e && Ca(0, 1, e.name, e.message, e.stack), (Ot = null), _t());
        }));
  }
  function Tt(t) {
    var e = jt(t);
    return e in kt
      ? performance.now() - kt[e].start > kt[e].yield
        ? 0
        : 1
      : 2;
  }
  function Dt(t) {
    kt[jt(t)] = { start: performance.now(), calls: 0, yield: 30 };
  }
  function It(t) {
    var e = performance.now(),
      n = jt(t),
      a = e - kt[n].start;
    _(t.cost, a), x(5), kt[n].calls > 0 && _(4, a);
  }
  function Ct(t) {
    return Q(this, void 0, void 0, function () {
      var e, n;
      return $(this, function (a) {
        switch (a.label) {
          case 0:
            return (e = jt(t)) in kt ? (It(t), (n = kt[e]), [4, zt()]) : [3, 2];
          case 1:
            (n.yield = a.sent().timeRemaining()),
              (function (t) {
                var e = jt(t);
                if (kt && kt[e]) {
                  var n = kt[e].calls,
                    a = kt[e].yield;
                  Dt(t), (kt[e].calls = n + 1), (kt[e].yield = a);
                }
              })(t),
              (a.label = 2);
          case 2:
            return [2, e in kt ? 1 : 2];
        }
      });
    });
  }
  function jt(t) {
    return "".concat(t.id, ".").concat(t.cost);
  }
  function zt() {
    return Q(this, void 0, void 0, function () {
      return $(this, function (t) {
        switch (t.label) {
          case 0:
            return Mt ? [4, Mt] : [3, 2];
          case 1:
            t.sent(), (t.label = 2);
          case 2:
            return [
              2,
              new Promise(function (t) {
                At(t, { timeout: 5e3 });
              }),
            ];
        }
      });
    });
  }
  var Lt,
    At =
      window.requestIdleCallback ||
      function (t, e) {
        var n = performance.now(),
          a = new MessageChannel(),
          r = a.port1,
          i = a.port2;
        (r.onmessage = function (a) {
          var r = performance.now(),
            o = r - n,
            u = r - a.data;
          if (u > 30 && o < e.timeout)
            requestAnimationFrame(function () {
              i.postMessage(r);
            });
          else {
            var c = o > e.timeout;
            t({
              didTimeout: c,
              timeRemaining: function () {
                return c ? 30 : Math.max(0, 30 - u);
              },
            });
          }
        }),
          requestAnimationFrame(function () {
            i.postMessage(performance.now());
          });
      };
  function Rt(t, e, n) {
    return (
      void 0 === e && (e = null),
      void 0 === n && (n = null),
      Q(this, void 0, void 0, function () {
        var a, r, i, o, c, s, d, f, h, p, v, g, y, w, k, E, O, M, S, N, x, _;
        return $(this, function (T) {
          switch (T.label) {
            case 0:
              switch (((a = n || l()), (r = [a, t]), t)) {
                case 8:
                  return [3, 1];
                case 7:
                  return [3, 2];
                case 5:
                case 6:
                  return [3, 3];
              }
              return [3, 10];
            case 1:
              return (
                (i = Lt),
                r.push(i.width),
                r.push(i.height),
                m(t, i.width, i.height),
                wa(r),
                [3, 10]
              );
            case 2:
              for (o = 0, c = Un; o < c.length; o++)
                (s = c[o]),
                  (r = [s.time, 7]).push(s.data.id),
                  r.push(s.data.interaction),
                  r.push(s.data.visibility),
                  r.push(s.data.name),
                  wa(r);
              return na(), [3, 10];
            case 3:
              if (2 === Tt(e)) return [3, 10];
              if (!((d = Xn()).length > 0)) return [3, 9];
              (f = 0), (h = d), (T.label = 4);
            case 4:
              return f < h.length
                ? ((p = h[f]), 0 !== (v = Tt(e)) ? [3, 6] : [4, Ct(e)])
                : [3, 8];
            case 5:
              (v = T.sent()), (T.label = 6);
            case 6:
              if (2 === v) return [3, 8];
              for (
                g = p.data,
                  y = p.metadata.active,
                  w = p.metadata.suspend,
                  k = p.metadata.privacy,
                  E = (function (t) {
                    var e = t.metadata.privacy;
                    return "*T" === t.data.tag && !(0 === e || 1 === e);
                  })(p),
                  O = 0,
                  M = y ? ["tag", "attributes", "value"] : ["tag"];
                O < M.length;
                O++
              )
                if (g[(S = M[O])])
                  switch (S) {
                    case "tag":
                      (N = Ht(p)),
                        (x = E ? -1 : 1),
                        r.push(p.id * x),
                        p.parent && y && r.push(p.parent),
                        p.previous && y && r.push(p.previous),
                        r.push(w ? "*M" : g[S]),
                        N &&
                          2 === N.length &&
                          r.push(
                            ""
                              .concat("#")
                              .concat(Yt(N[0]), ".")
                              .concat(Yt(N[1]))
                          );
                      break;
                    case "attributes":
                      for (_ in g[S])
                        void 0 !== g[S][_] && r.push(Wt(_, g[S][_], k));
                      break;
                    case "value":
                      gt(p.metadata.fraud, p.id, g[S]),
                        r.push(ft(g[S], g.tag, k, E));
                  }
              T.label = 7;
            case 7:
              return f++, [3, 4];
            case 8:
              6 === t && b(a),
                wa(
                  (function (t) {
                    for (
                      var e = [], n = {}, a = 0, r = null, i = 0;
                      i < t.length;
                      i++
                    )
                      if ("string" == typeof t[i]) {
                        var o = t[i],
                          u = n[o] || -1;
                        u >= 0
                          ? r
                            ? r.push(u)
                            : ((r = [u]), e.push(r), a++)
                          : ((r = null), e.push(o), (n[o] = a++));
                      } else (r = null), e.push(t[i]), a++;
                    return e;
                  })(r),
                  !u.lean
                ),
                (T.label = 9);
            case 9:
              return [3, 10];
            case 10:
              return [2];
          }
        });
      })
    );
  }
  function Ht(t) {
    if (null !== t.metadata.size && 0 === t.metadata.size.length) {
      var e = An(t.id);
      if (e)
        return [
          Math.floor(100 * e.offsetWidth),
          Math.floor(100 * e.offsetHeight),
        ];
    }
    return t.metadata.size;
  }
  function Yt(t) {
    return t.toString(36);
  }
  function Wt(t, e, n) {
    return "".concat(t, "=").concat(ft(e, t, n));
  }
  function Xt() {
    Lt = null;
  }
  function qt() {
    var t = document.body,
      e = document.documentElement,
      n = t ? t.clientWidth : null,
      a = t ? t.scrollWidth : null,
      r = t ? t.offsetWidth : null,
      i = e ? e.clientWidth : null,
      o = e ? e.scrollWidth : null,
      u = e ? e.offsetWidth : null,
      c = Math.max(n, a, r, i, o, u),
      s = t ? t.clientHeight : null,
      l = t ? t.scrollHeight : null,
      d = t ? t.offsetHeight : null,
      f = e ? e.clientHeight : null,
      h = e ? e.scrollHeight : null,
      p = e ? e.offsetHeight : null,
      v = Math.max(s, l, d, f, h, p);
    (null !== Lt && c === Lt.width && v === Lt.height) ||
      null === c ||
      null === v ||
      ((Lt = { width: c, height: v }), Rt(8));
  }
  function Pt(t) {
    var e = { x: 0, y: 0 };
    if (t && t.offsetParent)
      do {
        var n = t.offsetParent,
          a = null === n ? Cn(t.ownerDocument) : null;
        (e.x += t.offsetLeft), (e.y += t.offsetTop), (t = a || n);
      } while (t);
    return e;
  }
  var Ut = ["input", "textarea", "radio", "button", "canvas"],
    Bt = [];
  function Vt(t) {
    jr(t, "click", Ft.bind(this, 9, t), !0);
  }
  function Ft(t, e, n) {
    var a = Cn(e),
      r = a ? a.contentDocument.documentElement : document.documentElement,
      i =
        "pageX" in n
          ? Math.round(n.pageX)
          : "clientX" in n
          ? Math.round(n.clientX + r.scrollLeft)
          : null,
      o =
        "pageY" in n
          ? Math.round(n.pageY)
          : "clientY" in n
          ? Math.round(n.clientY + r.scrollTop)
          : null;
    if (a) {
      var u = Pt(a);
      (i = i ? i + Math.round(u.x) : i), (o = o ? o + Math.round(u.y) : o);
    }
    var c = aa(n),
      s = (function (t) {
        for (; t && t !== document; ) {
          if (t.nodeType === Node.ELEMENT_NODE) {
            var e = t;
            if ("A" === e.tagName) return e;
          }
          t = t.parentNode;
        }
        return null;
      })(c),
      d = (function (t) {
        var e = null,
          n = document.documentElement;
        if ("function" == typeof t.getBoundingClientRect) {
          var a = t.getBoundingClientRect();
          a &&
            a.width > 0 &&
            a.height > 0 &&
            (e = {
              x: Math.floor(
                a.left +
                  ("pageXOffset" in window ? window.pageXOffset : n.scrollLeft)
              ),
              y: Math.floor(
                a.top +
                  ("pageYOffset" in window ? window.pageYOffset : n.scrollTop)
              ),
              w: Math.floor(a.width),
              h: Math.floor(a.height),
            });
        }
        return e;
      })(c);
    0 === n.detail &&
      d &&
      ((i = Math.round(d.x + d.w / 2)), (o = Math.round(d.y + d.h / 2)));
    var f = d ? Math.max(Math.floor(((i - d.x) / d.w) * 32767), 0) : 0,
      h = d ? Math.max(Math.floor(((o - d.y) / d.h) * 32767), 0) : 0;
    null !== i &&
      null !== o &&
      (Bt.push({
        time: l(),
        event: t,
        data: {
          target: c,
          x: i,
          y: o,
          eX: f,
          eY: h,
          button: n.button,
          reaction: Gt(c),
          context: Zt(s),
          text: Jt(c),
          link: s ? s.href : null,
          hash: null,
          trust: n.isTrusted ? 1 : 0,
        },
      }),
      xt(ia.bind(this, t)));
  }
  function Jt(t) {
    var e = null;
    if (t) {
      var n = t.textContent || t.value || t.alt;
      n && (e = n.trim().replace(/\s+/g, " ").substr(0, 25));
    }
    return e;
  }
  function Gt(t) {
    if (t.nodeType === Node.ELEMENT_NODE) {
      var e = t.tagName.toLowerCase();
      if (Ut.indexOf(e) >= 0) return 0;
    }
    return 1;
  }
  function Zt(t) {
    if (t && t.hasAttribute("target"))
      switch (t.getAttribute("target")) {
        case "_blank":
          return 1;
        case "_parent":
          return 2;
        case "_top":
          return 3;
      }
    return 0;
  }
  function Kt() {
    Bt = [];
  }
  var Qt = [];
  function $t(t, e) {
    Qt.push({ time: l(), event: 38, data: { target: aa(e), action: t } }),
      xt(ia.bind(this, 38));
  }
  function te() {
    Qt = [];
  }
  var ee = null,
    ne = [];
  function ae(t) {
    var e = aa(t),
      n = Hn(e);
    if (e && e.type && n) {
      var a = e.value;
      switch (e.type) {
        case "radio":
        case "checkbox":
          a = e.checked ? "true" : "false";
      }
      var r = { target: e, value: a };
      ne.length > 0 && ne[ne.length - 1].data.target === r.target && ne.pop(),
        ne.push({ time: l(), event: 27, data: r }),
        I(ee),
        (ee = D(re, 500, 27));
    }
  }
  function re(t) {
    xt(ia.bind(this, t));
  }
  function ie() {
    ne = [];
  }
  var oe,
    ue = [],
    ce = null;
  function se(t, e, n) {
    var a = Cn(e),
      r = a ? a.contentDocument.documentElement : document.documentElement,
      i =
        "pageX" in n
          ? Math.round(n.pageX)
          : "clientX" in n
          ? Math.round(n.clientX + r.scrollLeft)
          : null,
      o =
        "pageY" in n
          ? Math.round(n.pageY)
          : "clientY" in n
          ? Math.round(n.clientY + r.scrollTop)
          : null;
    if (a) {
      var u = Pt(a);
      (i = i ? i + Math.round(u.x) : i), (o = o ? o + Math.round(u.y) : o);
    }
    null !== i &&
      null !== o &&
      de({ time: l(), event: t, data: { target: aa(n), x: i, y: o } });
  }
  function le(t, e, n) {
    var a = Cn(e),
      r = a ? a.contentDocument.documentElement : document.documentElement,
      i = n.changedTouches,
      o = l();
    if (i)
      for (var u = 0; u < i.length; u++) {
        var c = i[u],
          s = "clientX" in c ? Math.round(c.clientX + r.scrollLeft) : null,
          d = "clientY" in c ? Math.round(c.clientY + r.scrollTop) : null;
        (s = s && a ? s + Math.round(a.offsetLeft) : s),
          (d = d && a ? d + Math.round(a.offsetTop) : d),
          null !== s &&
            null !== d &&
            de({ time: o, event: t, data: { target: aa(n), x: s, y: d } });
      }
  }
  function de(t) {
    switch (t.event) {
      case 12:
      case 15:
      case 19:
        var e = ue.length,
          n = e > 1 ? ue[e - 2] : null;
        n &&
          (function (t, e) {
            var n = t.data.x - e.data.x,
              a = t.data.y - e.data.y,
              r = Math.sqrt(n * n + a * a),
              i = e.time - t.time,
              o = e.data.target === t.data.target;
            return e.event === t.event && o && r < 20 && i < 25;
          })(n, t) &&
          ue.pop(),
          ue.push(t),
          I(ce),
          (ce = D(fe, 500, t.event));
        break;
      default:
        ue.push(t), fe(t.event);
    }
  }
  function fe(t) {
    xt(ia.bind(this, t));
  }
  function he() {
    ue = [];
  }
  function pe() {
    var t = document.documentElement;
    (oe = {
      width:
        t && "clientWidth" in t
          ? Math.min(t.clientWidth, window.innerWidth)
          : window.innerWidth,
      height:
        t && "clientHeight" in t
          ? Math.min(t.clientHeight, window.innerHeight)
          : window.innerHeight,
    }),
      ia(11);
  }
  function ve() {
    oe = null;
  }
  var ge = [],
    me = null;
  function be(t) {
    void 0 === t && (t = null);
    var e = window,
      n = document.documentElement,
      a = t ? aa(t) : n;
    if (a && a.nodeType === Node.DOCUMENT_NODE) {
      var r = Cn(a);
      (e = r ? r.contentWindow : e), (a = n = a.documentElement);
    }
    var i =
        a === n && "pageXOffset" in e
          ? Math.round(e.pageXOffset)
          : Math.round(a.scrollLeft),
      o =
        a === n && "pageYOffset" in e
          ? Math.round(e.pageYOffset)
          : Math.round(a.scrollTop),
      u = { time: l(), event: 10, data: { target: a, x: i, y: o } };
    if ((null !== t || 0 !== i || 0 !== o) && null !== i && null !== o) {
      var c = ge.length,
        s = c > 1 ? ge[c - 2] : null;
      s &&
        (function (t, e) {
          var n = t.data.x - e.data.x,
            a = t.data.y - e.data.y;
          return n * n + a * a < 400 && e.time - t.time < 25;
        })(s, u) &&
        ge.pop(),
        ge.push(u),
        I(me),
        (me = D(ye, 500, 10));
    }
  }
  function ye(t) {
    xt(ia.bind(this, t));
  }
  var we = null,
    ke = null,
    Ee = null;
  function Oe(t) {
    var e = (t.nodeType === Node.DOCUMENT_NODE ? t : document).getSelection();
    if (
      null !== e &&
      !(
        (null === e.anchorNode && null === e.focusNode) ||
        (e.anchorNode === e.focusNode && e.anchorOffset === e.focusOffset)
      )
    ) {
      var n = we.start ? we.start : null;
      null !== ke && null !== we.start && n !== e.anchorNode && (I(Ee), Me(21)),
        (we = {
          start: e.anchorNode,
          startOffset: e.anchorOffset,
          end: e.focusNode,
          endOffset: e.focusOffset,
        }),
        (ke = e),
        I(Ee),
        (Ee = D(Me, 500, 21));
    }
  }
  function Me(t) {
    xt(ia.bind(this, t));
  }
  function Se() {
    (ke = null), (we = { start: 0, startOffset: 0, end: 0, endOffset: 0 });
  }
  var Ne,
    xe,
    _e = [];
  function Te(t) {
    _e.push({ time: l(), event: 39, data: { target: aa(t) } }),
      xt(ia.bind(this, 39));
  }
  function De() {
    _e = [];
  }
  function Ie(t) {
    (Ne = { name: t.type }), ia(26), ci();
  }
  function Ce() {
    Ne = null;
  }
  function je() {
    (xe = {
      visible:
        "visibilityState" in document ? document.visibilityState : "default",
    }),
      ia(28);
  }
  function ze() {
    xe = null;
  }
  function Le(t) {
    !(function (t) {
      var e = Cn(t);
      jr(e ? e.contentWindow : t === document ? window : t, "scroll", be, !0);
    })(t),
      t.nodeType === Node.DOCUMENT_NODE &&
        (Vt(t),
        (function (t) {
          jr(t, "cut", $t.bind(this, 0), !0),
            jr(t, "copy", $t.bind(this, 1), !0),
            jr(t, "paste", $t.bind(this, 2), !0);
        })(t),
        (function (t) {
          jr(t, "mousedown", se.bind(this, 13, t), !0),
            jr(t, "mouseup", se.bind(this, 14, t), !0),
            jr(t, "mousemove", se.bind(this, 12, t), !0),
            jr(t, "wheel", se.bind(this, 15, t), !0),
            jr(t, "dblclick", se.bind(this, 16, t), !0),
            jr(t, "touchstart", le.bind(this, 17, t), !0),
            jr(t, "touchend", le.bind(this, 18, t), !0),
            jr(t, "touchmove", le.bind(this, 19, t), !0),
            jr(t, "touchcancel", le.bind(this, 20, t), !0);
        })(t),
        (function (t) {
          jr(t, "input", ae, !0);
        })(t),
        (function (t) {
          jr(t, "selectstart", Oe.bind(this, t), !0),
            jr(t, "selectionchange", Oe.bind(this, t), !0);
        })(t),
        (function (t) {
          jr(t, "submit", Te, !0);
        })(t));
  }
  var Ae = Object.freeze({
      __proto__: null,
      start: function () {
        (oa = []),
          ca(),
          Kt(),
          te(),
          he(),
          ie(),
          jr(window, "resize", pe),
          pe(),
          jr(document, "visibilitychange", je),
          je(),
          (ge = []),
          be(),
          Se(),
          De(),
          jr(window, "pagehide", Ie);
      },
      stop: function () {
        (oa = []),
          ca(),
          Kt(),
          te(),
          I(ce),
          ue.length > 0 && fe(ue[ue.length - 1].event),
          I(ee),
          ie(),
          ve(),
          ze(),
          I(me),
          (ge = []),
          Se(),
          I(Ee),
          De(),
          Ce();
      },
      observe: Le,
    }),
    Re = /[^0-9\.]/g;
  function He(t) {
    for (var e = 0, n = Object.keys(t); e < n.length; e++) {
      var a = n[e],
        r = t[a];
      if ("@type" === a && "string" == typeof r)
        switch (
          (r =
            (r = r.toLowerCase()).indexOf("article") >= 0 ||
            r.indexOf("posting") >= 0
              ? "article"
              : r)
        ) {
          case "article":
          case "recipe":
            rr(5, t[a]), rr(8, t.creator), rr(18, t.headline);
            break;
          case "product":
            rr(5, t[a]),
              rr(10, t.name),
              rr(12, t.sku),
              t.brand && rr(6, t.brand.name);
            break;
          case "aggregaterating":
            t.ratingValue &&
              (T(11, Ye(t.ratingValue, 100)),
              T(18, Ye(t.bestRating)),
              T(19, Ye(t.worstRating))),
              T(12, Ye(t.ratingCount)),
              T(17, Ye(t.reviewCount));
            break;
          case "person":
            rr(8, t.name);
            break;
          case "offer":
            rr(7, t.availability),
              rr(14, t.itemCondition),
              rr(13, t.priceCurrency),
              rr(12, t.sku),
              T(13, Ye(t.price));
            break;
          case "brand":
            rr(6, t.name);
        }
      null !== r && "object" == typeof r && He(r);
    }
  }
  function Ye(t, e) {
    if ((void 0 === e && (e = 1), null !== t))
      switch (typeof t) {
        case "number":
          return Math.round(t * e);
        case "string":
          return Math.round(parseFloat(t.replace(Re, "")) * e);
      }
    return null;
  }
  var We = [
      "title",
      "alt",
      "onload",
      "onfocus",
      "onerror",
      "data-drupal-form-submit-last",
    ],
    Xe = /[\r\n]+/g;
  function qe(e, n) {
    var a = null;
    if (2 === n && !1 === Wn(e)) return a;
    0 !== n &&
      e.nodeType === Node.TEXT_NODE &&
      e.parentElement &&
      "STYLE" === e.parentElement.tagName &&
      (e = e.parentNode);
    var r = !1 === Wn(e) ? "add" : "update",
      i = e.parentElement ? e.parentElement : null,
      o = e.ownerDocument !== document;
    switch (e.nodeType) {
      case Node.DOCUMENT_TYPE_NODE:
        i = o && e.parentNode ? Cn(e.parentNode) : i;
        var u = e,
          c = {
            tag: (o ? "iframe:" : "") + "*D",
            attributes: {
              name: u.name,
              publicId: u.publicId,
              systemId: u.systemId,
            },
          };
        t[r](e, i, c, n);
        break;
      case Node.DOCUMENT_NODE:
        e === document && xn(document), Pe(e);
        break;
      case Node.DOCUMENT_FRAGMENT_NODE:
        var s = e;
        if (s.host)
          if (
            (xn(s),
            "function" === typeof s.constructor &&
              s.constructor.toString().indexOf("[native code]") >= 0)
          ) {
            Pe(s);
            for (
              var l = "",
                d = 0,
                f = ("adoptedStyleSheets" in s) ? s.adoptedStyleSheets : [];
              d < f.length;
              d++
            ) {
              l += Be(f[d]);
            }
            var h = { tag: "*S", attributes: { style: l } };
            t[r](e, s.host, h, n);
          } else t[r](e, s.host, { tag: "*P", attributes: {} }, n);
        break;
      case Node.TEXT_NODE:
        if (
          ((i = i || e.parentNode),
          "update" === r || (i && Wn(i) && "STYLE" !== i.tagName))
        ) {
          var p = { tag: "*T", value: e.nodeValue };
          t[r](e, i, p, n);
        }
        break;
      case Node.ELEMENT_NODE:
        var v = e,
          g = v.tagName,
          m = (function (t) {
            var e = {},
              n = t.attributes;
            if (n && n.length > 0)
              for (var a = 0; a < n.length; a++) {
                var r = n[a].name;
                We.indexOf(r) < 0 && (e[r] = n[a].value);
              }
            "INPUT" === t.tagName &&
              !("value" in e) &&
              t.value &&
              (e.value = t.value);
            return e;
          })(v);
        switch (
          ((i = e.parentElement
            ? e.parentElement
            : e.parentNode
            ? e.parentNode
            : null),
          "http://www.w3.org/2000/svg" === v.namespaceURI && (g = "svg:" + g),
          g)
        ) {
          case "HTML":
            i = o && i ? Cn(i) : null;
            var b = { tag: (o ? "iframe:" : "") + g, attributes: m };
            t[r](e, i, b, n);
            break;
          case "SCRIPT":
            if ("type" in m && "application/ld+json" === m.type)
              try {
                He(JSON.parse(v.text.replace(Xe, "")));
              } catch (t) {}
            break;
          case "NOSCRIPT":
            break;
          case "META":
            var y = "property" in m ? "property" : "name" in m ? "name" : null;
            if (y && "content" in m) {
              var w = m.content;
              switch (m[y]) {
                case "og:title":
                  rr(20, w);
                  break;
                case "og:type":
                  rr(19, w);
                  break;
                case "generator":
                  rr(21, w);
              }
            }
            break;
          case "HEAD":
            var k = { tag: g, attributes: m };
            location &&
              (k.attributes["*B"] =
                location.protocol + "//" + location.hostname),
              t[r](e, i, k, n);
            break;
          case "STYLE":
            var E = { tag: g, attributes: m, value: Ue(v) };
            t[r](e, i, E, n);
            break;
          case "IFRAME":
            var O = e,
              M = { tag: g, attributes: m };
            In(O) &&
              (!(function (t) {
                !1 === Wn(t) &&
                  jr(t, "load", cn.bind(this, t, "childList"), !0);
              })(O),
              (M.attributes["*O"] = "true"),
              O.contentDocument &&
                O.contentWindow &&
                "loading" !== O.contentDocument.readyState &&
                (a = O.contentDocument)),
              t[r](e, i, M, n);
            break;
          default:
            var S = { tag: g, attributes: m };
            v.shadowRoot && (a = v.shadowRoot), t[r](e, i, S, n);
        }
    }
    return a;
  }
  function Pe(t) {
    Wn(t) ||
      (!(function (t) {
        try {
          var e = c("MutationObserver"),
            n = e in window ? new window[e](Ir(nn)) : null;
          n &&
            (n.observe(t, {
              attributes: !0,
              childList: !0,
              characterData: !0,
              subtree: !0,
            }),
            Fe.push(n));
        } catch (t) {
          Ca(2, 0, t ? t.name : null);
        }
      })(t),
      Le(t));
  }
  function Ue(t) {
    var e = t.textContent ? t.textContent.trim() : "",
      n = t.dataset ? Object.keys(t.dataset).length : 0;
    return (0 === e.length || n > 0) && (e = Be(t.sheet)), e;
  }
  function Be(t) {
    var e = "",
      n = null;
    try {
      n = t ? t.cssRules : [];
    } catch (t) {
      if ((Ca(1, 1, t ? t.name : null), t && "SecurityError" !== t.name))
        throw t;
    }
    if (null !== n) for (var a = 0; a < n.length; a++) e += n[a].cssText;
    return e;
  }
  function Ve(t, e, n) {
    return Q(this, void 0, void 0, function () {
      var a, r, i, o, u;
      return $(this, function (c) {
        switch (c.label) {
          case 0:
            (a = [t]), (c.label = 1);
          case 1:
            if (!(a.length > 0)) return [3, 4];
            for (r = a.shift(), i = r.firstChild; i; )
              a.push(i), (i = i.nextSibling);
            return 0 !== (o = Tt(e)) ? [3, 3] : [4, Ct(e)];
          case 2:
            (o = c.sent()), (c.label = 3);
          case 3:
            return 2 === o ? [3, 4] : ((u = qe(r, n)) && a.push(u), [3, 1]);
          case 4:
            return [2];
        }
      });
    });
  }
  var Fe = [],
    Je = [],
    Ge = null,
    Ze = null,
    Ke = null,
    Qe = [],
    $e = null,
    tn = null,
    en = {};
  function nn(t) {
    var e = l();
    Y(6, e),
      Je.push({ time: e, mutations: t }),
      xt(an, 1).then(function () {
        D(qt), Ir(Qn)();
      });
  }
  function an() {
    return Q(this, void 0, void 0, function () {
      var t, e, n, a, r, i, o, u, c;
      return $(this, function (s) {
        switch (s.label) {
          case 0:
            Dt((t = { id: hr(), cost: 3 })), (s.label = 1);
          case 1:
            if (!(Je.length > 0)) return [3, 8];
            (e = Je.shift()), (n = 0), (a = e.mutations), (s.label = 2);
          case 2:
            return n < a.length
              ? ((r = a[n]), 0 !== (i = Tt(t)) ? [3, 4] : [4, Ct(t)])
              : [3, 6];
          case 3:
            (i = s.sent()), (s.label = 4);
          case 4:
            if (2 === i) return [3, 6];
            switch (
              ((o = r.target),
              (u = (function (t, e) {
                var n = t.target ? Hn(t.target.parentNode) : null;
                if (n && "HTML" !== n.data.tag) {
                  var a = l() > tn,
                    r = Hn(t.target),
                    i = r && r.selector ? r.selector.join() : t.target.nodeName,
                    o = [
                      n.selector ? n.selector.join() : "",
                      i,
                      t.attributeName,
                      rn(t.addedNodes),
                      rn(t.removedNodes),
                    ].join();
                  en[o] = o in en ? en[o] : [0];
                  var u = en[o];
                  if (
                    (!1 === a && u[0] >= 10 && on(u[1], 2, e),
                    (u[0] = a ? u[0] + 1 : 1),
                    10 === u[0])
                  )
                    return (u[1] = t.removedNodes), "suspend";
                  if (u[0] > 10) return "";
                }
                return t.type;
              })(r, t)),
              u && o && o.ownerDocument && xn(o.ownerDocument),
              u &&
                o &&
                o.nodeType == Node.DOCUMENT_FRAGMENT_NODE &&
                o.host &&
                xn(o),
              u)
            ) {
              case "attributes":
                qe(o, 3);
                break;
              case "characterData":
                qe(o, 4);
                break;
              case "childList":
                on(r.addedNodes, 1, t), on(r.removedNodes, 2, t);
                break;
              case "suspend":
                (c = Hn(o)) && (c.metadata.suspend = !0);
            }
            s.label = 5;
          case 5:
            return n++, [3, 2];
          case 6:
            return [4, Rt(6, t, e.time)];
          case 7:
            return s.sent(), [3, 1];
          case 8:
            return It(t), [2];
        }
      });
    });
  }
  function rn(t) {
    for (var e = [], n = 0; t && n < t.length; n++) e.push(t[n].nodeName);
    return e.join();
  }
  function on(t, e, n) {
    return Q(this, void 0, void 0, function () {
      var a, r, i;
      return $(this, function (o) {
        switch (o.label) {
          case 0:
            (a = t ? t.length : 0), (r = 0), (o.label = 1);
          case 1:
            return r < a
              ? 1 !== e
                ? [3, 2]
                : (Ve(t[r], n, e), [3, 5])
              : [3, 6];
          case 2:
            return 0 !== (i = Tt(n)) ? [3, 4] : [4, Ct(n)];
          case 3:
            (i = o.sent()), (o.label = 4);
          case 4:
            if (2 === i) return [3, 6];
            qe(t[r], e), (o.label = 5);
          case 5:
            return r++, [3, 1];
          case 6:
            return [2];
        }
      });
    });
  }
  function un(t, e) {
    return (
      void 0 === e && (e = !1),
      Qe.indexOf(t) < 0 && Qe.push(t),
      $e && I($e),
      ($e = D(function () {
        !(function (t) {
          for (var e = 0, n = Qe; e < n.length; e++) {
            var a = n[e];
            if (a) {
              var r = a.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
              if (r && Wn(a)) continue;
              cn(a, r || t ? "childList" : "characterData");
            }
          }
          Qe = [];
        })(e);
      }, 33)),
      t
    );
  }
  function cn(t, e) {
    Ir(nn)([
      {
        addedNodes: [t],
        attributeName: null,
        attributeNamespace: null,
        nextSibling: null,
        oldValue: null,
        previousSibling: null,
        removedNodes: [],
        target: t,
        type: e,
      },
    ]);
  }
  var sn = 1,
    ln = [],
    dn = [],
    fn = [],
    hn = {},
    pn = [],
    vn = [],
    gn = {},
    mn = [],
    bn = [],
    yn = [],
    wn = null,
    kn = null,
    En = null,
    On = null;
  function Mn() {
    Nn(), xn(document, !0);
  }
  function Sn() {
    Nn();
  }
  function Nn() {
    (sn = 1),
      (ln = []),
      (dn = []),
      (fn = []),
      (hn = {}),
      (pn = []),
      (vn = []),
      (mn = "address,password,contact".split(",")),
      (bn =
        "password,secret,pass,social,ssn,name,code,dob,cell,mob,contact,hidden,account,cvv,ccv,email,tel,phone,address,addr,card,zip".split(
          ","
        )),
      (yn = "radio,checkbox,range,button,reset,submit".split(",")),
      (wn = new WeakMap()),
      (kn = new WeakMap()),
      (En = new WeakMap()),
      (On = new WeakMap()),
      (bt = {});
  }
  function xn(t, e) {
    void 0 === e && (e = !1);
    try {
      e &&
        u.unmask.forEach(function (t) {
          return t.indexOf("!") < 0 ? vn.push(t) : pn.push(t.substr(1));
        }),
        "querySelectorAll" in t &&
          (u.regions.forEach(function (e) {
            return t.querySelectorAll(e[1]).forEach(function (t) {
              return Zn(t, "".concat(e[0]));
            });
          }),
          u.mask.forEach(function (e) {
            return t.querySelectorAll(e).forEach(function (t) {
              return En.set(t, 3);
            });
          }),
          u.fraud.forEach(function (e) {
            return t.querySelectorAll(e[1]).forEach(function (t) {
              return On.set(t, e[0]);
            });
          }),
          vn.forEach(function (e) {
            return t.querySelectorAll(e).forEach(function (t) {
              return En.set(t, 0);
            });
          }));
    } catch (t) {
      Ca(5, 1, t ? t.name : null);
    }
  }
  function _n(t, e) {
    if ((void 0 === e && (e = !1), null === t)) return null;
    var n = wn.get(t);
    return !n && e && ((n = sn++), wn.set(t, n)), n || null;
  }
  function Tn(t, e, n, a) {
    var r,
      i = _n(t, !0),
      o = e ? _n(e) : null,
      c = qn(t),
      s = null,
      l = Kn(t) ? i : null,
      d = null,
      f = On.has(t) ? On.get(t) : null,
      h = u.content ? 1 : 2;
    o >= 0 &&
      dn[o] &&
      ((s = dn[o]).children.push(i),
      (l = null === l ? s.region : l),
      (d = s.fragment),
      (f = null === f ? s.metadata.fraud : f),
      (h = s.metadata.privacy)),
      n.attributes &&
        "data-clarity-region" in n.attributes &&
        (Zn(t, n.attributes["data-clarity-region"]), (l = i)),
      (ln[i] = t),
      (dn[i] = {
        id: i,
        parent: o,
        previous: c,
        children: [],
        data: n,
        selector: null,
        hash: null,
        region: l,
        metadata: {
          active: !0,
          suspend: !1,
          privacy: h,
          position: null,
          fraud: f,
          size: null,
        },
        fragment: d,
      }),
      (function (t, e, n) {
        var a = e.data,
          r = e.metadata,
          i = r.privacy,
          o = a.attributes || {},
          u = a.tag.toUpperCase();
        switch (!0) {
          case "data-clarity-mask" in o:
            r.privacy = 3;
            break;
          case "data-clarity-unmask" in o:
            r.privacy = 0;
            break;
          case En.has(t):
            r.privacy = En.get(t);
            break;
          case On.has(t):
            r.privacy = 2;
            break;
          case "*T" === u:
            var c = n && n.data ? n.data.tag : "",
              s = n && n.selector ? n.selector[1] : "",
              l = ["STYLE", "TITLE", "svg:style"];
            r.privacy =
              l.includes(c) ||
              pn.some(function (t) {
                return s.indexOf(t) >= 0;
              })
                ? 0
                : i;
            break;
          case "INPUT" === u && 0 === i:
            var d = "";
            Object.keys(o).forEach(function (t) {
              return (d += o[t].toLowerCase());
            }),
              (r.privacy = jn(d, bn, r));
            break;
          case "INPUT" === u && 1 === i:
            (r.privacy = jn(o.class, mn, r)),
              (r.privacy = jn(o.type, bn, r)),
              (r.privacy = yn.indexOf(o.type) >= 0 ? 0 : r.privacy);
            break;
          case 1 === i:
            r.privacy = jn(o.class, mn, r);
        }
      })(t, dn[i], s),
      Ln(dn[i]),
      "IMG" === (r = dn[i]).data.tag &&
        3 === r.metadata.privacy &&
        (r.metadata.size = []),
      Pn(i, a, dn[i].fragment);
  }
  function Dn(t, e, n, a) {
    var r = _n(t),
      i = e ? _n(e) : null,
      o = qn(t),
      u = !1,
      c = !1;
    if (r in dn) {
      var s = dn[r];
      if (
        ((s.metadata.active = !0),
        s.previous !== o && ((u = !0), (s.previous = o)),
        s.parent !== i)
      ) {
        u = !0;
        var l = s.parent;
        if (((s.parent = i), null !== i && i >= 0)) {
          var d = null === o ? 0 : dn[i].children.indexOf(o) + 1;
          dn[i].children.splice(d, 0, r), (s.region = Kn(t) ? r : dn[i].region);
        } else
          !(function (t, e) {
            if (t in dn) {
              var n = dn[t];
              (n.metadata.active = !1), (n.parent = null), Pn(t, e);
            }
          })(r, a);
        if (null !== l && l >= 0) {
          var f = dn[l].children.indexOf(r);
          f >= 0 && dn[l].children.splice(f, 1);
        }
        c = !0;
      }
      for (var h in n) zn(s.data, n, h) && ((u = !0), (s.data[h] = n[h]));
      s.fragment && gn[s.fragment] && (u = !0),
        Ln(s),
        Pn(r, a, dn[r].fragment, u, c);
    }
  }
  function In(t) {
    var e = !1;
    if (t.nodeType === Node.ELEMENT_NODE && "IFRAME" === t.tagName) {
      var n = t;
      try {
        n.contentDocument && (kn.set(n.contentDocument, n), (e = !0));
      } catch (t) {}
    }
    return e;
  }
  function Cn(t) {
    var e = t.nodeType === Node.DOCUMENT_NODE ? t : null;
    return e && kn.has(e) ? kn.get(e) : null;
  }
  function jn(t, e, n) {
    return t &&
      e.some(function (e) {
        return t.indexOf(e) >= 0;
      })
      ? 2
      : n.privacy;
  }
  function zn(t, e, n) {
    if ("object" == typeof t[n] && "object" == typeof e[n]) {
      for (var a in t[n]) if (t[n][a] !== e[n][a]) return !0;
      for (var a in e[n]) if (e[n][a] !== t[n][a]) return !0;
      return !1;
    }
    return t[n] !== e[n];
  }
  function Ln(t) {
    var e = t.parent && t.parent in dn ? dn[t.parent] : null,
      n = e ? e.selector : null,
      a = t.data,
      r = (function (t, e) {
        e.metadata.position = 1;
        for (var n = t ? t.children.indexOf(e.id) : -1; n-- > 0; ) {
          var a = dn[t.children[n]];
          if (e.data.tag === a.data.tag) {
            e.metadata.position = a.metadata.position + 1;
            break;
          }
        }
        return e.metadata.position;
      })(e, t),
      i = {
        id: t.id,
        tag: a.tag,
        prefix: n,
        position: r,
        attributes: a.attributes,
      };
    (t.selector = [yt(i, 0), yt(i, 1)]),
      (t.hash = t.selector.map(function (t) {
        return t ? f(t) : null;
      })),
      t.hash.forEach(function (e) {
        return (hn[e] = t.id);
      }),
      t.hash.some(function (t) {
        return -1 !== Ha.indexOf(t);
      }) && (t.fragment = t.id);
  }
  function An(t) {
    return t in ln ? ln[t] : null;
  }
  function Rn(t) {
    return t in dn ? dn[t] : null;
  }
  function Hn(t) {
    var e = _n(t);
    return e in dn ? dn[e] : null;
  }
  function Yn(t) {
    return t in hn ? hn[t] : null;
  }
  function Wn(t) {
    return _n(t) in ln;
  }
  function Xn() {
    for (var t = [], e = 0, n = fn; e < n.length; e++) {
      (a = n[e]) in dn && t.push(dn[a]);
    }
    for (var a in ((fn = []), gn)) Pa(gn[a], a, !0);
    return (gn = {}), t;
  }
  function qn(t) {
    for (var e = null; null === e && t.previousSibling; )
      (e = _n(t.previousSibling)), (t = t.previousSibling);
    return e;
  }
  function Pn(t, e, n, a, r) {
    if (
      (void 0 === n && (n = null),
      void 0 === a && (a = !0),
      void 0 === r && (r = !1),
      n && !gn[n])
    ) {
      var i = An(n),
        o = Rn(n);
      i &&
        o &&
        (un(i, !0),
        o.hash.forEach(function (t) {
          -1 !== Ha.indexOf(t) && (gn[n] = t);
        }));
    }
    var u = fn.indexOf(t);
    u >= 0 && 1 === e && r
      ? (fn.splice(u, 1), fn.push(t))
      : -1 === u && a && fn.push(t);
  }
  var Un = [],
    Bn = null,
    Vn = {},
    Fn = [],
    Jn = !1,
    Gn = null;
  function Zn(t, e) {
    !1 === Bn.has(t) &&
      (Bn.set(t, e),
      (Gn =
        null === Gn && Jn
          ? new IntersectionObserver($n, {
              threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
            })
          : Gn) &&
        t &&
        t.nodeType === Node.ELEMENT_NODE &&
        Gn.observe(t));
  }
  function Kn(t) {
    return Bn && Bn.has(t);
  }
  function Qn() {
    for (var t = [], e = 0, n = Fn; e < n.length; e++) {
      var a = n[e],
        r = _n(a.node);
      r in Vn ||
        (r
          ? ((a.data.id = r), (Vn[r] = a.data), Un.push(ea(a.data)))
          : t.push(a));
    }
    (Fn = t), Un.length > 0 && Rt(7);
  }
  function $n(t) {
    for (var e = 0, n = t; e < n.length; e++) {
      var a = n[e],
        r = a.target,
        i = a.boundingClientRect,
        o = a.intersectionRect,
        u = a.rootBounds;
      if (Bn.has(r) && i.width + i.height > 0 && u.width > 0 && u.height > 0) {
        var c = r ? _n(r) : null,
          s =
            c in Vn
              ? Vn[c]
              : { id: c, name: Bn.get(r), interaction: 16, visibility: 0 },
          l =
            (o ? (o.width * o.height * 1) / (u.width * u.height) : 0) > 0.05 ||
            a.intersectionRatio > 0.8,
          d =
            (l || 10 == s.visibility) && Math.abs(i.top) + u.height > i.height;
        ta(r, s, s.interaction, d ? 13 : l ? 10 : 0),
          s.visibility >= 13 && Gn && Gn.unobserve(r);
      }
    }
    Un.length > 0 && Rt(7);
  }
  function ta(t, e, n, a) {
    var r = n > e.interaction || a > e.visibility;
    (e.interaction = n > e.interaction ? n : e.interaction),
      (e.visibility = a > e.visibility ? a : e.visibility),
      e.id
        ? ((e.id in Vn && r) || !(e.id in Vn)) &&
          ((Vn[e.id] = e), Un.push(ea(e)))
        : Fn.push({ node: t, data: e });
  }
  function ea(t) {
    return {
      time: l(),
      data: {
        id: t.id,
        interaction: t.interaction,
        visibility: t.visibility,
        name: t.name,
      },
    };
  }
  function na() {
    Un = [];
  }
  function aa(t) {
    var e = t.composed && t.composedPath ? t.composedPath() : null,
      n = e && e.length > 0 ? e[0] : t.target;
    return (
      (tn = l() + 3e3),
      n.nodeType === Node.DOCUMENT_NODE ? n.documentElement : n
    );
  }
  function ra(t, e, n) {
    void 0 === n && (n = null);
    var a = { id: 0, hash: null, privacy: 2, node: t };
    if (t) {
      var r = Hn(t);
      if (null !== r) {
        var i = r.metadata;
        (a.id = r.id),
          (a.hash = r.hash),
          (a.privacy = i.privacy),
          r.region &&
            (function (t, e) {
              var n = An(t),
                a =
                  t in Vn
                    ? Vn[t]
                    : {
                        id: t,
                        visibility: 0,
                        interaction: 16,
                        name: Bn.get(n),
                      },
                r = 16;
              switch (e) {
                case 9:
                  r = 20;
                  break;
                case 27:
                  r = 30;
              }
              ta(n, a, r, a.visibility);
            })(r.region, e),
          i.fraud && gt(i.fraud, r.id, n || r.data.value);
      }
    }
    return a;
  }
  function ia(t) {
    return Q(this, void 0, void 0, function () {
      var e,
        n,
        a,
        r,
        i,
        o,
        u,
        c,
        s,
        d,
        f,
        h,
        p,
        v,
        g,
        b,
        w,
        k,
        E,
        O,
        M,
        S,
        N,
        x,
        _,
        T,
        D,
        I,
        C;
      return $(this, function (j) {
        switch (((e = l()), (n = [e, t]), t)) {
          case 13:
          case 14:
          case 12:
          case 15:
          case 16:
          case 17:
          case 18:
          case 19:
          case 20:
            for (a = 0, r = ue; a < r.length; a++)
              (I = r[a]),
                (i = ra(I.data.target, I.event)).id > 0 &&
                  ((n = [I.time, I.event]).push(i.id),
                  n.push(I.data.x),
                  n.push(I.data.y),
                  wa(n),
                  m(I.event, I.data.x, I.data.y));
            he();
            break;
          case 9:
            for (o = 0, u = Bt; o < u.length; o++)
              (I = u[o]),
                (c = ra(I.data.target, I.event, I.data.text)),
                (n = [I.time, I.event]),
                (s = c.hash.join(".")),
                n.push(c.id),
                n.push(I.data.x),
                n.push(I.data.y),
                n.push(I.data.eX),
                n.push(I.data.eY),
                n.push(I.data.button),
                n.push(I.data.reaction),
                n.push(I.data.context),
                n.push(ft(I.data.text, "click", c.privacy)),
                n.push(I.data.link),
                n.push(s),
                n.push(I.data.trust),
                wa(n),
                sa(
                  I.time,
                  I.event,
                  s,
                  I.data.x,
                  I.data.y,
                  I.data.reaction,
                  I.data.context
                );
            Kt();
            break;
          case 38:
            for (d = 0, f = Qt; d < f.length; d++)
              (I = f[d]),
                (n = [I.time, I.event]),
                (_ = ra(I.data.target, I.event)).id > 0 &&
                  (n.push(_.id), n.push(I.data.action), wa(n));
            te();
            break;
          case 11:
            (h = oe),
              n.push(h.width),
              n.push(h.height),
              m(t, h.width, h.height),
              ve(),
              wa(n);
            break;
          case 26:
            (p = Ne), n.push(p.name), Ce(), wa(n);
            break;
          case 27:
            for (v = 0, g = ne; v < g.length; v++)
              (I = g[v]),
                (b = ra(I.data.target, I.event, I.data.value)),
                (n = [I.time, I.event]).push(b.id),
                n.push(ft(I.data.value, "input", b.privacy)),
                wa(n);
            ie();
            break;
          case 21:
            (w = we) &&
              ((k = ra(w.start, t)),
              (E = ra(w.end, t)),
              n.push(k.id),
              n.push(w.startOffset),
              n.push(E.id),
              n.push(w.endOffset),
              Se(),
              wa(n));
            break;
          case 10:
            for (O = 0, M = ge; O < M.length; O++)
              (I = M[O]),
                (S = ra(I.data.target, I.event)).id > 0 &&
                  ((n = [I.time, I.event]).push(S.id),
                  n.push(I.data.x),
                  n.push(I.data.y),
                  wa(n),
                  m(I.event, I.data.x, I.data.y));
            ge = [];
            break;
          case 39:
            for (N = 0, x = _e; N < x.length; N++)
              (I = x[N]),
                (n = [I.time, I.event]),
                (_ = ra(I.data.target, I.event)).id > 0 &&
                  (n.push(_.id), wa(n));
            De();
            break;
          case 22:
            for (T = 0, D = ua; T < D.length; T++)
              (I = D[T]),
                (n = [I.time, I.event]).push(I.data.type),
                n.push(I.data.hash),
                n.push(I.data.x),
                n.push(I.data.y),
                n.push(I.data.reaction),
                n.push(I.data.context),
                wa(n, !1);
            ca();
            break;
          case 28:
            (C = xe), n.push(C.visible), wa(n), y(e, C.visible), ze();
        }
        return [2];
      });
    });
  }
  var oa = [],
    ua = [];
  function ca() {
    ua = [];
  }
  function sa(t, e, n, a, r, i, o) {
    void 0 === i && (i = 1),
      void 0 === o && (o = 0),
      oa.push({
        time: t,
        event: 22,
        data: { type: e, hash: n, x: a, y: r, reaction: i, context: o },
      }),
      m(e, a, r);
  }
  var la,
    da,
    fa,
    ha,
    pa,
    va = 0,
    ga = 0,
    ma = null,
    ba = 0;
  function ya() {
    (ha = !0),
      (va = 0),
      (ga = 0),
      (ba = 0),
      (la = []),
      (da = []),
      (fa = {}),
      (pa = null);
  }
  function wa(t, e) {
    if ((void 0 === e && (e = !0), ha)) {
      var n = l(),
        a = t.length > 1 ? t[1] : null,
        r = JSON.stringify(t);
      switch (a) {
        case 5:
          va += r.length;
        case 37:
        case 6:
          (ga += r.length), la.push(r);
          break;
        default:
          da.push(r);
      }
      x(25);
      var i = (function () {
        var t = !1 === u.lean && va > 0 ? 100 : Sr.sequence * u.delay;
        return "string" == typeof u.upload
          ? Math.max(Math.min(t, 3e4), 100)
          : u.delay;
      })();
      n - ba > 2 * i && (I(ma), (ma = null)),
        e &&
          null === ma &&
          (25 !== a && L(), (ma = D(Ea, i)), (ba = n), Za(ga));
    }
  }
  function ka() {
    I(ma),
      Ea(!0),
      (va = 0),
      (ga = 0),
      (ba = 0),
      (la = []),
      (da = []),
      (fa = {}),
      (pa = null),
      (ha = !1);
  }
  function Ea(t) {
    return (
      void 0 === t && (t = !1),
      Q(this, void 0, void 0, function () {
        var e, n, a, r, i, o, c, s;
        return $(this, function (l) {
          switch (l.label) {
            case 0:
              return (
                (ma = null),
                (e =
                  !1 === u.lean &&
                  ga > 0 &&
                  (ga < 1048576 || Sr.sequence > 0)) && T(1, 1),
                Qn(),
                (function () {
                  var t = [];
                  ua = [];
                  for (
                    var e = Sr.start + Sr.duration,
                      n = Math.max(e - 2e3, 0),
                      a = 0,
                      r = oa;
                    a < r.length;
                    a++
                  ) {
                    var i = r[a];
                    i.time >= n && (i.time <= e && ua.push(i), t.push(i));
                  }
                  (oa = t), ia(22);
                })(),
                ot(),
                (n = !0 === t),
                (a = JSON.stringify(_r(n))),
                (r = "[".concat(da.join(), "]")),
                (i = e ? "[".concat(la.join(), "]") : ""),
                (o = (function (t) {
                  return t.p.length > 0
                    ? '{"e":'
                        .concat(t.e, ',"a":')
                        .concat(t.a, ',"p":')
                        .concat(t.p, "}")
                    : '{"e":'.concat(t.e, ',"a":').concat(t.a, "}");
                })({ e: a, a: r, p: i })),
                n ? ((s = null), [3, 3]) : [3, 1]
              );
            case 1:
              return [4, et(o)];
            case 2:
              (s = l.sent()), (l.label = 3);
            case 3:
              return (
                _(2, (c = s) ? c.length : o.length),
                Oa(o, c, Sr.sequence, n),
                (da = []),
                e && ((la = []), (ga = 0), (va = 0)),
                [2]
              );
          }
        });
      })
    );
  }
  function Oa(t, e, n, a) {
    if ((void 0 === a && (a = !1), "string" == typeof u.upload)) {
      var r = u.upload,
        i = !1;
      if (a && "sendBeacon" in navigator)
        try {
          (i = navigator.sendBeacon.bind(navigator)(r, t)) && Sa(n);
        } catch (t) {}
      if (!1 === i) {
        n in fa ? fa[n].attempts++ : (fa[n] = { data: t, attempts: 1 });
        var o = new XMLHttpRequest();
        o.open("POST", r),
          null !== n &&
            (o.onreadystatechange = function () {
              Ir(Ma)(o, n);
            }),
          (o.withCredentials = !0),
          e
            ? (o.setRequestHeader("Accept", "application/x-clarity-gzip"),
              o.send(e))
            : o.send(t);
      }
    } else if (u.upload) {
      (0, u.upload)(t), Sa(n);
    }
  }
  function Ma(t, e) {
    var n = fa[e];
    t &&
      4 === t.readyState &&
      n &&
      ((t.status < 200 || t.status > 208) && n.attempts <= 1
        ? t.status >= 400 && t.status < 500
          ? Ka(6)
          : (0 === t.status && (u.upload = u.fallback ? u.fallback : u.upload),
            Oa(n.data, null, e))
        : ((pa = { sequence: e, attempts: n.attempts, status: t.status }),
          n.attempts > 1 && Ja(2),
          200 === t.status &&
            t.responseText &&
            (function (t) {
              var e = t && t.length > 0 ? t.split(" ") : [""];
              switch (e[0]) {
                case "END":
                  Ka(6);
                  break;
                case "UPGRADE":
                  U("Auto");
                  break;
                case "ACTION":
                  u.action && e.length > 1 && u.action(e[1]);
              }
            })(t.responseText),
          0 === t.status && (Oa(n.data, null, e, !0), Ka(3)),
          t.status >= 200 && t.status <= 208 && Sa(e),
          delete fa[e]));
  }
  function Sa(t) {
    1 === t && gr();
  }
  var Na,
    xa = {};
  function _a(t) {
    var e = t.error || t;
    return (
      e.message in xa || (xa[e.message] = 0),
      xa[e.message]++ >= 5 ||
        (e &&
          e.message &&
          ((Na = {
            message: e.message,
            line: t.lineno,
            column: t.colno,
            stack: e.stack,
            source: t.filename,
          }),
          Ta(31))),
      !0
    );
  }
  function Ta(t) {
    return Q(this, void 0, void 0, function () {
      var e;
      return $(this, function (n) {
        switch (((e = [l(), t]), t)) {
          case 31:
            e.push(Na.message),
              e.push(Na.line),
              e.push(Na.column),
              e.push(Na.stack),
              e.push(Na.source),
              wa(e);
            break;
          case 33:
            Da &&
              (e.push(Da.code),
              e.push(Da.name),
              e.push(Da.message),
              e.push(Da.stack),
              e.push(Da.severity),
              wa(e, !1));
            break;
          case 41:
            pt &&
              (e.push(pt.id), e.push(pt.target), e.push(pt.hash), wa(e, !1));
        }
        return [2];
      });
    });
  }
  var Da,
    Ia = {};
  function Ca(t, e, n, a, r) {
    void 0 === n && (n = null),
      void 0 === a && (a = null),
      void 0 === r && (r = null);
    var i = n ? "".concat(n, "|").concat(a) : "";
    (t in Ia && Ia[t].indexOf(i) >= 0) ||
      ((Da = { code: t, name: n, message: a, stack: r, severity: e }),
      t in Ia ? Ia[t].push(i) : (Ia[t] = [i]),
      Ta(33));
  }
  var ja,
    za = {},
    La = [],
    Aa = {},
    Ra = {},
    Ha = [];
  function Ya() {
    try {
      var t = u.extract;
      if (!t) return;
      for (var e = 0; e < t.length; e += 3) {
        var n = t[e],
          a = t[e + 1];
        switch (n) {
          case 0:
            var r = t[e + 2];
            Aa[a] = Ba(r);
            break;
          case 1:
            break;
          case 2:
            var i = t[e + 2];
            Ra[a] = i;
            break;
          case 3:
            Ha = t[e + 2];
        }
      }
    } catch (t) {
      Ca(8, 1, t ? t.name : null);
    }
  }
  function Wa(t) {
    return JSON.parse(JSON.stringify(t));
  }
  function Xa() {
    try {
      for (var t in Aa) {
        var e = (r = Va(Wa(Aa[t]))) ? JSON.stringify(r).substring(0, 1e4) : r;
        e && Pa(t, e);
      }
      for (var n in Ra) {
        var a = document.querySelector(Ra[n]);
        a && Pa(n, a.innerText);
      }
    } catch (t) {
      Ca(5, 1, t ? t.name : null);
    }
    var r;
    Ja(40);
  }
  function qa() {
    La = [];
  }
  function Pa(t, e, n) {
    void 0 === n && (n = !1),
      (!(t in za) || (t in za && za[t] !== e) || n) &&
        ((za[t] = e), La.push(t));
  }
  function Ua() {
    (za = {}), (La = []), (Aa = {}), (Ra = {});
  }
  function Ba(t) {
    for (var e = [], n = t.split("."); n.length > 0; ) {
      var a = n.shift(),
        r = a.indexOf("["),
        i = a.indexOf("{"),
        o = a.indexOf("}");
      e.push({
        name: r > 0 ? a.substring(0, r) : i > 0 ? a.substring(0, i) : a,
        type: r > 0 ? 1 : i > 0 ? 2 : 3,
        condition: i > 0 ? a.substring(i + 1, o) : null,
      });
    }
    return e;
  }
  function Va(t, e) {
    if ((void 0 === e && (e = window), 0 == t.length)) return e;
    var n,
      a = t.shift();
    if (e && e[a.name]) {
      var r = e[a.name];
      if (1 !== a.type && Fa(r, a.condition)) n = Va(t, r);
      else if (Array.isArray(r)) {
        for (var i = [], o = 0, u = r; o < u.length; o++) {
          var c = u[o];
          if (Fa(c, a.condition)) {
            var s = Va(t, c);
            s && i.push(s);
          }
        }
        n = i;
      }
      return n;
    }
    return null;
  }
  function Fa(t, e) {
    if (e) {
      var n = e.split(":");
      return n.length > 1 ? t[n[0]] == n[1] : t[n[0]];
    }
    return !0;
  }
  function Ja(t) {
    var e = [l(), t];
    switch (t) {
      case 4:
        var n = h;
        n &&
          ((e = [n.time, n.event]).push(n.data.visible),
          e.push(n.data.docWidth),
          e.push(n.data.docHeight),
          e.push(n.data.screenWidth),
          e.push(n.data.screenHeight),
          e.push(n.data.scrollX),
          e.push(n.data.scrollY),
          e.push(n.data.pointerX),
          e.push(n.data.pointerY),
          e.push(n.data.activityTime),
          wa(e, !1)),
          g();
        break;
      case 25:
        e.push(M.gap), wa(e);
        break;
      case 35:
        e.push(ja.check), wa(e, !1);
        break;
      case 3:
        e.push(P.key), wa(e);
        break;
      case 2:
        e.push(pa.sequence), e.push(pa.attempts), e.push(pa.status), wa(e, !1);
        break;
      case 24:
        e.push(E.key), e.push(E.value), wa(e);
        break;
      case 34:
        var a = Object.keys(V);
        if (a.length > 0) {
          for (var r = 0, i = a; r < i.length; r++) {
            var o = i[r];
            e.push(o), e.push(V[o]);
          }
          K(), wa(e, !1);
        }
        break;
      case 0:
        var u = Object.keys(N);
        if (u.length > 0) {
          for (var c = 0, s = u; c < s.length; c++) {
            var d = s[c],
              f = parseInt(d, 10);
            e.push(f), e.push(Math.round(N[d]));
          }
          (N = {}), wa(e, !1);
        }
        break;
      case 1:
        var p = Object.keys(er);
        if (p.length > 0) {
          for (var v = 0, m = p; v < m.length; v++) {
            var b = m[v];
            f = parseInt(b, 10);
            e.push(f), e.push(er[b]);
          }
          or(), wa(e, !1);
        }
        break;
      case 36:
        var y = Object.keys(H);
        if (y.length > 0) {
          for (var w = 0, k = y; w < k.length; w++) {
            var O = k[w];
            f = parseInt(O, 10);
            e.push(f), e.push([].concat.apply([], H[O]));
          }
          X(), wa(e, !1);
        }
        break;
      case 40:
        for (var S = 0, x = La; S < x.length; S++) {
          O = x[S];
          e.push(O), e.push(za[O]);
        }
        qa(), wa(e, !1);
    }
  }
  function Ga() {
    ja = { check: 0 };
  }
  function Za(t) {
    if (0 === ja.check) {
      var e = ja.check;
      (e = Sr.sequence >= 128 ? 1 : e),
        (e = l() > 72e5 ? 2 : e),
        (e = t > 10485760 ? 2 : e) !== ja.check && Ka(e);
    }
  }
  function Ka(t) {
    (ja.check = t), vr(), ci();
  }
  function Qa() {
    0 !== ja.check && Ja(35);
  }
  function $a() {
    ja = null;
  }
  var tr = null,
    er = null;
  function nr() {
    (tr = {}), (er = {});
  }
  function ar() {
    (tr = {}), (er = {});
  }
  function rr(t, e) {
    e &&
      ((e = "".concat(e)),
      t in tr || (tr[t] = []),
      tr[t].indexOf(e) < 0 &&
        (tr[t].push(e),
        t in er || (er[t] = []),
        er[t].push(e),
        tr[t].length > 128 && Ka(5)));
  }
  function ir() {
    Ja(1);
  }
  function or() {
    er = {};
  }
  var ur = null,
    cr = [],
    sr = null;
  function lr() {
    sr = null;
    var t = navigator && "userAgent" in navigator ? navigator.userAgent : "",
      e = document && document.title ? document.title : "",
      n = (function () {
        var t = {
            session: yr(),
            ts: Math.round(Date.now()),
            count: 1,
            upgrade: null,
            upload: "",
          },
          e = Er("_clsk");
        if (e) {
          var n = e.split("|");
          n.length >= 5 &&
            t.ts - wr(n[1]) < 18e5 &&
            ((t.session = n[0]),
            (t.count = wr(n[2]) + 1),
            (t.upgrade = wr(n[3])),
            (t.upload =
              n.length >= 6
                ? "".concat("https://").concat(n[5], "/").concat(n[4])
                : "".concat("https://").concat(n[4])));
        }
        return t;
      })(),
      a = kr();
    (ur = {
      projectId: u.projectId || f(location.host),
      userId: a.id,
      sessionId: n.session,
      pageNum: n.count,
    }),
      (u.lean = u.track && null !== n.upgrade ? 0 === n.upgrade : u.lean),
      (u.upload =
        u.track &&
        "string" == typeof u.upload &&
        n.upload &&
        n.upload.length > "https://".length
          ? n.upload
          : u.upload),
      rr(0, t),
      rr(3, e),
      rr(1, location.href),
      rr(2, document.referrer),
      rr(
        15,
        (function () {
          var t = yr();
          if (u.track && mr(window, "sessionStorage")) {
            var e = sessionStorage.getItem("_cltk");
            (t = e || t), sessionStorage.setItem("_cltk", t);
          }
          return t;
        })()
      ),
      rr(16, document.documentElement.lang),
      rr(17, document.dir),
      navigator &&
        (rr(9, navigator.userLanguage || navigator.language),
        navigator.userAgentData &&
          navigator.userAgentData.getHighEntropyValues &&
          navigator.userAgentData
            .getHighEntropyValues([
              "model",
              "platform",
              "platformVersion",
              "uaFullVersion",
            ])
            .then(function (t) {
              var e;
              rr(22, t.platform),
                rr(23, t.platformVersion),
                null === (e = t.brands) ||
                  void 0 === e ||
                  e.forEach(function (t) {
                    rr(24, t.name + "~" + t.version);
                  }),
                rr(25, t.model),
                T(27, t.mobile ? 1 : 0);
            })),
      T(0, n.ts),
      T(1, 0),
      screen &&
        (T(14, Math.round(screen.width)),
        T(15, Math.round(screen.height)),
        T(16, Math.round(screen.colorDepth)));
    for (var r = 0, i = u.cookies; r < i.length; r++) {
      var o = i[r],
        c = Er(o);
      c && F(o, c);
    }
    br(a);
  }
  function dr() {
    (sr = null), (ur = null);
  }
  function fr(t, e) {
    void 0 === e && (e = !0),
      ur && !1 === e && t(ur, !u.lean),
      cr.push({ callback: t, wait: e });
  }
  function hr() {
    return ur ? [ur.userId, ur.sessionId, ur.pageNum].join(".") : "";
  }
  function pr() {
    Vr() && ((u.track = !0), br(kr(), 1));
  }
  function vr() {
    Or("_clsk", "", 0);
  }
  function gr() {
    var t = Math.round(Date.now()),
      e =
        u.upload && "string" == typeof u.upload
          ? u.upload.replace("https://", "")
          : "",
      n = u.lean ? 0 : 1;
    !(function (t) {
      cr.length > 0 &&
        cr.forEach(function (e) {
          !e.callback || (e.wait && !t) || e.callback(ur, !u.lean);
        });
    })(n),
      Or("_clsk", [ur.sessionId, t, ur.pageNum, n, e].join("|"), 1);
  }
  function mr(t, e) {
    try {
      return !!t[e];
    } catch (t) {
      return !1;
    }
  }
  function br(t, e) {
    void 0 === e && (e = null), (e = null === e ? t.consent : e);
    var n = Math.ceil((Date.now() + 31536e6) / 864e5);
    (null === t.expiry || Math.abs(n - t.expiry) >= 1 || t.consent !== e) &&
      Or("_clck", [ur.userId, 1, n.toString(36), e].join("|"), 365);
  }
  function yr() {
    var t = Math.floor(Math.random() * Math.pow(2, 32));
    return (
      window &&
        window.crypto &&
        window.crypto.getRandomValues &&
        Uint32Array &&
        (t = window.crypto.getRandomValues(new Uint32Array(1))[0]),
      t.toString(36)
    );
  }
  function wr(t, e) {
    return void 0 === e && (e = 10), parseInt(t, e);
  }
  function kr() {
    var t = { id: yr(), expiry: null, consent: 0 },
      e = Er("_clck");
    if (e && e.length > 0) {
      for (
        var n = e.split("|"), a = 0, r = 0, i = document.cookie.split(";");
        r < i.length;
        r++
      ) {
        a += "_clck" === i[r].split("=")[0].trim() ? 1 : 0;
      }
      if (1 === n.length || a > 1) {
        var o = ""
          .concat(";")
          .concat("expires=")
          .concat(new Date(0).toUTCString())
          .concat(";path=/");
        (document.cookie = "".concat("_clck", "=").concat(o)),
          (document.cookie = "".concat("_clsk", "=").concat(o));
      }
      n.length > 2 && (t.expiry = wr(n[2], 36)),
        n.length > 3 && 1 === wr(n[3]) && (t.consent = 1),
        (u.track = u.track || 1 === t.consent),
        (t.id = u.track ? n[0] : t.id);
    }
    return t;
  }
  function Er(t) {
    if (mr(document, "cookie")) {
      var e = document.cookie.split(";");
      if (e)
        for (var n = 0; n < e.length; n++) {
          var a = e[n].split("=");
          if (a.length > 1 && a[0] && a[0].trim() === t) return a[1];
        }
    }
    return null;
  }
  function Or(t, e, n) {
    if (
      u.track &&
      ((navigator && navigator.cookieEnabled) || mr(document, "cookie"))
    ) {
      var a = new Date();
      a.setDate(a.getDate() + n);
      var r = a ? "expires=" + a.toUTCString() : "",
        i = "".concat(t, "=").concat(e).concat(";").concat(r).concat(";path=/");
      try {
        if (null === sr) {
          for (
            var o = location.hostname ? location.hostname.split(".") : [],
              c = o.length - 1;
            c >= 0;
            c--
          )
            if (
              ((sr = ".".concat(o[c]).concat(sr || "")),
              c < o.length - 1 &&
                ((document.cookie = ""
                  .concat(i)
                  .concat(";")
                  .concat("domain=")
                  .concat(sr)),
                Er(t) === e))
            )
              return;
          sr = "";
        }
      } catch (t) {
        sr = "";
      }
      document.cookie = sr
        ? "".concat(i).concat(";").concat("domain=").concat(sr)
        : i;
    }
  }
  var Mr,
    Sr = null;
  function Nr() {
    var t = ur;
    Sr = {
      version: d,
      sequence: 0,
      start: 0,
      duration: 0,
      projectId: t.projectId,
      userId: t.userId,
      sessionId: t.sessionId,
      pageNum: t.pageNum,
      upload: 0,
      end: 0,
    };
  }
  function xr() {
    Sr = null;
  }
  function _r(t) {
    return (
      (Sr.start = Sr.start + Sr.duration),
      (Sr.duration = l() - Sr.start),
      Sr.sequence++,
      (Sr.upload = t && "sendBeacon" in navigator ? 1 : 0),
      (Sr.end = t ? 1 : 0),
      [
        Sr.version,
        Sr.sequence,
        Sr.start,
        Sr.duration,
        Sr.projectId,
        Sr.userId,
        Sr.sessionId,
        Sr.pageNum,
        Sr.upload,
        Sr.end,
      ]
    );
  }
  function Tr() {
    Mr = [];
  }
  function Dr(t) {
    if (Mr && -1 === Mr.indexOf(t.message)) {
      var e = u.report;
      if (e && e.length > 0) {
        var n = {
          v: Sr.version,
          p: Sr.projectId,
          u: Sr.userId,
          s: Sr.sessionId,
          n: Sr.pageNum,
        };
        t.message && (n.m = t.message), t.stack && (n.e = t.stack);
        var a = new XMLHttpRequest();
        a.open("POST", e), a.send(JSON.stringify(n)), Mr.push(t.message);
      }
    }
    return t;
  }
  function Ir(t) {
    return function () {
      var e = performance.now();
      try {
        t.apply(this, arguments);
      } catch (t) {
        throw Dr(t);
      }
      var n = performance.now() - e;
      _(4, n), n > 30 && (x(7), T(6, n));
    };
  }
  var Cr = [];
  function jr(t, e, n, a) {
    void 0 === a && (a = !1), (n = Ir(n));
    try {
      t[c("addEventListener")](e, n, a),
        Cr.push({ event: e, target: t, listener: n, capture: a });
    } catch (t) {}
  }
  function zr() {
    for (var t = 0, e = Cr; t < e.length; t++) {
      var n = e[t];
      try {
        n.target[c("removeEventListener")](n.event, n.listener, n.capture);
      } catch (t) {}
    }
    Cr = [];
  }
  var Lr = null,
    Ar = null,
    Rr = null,
    Hr = 0;
  function Yr() {
    return !(Hr++ > 20) || (Ca(4, 0), !1);
  }
  function Wr() {
    (Hr = 0), Rr !== qr() && (ci(), window.setTimeout(Xr, 250));
  }
  function Xr() {
    ui(), T(29, 1);
  }
  function qr() {
    return location.href
      ? location.href.replace(location.hash, "")
      : location.href;
  }
  var Pr = !1;
  function Ur() {
    (Pr = !0),
      (s = performance.now()),
      Nt(),
      zr(),
      Tr(),
      (Rr = qr()),
      (Hr = 0),
      jr(window, "popstate", Wr),
      null === Lr &&
        ((Lr = history.pushState),
        (history.pushState = function () {
          Lr.apply(this, arguments), Vr() && Yr() && Wr();
        })),
      null === Ar &&
        ((Ar = history.replaceState),
        (history.replaceState = function () {
          Ar.apply(this, arguments), Vr() && Yr() && Wr();
        }));
  }
  function Br() {
    (Rr = null), (Hr = 0), Tr(), zr(), Nt(), (s = 0), (Pr = !1);
  }
  function Vr() {
    return Pr;
  }
  function Fr(t) {
    if (null === t || Pr) return !1;
    for (var e in t) e in u && (u[e] = t[e]);
    return !0;
  }
  function Jr() {
    ui(), O("clarity", "restart");
  }
  var Gr = Object.freeze({
    __proto__: null,
    start: function () {
      (vt = []),
        T(26, navigator.webdriver ? 1 : 0),
        jr(window, "error", _a),
        (xa = {}),
        (Ia = {});
    },
    stop: function () {
      Ia = {};
    },
  });
  function Zr() {
    return Q(this, void 0, void 0, function () {
      var t, e;
      return $(this, function (n) {
        switch (n.label) {
          case 0:
            return (
              (t = l()),
              Dt((e = { id: hr(), cost: 3 })),
              [4, Ve(document, e, 0)]
            );
          case 1:
            return n.sent(), [4, Rt(5, e, t)];
          case 2:
            return n.sent(), It(e), [2];
        }
      });
    });
  }
  var Kr = Object.freeze({
    __proto__: null,
    start: function () {
      Xt(),
        qt(),
        na(),
        (Gn = null),
        (Bn = new WeakMap()),
        (Vn = {}),
        (Fn = []),
        (Jn = !!window.IntersectionObserver),
        Mn(),
        (function () {
          if (
            ((Fe = []),
            (Qe = []),
            ($e = null),
            (tn = 0),
            (en = {}),
            null === Ge &&
              ((Ge = CSSStyleSheet.prototype.insertRule),
              (CSSStyleSheet.prototype.insertRule = function () {
                return Vr() && un(this.ownerNode), Ge.apply(this, arguments);
              })),
            null === Ze &&
              ((Ze = CSSStyleSheet.prototype.deleteRule),
              (CSSStyleSheet.prototype.deleteRule = function () {
                return Vr() && un(this.ownerNode), Ze.apply(this, arguments);
              })),
            null === Ke)
          ) {
            Ke = Element.prototype.attachShadow;
            try {
              Element.prototype.attachShadow = function () {
                return Vr()
                  ? un(Ke.apply(this, arguments))
                  : Ke.apply(this, arguments);
              };
            } catch (t) {
              Ke = null;
            }
          }
        })(),
        xt(Zr, 1).then(function () {
          Ir(qt)(), Ir(Qn)();
        });
    },
    stop: function () {
      na(),
        (Bn = null),
        (Vn = {}),
        (Fn = []),
        Gn && (Gn.disconnect(), (Gn = null)),
        (Jn = !1),
        Sn(),
        (function () {
          for (var t = 0, e = Fe; t < e.length; t++) {
            var n = e[t];
            n && n.disconnect();
          }
          (Fe = []), (en = {}), (Je = []), (Qe = []), (tn = 0), ($e = null);
        })(),
        Xt();
    },
  });
  var Qr,
    $r = null;
  function ti() {
    $r = null;
  }
  function ei(t) {
    ($r = {
      fetchStart: Math.round(t.fetchStart),
      connectStart: Math.round(t.connectStart),
      connectEnd: Math.round(t.connectEnd),
      requestStart: Math.round(t.requestStart),
      responseStart: Math.round(t.responseStart),
      responseEnd: Math.round(t.responseEnd),
      domInteractive: Math.round(t.domInteractive),
      domComplete: Math.round(t.domComplete),
      loadEventStart: Math.round(t.loadEventStart),
      loadEventEnd: Math.round(t.loadEventEnd),
      redirectCount: Math.round(t.redirectCount),
      size: t.transferSize ? t.transferSize : 0,
      type: t.type,
      protocol: t.nextHopProtocol,
      encodedSize: t.encodedBodySize ? t.encodedBodySize : 0,
      decodedSize: t.decodedBodySize ? t.decodedBodySize : 0,
    }),
      (function (t) {
        Q(this, void 0, void 0, function () {
          var e, n;
          return $(this, function (a) {
            return (
              (e = l()),
              (n = [e, t]),
              29 === t &&
                (n.push($r.fetchStart),
                n.push($r.connectStart),
                n.push($r.connectEnd),
                n.push($r.requestStart),
                n.push($r.responseStart),
                n.push($r.responseEnd),
                n.push($r.domInteractive),
                n.push($r.domComplete),
                n.push($r.loadEventStart),
                n.push($r.loadEventEnd),
                n.push($r.redirectCount),
                n.push($r.size),
                n.push($r.type),
                n.push($r.protocol),
                n.push($r.encodedSize),
                n.push($r.decodedSize),
                ti(),
                wa(n, !1)),
              [2]
            );
          });
        });
      })(29);
  }
  var ni = [
    "navigation",
    "resource",
    "longtask",
    "first-input",
    "layout-shift",
    "largest-contentful-paint",
  ];
  function ai() {
    try {
      Qr && Qr.disconnect(), (Qr = new PerformanceObserver(Ir(ri)));
      for (var t = 0, e = ni; t < e.length; t++) {
        var n = e[t];
        PerformanceObserver.supportedEntryTypes.indexOf(n) >= 0 &&
          ("layout-shift" === n && _(9, 0),
          Qr.observe({ type: n, buffered: !0 }));
      }
    } catch (t) {
      Ca(3, 1);
    }
  }
  function ri(t) {
    !(function (t) {
      for (
        var e =
            !("visibilityState" in document) ||
            "visible" === document.visibilityState,
          n = 0;
        n < t.length;
        n++
      ) {
        var a = t[n];
        switch (a.entryType) {
          case "navigation":
            ei(a);
            break;
          case "resource":
            var r = a.name;
            rr(4, ii(r)),
              (r !== u.upload && r !== u.fallback) || T(28, a.duration);
            break;
          case "longtask":
            x(7);
            break;
          case "first-input":
            e && T(10, a.processingStart - a.startTime);
            break;
          case "layout-shift":
            e && !a.hadRecentInput && _(9, 1e3 * a.value);
            break;
          case "largest-contentful-paint":
            e && T(8, a.startTime);
        }
      }
      performance &&
        "memory" in performance &&
        performance.memory.usedJSHeapSize &&
        T(30, Math.abs(performance.memory.usedJSHeapSize / 1048576));
    })(t.getEntries());
  }
  function ii(t) {
    var e = document.createElement("a");
    return (e.href = t), e.hostname;
  }
  var oi = [
    Gr,
    Kr,
    Ae,
    Object.freeze({
      __proto__: null,
      start: function () {
        ti(),
          (function () {
            window.PerformanceObserver &&
            PerformanceObserver.supportedEntryTypes
              ? "complete" !== document.readyState
                ? jr(window, "load", D.bind(this, ai, 0))
                : ai()
              : Ca(3, 0);
          })();
      },
      stop: function () {
        Qr && Qr.disconnect(), (Qr = null), ti();
      },
    }),
  ];
  function ui(t) {
    void 0 === t && (t = null),
      (function () {
        try {
          return (
            !1 === Pr &&
            "undefined" != typeof Promise &&
            window.MutationObserver &&
            document.createTreeWalker &&
            "now" in Date &&
            "now" in performance &&
            "undefined" != typeof WeakMap
          );
        } catch (t) {
          return !1;
        }
      })() &&
        (Fr(t),
        Ur(),
        rt(),
        oi.forEach(function (t) {
          return Ir(t.start)();
        }));
  }
  function ci() {
    Vr() &&
      (oi
        .slice()
        .reverse()
        .forEach(function (t) {
          return Ir(t.stop)();
        }),
      it(),
      Br());
  }
  var si = Object.freeze({
    __proto__: null,
    version: d,
    start: ui,
    pause: function () {
      Vr() &&
        (O("clarity", "pause"),
        null === Mt &&
          (Mt = new Promise(function (t) {
            St = t;
          })));
    },
    resume: function () {
      Vr() &&
        (Mt && (St(), (Mt = null), null === Ot && _t()),
        O("clarity", "resume"));
    },
    stop: ci,
    consent: pr,
    event: O,
    identify: J,
    set: F,
    upgrade: U,
    metadata: fr,
  });
  !(function () {
    if ("undefined" != typeof window) {
      var t = window,
        e = "clarity";
      if (t[e] && t[e].v)
        return console.warn("Error CL001: Multiple Clarity tags detected.");
      var n = (t[e] && t[e].q) || [];
      for (
        t[e] = function (t) {
          for (var e = [], n = 1; n < arguments.length; n++)
            e[n - 1] = arguments[n];
          return si[t].apply(si, e);
        },
          t[e].v = d;
        n.length > 0;

      )
        t[e].apply(t, n.shift());
    }
  })();
})();
