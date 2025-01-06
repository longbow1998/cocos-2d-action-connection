System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/slicedToArray", "react", "react-dom", "rc-util/lib/Dom/canUseDom", "rc-util/lib/ref", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req0 = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req1 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_react) {
      _req2 = _react.__cjsMetaURL;
    }, function (_reactDom2) {
      _req3 = _reactDom2.__cjsMetaURL;
    }, function (_rcUtilLibDomCanUseDom) {
      _req4 = _rcUtilLibDomCanUseDom.__cjsMetaURL;
    }, function (_rcUtilLibRef) {
      _req5 = _rcUtilLibRef.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req6 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req7 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req8 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req9 = _unresolved_5.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = void 0;

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var React = _interopRequireWildcard(require("react"));

        var _reactDom = require("react-dom");

        var _canUseDom = _interopRequireDefault(require("rc-util/lib/Dom/canUseDom"));

        var _ref2 = require("rc-util/lib/ref");

        var _Context = _interopRequireDefault(require("./Context"));

        var _useDom3 = _interopRequireDefault(require("./useDom"));

        var _useScrollLocker = _interopRequireDefault(require("./useScrollLocker"));

        var _mock = require("./mock");

        var getPortalContainer = function getPortalContainer(getContainer) {
          if (getContainer === false) {
            return false;
          }

          if (!(0, _canUseDom.default)() || !getContainer) {
            return null;
          }

          if (typeof getContainer === 'string') {
            return document.querySelector(getContainer);
          }

          if (typeof getContainer === 'function') {
            return getContainer();
          }

          return getContainer;
        };

        var Portal = /*#__PURE__*/React.forwardRef(function (props, ref) {
          var open = props.open,
              autoLock = props.autoLock,
              getContainer = props.getContainer,
              debug = props.debug,
              _props$autoDestroy = props.autoDestroy,
              autoDestroy = _props$autoDestroy === void 0 ? true : _props$autoDestroy,
              children = props.children;

          var _React$useState = React.useState(open),
              _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
              shouldRender = _React$useState2[0],
              setShouldRender = _React$useState2[1];

          var mergedRender = shouldRender || open; // ====================== Should Render ======================

          React.useEffect(function () {
            if (autoDestroy || open) {
              setShouldRender(open);
            }
          }, [open, autoDestroy]); // ======================== Container ========================

          var _React$useState3 = React.useState(function () {
            return getPortalContainer(getContainer);
          }),
              _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
              innerContainer = _React$useState4[0],
              setInnerContainer = _React$useState4[1];

          React.useEffect(function () {
            var customizeContainer = getPortalContainer(getContainer); // Tell component that we check this in effect which is safe to be `null`

            setInnerContainer(customizeContainer !== null && customizeContainer !== void 0 ? customizeContainer : null);
          });

          var _useDom = (0, _useDom3.default)(mergedRender && !innerContainer, debug),
              _useDom2 = (0, _slicedToArray2.default)(_useDom, 2),
              defaultContainer = _useDom2[0],
              queueCreate = _useDom2[1];

          var mergedContainer = innerContainer !== null && innerContainer !== void 0 ? innerContainer : defaultContainer; // ========================= Locker ==========================

          (0, _useScrollLocker.default)(autoLock && open && (0, _canUseDom.default)() && (mergedContainer === defaultContainer || mergedContainer === document.body)); // =========================== Ref ===========================

          var childRef = null;

          if (children && (0, _ref2.supportRef)(children) && ref) {
            var _ref = children;
            childRef = _ref.ref;
          }

          var mergedRef = (0, _ref2.useComposeRef)(childRef, ref); // ========================= Render ==========================
          // Do not render when nothing need render
          // When innerContainer is `undefined`, it may not ready since user use ref in the same render

          if (!mergedRender || !(0, _canUseDom.default)() || innerContainer === undefined) {
            return null;
          } // Render inline


          var renderInline = mergedContainer === false || (0, _mock.inlineMock)();
          var reffedChildren = children;

          if (ref) {
            reffedChildren = /*#__PURE__*/React.cloneElement(children, {
              ref: mergedRef
            });
          }

          return /*#__PURE__*/React.createElement(_Context.default.Provider, {
            value: queueCreate
          }, renderInline ? reffedChildren : /*#__PURE__*/(0, _reactDom.createPortal)(reffedChildren, mergedContainer));
        });

        if (process.env.NODE_ENV !== 'production') {
          Portal.displayName = 'Portal';
        }

        var _default = Portal;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/slicedToArray': _req1,
        'react': _req2,
        'react-dom': _req3,
        'rc-util/lib/Dom/canUseDom': _req4,
        'rc-util/lib/ref': _req5,
        './Context': _req6,
        './useDom': _req7,
        './useScrollLocker': _req8,
        './mock': _req9
      }));
    }
  };
});
//# sourceMappingURL=a96f430ac0ab4801fb3a141769757ae264cee04e.js.map