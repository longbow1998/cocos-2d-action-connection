System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "react", "rc-resize-observer", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _cjsExports, ___esModule, _default, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req0 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_react) {
      _req1 = _react.__cjsMetaURL;
    }, function (_rcResizeObserver2) {
      _req2 = _rcResizeObserver2.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req3 = _unresolved_2.__cjsMetaURL;
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
        exports.default = MeasureRow;

        var React = _interopRequireWildcard(require("react"));

        var _rcResizeObserver = _interopRequireDefault(require("rc-resize-observer"));

        var _MeasureCell = _interopRequireDefault(require("./MeasureCell"));

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

        function MeasureRow(_ref) {
          var prefixCls = _ref.prefixCls,
              columnsKey = _ref.columnsKey,
              onColumnResize = _ref.onColumnResize;
          return /*#__PURE__*/React.createElement("tr", {
            "aria-hidden": "true",
            className: "".concat(prefixCls, "-measure-row"),
            style: {
              height: 0,
              fontSize: 0
            }
          }, /*#__PURE__*/React.createElement(_rcResizeObserver.default.Collection, {
            onBatchResize: function onBatchResize(infoList) {
              infoList.forEach(function (_ref2) {
                var columnKey = _ref2.data,
                    size = _ref2.size;
                onColumnResize(columnKey, size.offsetWidth);
              });
            }
          }, columnsKey.map(function (columnKey) {
            return /*#__PURE__*/React.createElement(_MeasureCell.default, {
              key: columnKey,
              columnKey: columnKey,
              onColumnResize: onColumnResize
            });
          })));
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        'react': _req1,
        'rc-resize-observer': _req2,
        './MeasureCell': _req3
      }));
    }
  };
});
//# sourceMappingURL=46455ac0b6bf31be3a26149f6b8e6d030b3db8bd.js.map