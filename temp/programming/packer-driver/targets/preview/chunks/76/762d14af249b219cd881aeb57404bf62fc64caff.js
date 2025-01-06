System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/slicedToArray", "classnames", "rc-util/lib/Children/toArray", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _cjsExports, ___esModule, _default0, _SpaceContext, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req0 = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req1 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req2 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req3 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_classnames2) {
      _req4 = _classnames2.__cjsMetaURL;
    }, function (_rcUtilLibChildrenToArray) {
      _req5 = _rcUtilLibChildrenToArray.__cjsMetaURL;
    }, function (_react) {
      _req6 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req7 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req8 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req9 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req10 = _unresolved_5.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports["default"] = exports.SpaceContext = void 0;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _toArray = _interopRequireDefault(require("rc-util/lib/Children/toArray"));

        var React = _interopRequireWildcard(require("react"));

        var _configProvider = require("../config-provider");

        var _useFlexGapSupport = _interopRequireDefault(require("../_util/hooks/useFlexGapSupport"));

        var _Item = _interopRequireDefault(require("./Item"));

        var _Compact = _interopRequireDefault(require("./Compact"));

        var __rest = void 0 && (void 0).__rest || function (s, e) {
          var t = {};

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };

        var SpaceContext = /*#__PURE__*/React.createContext({
          latestIndex: 0,
          horizontalSize: 0,
          verticalSize: 0,
          supportFlexGap: false
        });
        exports.SpaceContext = SpaceContext;
        var spaceSize = {
          small: 8,
          middle: 16,
          large: 24
        };

        function getNumberSize(size) {
          return typeof size === 'string' ? spaceSize[size] : size || 0;
        }

        var Space = function Space(props) {
          var _classNames;

          var _React$useContext = React.useContext(_configProvider.ConfigContext),
              getPrefixCls = _React$useContext.getPrefixCls,
              space = _React$useContext.space,
              directionConfig = _React$useContext.direction;

          var _props$size = props.size,
              size = _props$size === void 0 ? (space === null || space === void 0 ? void 0 : space.size) || 'small' : _props$size,
              align = props.align,
              className = props.className,
              children = props.children,
              _props$direction = props.direction,
              direction = _props$direction === void 0 ? 'horizontal' : _props$direction,
              customizePrefixCls = props.prefixCls,
              split = props.split,
              style = props.style,
              _props$wrap = props.wrap,
              wrap = _props$wrap === void 0 ? false : _props$wrap,
              otherProps = __rest(props, ["size", "align", "className", "children", "direction", "prefixCls", "split", "style", "wrap"]);

          var supportFlexGap = (0, _useFlexGapSupport["default"])();

          var _React$useMemo = React.useMemo(function () {
            return (Array.isArray(size) ? size : [size, size]).map(function (item) {
              return getNumberSize(item);
            });
          }, [size]),
              _React$useMemo2 = (0, _slicedToArray2["default"])(_React$useMemo, 2),
              horizontalSize = _React$useMemo2[0],
              verticalSize = _React$useMemo2[1];

          var childNodes = (0, _toArray["default"])(children, {
            keepEmpty: true
          });
          var mergedAlign = align === undefined && direction === 'horizontal' ? 'center' : align;
          var prefixCls = getPrefixCls('space', customizePrefixCls);
          var cn = (0, _classnames["default"])(prefixCls, "".concat(prefixCls, "-").concat(direction), (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), directionConfig === 'rtl'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-align-").concat(mergedAlign), mergedAlign), _classNames), className);
          var itemClassName = "".concat(prefixCls, "-item");
          var marginDirection = directionConfig === 'rtl' ? 'marginLeft' : 'marginRight'; // Calculate latest one

          var latestIndex = 0;
          var nodes = childNodes.map(function (child, i) {
            if (child !== null && child !== undefined) {
              latestIndex = i;
            }

            var key = child && child.key || "".concat(itemClassName, "-").concat(i);
            return /*#__PURE__*/React.createElement(_Item["default"], {
              className: itemClassName,
              key: key,
              direction: direction,
              index: i,
              marginDirection: marginDirection,
              split: split,
              wrap: wrap
            }, child);
          });
          var spaceContext = React.useMemo(function () {
            return {
              horizontalSize: horizontalSize,
              verticalSize: verticalSize,
              latestIndex: latestIndex,
              supportFlexGap: supportFlexGap
            };
          }, [horizontalSize, verticalSize, latestIndex, supportFlexGap]); // =========================== Render ===========================

          if (childNodes.length === 0) {
            return null;
          }

          var gapStyle = {};

          if (wrap) {
            gapStyle.flexWrap = 'wrap'; // Patch for gap not support

            if (!supportFlexGap) {
              gapStyle.marginBottom = -verticalSize;
            }
          }

          if (supportFlexGap) {
            gapStyle.columnGap = horizontalSize;
            gapStyle.rowGap = verticalSize;
          }

          return /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({
            className: cn,
            style: (0, _extends2["default"])((0, _extends2["default"])({}, gapStyle), style)
          }, otherProps), /*#__PURE__*/React.createElement(SpaceContext.Provider, {
            value: spaceContext
          }, nodes));
        };

        var CompoundedSpace = Space;
        CompoundedSpace.Compact = _Compact["default"];
        var _default = CompoundedSpace;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
        _SpaceContext = module.exports.SpaceContext;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/defineProperty': _req2,
        '@babel/runtime/helpers/slicedToArray': _req3,
        'classnames': _req4,
        'rc-util/lib/Children/toArray': _req5,
        'react': _req6,
        '../config-provider': _req7,
        '../_util/hooks/useFlexGapSupport': _req8,
        './Item': _req9,
        './Compact': _req10
      }));
    }
  };
});
//# sourceMappingURL=762d14af249b219cd881aeb57404bf62fc64caff.js.map