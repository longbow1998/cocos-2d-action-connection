System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/defineProperty", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _cjsExports, ___esModule, _default, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req0 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req1 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req2 = _unresolved_3.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = useCellClassName;

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _dateUtil = require("../utils/dateUtil");

        var _miscUtil = require("../utils/miscUtil");

        function useCellClassName(_ref) {
          var cellPrefixCls = _ref.cellPrefixCls,
              generateConfig = _ref.generateConfig,
              rangedValue = _ref.rangedValue,
              hoverRangedValue = _ref.hoverRangedValue,
              isInView = _ref.isInView,
              isSameCell = _ref.isSameCell,
              offsetCell = _ref.offsetCell,
              today = _ref.today,
              value = _ref.value;

          function getClassName(currentDate) {
            var _ref2;

            var prevDate = offsetCell(currentDate, -1);
            var nextDate = offsetCell(currentDate, 1);
            var rangeStart = (0, _miscUtil.getValue)(rangedValue, 0);
            var rangeEnd = (0, _miscUtil.getValue)(rangedValue, 1);
            var hoverStart = (0, _miscUtil.getValue)(hoverRangedValue, 0);
            var hoverEnd = (0, _miscUtil.getValue)(hoverRangedValue, 1);
            var isRangeHovered = (0, _dateUtil.isInRange)(generateConfig, hoverStart, hoverEnd, currentDate);

            function isRangeStart(date) {
              return isSameCell(rangeStart, date);
            }

            function isRangeEnd(date) {
              return isSameCell(rangeEnd, date);
            }

            var isHoverStart = isSameCell(hoverStart, currentDate);
            var isHoverEnd = isSameCell(hoverEnd, currentDate);
            var isHoverEdgeStart = (isRangeHovered || isHoverEnd) && (!isInView(prevDate) || isRangeEnd(prevDate));
            var isHoverEdgeEnd = (isRangeHovered || isHoverStart) && (!isInView(nextDate) || isRangeStart(nextDate));
            return _ref2 = {}, (0, _defineProperty2.default)(_ref2, "".concat(cellPrefixCls, "-in-view"), isInView(currentDate)), (0, _defineProperty2.default)(_ref2, "".concat(cellPrefixCls, "-in-range"), (0, _dateUtil.isInRange)(generateConfig, rangeStart, rangeEnd, currentDate)), (0, _defineProperty2.default)(_ref2, "".concat(cellPrefixCls, "-range-start"), isRangeStart(currentDate)), (0, _defineProperty2.default)(_ref2, "".concat(cellPrefixCls, "-range-end"), isRangeEnd(currentDate)), (0, _defineProperty2.default)(_ref2, "".concat(cellPrefixCls, "-range-start-single"), isRangeStart(currentDate) && !rangeEnd), (0, _defineProperty2.default)(_ref2, "".concat(cellPrefixCls, "-range-end-single"), isRangeEnd(currentDate) && !rangeStart), (0, _defineProperty2.default)(_ref2, "".concat(cellPrefixCls, "-range-start-near-hover"), isRangeStart(currentDate) && (isSameCell(prevDate, hoverStart) || (0, _dateUtil.isInRange)(generateConfig, hoverStart, hoverEnd, prevDate))), (0, _defineProperty2.default)(_ref2, "".concat(cellPrefixCls, "-range-end-near-hover"), isRangeEnd(currentDate) && (isSameCell(nextDate, hoverEnd) || (0, _dateUtil.isInRange)(generateConfig, hoverStart, hoverEnd, nextDate))), (0, _defineProperty2.default)(_ref2, "".concat(cellPrefixCls, "-range-hover"), isRangeHovered), (0, _defineProperty2.default)(_ref2, "".concat(cellPrefixCls, "-range-hover-start"), isHoverStart), (0, _defineProperty2.default)(_ref2, "".concat(cellPrefixCls, "-range-hover-end"), isHoverEnd), (0, _defineProperty2.default)(_ref2, "".concat(cellPrefixCls, "-range-hover-edge-start"), isHoverEdgeStart), (0, _defineProperty2.default)(_ref2, "".concat(cellPrefixCls, "-range-hover-edge-end"), isHoverEdgeEnd), (0, _defineProperty2.default)(_ref2, "".concat(cellPrefixCls, "-range-hover-edge-start-near-range"), isHoverEdgeStart && isSameCell(prevDate, rangeEnd)), (0, _defineProperty2.default)(_ref2, "".concat(cellPrefixCls, "-range-hover-edge-end-near-range"), isHoverEdgeEnd && isSameCell(nextDate, rangeStart)), (0, _defineProperty2.default)(_ref2, "".concat(cellPrefixCls, "-today"), isSameCell(today, currentDate)), (0, _defineProperty2.default)(_ref2, "".concat(cellPrefixCls, "-selected"), isSameCell(value, currentDate)), _ref2;
          }

          return getClassName;
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/defineProperty': _req0,
        '../utils/dateUtil': _req1,
        '../utils/miscUtil': _req2
      }));
    }
  };
});
//# sourceMappingURL=347987d01ed7702ad2bd2d49d9636e49a31a4f76.js.map