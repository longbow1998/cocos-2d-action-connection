System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@ant-design/icons/SearchOutlined", "react", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _cjsExports, ___esModule, _default, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req0 = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_antDesignIconsSearchOutlined) {
      _req1 = _antDesignIconsSearchOutlined.__cjsMetaURL;
    }, function (_react) {
      _req2 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req3 = _unresolved_2.__cjsMetaURL;
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
        exports["default"] = Search;

        var _SearchOutlined = _interopRequireDefault(require("@ant-design/icons/SearchOutlined"));

        var React = _interopRequireWildcard(require("react"));

        var _input = _interopRequireDefault(require("../input"));

        function Search(props) {
          var _props$placeholder = props.placeholder,
              placeholder = _props$placeholder === void 0 ? '' : _props$placeholder,
              value = props.value,
              prefixCls = props.prefixCls,
              disabled = props.disabled,
              onChange = props.onChange,
              handleClear = props.handleClear;
          var handleChange = React.useCallback(function (e) {
            onChange === null || onChange === void 0 ? void 0 : onChange(e);

            if (e.target.value === '') {
              handleClear === null || handleClear === void 0 ? void 0 : handleClear();
            }
          }, [onChange]);
          return /*#__PURE__*/React.createElement(_input["default"], {
            placeholder: placeholder,
            className: prefixCls,
            value: value,
            onChange: handleChange,
            disabled: disabled,
            allowClear: true,
            prefix: /*#__PURE__*/React.createElement(_SearchOutlined["default"], null)
          });
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@ant-design/icons/SearchOutlined': _req1,
        'react': _req2,
        '../input': _req3
      }));
    }
  };
});
//# sourceMappingURL=4f5d21ae546fa85f6e3652928154fa345918757c.js.map