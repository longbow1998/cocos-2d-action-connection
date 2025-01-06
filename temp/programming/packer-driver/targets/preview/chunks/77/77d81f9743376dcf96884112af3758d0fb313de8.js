System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/objectSpread2", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/objectWithoutProperties", "react", "classnames", "rc-util/lib/KeyCode", "__unresolved_1", "__unresolved_2"], function (_export, _context2) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req0 = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req1 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req2 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req3 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectWithoutProperties) {
      _req4 = _babelRuntimeHelpersObjectWithoutProperties.__cjsMetaURL;
    }, function (_react) {
      _req5 = _react.__cjsMetaURL;
    }, function (_classnames2) {
      _req6 = _classnames2.__cjsMetaURL;
    }, function (_rcUtilLibKeyCode) {
      _req7 = _rcUtilLibKeyCode.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req8 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req9 = _unresolved_3.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context2.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

        var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = void 0;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

        var React = _interopRequireWildcard(require("react"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _KeyCode = _interopRequireDefault(require("rc-util/lib/KeyCode"));

        var _context = _interopRequireDefault(require("../context"));

        var _util = require("../util");

        var _excluded = ["prefixCls", "value", "valueIndex", "onStartMove", "style", "render", "dragging", "onOffsetChange"];
        var Handle = /*#__PURE__*/React.forwardRef(function (props, ref) {
          var _classNames, _getIndex;

          var prefixCls = props.prefixCls,
              value = props.value,
              valueIndex = props.valueIndex,
              onStartMove = props.onStartMove,
              style = props.style,
              render = props.render,
              dragging = props.dragging,
              onOffsetChange = props.onOffsetChange,
              restProps = (0, _objectWithoutProperties2.default)(props, _excluded);

          var _React$useContext = React.useContext(_context.default),
              min = _React$useContext.min,
              max = _React$useContext.max,
              direction = _React$useContext.direction,
              disabled = _React$useContext.disabled,
              range = _React$useContext.range,
              tabIndex = _React$useContext.tabIndex,
              ariaLabelForHandle = _React$useContext.ariaLabelForHandle,
              ariaLabelledByForHandle = _React$useContext.ariaLabelledByForHandle,
              ariaValueTextFormatterForHandle = _React$useContext.ariaValueTextFormatterForHandle;

          var handlePrefixCls = "".concat(prefixCls, "-handle"); // ============================ Events ============================

          var onInternalStartMove = function onInternalStartMove(e) {
            if (!disabled) {
              onStartMove(e, valueIndex);
            }
          }; // =========================== Keyboard ===========================


          var onKeyDown = function onKeyDown(e) {
            if (!disabled) {
              var offset = null; // Change the value

              switch (e.which || e.keyCode) {
                case _KeyCode.default.LEFT:
                  offset = direction === 'ltr' || direction === 'btt' ? -1 : 1;
                  break;

                case _KeyCode.default.RIGHT:
                  offset = direction === 'ltr' || direction === 'btt' ? 1 : -1;
                  break;
                // Up is plus

                case _KeyCode.default.UP:
                  offset = direction !== 'ttb' ? 1 : -1;
                  break;
                // Down is minus

                case _KeyCode.default.DOWN:
                  offset = direction !== 'ttb' ? -1 : 1;
                  break;

                case _KeyCode.default.HOME:
                  offset = 'min';
                  break;

                case _KeyCode.default.END:
                  offset = 'max';
                  break;

                case _KeyCode.default.PAGE_UP:
                  offset = 2;
                  break;

                case _KeyCode.default.PAGE_DOWN:
                  offset = -2;
                  break;
              }

              if (offset !== null) {
                e.preventDefault();
                onOffsetChange(offset, valueIndex);
              }
            }
          }; // ============================ Offset ============================


          var positionStyle = (0, _util.getDirectionStyle)(direction, value, min, max); // ============================ Render ============================

          var handleNode = /*#__PURE__*/React.createElement("div", (0, _extends2.default)({
            ref: ref,
            className: (0, _classnames.default)(handlePrefixCls, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(handlePrefixCls, "-").concat(valueIndex + 1), range), (0, _defineProperty2.default)(_classNames, "".concat(handlePrefixCls, "-dragging"), dragging), _classNames)),
            style: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, positionStyle), style),
            onMouseDown: onInternalStartMove,
            onTouchStart: onInternalStartMove,
            onKeyDown: onKeyDown,
            tabIndex: disabled ? null : (0, _util.getIndex)(tabIndex, valueIndex),
            role: "slider",
            "aria-valuemin": min,
            "aria-valuemax": max,
            "aria-valuenow": value,
            "aria-disabled": disabled,
            "aria-label": (0, _util.getIndex)(ariaLabelForHandle, valueIndex),
            "aria-labelledby": (0, _util.getIndex)(ariaLabelledByForHandle, valueIndex),
            "aria-valuetext": (_getIndex = (0, _util.getIndex)(ariaValueTextFormatterForHandle, valueIndex)) === null || _getIndex === void 0 ? void 0 : _getIndex(value)
          }, restProps)); // Customize

          if (render) {
            handleNode = render(handleNode, {
              index: valueIndex,
              prefixCls: prefixCls,
              value: value,
              dragging: dragging
            });
          }

          return handleNode;
        });

        if (process.env.NODE_ENV !== 'production') {
          Handle.displayName = 'Handle';
        }

        var _default = Handle;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/interopRequireWildcard': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/objectSpread2': _req2,
        '@babel/runtime/helpers/defineProperty': _req3,
        '@babel/runtime/helpers/objectWithoutProperties': _req4,
        'react': _req5,
        'classnames': _req6,
        'rc-util/lib/KeyCode': _req7,
        '../context': _req8,
        '../util': _req9
      }));
    }
  };
});
//# sourceMappingURL=77d81f9743376dcf96884112af3758d0fb313de8.js.map