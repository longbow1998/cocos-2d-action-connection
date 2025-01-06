System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/objectSpread2", "@babel/runtime/helpers/slicedToArray", "react", "rc-motion", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _cjsExports, ___esModule, _default, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req0 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req1 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req2 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req3 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_react) {
      _req4 = _react.__cjsMetaURL;
    }, function (_rcMotion2) {
      _req5 = _rcMotion2.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req6 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req7 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req8 = _unresolved_4.__cjsMetaURL;
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
        exports.default = InlineSubMenuList;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var React = _interopRequireWildcard(require("react"));

        var _rcMotion = _interopRequireDefault(require("rc-motion"));

        var _motionUtil = require("../utils/motionUtil");

        var _MenuContext = _interopRequireWildcard(require("../context/MenuContext"));

        var _SubMenuList = _interopRequireDefault(require("./SubMenuList"));

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

        function InlineSubMenuList(_ref) {
          var id = _ref.id,
              open = _ref.open,
              keyPath = _ref.keyPath,
              children = _ref.children;
          var fixedMode = 'inline';

          var _React$useContext = React.useContext(_MenuContext.MenuContext),
              prefixCls = _React$useContext.prefixCls,
              forceSubMenuRender = _React$useContext.forceSubMenuRender,
              motion = _React$useContext.motion,
              defaultMotions = _React$useContext.defaultMotions,
              mode = _React$useContext.mode; // Always use latest mode check


          var sameModeRef = React.useRef(false);
          sameModeRef.current = mode === fixedMode; // We record `destroy` mark here since when mode change from `inline` to others.
          // The inline list should remove when motion end.

          var _React$useState = React.useState(!sameModeRef.current),
              _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
              destroy = _React$useState2[0],
              setDestroy = _React$useState2[1];

          var mergedOpen = sameModeRef.current ? open : false; // ================================= Effect =================================
          // Reset destroy state when mode change back

          React.useEffect(function () {
            if (sameModeRef.current) {
              setDestroy(false);
            }
          }, [mode]); // ================================= Render =================================

          var mergedMotion = (0, _objectSpread2.default)({}, (0, _motionUtil.getMotion)(fixedMode, motion, defaultMotions)); // No need appear since nest inlineCollapse changed

          if (keyPath.length > 1) {
            mergedMotion.motionAppear = false;
          } // Hide inline list when mode changed and motion end


          var originOnVisibleChanged = mergedMotion.onVisibleChanged;

          mergedMotion.onVisibleChanged = function (newVisible) {
            if (!sameModeRef.current && !newVisible) {
              setDestroy(true);
            }

            return originOnVisibleChanged === null || originOnVisibleChanged === void 0 ? void 0 : originOnVisibleChanged(newVisible);
          };

          if (destroy) {
            return null;
          }

          return /*#__PURE__*/React.createElement(_MenuContext.default, {
            mode: fixedMode,
            locked: !sameModeRef.current
          }, /*#__PURE__*/React.createElement(_rcMotion.default, (0, _extends2.default)({
            visible: mergedOpen
          }, mergedMotion, {
            forceRender: forceSubMenuRender,
            removeOnLeave: false,
            leavedClassName: "".concat(prefixCls, "-hidden")
          }), function (_ref2) {
            var motionClassName = _ref2.className,
                motionStyle = _ref2.style;
            return /*#__PURE__*/React.createElement(_SubMenuList.default, {
              id: id,
              className: motionClassName,
              style: motionStyle
            }, children);
          }));
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/objectSpread2': _req2,
        '@babel/runtime/helpers/slicedToArray': _req3,
        'react': _req4,
        'rc-motion': _req5,
        '../utils/motionUtil': _req6,
        '../context/MenuContext': _req7,
        './SubMenuList': _req8
      }));
    }
  };
});
//# sourceMappingURL=919a6565fd8c6e3832f3fcad78f6ce59e4dbd491.js.map