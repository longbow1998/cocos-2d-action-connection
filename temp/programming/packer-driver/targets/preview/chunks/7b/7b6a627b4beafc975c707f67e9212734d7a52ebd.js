System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/slicedToArray", "react", "classnames", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req3 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
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

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var React = _interopRequireWildcard(require("react"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _TimeHeader = _interopRequireDefault(require("./TimeHeader"));

        var _TimeBody = _interopRequireDefault(require("./TimeBody"));

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

        var countBoolean = function countBoolean(boolList) {
          return boolList.filter(function (bool) {
            return bool !== false;
          }).length;
        };

        function TimePanel(props) {
          var generateConfig = props.generateConfig,
              _props$format = props.format,
              format = _props$format === void 0 ? 'HH:mm:ss' : _props$format,
              prefixCls = props.prefixCls,
              active = props.active,
              operationRef = props.operationRef,
              showHour = props.showHour,
              showMinute = props.showMinute,
              showSecond = props.showSecond,
              _props$use12Hours = props.use12Hours,
              use12Hours = _props$use12Hours === void 0 ? false : _props$use12Hours,
              onSelect = props.onSelect,
              value = props.value;
          var panelPrefixCls = "".concat(prefixCls, "-time-panel");
          var bodyOperationRef = React.useRef(); // ======================= Keyboard =======================

          var _React$useState = React.useState(-1),
              _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
              activeColumnIndex = _React$useState2[0],
              setActiveColumnIndex = _React$useState2[1];

          var columnsCount = countBoolean([showHour, showMinute, showSecond, use12Hours]);
          operationRef.current = {
            onKeyDown: function onKeyDown(event) {
              return (0, _uiUtil.createKeyDownHandler)(event, {
                onLeftRight: function onLeftRight(diff) {
                  setActiveColumnIndex((activeColumnIndex + diff + columnsCount) % columnsCount);
                },
                onUpDown: function onUpDown(diff) {
                  if (activeColumnIndex === -1) {
                    setActiveColumnIndex(0);
                  } else if (bodyOperationRef.current) {
                    bodyOperationRef.current.onUpDown(diff);
                  }
                },
                onEnter: function onEnter() {
                  onSelect(value || generateConfig.getNow(), 'key');
                  setActiveColumnIndex(-1);
                }
              });
            },
            onBlur: function onBlur() {
              setActiveColumnIndex(-1);
            }
          };
          return /*#__PURE__*/React.createElement("div", {
            className: (0, _classnames.default)(panelPrefixCls, (0, _defineProperty2.default)({}, "".concat(panelPrefixCls, "-active"), active))
          }, /*#__PURE__*/React.createElement(_TimeHeader.default, (0, _extends2.default)({}, props, {
            format: format,
            prefixCls: prefixCls
          })), /*#__PURE__*/React.createElement(_TimeBody.default, (0, _extends2.default)({}, props, {
            prefixCls: prefixCls,
            activeColumnIndex: activeColumnIndex,
            operationRef: bodyOperationRef
          })));
        }

        var _default = TimePanel;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/defineProperty': _req2,
        '@babel/runtime/helpers/slicedToArray': _req3,
        'react': _req4,
        'classnames': _req5,
        './TimeHeader': _req6,
        './TimeBody': _req7,
        '../../utils/uiUtil': _req8
      }));
    }
  };
});
//# sourceMappingURL=7b6a627b4beafc975c707f67e9212734d7a52ebd.js.map