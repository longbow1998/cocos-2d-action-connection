System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/slicedToArray", "rc-field-form", "react", "scroll-into-view-if-needed", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _cjsExports, ___esModule, _default, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req2 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_rcFieldForm2) {
      _req3 = _rcFieldForm2.__cjsMetaURL;
    }, function (_react) {
      _req4 = _react.__cjsMetaURL;
    }, function (_scrollIntoViewIfNeeded2) {
      _req5 = _scrollIntoViewIfNeeded2.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req6 = _unresolved_2.__cjsMetaURL;
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
        exports["default"] = useForm;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _rcFieldForm = require("rc-field-form");

        var React = _interopRequireWildcard(require("react"));

        var _scrollIntoViewIfNeeded = _interopRequireDefault(require("scroll-into-view-if-needed"));

        var _util = require("../util");

        function toNamePathStr(name) {
          var namePath = (0, _util.toArray)(name);
          return namePath.join('_');
        }

        function useForm(form) {
          var _useRcForm = (0, _rcFieldForm.useForm)(),
              _useRcForm2 = (0, _slicedToArray2["default"])(_useRcForm, 1),
              rcForm = _useRcForm2[0];

          var itemsRef = React.useRef({});
          var wrapForm = React.useMemo(function () {
            return form !== null && form !== void 0 ? form : (0, _extends2["default"])((0, _extends2["default"])({}, rcForm), {
              __INTERNAL__: {
                itemRef: function itemRef(name) {
                  return function (node) {
                    var namePathStr = toNamePathStr(name);

                    if (node) {
                      itemsRef.current[namePathStr] = node;
                    } else {
                      delete itemsRef.current[namePathStr];
                    }
                  };
                }
              },
              scrollToField: function scrollToField(name) {
                var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                var namePath = (0, _util.toArray)(name);
                var fieldId = (0, _util.getFieldId)(namePath, wrapForm.__INTERNAL__.name);
                var node = fieldId ? document.getElementById(fieldId) : null;

                if (node) {
                  (0, _scrollIntoViewIfNeeded["default"])(node, (0, _extends2["default"])({
                    scrollMode: 'if-needed',
                    block: 'nearest'
                  }, options));
                }
              },
              getFieldInstance: function getFieldInstance(name) {
                var namePathStr = toNamePathStr(name);
                return itemsRef.current[namePathStr];
              }
            });
          }, [form, rcForm]);
          return [wrapForm];
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/slicedToArray': _req2,
        'rc-field-form': _req3,
        'react': _req4,
        'scroll-into-view-if-needed': _req5,
        '../util': _req6
      }));
    }
  };
});
//# sourceMappingURL=731adfc7f5184eda218e0494aaadcc876d00e388.js.map