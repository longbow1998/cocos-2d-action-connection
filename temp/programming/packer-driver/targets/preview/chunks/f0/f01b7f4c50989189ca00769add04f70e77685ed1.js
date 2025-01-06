System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/defineProperty", "react", ".", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _cjsExports, ___esModule, _default0, _DECADE_COL_COUNT, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req2 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_react) {
      _req3 = _react.__cjsMetaURL;
    }, function (_2) {
      _req4 = _2.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req5 = _unresolved_2.__cjsMetaURL;
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
        exports.default = exports.DECADE_COL_COUNT = void 0;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var React = _interopRequireWildcard(require("react"));

        var _ = require(".");

        var _PanelBody = _interopRequireDefault(require("../PanelBody"));

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

        var DECADE_COL_COUNT = 3;
        exports.DECADE_COL_COUNT = DECADE_COL_COUNT;
        var DECADE_ROW_COUNT = 4;

        function DecadeBody(props) {
          var DECADE_UNIT_DIFF_DES = _.DECADE_UNIT_DIFF - 1;
          var prefixCls = props.prefixCls,
              viewDate = props.viewDate,
              generateConfig = props.generateConfig;
          var cellPrefixCls = "".concat(prefixCls, "-cell");
          var yearNumber = generateConfig.getYear(viewDate);

          var decadeYearNumber = Math.floor(yearNumber / _.DECADE_UNIT_DIFF) * _.DECADE_UNIT_DIFF;

          var startDecadeYear = Math.floor(yearNumber / _.DECADE_DISTANCE_COUNT) * _.DECADE_DISTANCE_COUNT;

          var endDecadeYear = startDecadeYear + _.DECADE_DISTANCE_COUNT - 1;
          var baseDecadeYear = generateConfig.setYear(viewDate, startDecadeYear - Math.ceil((DECADE_COL_COUNT * DECADE_ROW_COUNT * _.DECADE_UNIT_DIFF - _.DECADE_DISTANCE_COUNT) / 2));

          var getCellClassName = function getCellClassName(date) {
            var _ref;

            var startDecadeNumber = generateConfig.getYear(date);
            var endDecadeNumber = startDecadeNumber + DECADE_UNIT_DIFF_DES;
            return _ref = {}, (0, _defineProperty2.default)(_ref, "".concat(cellPrefixCls, "-in-view"), startDecadeYear <= startDecadeNumber && endDecadeNumber <= endDecadeYear), (0, _defineProperty2.default)(_ref, "".concat(cellPrefixCls, "-selected"), startDecadeNumber === decadeYearNumber), _ref;
          };

          return /*#__PURE__*/React.createElement(_PanelBody.default, (0, _extends2.default)({}, props, {
            rowNum: DECADE_ROW_COUNT,
            colNum: DECADE_COL_COUNT,
            baseDate: baseDecadeYear,
            getCellText: function getCellText(date) {
              var startDecadeNumber = generateConfig.getYear(date);
              return "".concat(startDecadeNumber, "-").concat(startDecadeNumber + DECADE_UNIT_DIFF_DES);
            },
            getCellClassName: getCellClassName,
            getCellDate: function getCellDate(date, offset) {
              return generateConfig.addYear(date, offset * _.DECADE_UNIT_DIFF);
            }
          }));
        }

        var _default = DecadeBody;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
        _DECADE_COL_COUNT = module.exports.DECADE_COL_COUNT;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/defineProperty': _req2,
        'react': _req3,
        '.': _req4,
        '../PanelBody': _req5
      }));
    }
  };
});
//# sourceMappingURL=f01b7f4c50989189ca00769add04f70e77685ed1.js.map