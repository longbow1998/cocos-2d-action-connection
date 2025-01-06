System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/slicedToArray", "lodash/padStart"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _cjsExports, ___esModule, _formatCountdown, _formatTimeStr, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req0 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_lodashPadStart) {
      _req1 = _lodashPadStart.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.formatCountdown = formatCountdown;
        exports.formatTimeStr = formatTimeStr;

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _padStart = _interopRequireDefault(require("lodash/padStart")); // Countdown


        var timeUnits = [['Y', 1000 * 60 * 60 * 24 * 365], ['M', 1000 * 60 * 60 * 24 * 30], ['D', 1000 * 60 * 60 * 24], ['H', 1000 * 60 * 60], ['m', 1000 * 60], ['s', 1000], ['S', 1] // million seconds
        ];

        function formatTimeStr(duration, format) {
          var leftDuration = duration;
          var escapeRegex = /\[[^\]]*]/g;
          var keepList = (format.match(escapeRegex) || []).map(function (str) {
            return str.slice(1, -1);
          });
          var templateText = format.replace(escapeRegex, '[]');
          var replacedText = timeUnits.reduce(function (current, _ref) {
            var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
                name = _ref2[0],
                unit = _ref2[1];

            if (current.includes(name)) {
              var value = Math.floor(leftDuration / unit);
              leftDuration -= value * unit;
              return current.replace(new RegExp("".concat(name, "+"), 'g'), function (match) {
                var len = match.length;
                return (0, _padStart["default"])(value.toString(), len, '0');
              });
            }

            return current;
          }, templateText);
          var index = 0;
          return replacedText.replace(escapeRegex, function () {
            var match = keepList[index];
            index += 1;
            return match;
          });
        }

        function formatCountdown(value, config) {
          var _config$format = config.format,
              format = _config$format === void 0 ? '' : _config$format;
          var target = new Date(value).getTime();
          var current = Date.now();
          var diff = Math.max(target - current, 0);
          return formatTimeStr(diff, format);
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _formatCountdown = module.exports.formatCountdown;
        _formatTimeStr = module.exports.formatTimeStr;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/slicedToArray': _req0,
        'lodash/padStart': _req1
      }));
    }
  };
});
//# sourceMappingURL=4e83e6c3bc0d31e5d6f8201be8e2fd12e0de258a.js.map