System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "shallowequal", "rc-util/lib/hooks/useMemo", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _cjsExports, ___esModule, _default, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_shallowequal2) {
      _req0 = _shallowequal2.__cjsMetaURL;
    }, function (_rcUtilLibHooksUseMemo) {
      _req1 = _rcUtilLibHooksUseMemo.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req2 = _unresolved_2.__cjsMetaURL;
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
        exports.default = useValueTexts;

        var _shallowequal = _interopRequireDefault(require("shallowequal"));

        var _useMemo = _interopRequireDefault(require("rc-util/lib/hooks/useMemo"));

        var _dateUtil = require("../utils/dateUtil");

        function useValueTexts(value, _ref) {
          var formatList = _ref.formatList,
              generateConfig = _ref.generateConfig,
              locale = _ref.locale;
          return (0, _useMemo.default)(function () {
            if (!value) {
              return [[''], ''];
            } // We will convert data format back to first format


            var firstValueText = '';
            var fullValueTexts = [];

            for (var i = 0; i < formatList.length; i += 1) {
              var format = formatList[i];
              var formatStr = (0, _dateUtil.formatValue)(value, {
                generateConfig: generateConfig,
                locale: locale,
                format: format
              });
              fullValueTexts.push(formatStr);

              if (i === 0) {
                firstValueText = formatStr;
              }
            }

            return [fullValueTexts, firstValueText];
          }, [value, formatList], function (prev, next) {
            return prev[0] !== next[0] || !(0, _shallowequal.default)(prev[1], next[1]);
          });
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        'shallowequal': _req0,
        'rc-util/lib/hooks/useMemo': _req1,
        '../utils/dateUtil': _req2
      }));
    }
  };
});
//# sourceMappingURL=a67a76e76492d643f585a555ca2c69d8f84ba997.js.map