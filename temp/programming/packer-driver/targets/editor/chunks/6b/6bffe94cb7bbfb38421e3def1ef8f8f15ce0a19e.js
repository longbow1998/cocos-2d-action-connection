System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/objectSpread2", "react", "classnames", "__unresolved_1", "__unresolved_2"], function (_export, _context2) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _cjsExports, ___esModule, _default, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req0 = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req1 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_react) {
      _req2 = _react.__cjsMetaURL;
    }, function (_classnames2) {
      _req3 = _classnames2.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req4 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req5 = _unresolved_3.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context2.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = Track;

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var React = _interopRequireWildcard(require("react"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _context = _interopRequireDefault(require("../context"));

        var _util = require("../util");

        function Track(props) {
          var prefixCls = props.prefixCls,
              style = props.style,
              start = props.start,
              end = props.end,
              index = props.index,
              onStartMove = props.onStartMove;

          var _React$useContext = React.useContext(_context.default),
              direction = _React$useContext.direction,
              min = _React$useContext.min,
              max = _React$useContext.max,
              disabled = _React$useContext.disabled,
              range = _React$useContext.range;

          var trackPrefixCls = "".concat(prefixCls, "-track");
          var offsetStart = (0, _util.getOffset)(start, min, max);
          var offsetEnd = (0, _util.getOffset)(end, min, max); // ============================ Events ============================

          var onInternalStartMove = function onInternalStartMove(e) {
            if (!disabled && onStartMove) {
              onStartMove(e, -1);
            }
          }; // ============================ Render ============================


          var positionStyle = {};

          switch (direction) {
            case 'rtl':
              positionStyle.right = "".concat(offsetStart * 100, "%");
              positionStyle.width = "".concat(offsetEnd * 100 - offsetStart * 100, "%");
              break;

            case 'btt':
              positionStyle.bottom = "".concat(offsetStart * 100, "%");
              positionStyle.height = "".concat(offsetEnd * 100 - offsetStart * 100, "%");
              break;

            case 'ttb':
              positionStyle.top = "".concat(offsetStart * 100, "%");
              positionStyle.height = "".concat(offsetEnd * 100 - offsetStart * 100, "%");
              break;

            default:
              positionStyle.left = "".concat(offsetStart * 100, "%");
              positionStyle.width = "".concat(offsetEnd * 100 - offsetStart * 100, "%");
          }

          return /*#__PURE__*/React.createElement("div", {
            className: (0, _classnames.default)(trackPrefixCls, range && "".concat(trackPrefixCls, "-").concat(index + 1)),
            style: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, positionStyle), style),
            onMouseDown: onInternalStartMove,
            onTouchStart: onInternalStartMove
          });
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/objectSpread2': _req1,
        'react': _req2,
        'classnames': _req3,
        '../context': _req4,
        '../util': _req5
      }));
    }
  };
});
//# sourceMappingURL=6bffe94cb7bbfb38421e3def1ef8f8f15ce0a19e.js.map