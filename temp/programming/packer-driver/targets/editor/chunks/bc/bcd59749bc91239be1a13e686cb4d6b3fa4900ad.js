System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _cjsExports, ___esModule, _default0, _FooterComponents, __cjsMetaURL;

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
    }, function (_unresolved_2) {
      _req2 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req3 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req4 = _unresolved_4.__cjsMetaURL;
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
        exports.default = exports.FooterComponents = void 0;

        var React = _interopRequireWildcard(require("react"));

        var _TableContext = _interopRequireDefault(require("../context/TableContext"));

        var _Summary = _interopRequireDefault(require("./Summary"));

        var _SummaryContext = _interopRequireDefault(require("./SummaryContext"));

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

        function Footer(_ref) {
          var children = _ref.children,
              stickyOffsets = _ref.stickyOffsets,
              flattenColumns = _ref.flattenColumns;
          var tableContext = React.useContext(_TableContext.default);
          var prefixCls = tableContext.prefixCls;
          var lastColumnIndex = flattenColumns.length - 1;
          var scrollColumn = flattenColumns[lastColumnIndex];
          var summaryContext = React.useMemo(function () {
            return {
              stickyOffsets: stickyOffsets,
              flattenColumns: flattenColumns,
              scrollColumnIndex: (scrollColumn === null || scrollColumn === void 0 ? void 0 : scrollColumn.scrollbar) ? lastColumnIndex : null
            };
          }, [scrollColumn, flattenColumns, lastColumnIndex, stickyOffsets]);
          return /*#__PURE__*/React.createElement(_SummaryContext.default.Provider, {
            value: summaryContext
          }, /*#__PURE__*/React.createElement("tfoot", {
            className: "".concat(prefixCls, "-summary")
          }, children));
        }

        var _default = Footer;
        exports.default = _default;
        var FooterComponents = _Summary.default;
        exports.FooterComponents = FooterComponents; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
        _FooterComponents = module.exports.FooterComponents;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        'react': _req1,
        '../context/TableContext': _req2,
        './Summary': _req3,
        './SummaryContext': _req4
      }));
    }
  };
});
//# sourceMappingURL=bcd59749bc91239be1a13e686cb4d6b3fa4900ad.js.map