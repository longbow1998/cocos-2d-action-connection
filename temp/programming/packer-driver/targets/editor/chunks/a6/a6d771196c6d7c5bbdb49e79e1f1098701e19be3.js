System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/objectSpread2", "@babel/runtime/helpers/slicedToArray", "react", "@rc-component/portal", "rc-util/lib/hooks/useLayoutEffect", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req0 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req1 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req2 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_react) {
      _req3 = _react.__cjsMetaURL;
    }, function (_rcComponentPortal) {
      _req4 = _rcComponentPortal.__cjsMetaURL;
    }, function (_rcUtilLibHooksUseLayoutEffect) {
      _req5 = _rcUtilLibHooksUseLayoutEffect.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req6 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req7 = _unresolved_3.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

        var _typeof = require("@babel/runtime/helpers/typeof");

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = void 0;

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var React = _interopRequireWildcard(require("react"));

        var _portal = _interopRequireDefault(require("@rc-component/portal"));

        var _useLayoutEffect = _interopRequireDefault(require("rc-util/lib/hooks/useLayoutEffect"));

        var _DrawerPopup = _interopRequireDefault(require("./DrawerPopup"));

        var _util = require("./util");

        function _getRequireWildcardCache(nodeInterop) {
          if (typeof WeakMap !== "function") return null;
          var cacheBabelInterop = new WeakMap();
          var cacheNodeInterop = new WeakMap();
          return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
            return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
          })(nodeInterop);
        }

        function _interopRequireWildcard(obj, nodeInterop) {
          if (!nodeInterop && obj && obj.__esModule) {
            return obj;
          }

          if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
            return {
              default: obj
            };
          }

          var cache = _getRequireWildcardCache(nodeInterop);

          if (cache && cache.has(obj)) {
            return cache.get(obj);
          }

          var newObj = {};
          var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

          for (var key in obj) {
            if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
              var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

              if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
              } else {
                newObj[key] = obj[key];
              }
            }
          }

          newObj.default = obj;

          if (cache) {
            cache.set(obj, newObj);
          }

          return newObj;
        }

        var Drawer = function Drawer(props) {
          var _props$open = props.open,
              open = _props$open === void 0 ? false : _props$open,
              _props$prefixCls = props.prefixCls,
              prefixCls = _props$prefixCls === void 0 ? 'rc-drawer' : _props$prefixCls,
              _props$placement = props.placement,
              placement = _props$placement === void 0 ? 'right' : _props$placement,
              _props$autoFocus = props.autoFocus,
              autoFocus = _props$autoFocus === void 0 ? true : _props$autoFocus,
              _props$keyboard = props.keyboard,
              keyboard = _props$keyboard === void 0 ? true : _props$keyboard,
              _props$width = props.width,
              width = _props$width === void 0 ? 378 : _props$width,
              _props$mask = props.mask,
              mask = _props$mask === void 0 ? true : _props$mask,
              _props$maskClosable = props.maskClosable,
              maskClosable = _props$maskClosable === void 0 ? true : _props$maskClosable,
              getContainer = props.getContainer,
              forceRender = props.forceRender,
              afterOpenChange = props.afterOpenChange,
              destroyOnClose = props.destroyOnClose;

          var _React$useState = React.useState(false),
              _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
              animatedVisible = _React$useState2[0],
              setAnimatedVisible = _React$useState2[1]; // ============================= Warn =============================


          if (process.env.NODE_ENV !== 'production') {
            (0, _util.warnCheck)(props);
          } // ============================= Open =============================


          var _React$useState3 = React.useState(false),
              _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
              internalOpen = _React$useState4[0],
              setInternalOpen = _React$useState4[1];

          (0, _useLayoutEffect.default)(function () {
            setInternalOpen(open);
          }, [open]); // ============================ Focus =============================

          var panelRef = React.useRef();
          var lastActiveRef = React.useRef();
          (0, _useLayoutEffect.default)(function () {
            if (internalOpen) {
              lastActiveRef.current = document.activeElement;
            }
          }, [internalOpen]); // ============================= Open =============================

          var internalAfterOpenChange = function internalAfterOpenChange(nextVisible) {
            var _panelRef$current;

            setAnimatedVisible(nextVisible);
            afterOpenChange === null || afterOpenChange === void 0 ? void 0 : afterOpenChange(nextVisible);

            if (!nextVisible && lastActiveRef.current && !((_panelRef$current = panelRef.current) === null || _panelRef$current === void 0 ? void 0 : _panelRef$current.contains(lastActiveRef.current))) {
              var _lastActiveRef$curren;

              (_lastActiveRef$curren = lastActiveRef.current) === null || _lastActiveRef$curren === void 0 ? void 0 : _lastActiveRef$curren.focus();
            }
          }; // ============================ Render ============================


          if (!forceRender && !animatedVisible && !internalOpen && destroyOnClose) {
            return null;
          }

          var drawerPopupProps = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
            open: internalOpen,
            prefixCls: prefixCls,
            placement: placement,
            autoFocus: autoFocus,
            keyboard: keyboard,
            width: width,
            mask: mask,
            maskClosable: maskClosable,
            inline: getContainer === false,
            afterOpenChange: internalAfterOpenChange,
            ref: panelRef
          });
          return /*#__PURE__*/React.createElement(_portal.default, {
            open: internalOpen || forceRender || animatedVisible,
            autoDestroy: false,
            getContainer: getContainer,
            autoLock: mask && (internalOpen || animatedVisible)
          }, /*#__PURE__*/React.createElement(_DrawerPopup.default, drawerPopupProps));
        };

        if (process.env.NODE_ENV !== 'production') {
          Drawer.displayName = 'Drawer';
        }

        var _default = Drawer;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/objectSpread2': _req1,
        '@babel/runtime/helpers/slicedToArray': _req2,
        'react': _req3,
        '@rc-component/portal': _req4,
        'rc-util/lib/hooks/useLayoutEffect': _req5,
        './DrawerPopup': _req6,
        './util': _req7
      }));
    }
  };
});
//# sourceMappingURL=a6d771196c6d7c5bbdb49e79e1f1098701e19be3.js.map