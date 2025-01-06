System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/objectSpread2", "react", "classnames", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req3 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_react) {
      _req4 = _react.__cjsMetaURL;
    }, function (_classnames2) {
      _req5 = _classnames2.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req6 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req7 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req8 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req9 = _unresolved_5.__cjsMetaURL;
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
        exports.default = void 0;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var React = _interopRequireWildcard(require("react"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _DateBody = _interopRequireDefault(require("./DateBody"));

        var _DateHeader = _interopRequireDefault(require("./DateHeader"));

        var _dateUtil = require("../../utils/dateUtil");

        var _uiUtil = require("../../utils/uiUtil");

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

        var DATE_ROW_COUNT = 6;

        function DatePanel(props) {
          var prefixCls = props.prefixCls,
              _props$panelName = props.panelName,
              panelName = _props$panelName === void 0 ? 'date' : _props$panelName,
              keyboardConfig = props.keyboardConfig,
              active = props.active,
              operationRef = props.operationRef,
              generateConfig = props.generateConfig,
              value = props.value,
              viewDate = props.viewDate,
              onViewDateChange = props.onViewDateChange,
              onPanelChange = props.onPanelChange,
              _onSelect = props.onSelect;
          var panelPrefixCls = "".concat(prefixCls, "-").concat(panelName, "-panel"); // ======================= Keyboard =======================

          operationRef.current = {
            onKeyDown: function onKeyDown(event) {
              return (0, _uiUtil.createKeyDownHandler)(event, (0, _objectSpread2.default)({
                onLeftRight: function onLeftRight(diff) {
                  _onSelect(generateConfig.addDate(value || viewDate, diff), 'key');
                },
                onCtrlLeftRight: function onCtrlLeftRight(diff) {
                  _onSelect(generateConfig.addYear(value || viewDate, diff), 'key');
                },
                onUpDown: function onUpDown(diff) {
                  _onSelect(generateConfig.addDate(value || viewDate, diff * _dateUtil.WEEK_DAY_COUNT), 'key');
                },
                onPageUpDown: function onPageUpDown(diff) {
                  _onSelect(generateConfig.addMonth(value || viewDate, diff), 'key');
                }
              }, keyboardConfig));
            }
          }; // ==================== View Operation ====================

          var onYearChange = function onYearChange(diff) {
            var newDate = generateConfig.addYear(viewDate, diff);
            onViewDateChange(newDate);
            onPanelChange(null, newDate);
          };

          var onMonthChange = function onMonthChange(diff) {
            var newDate = generateConfig.addMonth(viewDate, diff);
            onViewDateChange(newDate);
            onPanelChange(null, newDate);
          };

          return /*#__PURE__*/React.createElement("div", {
            className: (0, _classnames.default)(panelPrefixCls, (0, _defineProperty2.default)({}, "".concat(panelPrefixCls, "-active"), active))
          }, /*#__PURE__*/React.createElement(_DateHeader.default, (0, _extends2.default)({}, props, {
            prefixCls: prefixCls,
            value: value,
            viewDate: viewDate // View Operation
            ,
            onPrevYear: function onPrevYear() {
              onYearChange(-1);
            },
            onNextYear: function onNextYear() {
              onYearChange(1);
            },
            onPrevMonth: function onPrevMonth() {
              onMonthChange(-1);
            },
            onNextMonth: function onNextMonth() {
              onMonthChange(1);
            },
            onMonthClick: function onMonthClick() {
              onPanelChange('month', viewDate);
            },
            onYearClick: function onYearClick() {
              onPanelChange('year', viewDate);
            }
          })), /*#__PURE__*/React.createElement(_DateBody.default, (0, _extends2.default)({}, props, {
            onSelect: function onSelect(date) {
              return _onSelect(date, 'mouse');
            },
            prefixCls: prefixCls,
            value: value,
            viewDate: viewDate,
            rowCount: DATE_ROW_COUNT
          })));
        }

        var _default = DatePanel;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/defineProperty': _req2,
        '@babel/runtime/helpers/objectSpread2': _req3,
        'react': _req4,
        'classnames': _req5,
        './DateBody': _req6,
        './DateHeader': _req7,
        '../../utils/dateUtil': _req8,
        '../../utils/uiUtil': _req9
      }));
    }
  };
});
//# sourceMappingURL=6a070c1784baabc953f2018f3112f86cce3d8885.js.map