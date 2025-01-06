System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/interopRequireWildcard", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context2) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _cjsExports, ___esModule, _default, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req0 = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_react) {
      _req1 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req2 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req3 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req4 = _unresolved_4.__cjsMetaURL;
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
        exports.default = Tracks;

        var React = _interopRequireWildcard(require("react"));

        var _context = _interopRequireDefault(require("../context"));

        var _Track = _interopRequireDefault(require("./Track"));

        var _util = require("../util");

        function Tracks(props) {
          var prefixCls = props.prefixCls,
              style = props.style,
              values = props.values,
              startPoint = props.startPoint,
              onStartMove = props.onStartMove;

          var _React$useContext = React.useContext(_context.default),
              included = _React$useContext.included,
              range = _React$useContext.range,
              min = _React$useContext.min;

          var trackList = React.useMemo(function () {
            if (!range) {
              // null value do not have track
              if (values.length === 0) {
                return [];
              }

              var startValue = startPoint !== null && startPoint !== void 0 ? startPoint : min;
              var endValue = values[0];
              return [{
                start: Math.min(startValue, endValue),
                end: Math.max(startValue, endValue)
              }];
            } // Multiple


            var list = [];

            for (var i = 0; i < values.length - 1; i += 1) {
              list.push({
                start: values[i],
                end: values[i + 1]
              });
            }

            return list;
          }, [values, range, startPoint, min]);
          return included ? trackList.map(function (_ref, index) {
            var start = _ref.start,
                end = _ref.end;
            return /*#__PURE__*/React.createElement(_Track.default, {
              index: index,
              prefixCls: prefixCls,
              style: (0, _util.getIndex)(style, index),
              start: start,
              end: end,
              key: index,
              onStartMove: onStartMove
            });
          }) : null;
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/interopRequireWildcard': _req0,
        'react': _req1,
        '../context': _req2,
        './Track': _req3,
        '../util': _req4
      }));
    }
  };
});
//# sourceMappingURL=26efc18bfe560757de5f1c9f5aeceb0d3ae4b9e0.js.map