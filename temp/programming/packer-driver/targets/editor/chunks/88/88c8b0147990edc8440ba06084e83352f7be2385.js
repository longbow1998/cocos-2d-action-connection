System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/objectSpread2", "react", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req0 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req1 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req2 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_react) {
      _req3 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req4 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req5 = _unresolved_3.__cjsMetaURL;
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
        exports.default = void 0;

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _objectSpread3 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var React = _interopRequireWildcard(require("react"));

        var _commonUtil = require("../utils/commonUtil");

        var _valueUtil = require("../utils/valueUtil");

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

        function includes(test, search) {
          return (0, _commonUtil.toArray)(test).join('').toUpperCase().includes(search);
        }

        var _default = function _default(options, fieldNames, searchValue, filterOption, optionFilterProp) {
          return React.useMemo(function () {
            if (!searchValue || filterOption === false) {
              return options;
            }

            var fieldOptions = fieldNames.options,
                fieldLabel = fieldNames.label,
                fieldValue = fieldNames.value;
            var filteredOptions = [];
            var customizeFilter = typeof filterOption === 'function';
            var upperSearch = searchValue.toUpperCase();
            var filterFunc = customizeFilter ? filterOption : function (_, option) {
              // Use provided `optionFilterProp`
              if (optionFilterProp) {
                return includes(option[optionFilterProp], upperSearch);
              } // Auto select `label` or `value` by option type


              if (option[fieldOptions]) {
                // hack `fieldLabel` since `OptionGroup` children is not `label`
                return includes(option[fieldLabel !== 'children' ? fieldLabel : 'label'], upperSearch);
              }

              return includes(option[fieldValue], upperSearch);
            };
            var wrapOption = customizeFilter ? function (opt) {
              return (0, _valueUtil.injectPropsWithOption)(opt);
            } : function (opt) {
              return opt;
            };
            options.forEach(function (item) {
              // Group should check child options
              if (item[fieldOptions]) {
                // Check group first
                var matchGroup = filterFunc(searchValue, wrapOption(item));

                if (matchGroup) {
                  filteredOptions.push(item);
                } else {
                  // Check option
                  var subOptions = item[fieldOptions].filter(function (subItem) {
                    return filterFunc(searchValue, wrapOption(subItem));
                  });

                  if (subOptions.length) {
                    filteredOptions.push((0, _objectSpread3.default)((0, _objectSpread3.default)({}, item), {}, (0, _defineProperty2.default)({}, fieldOptions, subOptions)));
                  }
                }

                return;
              }

              if (filterFunc(searchValue, wrapOption(item))) {
                filteredOptions.push(item);
              }
            });
            return filteredOptions;
          }, [options, filterOption, optionFilterProp, searchValue, fieldNames]);
        };

        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/defineProperty': _req1,
        '@babel/runtime/helpers/objectSpread2': _req2,
        'react': _req3,
        '../utils/commonUtil': _req4,
        '../utils/valueUtil': _req5
      }));
    }
  };
});
//# sourceMappingURL=88c8b0147990edc8440ba06084e83352f7be2385.js.map