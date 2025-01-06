System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/objectSpread2", "@babel/runtime/helpers/objectWithoutProperties", "@babel/runtime/helpers/defineProperty", "react", "classnames", "rc-motion", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _cjsExports, ___esModule, _default, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req2 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectWithoutProperties) {
      _req3 = _babelRuntimeHelpersObjectWithoutProperties.__cjsMetaURL;
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req4 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_react) {
      _req5 = _react.__cjsMetaURL;
    }, function (_classnames2) {
      _req6 = _classnames2.__cjsMetaURL;
    }, function (_rcMotion2) {
      _req7 = _rcMotion2.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req8 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req9 = _unresolved_3.__cjsMetaURL;
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
        exports.default = TabPanelList;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var React = _interopRequireWildcard(require("react"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _rcMotion = _interopRequireDefault(require("rc-motion"));

        var _TabContext = _interopRequireDefault(require("../TabContext"));

        var _TabPane = _interopRequireDefault(require("./TabPane"));

        var _excluded = ["key", "forceRender", "style", "className"];

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

        function TabPanelList(_ref) {
          var id = _ref.id,
              activeKey = _ref.activeKey,
              animated = _ref.animated,
              tabPosition = _ref.tabPosition,
              destroyInactiveTabPane = _ref.destroyInactiveTabPane;

          var _React$useContext = React.useContext(_TabContext.default),
              prefixCls = _React$useContext.prefixCls,
              tabs = _React$useContext.tabs;

          var tabPaneAnimated = animated.tabPane;
          var tabPanePrefixCls = "".concat(prefixCls, "-tabpane");
          return /*#__PURE__*/React.createElement("div", {
            className: (0, _classnames.default)("".concat(prefixCls, "-content-holder"))
          }, /*#__PURE__*/React.createElement("div", {
            className: (0, _classnames.default)("".concat(prefixCls, "-content"), "".concat(prefixCls, "-content-").concat(tabPosition), (0, _defineProperty2.default)({}, "".concat(prefixCls, "-content-animated"), tabPaneAnimated))
          }, tabs.map(function (_ref2) {
            var key = _ref2.key,
                forceRender = _ref2.forceRender,
                paneStyle = _ref2.style,
                paneClassName = _ref2.className,
                restTabProps = (0, _objectWithoutProperties2.default)(_ref2, _excluded);
            var active = key === activeKey;
            return /*#__PURE__*/React.createElement(_rcMotion.default, (0, _extends2.default)({
              key: key,
              visible: active,
              forceRender: forceRender,
              removeOnLeave: !!destroyInactiveTabPane,
              leavedClassName: "".concat(tabPanePrefixCls, "-hidden")
            }, animated.tabPaneMotion), function (_ref3, ref) {
              var motionStyle = _ref3.style,
                  motionClassName = _ref3.className;
              return /*#__PURE__*/React.createElement(_TabPane.default, (0, _extends2.default)({}, restTabProps, {
                prefixCls: tabPanePrefixCls,
                id: id,
                tabKey: key,
                animated: tabPaneAnimated,
                active: active,
                style: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, paneStyle), motionStyle),
                className: (0, _classnames.default)(paneClassName, motionClassName),
                ref: ref
              }));
            });
          })));
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/objectSpread2': _req2,
        '@babel/runtime/helpers/objectWithoutProperties': _req3,
        '@babel/runtime/helpers/defineProperty': _req4,
        'react': _req5,
        'classnames': _req6,
        'rc-motion': _req7,
        '../TabContext': _req8,
        './TabPane': _req9
      }));
    }
  };
});
//# sourceMappingURL=73449a4dbf4ce2e8b7c10d098fbdb4e4e73914b4.js.map