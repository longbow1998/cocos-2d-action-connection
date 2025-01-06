System.register(["__unresolved_0", "@babel/runtime/helpers/typeof", "react", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _cjsExports, ___esModule, _default, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersTypeof) {
      _req = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_react) {
      _req0 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req1 = _unresolved_2.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _typeof = require("@babel/runtime/helpers/typeof");

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = useOptions;

        var React = _interopRequireWildcard(require("react"));

        var _legacyUtil = require("../utils/legacyUtil");

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
        /**
         * Parse `children` to `options` if `options` is not provided.
         * Then flatten the `options`.
         */


        function useOptions(options, children, fieldNames, optionFilterProp, optionLabelProp) {
          return React.useMemo(function () {
            var mergedOptions = options;
            var childrenAsData = !options;

            if (childrenAsData) {
              mergedOptions = (0, _legacyUtil.convertChildrenToData)(children);
            }

            var valueOptions = new Map();
            var labelOptions = new Map();

            var setLabelOptions = function setLabelOptions(labelOptionsMap, option, key) {
              if (key && typeof key === 'string') {
                labelOptionsMap.set(option[key], option);
              }
            };

            function dig(optionList) {
              var isChildren = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false; // for loop to speed up collection speed

              for (var i = 0; i < optionList.length; i += 1) {
                var option = optionList[i];

                if (!option[fieldNames.options] || isChildren) {
                  valueOptions.set(option[fieldNames.value], option);
                  setLabelOptions(labelOptions, option, fieldNames.label); // https://github.com/ant-design/ant-design/issues/35304

                  setLabelOptions(labelOptions, option, optionFilterProp);
                  setLabelOptions(labelOptions, option, optionLabelProp);
                } else {
                  dig(option[fieldNames.options], true);
                }
              }
            }

            dig(mergedOptions);
            return {
              options: mergedOptions,
              valueOptions: valueOptions,
              labelOptions: labelOptions
            };
          }, [options, children, fieldNames, optionFilterProp, optionLabelProp]);
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/typeof': _req,
        'react': _req0,
        '../utils/legacyUtil': _req1
      }));
    }
  };
});
//# sourceMappingURL=76c008130ec45cd763fe78fe3a8ce0b017d729b2.js.map