System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@ant-design/icons/SearchOutlined", "react", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
        exports["default"] = void 0;

        var _SearchOutlined = _interopRequireDefault(require("@ant-design/icons/SearchOutlined"));

        var React = _interopRequireWildcard(require("react"));

        var _input = _interopRequireDefault(require("../../../input"));

        function FilterSearch(_ref) {
          var value = _ref.value,
              onChange = _ref.onChange,
              filterSearch = _ref.filterSearch,
              tablePrefixCls = _ref.tablePrefixCls,
              locale = _ref.locale;

          if (!filterSearch) {
            return null;
          }

          return /*#__PURE__*/React.createElement("div", {
            className: "".concat(tablePrefixCls, "-filter-dropdown-search")
          }, /*#__PURE__*/React.createElement(_input["default"], {
            prefix: /*#__PURE__*/React.createElement(_SearchOutlined["default"], null),
            placeholder: locale.filterSearchPlaceholder,
            onChange: onChange,
            value: value,
            // for skip min-width of input
            htmlSize: 1,
            className: "".concat(tablePrefixCls, "-filter-dropdown-search-input")
          }));
        }

        var _default = FilterSearch;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@ant-design/icons/SearchOutlined': _req1,
        'react': _req2,
        '../../../input': _req3
      }));
    }
  };
});
//# sourceMappingURL=e7b7de8e4e78a6cb726e7f68c585a84308545c99.js.map