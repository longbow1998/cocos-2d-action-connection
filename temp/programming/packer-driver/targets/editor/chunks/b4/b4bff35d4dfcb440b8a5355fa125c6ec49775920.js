System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/regeneratorRuntime", "@babel/runtime/helpers/asyncToGenerator", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/objectSpread2", "react-dom"], function (_export, _context3) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _cjsExports, ___esModule, __r, __u, _render, _unmount0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req0 = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersRegeneratorRuntime) {
      _req1 = _babelRuntimeHelpersRegeneratorRuntime.__cjsMetaURL;
    }, function (_babelRuntimeHelpersAsyncToGenerator) {
      _req2 = _babelRuntimeHelpersAsyncToGenerator.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req3 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req4 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_reactDom) {
      _req5 = _reactDom.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context3.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports._r = _r;
        exports._u = _u;
        exports.render = render;
        exports.unmount = unmount;

        var _regeneratorRuntime2 = _interopRequireDefault(require("@babel/runtime/helpers/regeneratorRuntime"));

        var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

        var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var ReactDOM = _interopRequireWildcard(require("react-dom")); // Let compiler not to search module usage


        var fullClone = (0, _objectSpread2.default)({}, ReactDOM);
        var version = fullClone.version,
            reactRender = fullClone.render,
            unmountComponentAtNode = fullClone.unmountComponentAtNode;
        var createRoot;

        try {
          var mainVersion = Number((version || '').split('.')[0]);

          if (mainVersion >= 18) {
            createRoot = fullClone.createRoot;
          }
        } catch (e) {// Do nothing;
        }

        function toggleWarning(skip) {
          var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fullClone.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

          if (__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED && (0, _typeof2.default)(__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === 'object') {
            __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.usingClientEntryPoint = skip;
          }
        }

        var MARK = '__rc_react_root__'; // ========================== Render ==========================

        function modernRender(node, container) {
          toggleWarning(true);
          var root = container[MARK] || createRoot(container);
          toggleWarning(false);
          root.render(node);
          container[MARK] = root;
        }

        function legacyRender(node, container) {
          reactRender(node, container);
        }
        /** @private Test usage. Not work in prod */


        function _r(node, container) {
          if (process.env.NODE_ENV !== 'production') {
            return legacyRender(node, container);
          }
        }

        function render(node, container) {
          if (createRoot) {
            modernRender(node, container);
            return;
          }

          legacyRender(node, container);
        } // ========================= Unmount ==========================


        function modernUnmount(_x) {
          return _modernUnmount.apply(this, arguments);
        }

        function _modernUnmount() {
          _modernUnmount = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee(container) {
            return (0, _regeneratorRuntime2.default)().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  return _context.abrupt("return", Promise.resolve().then(function () {
                    var _container$MARK;

                    (_container$MARK = container[MARK]) === null || _container$MARK === void 0 ? void 0 : _container$MARK.unmount();
                    delete container[MARK];
                  }));

                case 1:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          return _modernUnmount.apply(this, arguments);
        }

        function legacyUnmount(container) {
          unmountComponentAtNode(container);
        }
        /** @private Test usage. Not work in prod */


        function _u(container) {
          if (process.env.NODE_ENV !== 'production') {
            return legacyUnmount(container);
          }
        }

        function unmount(_x2) {
          return _unmount.apply(this, arguments);
        }

        function _unmount() {
          _unmount = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee2(container) {
            return (0, _regeneratorRuntime2.default)().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(createRoot !== undefined)) {
                    _context2.next = 2;
                    break;
                  }

                  return _context2.abrupt("return", modernUnmount(container));

                case 2:
                  legacyUnmount(container);

                case 3:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
          return _unmount.apply(this, arguments);
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        __r = module.exports._r;
        __u = module.exports._u;
        _render = module.exports.render;
        _unmount0 = module.exports.unmount;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/regeneratorRuntime': _req1,
        '@babel/runtime/helpers/asyncToGenerator': _req2,
        '@babel/runtime/helpers/typeof': _req3,
        '@babel/runtime/helpers/objectSpread2': _req4,
        'react-dom': _req5
      }));
    }
  };
});
//# sourceMappingURL=b4bff35d4dfcb440b8a5355fa125c6ec49775920.js.map