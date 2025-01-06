System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/slicedToArray", "classnames", "rc-mentions", "rc-util/lib/ref", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context2) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _req13, _cjsExports, ___esModule, _default0, _Option, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req0 = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req1 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req2 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req3 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_classnames2) {
      _req4 = _classnames2.__cjsMetaURL;
    }, function (_rcMentions2) {
      _req5 = _rcMentions2.__cjsMetaURL;
    }, function (_rcUtilLibRef) {
      _req6 = _rcUtilLibRef.__cjsMetaURL;
    }, function (_react) {
      _req7 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req8 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req9 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req10 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req11 = _unresolved_5.__cjsMetaURL;
    }, function (_unresolved_6) {
      _req12 = _unresolved_6.__cjsMetaURL;
    }, function (_unresolved_7) {
      _req13 = _unresolved_7.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context2.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports["default"] = exports.Option = void 0;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _rcMentions = _interopRequireDefault(require("rc-mentions"));

        var _ref = require("rc-util/lib/ref");

        var React = _interopRequireWildcard(require("react"));

        var _configProvider = require("../config-provider");

        var _defaultRenderEmpty = _interopRequireDefault(require("../config-provider/defaultRenderEmpty"));

        var _context = require("../form/context");

        var _spin = _interopRequireDefault(require("../spin"));

        var _statusUtils = require("../_util/statusUtils");

        var _warning = _interopRequireDefault(require("../_util/warning"));

        var __rest = void 0 && (void 0).__rest || function (s, e) {
          var t = {};

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };

        var Option = _rcMentions["default"].Option;
        exports.Option = Option;

        function loadingFilterOption() {
          return true;
        }

        var InternalMentions = function InternalMentions(_a, ref) {
          var _classNames;

          var customizePrefixCls = _a.prefixCls,
              className = _a.className,
              disabled = _a.disabled,
              loading = _a.loading,
              filterOption = _a.filterOption,
              children = _a.children,
              notFoundContent = _a.notFoundContent,
              options = _a.options,
              customStatus = _a.status,
              restProps = __rest(_a, ["prefixCls", "className", "disabled", "loading", "filterOption", "children", "notFoundContent", "options", "status"]);

          var _React$useState = React.useState(false),
              _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
              focused = _React$useState2[0],
              setFocused = _React$useState2[1];

          var innerRef = React.useRef();
          var mergedRef = (0, _ref.composeRef)(ref, innerRef); // =================== Warning =====================

          if (process.env.NODE_ENV !== 'production') {
            process.env.NODE_ENV !== "production" ? (0, _warning["default"])(!children, 'Mentions', '`Mentions.Option` is deprecated. Please use `options` instead.') : void 0;
          }

          var _React$useContext = React.useContext(_configProvider.ConfigContext),
              getPrefixCls = _React$useContext.getPrefixCls,
              renderEmpty = _React$useContext.renderEmpty,
              direction = _React$useContext.direction;

          var _React$useContext2 = React.useContext(_context.FormItemInputContext),
              contextStatus = _React$useContext2.status,
              hasFeedback = _React$useContext2.hasFeedback,
              feedbackIcon = _React$useContext2.feedbackIcon;

          var mergedStatus = (0, _statusUtils.getMergedStatus)(contextStatus, customStatus);

          var onFocus = function onFocus() {
            if (restProps.onFocus) {
              restProps.onFocus.apply(restProps, arguments);
            }

            setFocused(true);
          };

          var onBlur = function onBlur() {
            if (restProps.onBlur) {
              restProps.onBlur.apply(restProps, arguments);
            }

            setFocused(false);
          };

          var getNotFoundContent = function getNotFoundContent() {
            if (notFoundContent !== undefined) {
              return notFoundContent;
            }

            return (renderEmpty || _defaultRenderEmpty["default"])('Select');
          };

          var getOptions = function getOptions() {
            if (loading) {
              return /*#__PURE__*/React.createElement(Option, {
                value: "ANTD_SEARCHING",
                disabled: true
              }, /*#__PURE__*/React.createElement(_spin["default"], {
                size: "small"
              }));
            }

            return children;
          };

          var mergedOptions = loading ? [{
            value: 'ANTD_SEARCHING',
            disabled: true,
            label: /*#__PURE__*/React.createElement(_spin["default"], {
              size: "small"
            })
          }] : options;

          var getFilterOption = function getFilterOption() {
            if (loading) {
              return loadingFilterOption;
            }

            return filterOption;
          };

          var prefixCls = getPrefixCls('mentions', customizePrefixCls);
          var mergedClassName = (0, _classnames["default"])((_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-disabled"), disabled), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-focused"), focused), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), (0, _statusUtils.getStatusClassNames)(prefixCls, mergedStatus), !hasFeedback && className);
          var mentions = /*#__PURE__*/React.createElement(_rcMentions["default"], (0, _extends2["default"])({
            prefixCls: prefixCls,
            notFoundContent: getNotFoundContent(),
            className: mergedClassName,
            disabled: disabled,
            direction: direction
          }, restProps, {
            filterOption: getFilterOption(),
            onFocus: onFocus,
            onBlur: onBlur,
            ref: mergedRef,
            options: mergedOptions
          }), getOptions());

          if (hasFeedback) {
            return /*#__PURE__*/React.createElement("div", {
              className: (0, _classnames["default"])("".concat(prefixCls, "-affix-wrapper"), (0, _statusUtils.getStatusClassNames)("".concat(prefixCls, "-affix-wrapper"), mergedStatus, hasFeedback), className)
            }, mentions, /*#__PURE__*/React.createElement("span", {
              className: "".concat(prefixCls, "-suffix")
            }, feedbackIcon));
          }

          return mentions;
        };

        var Mentions = /*#__PURE__*/React.forwardRef(InternalMentions);

        if (process.env.NODE_ENV !== 'production') {
          Mentions.displayName = 'Mentions';
        }

        Mentions.Option = Option;

        Mentions.getMentions = function () {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var _config$prefix = config.prefix,
              prefix = _config$prefix === void 0 ? '@' : _config$prefix,
              _config$split = config.split,
              split = _config$split === void 0 ? ' ' : _config$split;
          var prefixList = Array.isArray(prefix) ? prefix : [prefix];
          return value.split(split).map(function () {
            var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            var hitPrefix = null;
            prefixList.some(function (prefixStr) {
              var startStr = str.slice(0, prefixStr.length);

              if (startStr === prefixStr) {
                hitPrefix = prefixStr;
                return true;
              }

              return false;
            });

            if (hitPrefix !== null) {
              return {
                prefix: hitPrefix,
                value: str.slice(hitPrefix.length)
              };
            }

            return null;
          }).filter(function (entity) {
            return !!entity && !!entity.value;
          });
        };

        var _default = Mentions;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
        _Option = module.exports.Option;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/defineProperty': _req2,
        '@babel/runtime/helpers/slicedToArray': _req3,
        'classnames': _req4,
        'rc-mentions': _req5,
        'rc-util/lib/ref': _req6,
        'react': _req7,
        '../config-provider': _req8,
        '../config-provider/defaultRenderEmpty': _req9,
        '../form/context': _req10,
        '../spin': _req11,
        '../_util/statusUtils': _req12,
        '../_util/warning': _req13
      }));
    }
  };
});
//# sourceMappingURL=cce6b58970bfc2f9517854bf9f6692bc078ec92d.js.map