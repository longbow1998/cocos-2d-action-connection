System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "lodash/padEnd", "react"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req0 = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_lodashPadEnd) {
      _req1 = _lodashPadEnd.__cjsMetaURL;
    }, function (_react) {
      _req2 = _react.__cjsMetaURL;
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
        exports["default"] = void 0;

        var _padEnd = _interopRequireDefault(require("lodash/padEnd"));

        var React = _interopRequireWildcard(require("react"));

        var StatisticNumber = function StatisticNumber(props) {
          var value = props.value,
              formatter = props.formatter,
              precision = props.precision,
              decimalSeparator = props.decimalSeparator,
              _props$groupSeparator = props.groupSeparator,
              groupSeparator = _props$groupSeparator === void 0 ? '' : _props$groupSeparator,
              prefixCls = props.prefixCls;
          var valueNode;

          if (typeof formatter === 'function') {
            // Customize formatter
            valueNode = formatter(value);
          } else {
            // Internal formatter
            var val = String(value);
            var cells = val.match(/^(-?)(\d*)(\.(\d+))?$/); // Process if illegal number

            if (!cells || val === '-') {
              valueNode = val;
            } else {
              var negative = cells[1];
              var int = cells[2] || '0';
              var decimal = cells[4] || '';
              int = int.replace(/\B(?=(\d{3})+(?!\d))/g, groupSeparator);

              if (typeof precision === 'number') {
                decimal = (0, _padEnd["default"])(decimal, precision, '0').slice(0, precision > 0 ? precision : 0);
              }

              if (decimal) {
                decimal = "".concat(decimalSeparator).concat(decimal);
              }

              valueNode = [/*#__PURE__*/React.createElement("span", {
                key: "int",
                className: "".concat(prefixCls, "-content-value-int")
              }, negative, int), decimal && /*#__PURE__*/React.createElement("span", {
                key: "decimal",
                className: "".concat(prefixCls, "-content-value-decimal")
              }, decimal)];
            }
          }

          return /*#__PURE__*/React.createElement("span", {
            className: "".concat(prefixCls, "-content-value")
          }, valueNode);
        };

        var _default = StatisticNumber;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        'lodash/padEnd': _req1,
        'react': _req2
      }));
    }
  };
});
//# sourceMappingURL=1e24833a3a4ae5a5c8dba942dfa69f8bfb50d85c.js.map