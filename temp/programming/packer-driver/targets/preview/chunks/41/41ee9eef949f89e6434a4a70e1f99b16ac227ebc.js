System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/slicedToArray", "classnames", "rc-util/lib/Children/toArray", "rc-util/lib/omit", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersTypeof) {
      _req2 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req3 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_classnames2) {
      _req4 = _classnames2.__cjsMetaURL;
    }, function (_rcUtilLibChildrenToArray) {
      _req5 = _rcUtilLibChildrenToArray.__cjsMetaURL;
    }, function (_rcUtilLibOmit) {
      _req6 = _rcUtilLibOmit.__cjsMetaURL;
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

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _toArray = _interopRequireDefault(require("rc-util/lib/Children/toArray"));

        var _omit = _interopRequireDefault(require("rc-util/lib/omit"));

        var React = _interopRequireWildcard(require("react"));

        var _configProvider = require("../config-provider");

        var _select = _interopRequireDefault(require("../select"));

        var _reactNode = require("../_util/reactNode");

        var _warning = _interopRequireDefault(require("../_util/warning"));
        /**
         * TODO: 4.0
         *
         * - Remove `dataSource`
         * - `size` not work with customizeInput
         * - CustomizeInput not feedback `ENTER` key since accessibility enhancement
         */


        var Option = _select["default"].Option;

        function isSelectOptionOrSelectOptGroup(child) {
          return child && child.type && (child.type.isSelectOption || child.type.isSelectOptGroup);
        }

        var AutoComplete = function AutoComplete(props, ref) {
          var customizePrefixCls = props.prefixCls,
              className = props.className,
              popupClassName = props.popupClassName,
              dropdownClassName = props.dropdownClassName,
              children = props.children,
              dataSource = props.dataSource;
          var childNodes = (0, _toArray["default"])(children); // ============================= Input =============================

          var customizeInput;

          if (childNodes.length === 1 && (0, _reactNode.isValidElement)(childNodes[0]) && !isSelectOptionOrSelectOptGroup(childNodes[0])) {
            var _childNodes = (0, _slicedToArray2["default"])(childNodes, 1);

            customizeInput = _childNodes[0];
          }

          var getInputElement = customizeInput ? function () {
            return customizeInput;
          } : undefined; // ============================ Options ============================

          var optionChildren; // [Legacy] convert `children` or `dataSource` into option children

          if (childNodes.length && isSelectOptionOrSelectOptGroup(childNodes[0])) {
            optionChildren = children;
          } else {
            optionChildren = dataSource ? dataSource.map(function (item) {
              if ((0, _reactNode.isValidElement)(item)) {
                return item;
              }

              switch ((0, _typeof2["default"])(item)) {
                case 'string':
                  return /*#__PURE__*/React.createElement(Option, {
                    key: item,
                    value: item
                  }, item);

                case 'object':
                  {
                    var optionValue = item.value;
                    return /*#__PURE__*/React.createElement(Option, {
                      key: optionValue,
                      value: optionValue
                    }, item.text);
                  }

                default:
                  process.env.NODE_ENV !== "production" ? (0, _warning["default"])(false, 'AutoComplete', '`dataSource` is only supports type `string[] | Object[]`.') : void 0;
                  return undefined;
              }
            }) : [];
          }

          process.env.NODE_ENV !== "production" ? (0, _warning["default"])(!('dataSource' in props), 'AutoComplete', '`dataSource` is deprecated, please use `options` instead.') : void 0;
          process.env.NODE_ENV !== "production" ? (0, _warning["default"])(!dropdownClassName, 'AutoComplete', '`dropdownClassName` is deprecated which will be removed in next major version. Please use `popupClassName` instead.') : void 0;
          process.env.NODE_ENV !== "production" ? (0, _warning["default"])(!customizeInput || !('size' in props), 'AutoComplete', 'You need to control style self instead of setting `size` when using customize input.') : void 0;
          return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, function (_ref) {
            var getPrefixCls = _ref.getPrefixCls;
            var prefixCls = getPrefixCls('select', customizePrefixCls);
            return /*#__PURE__*/React.createElement(_select["default"], (0, _extends2["default"])({
              ref: ref
            }, (0, _omit["default"])(props, ['dataSource']), {
              prefixCls: prefixCls,
              popupClassName: popupClassName || dropdownClassName,
              className: (0, _classnames["default"])("".concat(prefixCls, "-auto-complete"), className),
              mode: _select["default"].SECRET_COMBOBOX_MODE_DO_NOT_USE
            }, {
              // Internal api
              getInputElement: getInputElement
            }), optionChildren);
          });
        };

        var RefAutoComplete = /*#__PURE__*/React.forwardRef(AutoComplete);
        RefAutoComplete.Option = Option;
        var _default = RefAutoComplete;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/typeof': _req2,
        '@babel/runtime/helpers/slicedToArray': _req3,
        'classnames': _req4,
        'rc-util/lib/Children/toArray': _req5,
        'rc-util/lib/omit': _req6,
        'react': _req7,
        '../config-provider': _req8,
        '../select': _req9,
        '../_util/reactNode': _req10,
        '../_util/warning': _req11
      }));
    }
  };
});
//# sourceMappingURL=41ee9eef949f89e6434a4a70e1f99b16ac227ebc.js.map