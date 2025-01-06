System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/objectSpread2", "@babel/runtime/helpers/slicedToArray", "react", "classnames", "rc-motion", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
    }, function (_classnames2) {
      _req5 = _classnames2.__cjsMetaURL;
    }, function (_rcMotion2) {
      _req6 = _rcMotion2.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req7 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req8 = _unresolved_3.__cjsMetaURL;
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

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var React = _interopRequireWildcard(require("react"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _rcMotion = _interopRequireDefault(require("rc-motion"));

        var _util = require("../../util");

        var _Panel = _interopRequireDefault(require("./Panel"));

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

        var Content = /*#__PURE__*/React.forwardRef(function (props, ref) {
          var prefixCls = props.prefixCls,
              title = props.title,
              style = props.style,
              className = props.className,
              visible = props.visible,
              forceRender = props.forceRender,
              destroyOnClose = props.destroyOnClose,
              motionName = props.motionName,
              ariaId = props.ariaId,
              onVisibleChanged = props.onVisibleChanged,
              mousePosition = props.mousePosition;
          var dialogRef = (0, React.useRef)(); // ============================= Style ==============================

          var _React$useState = React.useState(),
              _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
              transformOrigin = _React$useState2[0],
              setTransformOrigin = _React$useState2[1];

          var contentStyle = {};

          if (transformOrigin) {
            contentStyle.transformOrigin = transformOrigin;
          }

          function onPrepare() {
            var elementOffset = (0, _util.offset)(dialogRef.current);
            setTransformOrigin(mousePosition ? "".concat(mousePosition.x - elementOffset.left, "px ").concat(mousePosition.y - elementOffset.top, "px") : '');
          } // ============================= Render =============================


          return /*#__PURE__*/React.createElement(_rcMotion.default, {
            visible: visible,
            onVisibleChanged: onVisibleChanged,
            onAppearPrepare: onPrepare,
            onEnterPrepare: onPrepare,
            forceRender: forceRender,
            motionName: motionName,
            removeOnLeave: destroyOnClose,
            ref: dialogRef
          }, function (_ref, motionRef) {
            var motionClassName = _ref.className,
                motionStyle = _ref.style;
            return /*#__PURE__*/React.createElement(_Panel.default, (0, _extends2.default)({}, props, {
              ref: ref,
              title: title,
              ariaId: ariaId,
              prefixCls: prefixCls,
              holderRef: motionRef,
              style: (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, motionStyle), style), contentStyle),
              className: (0, _classnames.default)(className, motionClassName)
            }));
          });
        });
        Content.displayName = 'Content';
        var _default = Content;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/objectSpread2': _req2,
        '@babel/runtime/helpers/slicedToArray': _req3,
        'react': _req4,
        'classnames': _req5,
        'rc-motion': _req6,
        '../../util': _req7,
        './Panel': _req8
      }));
    }
  };
});
//# sourceMappingURL=438330a48c1ed482a67b883fd0e2c0fefd2a4d83.js.map