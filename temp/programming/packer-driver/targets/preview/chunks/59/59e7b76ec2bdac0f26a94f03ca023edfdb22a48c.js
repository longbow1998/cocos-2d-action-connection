System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/extends", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _cjsExports, ___esModule, _default, __cjsMetaURL;

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
    }, function (_react) {
      _req2 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req3 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req4 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req5 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req6 = _unresolved_5.__cjsMetaURL;
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
        exports.default = SummaryCell;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var React = _interopRequireWildcard(require("react"));

        var _SummaryContext = _interopRequireDefault(require("./SummaryContext"));

        var _Cell = _interopRequireDefault(require("../Cell"));

        var _TableContext = _interopRequireDefault(require("../context/TableContext"));

        var _fixUtil = require("../utils/fixUtil");

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

        function SummaryCell(_ref) {
          var className = _ref.className,
              index = _ref.index,
              children = _ref.children,
              _ref$colSpan = _ref.colSpan,
              colSpan = _ref$colSpan === void 0 ? 1 : _ref$colSpan,
              rowSpan = _ref.rowSpan,
              align = _ref.align;

          var _React$useContext = React.useContext(_TableContext.default),
              prefixCls = _React$useContext.prefixCls,
              direction = _React$useContext.direction;

          var _React$useContext2 = React.useContext(_SummaryContext.default),
              scrollColumnIndex = _React$useContext2.scrollColumnIndex,
              stickyOffsets = _React$useContext2.stickyOffsets,
              flattenColumns = _React$useContext2.flattenColumns;

          var lastIndex = index + colSpan - 1;
          var mergedColSpan = lastIndex + 1 === scrollColumnIndex ? colSpan + 1 : colSpan;
          var fixedInfo = (0, _fixUtil.getCellFixedInfo)(index, index + mergedColSpan - 1, flattenColumns, stickyOffsets, direction);
          return /*#__PURE__*/React.createElement(_Cell.default, (0, _extends2.default)({
            className: className,
            index: index,
            component: "td",
            prefixCls: prefixCls,
            record: null,
            dataIndex: null,
            align: align,
            colSpan: mergedColSpan,
            rowSpan: rowSpan,
            render: function render() {
              return children;
            }
          }, fixedInfo));
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/extends': _req1,
        'react': _req2,
        './SummaryContext': _req3,
        '../Cell': _req4,
        '../context/TableContext': _req5,
        '../utils/fixUtil': _req6
      }));
    }
  };
});
//# sourceMappingURL=59e7b76ec2bdac0f26a94f03ca023edfdb22a48c.js.map