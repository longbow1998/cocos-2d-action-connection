System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/objectWithoutProperties", "react", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersObjectWithoutProperties) {
      _req2 = _babelRuntimeHelpersObjectWithoutProperties.__cjsMetaURL;
    }, function (_react) {
      _req3 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req4 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req5 = _unresolved_3.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

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

        var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

        var React = _interopRequireWildcard(require("react"));

        var _Handle = _interopRequireDefault(require("./Handle"));

        var _util = require("../util");

        var _excluded = ["prefixCls", "style", "onStartMove", "onOffsetChange", "values", "handleRender", "draggingIndex"];
        var Handles = /*#__PURE__*/React.forwardRef(function (props, ref) {
          var prefixCls = props.prefixCls,
              style = props.style,
              onStartMove = props.onStartMove,
              onOffsetChange = props.onOffsetChange,
              values = props.values,
              handleRender = props.handleRender,
              draggingIndex = props.draggingIndex,
              restProps = (0, _objectWithoutProperties2.default)(props, _excluded);
          var handlesRef = React.useRef({});
          React.useImperativeHandle(ref, function () {
            return {
              focus: function focus(index) {
                var _handlesRef$current$i;

                (_handlesRef$current$i = handlesRef.current[index]) === null || _handlesRef$current$i === void 0 ? void 0 : _handlesRef$current$i.focus();
              }
            };
          });
          return /*#__PURE__*/React.createElement(React.Fragment, null, values.map(function (value, index) {
            return /*#__PURE__*/React.createElement(_Handle.default, (0, _extends2.default)({
              ref: function ref(node) {
                if (!node) {
                  delete handlesRef.current[index];
                } else {
                  handlesRef.current[index] = node;
                }
              },
              dragging: draggingIndex === index,
              prefixCls: prefixCls,
              style: (0, _util.getIndex)(style, index),
              key: index,
              value: value,
              valueIndex: index,
              onStartMove: onStartMove,
              onOffsetChange: onOffsetChange,
              render: handleRender
            }, restProps));
          }));
        });

        if (process.env.NODE_ENV !== 'production') {
          Handles.displayName = 'Handles';
        }

        var _default = Handles;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/interopRequireWildcard': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/objectWithoutProperties': _req2,
        'react': _req3,
        './Handle': _req4,
        '../util': _req5
      }));
    }
  };
});
//# sourceMappingURL=3f05284dee8526139c1fdb3815d2c52246756f48.js.map