System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/defineProperty", "react", "classnames"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req0 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_react2) {
      _req1 = _react2.__cjsMetaURL;
    }, function (_classnames2) {
      _req2 = _classnames2.__cjsMetaURL;
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
        exports.default = void 0;

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _react = _interopRequireDefault(require("react"));

        var _classnames = _interopRequireDefault(require("classnames"));
        /* eslint react/prop-types: 0 */


        var Pager = function Pager(props) {
          var _classNames;

          var prefixCls = "".concat(props.rootPrefixCls, "-item");
          var cls = (0, _classnames.default)(prefixCls, "".concat(prefixCls, "-").concat(props.page), (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-active"), props.active), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-disabled"), !props.page), (0, _defineProperty2.default)(_classNames, props.className, !!props.className), _classNames));

          var handleClick = function handleClick() {
            props.onClick(props.page);
          };

          var handleKeyPress = function handleKeyPress(e) {
            props.onKeyPress(e, props.onClick, props.page);
          };

          return /*#__PURE__*/_react.default.createElement("li", {
            title: props.showTitle ? props.page : null,
            className: cls,
            onClick: handleClick,
            onKeyPress: handleKeyPress,
            tabIndex: "0"
          }, props.itemRender(props.page, 'page', /*#__PURE__*/_react.default.createElement("a", {
            rel: "nofollow"
          }, props.page)));
        };

        var _default = Pager;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/defineProperty': _req0,
        'react': _req1,
        'classnames': _req2
      }));
    }
  };
});
//# sourceMappingURL=071257ce9242c9525db2a88461aa29618f2bfbd7.js.map