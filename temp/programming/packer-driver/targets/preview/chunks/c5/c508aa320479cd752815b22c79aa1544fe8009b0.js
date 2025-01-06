System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/slicedToArray", "@babel/runtime/helpers/extends", "@ant-design/icons/ArrowLeftOutlined", "@ant-design/icons/ArrowRightOutlined", "classnames", "rc-resize-observer", "rc-util/lib/hooks/useState", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _req13, _req14, _req15, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req0 = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req1 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req2 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req3 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_antDesignIconsArrowLeftOutlined) {
      _req4 = _antDesignIconsArrowLeftOutlined.__cjsMetaURL;
    }, function (_antDesignIconsArrowRightOutlined) {
      _req5 = _antDesignIconsArrowRightOutlined.__cjsMetaURL;
    }, function (_classnames2) {
      _req6 = _classnames2.__cjsMetaURL;
    }, function (_rcResizeObserver2) {
      _req7 = _rcResizeObserver2.__cjsMetaURL;
    }, function (_rcUtilLibHooksUseState) {
      _req8 = _rcUtilLibHooksUseState.__cjsMetaURL;
    }, function (_react) {
      _req9 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req10 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req11 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req12 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req13 = _unresolved_5.__cjsMetaURL;
    }, function (_unresolved_6) {
      _req14 = _unresolved_6.__cjsMetaURL;
    }, function (_unresolved_7) {
      _req15 = _unresolved_7.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports["default"] = void 0;

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _ArrowLeftOutlined = _interopRequireDefault(require("@ant-design/icons/ArrowLeftOutlined"));

        var _ArrowRightOutlined = _interopRequireDefault(require("@ant-design/icons/ArrowRightOutlined"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _rcResizeObserver = _interopRequireDefault(require("rc-resize-observer"));

        var _useState3 = _interopRequireDefault(require("rc-util/lib/hooks/useState"));

        var React = _interopRequireWildcard(require("react"));

        var _avatar = _interopRequireDefault(require("../avatar"));

        var _breadcrumb = _interopRequireDefault(require("../breadcrumb"));

        var _configProvider = require("../config-provider");

        var _LocaleReceiver = _interopRequireDefault(require("../locale-provider/LocaleReceiver"));

        var _space = _interopRequireDefault(require("../space"));

        var _transButton = _interopRequireDefault(require("../_util/transButton"));

        var renderBack = function renderBack(prefixCls, backIcon, onBack) {
          if (!backIcon || !onBack) {
            return null;
          }

          return /*#__PURE__*/React.createElement(_LocaleReceiver["default"], {
            componentName: "PageHeader"
          }, function (contextLocale) {
            return /*#__PURE__*/React.createElement("div", {
              className: "".concat(prefixCls, "-back")
            }, /*#__PURE__*/React.createElement(_transButton["default"], {
              onClick: function onClick(e) {
                onBack === null || onBack === void 0 ? void 0 : onBack(e);
              },
              className: "".concat(prefixCls, "-back-button"),
              "aria-label": contextLocale.back
            }, backIcon));
          });
        };

        var renderBreadcrumb = function renderBreadcrumb(breadcrumb) {
          return /*#__PURE__*/React.createElement(_breadcrumb["default"], (0, _extends2["default"])({}, breadcrumb));
        };

        var getBackIcon = function getBackIcon(props) {
          var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ltr';

          if (props.backIcon !== undefined) {
            return props.backIcon;
          }

          return direction === 'rtl' ? /*#__PURE__*/React.createElement(_ArrowRightOutlined["default"], null) : /*#__PURE__*/React.createElement(_ArrowLeftOutlined["default"], null);
        };

        var renderTitle = function renderTitle(prefixCls, props) {
          var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'ltr';
          var title = props.title,
              avatar = props.avatar,
              subTitle = props.subTitle,
              tags = props.tags,
              extra = props.extra,
              onBack = props.onBack;
          var headingPrefixCls = "".concat(prefixCls, "-heading");
          var hasHeading = title || subTitle || tags || extra; // If there is nothing, return a null

          if (!hasHeading) {
            return null;
          }

          var backIcon = getBackIcon(props, direction);
          var backIconDom = renderBack(prefixCls, backIcon, onBack);
          var hasTitle = backIconDom || avatar || hasHeading;
          return /*#__PURE__*/React.createElement("div", {
            className: headingPrefixCls
          }, hasTitle && /*#__PURE__*/React.createElement("div", {
            className: "".concat(headingPrefixCls, "-left")
          }, backIconDom, avatar && /*#__PURE__*/React.createElement(_avatar["default"], (0, _extends2["default"])({}, avatar)), title && /*#__PURE__*/React.createElement("span", {
            className: "".concat(headingPrefixCls, "-title"),
            title: typeof title === 'string' ? title : undefined
          }, title), subTitle && /*#__PURE__*/React.createElement("span", {
            className: "".concat(headingPrefixCls, "-sub-title"),
            title: typeof subTitle === 'string' ? subTitle : undefined
          }, subTitle), tags && /*#__PURE__*/React.createElement("span", {
            className: "".concat(headingPrefixCls, "-tags")
          }, tags)), extra && /*#__PURE__*/React.createElement("span", {
            className: "".concat(headingPrefixCls, "-extra")
          }, /*#__PURE__*/React.createElement(_space["default"], null, extra)));
        };

        var renderFooter = function renderFooter(prefixCls, footer) {
          if (footer) {
            return /*#__PURE__*/React.createElement("div", {
              className: "".concat(prefixCls, "-footer")
            }, footer);
          }

          return null;
        };

        var renderChildren = function renderChildren(prefixCls, children) {
          return /*#__PURE__*/React.createElement("div", {
            className: "".concat(prefixCls, "-content")
          }, children);
        };

        var PageHeader = function PageHeader(props) {
          var _useState = (0, _useState3["default"])(false),
              _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
              compact = _useState2[0],
              updateCompact = _useState2[1];

          var onResize = function onResize(_ref) {
            var width = _ref.width;
            updateCompact(width < 768, true);
          };

          return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, function (_ref2) {
            var _classNames;

            var getPrefixCls = _ref2.getPrefixCls,
                pageHeader = _ref2.pageHeader,
                direction = _ref2.direction;

            var _a;

            var customizePrefixCls = props.prefixCls,
                style = props.style,
                footer = props.footer,
                children = props.children,
                breadcrumb = props.breadcrumb,
                breadcrumbRender = props.breadcrumbRender,
                customizeClassName = props.className;
            var ghost = true; // Use `ghost` from `props` or from `ConfigProvider` instead.

            if ('ghost' in props) {
              ghost = props.ghost;
            } else if (pageHeader && 'ghost' in pageHeader) {
              ghost = pageHeader.ghost;
            }

            var prefixCls = getPrefixCls('page-header', customizePrefixCls);

            var getDefaultBreadcrumbDom = function getDefaultBreadcrumbDom() {
              if (breadcrumb === null || breadcrumb === void 0 ? void 0 : breadcrumb.routes) {
                return renderBreadcrumb(breadcrumb);
              }

              return null;
            };

            var defaultBreadcrumbDom = getDefaultBreadcrumbDom();
            var isBreadcrumbComponent = breadcrumb && 'props' in breadcrumb; // support breadcrumbRender function

            var breadcrumbRenderDomFromProps = (_a = breadcrumbRender === null || breadcrumbRender === void 0 ? void 0 : breadcrumbRender(props, defaultBreadcrumbDom)) !== null && _a !== void 0 ? _a : defaultBreadcrumbDom;
            var breadcrumbDom = isBreadcrumbComponent ? breadcrumb : breadcrumbRenderDomFromProps;
            var className = (0, _classnames["default"])(prefixCls, customizeClassName, (_classNames = {
              'has-breadcrumb': !!breadcrumbDom,
              'has-footer': !!footer
            }, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-ghost"), ghost), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-compact"), compact), _classNames));
            return /*#__PURE__*/React.createElement(_rcResizeObserver["default"], {
              onResize: onResize
            }, /*#__PURE__*/React.createElement("div", {
              className: className,
              style: style
            }, breadcrumbDom, renderTitle(prefixCls, props, direction), children && renderChildren(prefixCls, children), renderFooter(prefixCls, footer)));
          });
        };

        var _default = PageHeader;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/defineProperty': _req1,
        '@babel/runtime/helpers/slicedToArray': _req2,
        '@babel/runtime/helpers/extends': _req3,
        '@ant-design/icons/ArrowLeftOutlined': _req4,
        '@ant-design/icons/ArrowRightOutlined': _req5,
        'classnames': _req6,
        'rc-resize-observer': _req7,
        'rc-util/lib/hooks/useState': _req8,
        'react': _req9,
        '../avatar': _req10,
        '../breadcrumb': _req11,
        '../config-provider': _req12,
        '../locale-provider/LocaleReceiver': _req13,
        '../space': _req14,
        '../_util/transButton': _req15
      }));
    }
  };
});
//# sourceMappingURL=c508aa320479cd752815b22c79aa1544fe8009b0.js.map