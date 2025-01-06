System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/extends", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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

        var React = _interopRequireWildcard(require("react"));

        var _MonthHeader = _interopRequireDefault(require("./MonthHeader"));

        var _MonthBody = _interopRequireWildcard(require("./MonthBody"));

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

        function MonthPanel(props) {
          var prefixCls = props.prefixCls,
              operationRef = props.operationRef,
              onViewDateChange = props.onViewDateChange,
              generateConfig = props.generateConfig,
              value = props.value,
              viewDate = props.viewDate,
              onPanelChange = props.onPanelChange,
              _onSelect = props.onSelect;
          var panelPrefixCls = "".concat(prefixCls, "-month-panel"); // ======================= Keyboard =======================

          operationRef.current = {
            onKeyDown: function onKeyDown(event) {
              return (0, _uiUtil.createKeyDownHandler)(event, {
                onLeftRight: function onLeftRight(diff) {
                  _onSelect(generateConfig.addMonth(value || viewDate, diff), 'key');
                },
                onCtrlLeftRight: function onCtrlLeftRight(diff) {
                  _onSelect(generateConfig.addYear(value || viewDate, diff), 'key');
                },
                onUpDown: function onUpDown(diff) {
                  _onSelect(generateConfig.addMonth(value || viewDate, diff * _MonthBody.MONTH_COL_COUNT), 'key');
                },
                onEnter: function onEnter() {
                  onPanelChange('date', value || viewDate);
                }
              });
            }
          }; // ==================== View Operation ====================

          var onYearChange = function onYearChange(diff) {
            var newDate = generateConfig.addYear(viewDate, diff);
            onViewDateChange(newDate);
            onPanelChange(null, newDate);
          };

          return /*#__PURE__*/React.createElement("div", {
            className: panelPrefixCls
          }, /*#__PURE__*/React.createElement(_MonthHeader.default, (0, _extends2.default)({}, props, {
            prefixCls: prefixCls,
            onPrevYear: function onPrevYear() {
              onYearChange(-1);
            },
            onNextYear: function onNextYear() {
              onYearChange(1);
            },
            onYearClick: function onYearClick() {
              onPanelChange('year', viewDate);
            }
          })), /*#__PURE__*/React.createElement(_MonthBody.default, (0, _extends2.default)({}, props, {
            prefixCls: prefixCls,
            onSelect: function onSelect(date) {
              _onSelect(date, 'mouse');

              onPanelChange('date', date);
            }
          })));
        }

        var _default = MonthPanel;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/extends': _req1,
        'react': _req2,
        './MonthHeader': _req3,
        './MonthBody': _req4,
        '../../utils/uiUtil': _req5
      }));
    }
  };
});
//# sourceMappingURL=29c92d73c21ebe2dbafd4472ebe5c12bfa3435bf.js.map