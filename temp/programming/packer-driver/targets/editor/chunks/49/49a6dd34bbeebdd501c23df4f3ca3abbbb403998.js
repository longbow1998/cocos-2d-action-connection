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
         * react-is.development.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */
        'use strict';

        if (process.env.NODE_ENV !== "production") {
          (function () {
            'use strict'; // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
            // nor polyfill, then a plain number is used for performance.

            var hasSymbol = typeof Symbol === 'function' && Symbol.for;
            var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
            var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
            var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
            var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
            var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
            var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
            var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
            // (unstable) APIs that have been removed. Can we remove the symbols?

            var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
            var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
            var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
            var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
            var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
            var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
            var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
            var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
            var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
            var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
            var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

            function isValidElementType(type) {
              return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
              type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
            }

            function typeOf(object) {
              if (typeof object === 'object' && object !== null) {
                var $$typeof = object.$$typeof;

                switch ($$typeof) {
                  case REACT_ELEMENT_TYPE:
                    var type = object.type;

                    switch (type) {
                      case REACT_ASYNC_MODE_TYPE:
                      case REACT_CONCURRENT_MODE_TYPE:
                      case REACT_FRAGMENT_TYPE:
                      case REACT_PROFILER_TYPE:
                      case REACT_STRICT_MODE_TYPE:
                      case REACT_SUSPENSE_TYPE:
                        return type;

                      default:
                        var $$typeofType = type && type.$$typeof;

                        switch ($$typeofType) {
                          case REACT_CONTEXT_TYPE:
                          case REACT_FORWARD_REF_TYPE:
                          case REACT_LAZY_TYPE:
                          case REACT_MEMO_TYPE:
                          case REACT_PROVIDER_TYPE:
                            return $$typeofType;

                          default:
                            return $$typeof;
                        }

                    }

                  case REACT_PORTAL_TYPE:
                    return $$typeof;
                }
              }

              return undefined;
            } // AsyncMode is deprecated along with isAsyncMode


            var AsyncMode = REACT_ASYNC_MODE_TYPE;
            var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
            var ContextConsumer = REACT_CONTEXT_TYPE;
            var ContextProvider = REACT_PROVIDER_TYPE;
            var Element = REACT_ELEMENT_TYPE;
            var ForwardRef = REACT_FORWARD_REF_TYPE;
            var Fragment = REACT_FRAGMENT_TYPE;
            var Lazy = REACT_LAZY_TYPE;
            var Memo = REACT_MEMO_TYPE;
            var Portal = REACT_PORTAL_TYPE;
            var Profiler = REACT_PROFILER_TYPE;
            var StrictMode = REACT_STRICT_MODE_TYPE;
            var Suspense = REACT_SUSPENSE_TYPE;
            var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

            function isAsyncMode(object) {
              {
                if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                  hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

                  console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
                }
              }
              return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
            }

            function isConcurrentMode(object) {
              return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
            }

            function isContextConsumer(object) {
              return typeOf(object) === REACT_CONTEXT_TYPE;
            }

            function isContextProvider(object) {
              return typeOf(object) === REACT_PROVIDER_TYPE;
            }

            function isElement(object) {
              return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
            }

            function isForwardRef(object) {
              return typeOf(object) === REACT_FORWARD_REF_TYPE;
            }

            function isFragment(object) {
              return typeOf(object) === REACT_FRAGMENT_TYPE;
            }

            function isLazy(object) {
              return typeOf(object) === REACT_LAZY_TYPE;
            }

            function isMemo(object) {
              return typeOf(object) === REACT_MEMO_TYPE;
            }

            function isPortal(object) {
              return typeOf(object) === REACT_PORTAL_TYPE;
            }

            function isProfiler(object) {
              return typeOf(object) === REACT_PROFILER_TYPE;
            }

            function isStrictMode(object) {
              return typeOf(object) === REACT_STRICT_MODE_TYPE;
            }

            function isSuspense(object) {
              return typeOf(object) === REACT_SUSPENSE_TYPE;
            }

            exports.AsyncMode = AsyncMode;
            exports.ConcurrentMode = ConcurrentMode;
            exports.ContextConsumer = ContextConsumer;
            exports.ContextProvider = ContextProvider;
            exports.Element = Element;
            exports.ForwardRef = ForwardRef;
            exports.Fragment = Fragment;
            exports.Lazy = Lazy;
            exports.Memo = Memo;
            exports.Portal = Portal;
            exports.Profiler = Profiler;
            exports.StrictMode = StrictMode;
            exports.Suspense = Suspense;
            exports.isAsyncMode = isAsyncMode;
            exports.isConcurrentMode = isConcurrentMode;
            exports.isContextConsumer = isContextConsumer;
            exports.isContextProvider = isContextProvider;
            exports.isElement = isElement;
            exports.isForwardRef = isForwardRef;
            exports.isFragment = isFragment;
            exports.isLazy = isLazy;
            exports.isMemo = isMemo;
            exports.isPortal = isPortal;
            exports.isProfiler = isProfiler;
            exports.isStrictMode = isStrictMode;
            exports.isSuspense = isSuspense;
            exports.isValidElementType = isValidElementType;
            exports.typeOf = typeOf;
          })();
        } // #endregion ORIGINAL CODE


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
//# sourceMappingURL=49a6dd34bbeebdd501c23df4f3ca3abbbb403998.js.map