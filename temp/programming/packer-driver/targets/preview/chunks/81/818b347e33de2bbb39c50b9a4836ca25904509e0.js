System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, _AsyncMode, _ConcurrentMode, _ContextConsumer, _ContextProvider, _Element, _ForwardRef, _Fragment, _Lazy, _Memo, _Portal, _Profiler, _StrictMode, _Suspense, _isAsyncMode, _isConcurrentMode, _isContextConsumer, _isContextProvider, _isElement, _isForwardRef, _isFragment, _isLazy, _isMemo, _isPortal, _isProfiler, _isStrictMode, _isSuspense, _isValidElementType, _typeOf, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE

        /** @license React v16.13.1
         * react-is.production.min.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */
        'use strict';

        var b = "function" === typeof Symbol && Symbol.for,
            c = b ? Symbol.for("react.element") : 60103,
            d = b ? Symbol.for("react.portal") : 60106,
            e = b ? Symbol.for("react.fragment") : 60107,
            f = b ? Symbol.for("react.strict_mode") : 60108,
            g = b ? Symbol.for("react.profiler") : 60114,
            h = b ? Symbol.for("react.provider") : 60109,
            k = b ? Symbol.for("react.context") : 60110,
            l = b ? Symbol.for("react.async_mode") : 60111,
            m = b ? Symbol.for("react.concurrent_mode") : 60111,
            n = b ? Symbol.for("react.forward_ref") : 60112,
            p = b ? Symbol.for("react.suspense") : 60113,
            q = b ? Symbol.for("react.suspense_list") : 60120,
            r = b ? Symbol.for("react.memo") : 60115,
            t = b ? Symbol.for("react.lazy") : 60116,
            v = b ? Symbol.for("react.block") : 60121,
            w = b ? Symbol.for("react.fundamental") : 60117,
            x = b ? Symbol.for("react.responder") : 60118,
            y = b ? Symbol.for("react.scope") : 60119;

        function z(a) {
          if ("object" === typeof a && null !== a) {
            var u = a.$$typeof;

            switch (u) {
              case c:
                switch (a = a.type, a) {
                  case l:
                  case m:
                  case e:
                  case g:
                  case f:
                  case p:
                    return a;

                  default:
                    switch (a = a && a.$$typeof, a) {
                      case k:
                      case n:
                      case t:
                      case r:
                      case h:
                        return a;

                      default:
                        return u;
                    }

                }

              case d:
                return u;
            }
          }
        }

        function A(a) {
          return z(a) === m;
        }

        exports.AsyncMode = l;
        exports.ConcurrentMode = m;
        exports.ContextConsumer = k;
        exports.ContextProvider = h;
        exports.Element = c;
        exports.ForwardRef = n;
        exports.Fragment = e;
        exports.Lazy = t;
        exports.Memo = r;
        exports.Portal = d;
        exports.Profiler = g;
        exports.StrictMode = f;
        exports.Suspense = p;

        exports.isAsyncMode = function (a) {
          return A(a) || z(a) === l;
        };

        exports.isConcurrentMode = A;

        exports.isContextConsumer = function (a) {
          return z(a) === k;
        };

        exports.isContextProvider = function (a) {
          return z(a) === h;
        };

        exports.isElement = function (a) {
          return "object" === typeof a && null !== a && a.$$typeof === c;
        };

        exports.isForwardRef = function (a) {
          return z(a) === n;
        };

        exports.isFragment = function (a) {
          return z(a) === e;
        };

        exports.isLazy = function (a) {
          return z(a) === t;
        };

        exports.isMemo = function (a) {
          return z(a) === r;
        };

        exports.isPortal = function (a) {
          return z(a) === d;
        };

        exports.isProfiler = function (a) {
          return z(a) === g;
        };

        exports.isStrictMode = function (a) {
          return z(a) === f;
        };

        exports.isSuspense = function (a) {
          return z(a) === p;
        };

        exports.isValidElementType = function (a) {
          return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
        };

        exports.typeOf = z; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        _AsyncMode = module.exports.AsyncMode;
        _ConcurrentMode = module.exports.ConcurrentMode;
        _ContextConsumer = module.exports.ContextConsumer;
        _ContextProvider = module.exports.ContextProvider;
        _Element = module.exports.Element;
        _ForwardRef = module.exports.ForwardRef;
        _Fragment = module.exports.Fragment;
        _Lazy = module.exports.Lazy;
        _Memo = module.exports.Memo;
        _Portal = module.exports.Portal;
        _Profiler = module.exports.Profiler;
        _StrictMode = module.exports.StrictMode;
        _Suspense = module.exports.Suspense;
        _isAsyncMode = module.exports.isAsyncMode;
        _isConcurrentMode = module.exports.isConcurrentMode;
        _isContextConsumer = module.exports.isContextConsumer;
        _isContextProvider = module.exports.isContextProvider;
        _isElement = module.exports.isElement;
        _isForwardRef = module.exports.isForwardRef;
        _isFragment = module.exports.isFragment;
        _isLazy = module.exports.isLazy;
        _isMemo = module.exports.isMemo;
        _isPortal = module.exports.isPortal;
        _isProfiler = module.exports.isProfiler;
        _isStrictMode = module.exports.isStrictMode;
        _isSuspense = module.exports.isSuspense;
        _isValidElementType = module.exports.isValidElementType;
        _typeOf = module.exports.typeOf;
      }, {});
    }
  };
});
//# sourceMappingURL=818b347e33de2bbb39c50b9a4836ca25904509e0.js.map