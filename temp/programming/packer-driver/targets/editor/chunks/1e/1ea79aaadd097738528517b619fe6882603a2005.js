System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        function t(t) {
          return "object" == typeof t && null != t && 1 === t.nodeType;
        }

        function e(t, e) {
          return (!e || "hidden" !== t) && "visible" !== t && "clip" !== t;
        }

        function n(t, n) {
          if (t.clientHeight < t.scrollHeight || t.clientWidth < t.scrollWidth) {
            var i = getComputedStyle(t, null);
            return e(i.overflowY, n) || e(i.overflowX, n) || function (t) {
              var e = function (t) {
                if (!t.ownerDocument || !t.ownerDocument.defaultView) return null;

                try {
                  return t.ownerDocument.defaultView.frameElement;
                } catch (t) {
                  return null;
                }
              }(t);

              return !!e && (e.clientHeight < t.scrollHeight || e.clientWidth < t.scrollWidth);
            }(t);
          }

          return !1;
        }

        function i(t, e, n, i, r, o, l, d) {
          return o < t && l > e || o > t && l < e ? 0 : o <= t && d <= n || l >= e && d >= n ? o - t - i : l > e && d < n || o < t && d > n ? l - e + r : 0;
        }

        module.exports = function (e, r) {
          var o = window,
              l = r.scrollMode,
              d = r.block,
              f = r.inline,
              h = r.boundary,
              u = r.skipOverflowHiddenElements,
              s = "function" == typeof h ? h : function (t) {
            return t !== h;
          };
          if (!t(e)) throw new TypeError("Invalid target");

          for (var c, a, g = document.scrollingElement || document.documentElement, m = [], p = e; t(p) && s(p);) {
            if ((p = null == (a = (c = p).parentElement) ? c.getRootNode().host || null : a) === g) {
              m.push(p);
              break;
            }

            null != p && p === document.body && n(p) && !n(document.documentElement) || null != p && n(p, u) && m.push(p);
          }

          for (var w = o.visualViewport ? o.visualViewport.width : innerWidth, v = o.visualViewport ? o.visualViewport.height : innerHeight, W = window.scrollX || pageXOffset, H = window.scrollY || pageYOffset, b = e.getBoundingClientRect(), y = b.height, E = b.width, M = b.top, V = b.right, x = b.bottom, I = b.left, C = "start" === d || "nearest" === d ? M : "end" === d ? x : M + y / 2, R = "center" === f ? I + E / 2 : "end" === f ? V : I, T = [], k = 0; k < m.length; k++) {
            var B = m[k],
                D = B.getBoundingClientRect(),
                O = D.height,
                X = D.width,
                Y = D.top,
                L = D.right,
                S = D.bottom,
                j = D.left;
            if ("if-needed" === l && M >= 0 && I >= 0 && x <= v && V <= w && M >= Y && x <= S && I >= j && V <= L) return T;
            var N = getComputedStyle(B),
                q = parseInt(N.borderLeftWidth, 10),
                z = parseInt(N.borderTopWidth, 10),
                A = parseInt(N.borderRightWidth, 10),
                F = parseInt(N.borderBottomWidth, 10),
                G = 0,
                J = 0,
                K = "offsetWidth" in B ? B.offsetWidth - B.clientWidth - q - A : 0,
                P = "offsetHeight" in B ? B.offsetHeight - B.clientHeight - z - F : 0,
                Q = "offsetWidth" in B ? 0 === B.offsetWidth ? 0 : X / B.offsetWidth : 0,
                U = "offsetHeight" in B ? 0 === B.offsetHeight ? 0 : O / B.offsetHeight : 0;
            if (g === B) G = "start" === d ? C : "end" === d ? C - v : "nearest" === d ? i(H, H + v, v, z, F, H + C, H + C + y, y) : C - v / 2, J = "start" === f ? R : "center" === f ? R - w / 2 : "end" === f ? R - w : i(W, W + w, w, q, A, W + R, W + R + E, E), G = Math.max(0, G + H), J = Math.max(0, J + W);else {
              G = "start" === d ? C - Y - z : "end" === d ? C - S + F + P : "nearest" === d ? i(Y, S, O, z, F + P, C, C + y, y) : C - (Y + O / 2) + P / 2, J = "start" === f ? R - j - q : "center" === f ? R - (j + X / 2) + K / 2 : "end" === f ? R - L + A + K : i(j, L, X, q, A + K, R, R + E, E);
              var Z = B.scrollLeft,
                  $ = B.scrollTop;
              C += $ - (G = Math.max(0, Math.min($ + G / U, B.scrollHeight - O / U + P))), R += Z - (J = Math.max(0, Math.min(Z + J / Q, B.scrollWidth - X / Q + K)));
            }
            T.push({
              el: B,
              top: G,
              left: J
            });
          }

          return T;
        }; // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);
      }, {});
    }
  };
});
//# sourceMappingURL=1ea79aaadd097738528517b619fe6882603a2005.js.map