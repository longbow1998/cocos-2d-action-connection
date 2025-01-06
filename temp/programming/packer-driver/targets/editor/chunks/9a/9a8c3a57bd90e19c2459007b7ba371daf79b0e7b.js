System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/objectWithoutProperties", "classnames", "rc-util/lib/omit", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _cjsExports, ___esModule, _default, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersObjectWithoutProperties) {
      _req2 = _babelRuntimeHelpersObjectWithoutProperties.__cjsMetaURL;
    }, function (_classnames2) {
      _req3 = _classnames2.__cjsMetaURL;
    }, function (_rcUtilLibOmit) {
      _req4 = _rcUtilLibOmit.__cjsMetaURL;
    }, function (_react) {
      _req5 = _react.__cjsMetaURL;
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
        exports.default = MenuItemGroup;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _omit = _interopRequireDefault(require("rc-util/lib/omit"));

        var React = _interopRequireWildcard(require("react"));

        var _MenuContext = require("./context/MenuContext");

        var _PathContext = require("./context/PathContext");

        var _nodeUtil = require("./utils/nodeUtil");

        var _excluded = ["className", "title", "eventKey", "children"],
            _excluded2 = ["children"];

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

        var InternalMenuItemGroup = function InternalMenuItemGroup(_ref) {
          var className = _ref.className,
              title = _ref.title,
              eventKey = _ref.eventKey,
              children = _ref.children,
              restProps = (0, _objectWithoutProperties2.default)(_ref, _excluded);

          var _React$useContext = React.useContext(_MenuContext.MenuContext),
              prefixCls = _React$useContext.prefixCls;

          var groupPrefixCls = "".concat(prefixCls, "-item-group");
          return /*#__PURE__*/React.createElement("li", (0, _extends2.default)({
            role: "presentation"
          }, restProps, {
            onClick: function onClick(e) {
              return e.stopPropagation();
            },
            className: (0, _classnames.default)(groupPrefixCls, className)
          }), /*#__PURE__*/React.createElement("div", {
            role: "presentation",
            className: "".concat(groupPrefixCls, "-title"),
            title: typeof title === 'string' ? title : undefined
          }, title), /*#__PURE__*/React.createElement("ul", {
            role: "group",
            className: "".concat(groupPrefixCls, "-list")
          }, children));
        };

        function MenuItemGroup(_ref2) {
          var children = _ref2.children,
              props = (0, _objectWithoutProperties2.default)(_ref2, _excluded2);
          var connectedKeyPath = (0, _PathContext.useFullPath)(props.eventKey);
          var childList = (0, _nodeUtil.parseChildren)(children, connectedKeyPath);
          var measure = (0, _PathContext.useMeasure)();

          if (measure) {
            return childList;
          }

          return /*#__PURE__*/React.createElement(InternalMenuItemGroup, (0, _omit.default)(props, ['warnKey']), childList);
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/objectWithoutProperties': _req2,
        'classnames': _req3,
        'rc-util/lib/omit': _req4,
        'react': _req5,
        './context/MenuContext': _req6,
        './context/PathContext': _req7,
        './utils/nodeUtil': _req8
      }));
    }
  };
});
//# sourceMappingURL=9a8c3a57bd90e19c2459007b7ba371daf79b0e7b.js.map