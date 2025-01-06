System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/objectSpread2", "@babel/runtime/helpers/slicedToArray", "react", "classnames", "rc-util/lib/KeyCode", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req0 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
      _req4 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req1 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req2 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req3 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req5 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_react) {
      _req6 = _react.__cjsMetaURL;
    }, function (_classnames2) {
      _req7 = _classnames2.__cjsMetaURL;
    }, function (_rcUtilLibKeyCode) {
      _req8 = _rcUtilLibKeyCode.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req9 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req10 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req11 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req12 = _unresolved_5.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

        var _typeof3 = require("@babel/runtime/helpers/typeof");

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = void 0;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var React = _interopRequireWildcard(require("react"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _KeyCode = _interopRequireDefault(require("rc-util/lib/KeyCode"));

        var _DatePanel = _interopRequireDefault(require("../DatePanel"));

        var _TimePanel = _interopRequireDefault(require("../TimePanel"));

        var _miscUtil = require("../../utils/miscUtil");

        var _timeUtil = require("../../utils/timeUtil");

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

          if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") {
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

        var ACTIVE_PANEL = (0, _miscUtil.tuple)('date', 'time');

        function DatetimePanel(props) {
          var prefixCls = props.prefixCls,
              operationRef = props.operationRef,
              generateConfig = props.generateConfig,
              value = props.value,
              defaultValue = props.defaultValue,
              disabledTime = props.disabledTime,
              showTime = props.showTime,
              onSelect = props.onSelect;
          var panelPrefixCls = "".concat(prefixCls, "-datetime-panel");

          var _React$useState = React.useState(null),
              _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
              activePanel = _React$useState2[0],
              setActivePanel = _React$useState2[1];

          var dateOperationRef = React.useRef({});
          var timeOperationRef = React.useRef({});
          var timeProps = (0, _typeof2.default)(showTime) === 'object' ? (0, _objectSpread2.default)({}, showTime) : {}; // ======================= Keyboard =======================

          function getNextActive(offset) {
            var activeIndex = ACTIVE_PANEL.indexOf(activePanel) + offset;
            var nextActivePanel = ACTIVE_PANEL[activeIndex] || null;
            return nextActivePanel;
          }

          var onBlur = function onBlur(e) {
            if (timeOperationRef.current.onBlur) {
              timeOperationRef.current.onBlur(e);
            }

            setActivePanel(null);
          };

          operationRef.current = {
            onKeyDown: function onKeyDown(event) {
              // Switch active panel
              if (event.which === _KeyCode.default.TAB) {
                var nextActivePanel = getNextActive(event.shiftKey ? -1 : 1);
                setActivePanel(nextActivePanel);

                if (nextActivePanel) {
                  event.preventDefault();
                }

                return true;
              } // Operate on current active panel


              if (activePanel) {
                var ref = activePanel === 'date' ? dateOperationRef : timeOperationRef;

                if (ref.current && ref.current.onKeyDown) {
                  ref.current.onKeyDown(event);
                }

                return true;
              } // Switch first active panel if operate without panel


              if ([_KeyCode.default.LEFT, _KeyCode.default.RIGHT, _KeyCode.default.UP, _KeyCode.default.DOWN].includes(event.which)) {
                setActivePanel('date');
                return true;
              }

              return false;
            },
            onBlur: onBlur,
            onClose: onBlur
          }; // ======================== Events ========================

          var onInternalSelect = function onInternalSelect(date, source) {
            var selectedDate = date;

            if (source === 'date' && !value && timeProps.defaultValue) {
              // Date with time defaultValue
              selectedDate = generateConfig.setHour(selectedDate, generateConfig.getHour(timeProps.defaultValue));
              selectedDate = generateConfig.setMinute(selectedDate, generateConfig.getMinute(timeProps.defaultValue));
              selectedDate = generateConfig.setSecond(selectedDate, generateConfig.getSecond(timeProps.defaultValue));
            } else if (source === 'time' && !value && defaultValue) {
              selectedDate = generateConfig.setYear(selectedDate, generateConfig.getYear(defaultValue));
              selectedDate = generateConfig.setMonth(selectedDate, generateConfig.getMonth(defaultValue));
              selectedDate = generateConfig.setDate(selectedDate, generateConfig.getDate(defaultValue));
            }

            if (onSelect) {
              onSelect(selectedDate, 'mouse');
            }
          }; // ======================== Render ========================


          var disabledTimes = disabledTime ? disabledTime(value || null) : {};
          return /*#__PURE__*/React.createElement("div", {
            className: (0, _classnames.default)(panelPrefixCls, (0, _defineProperty2.default)({}, "".concat(panelPrefixCls, "-active"), activePanel))
          }, /*#__PURE__*/React.createElement(_DatePanel.default, (0, _extends2.default)({}, props, {
            operationRef: dateOperationRef,
            active: activePanel === 'date',
            onSelect: function onSelect(date) {
              onInternalSelect((0, _timeUtil.setDateTime)(generateConfig, date, !value && (0, _typeof2.default)(showTime) === 'object' ? showTime.defaultValue : null), 'date');
            }
          })), /*#__PURE__*/React.createElement(_TimePanel.default, (0, _extends2.default)({}, props, {
            format: undefined
          }, timeProps, disabledTimes, {
            disabledTime: null,
            defaultValue: undefined,
            operationRef: timeOperationRef,
            active: activePanel === 'time',
            onSelect: function onSelect(date) {
              onInternalSelect(date, 'time');
            }
          })));
        }

        var _default = DatetimePanel;
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
        '@babel/runtime/helpers/typeof': _req4,
        '@babel/runtime/helpers/slicedToArray': _req5,
        'react': _req6,
        'classnames': _req7,
        'rc-util/lib/KeyCode': _req8,
        '../DatePanel': _req9,
        '../TimePanel': _req10,
        '../../utils/miscUtil': _req11,
        '../../utils/timeUtil': _req12
      }));
    }
  };
});
//# sourceMappingURL=b699a9da7d31ff792660a41b2071d37ccfc10318.js.map