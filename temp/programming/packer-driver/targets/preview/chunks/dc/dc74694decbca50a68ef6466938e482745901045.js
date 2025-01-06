System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/objectSpread2", "@babel/runtime/helpers/toConsumableArray", "react"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _cjsExports, ___esModule, _default0, _SEARCH_MARK, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersToConsumableArray) {
      _req3 = _babelRuntimeHelpersToConsumableArray.__cjsMetaURL;
    }, function (_react) {
      _req4 = _react.__cjsMetaURL;
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
        exports.default = exports.SEARCH_MARK = void 0;

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _objectSpread3 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

        var React = _interopRequireWildcard(require("react"));

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

        var SEARCH_MARK = '__rc_cascader_search_mark__';
        exports.SEARCH_MARK = SEARCH_MARK;

        var defaultFilter = function defaultFilter(search, options, _ref) {
          var label = _ref.label;
          return options.some(function (opt) {
            return String(opt[label]).toLowerCase().includes(search.toLowerCase());
          });
        };

        var defaultRender = function defaultRender(inputValue, path, prefixCls, fieldNames) {
          return path.map(function (opt) {
            return opt[fieldNames.label];
          }).join(' / ');
        };

        var _default = function _default(search, options, fieldNames, prefixCls, config, changeOnSelect) {
          var _config$filter = config.filter,
              filter = _config$filter === void 0 ? defaultFilter : _config$filter,
              _config$render = config.render,
              render = _config$render === void 0 ? defaultRender : _config$render,
              _config$limit = config.limit,
              limit = _config$limit === void 0 ? 50 : _config$limit,
              sort = config.sort;
          return React.useMemo(function () {
            var filteredOptions = [];

            if (!search) {
              return [];
            }

            function dig(list, pathOptions) {
              list.forEach(function (option) {
                // Perf saving when `sort` is disabled and `limit` is provided
                if (!sort && limit > 0 && filteredOptions.length >= limit) {
                  return;
                }

                var connectedPathOptions = [].concat((0, _toConsumableArray2.default)(pathOptions), [option]);
                var children = option[fieldNames.children]; // If current option is filterable

                if ( // If is leaf option
                !children || children.length === 0 || // If is changeOnSelect
                changeOnSelect) {
                  if (filter(search, connectedPathOptions, {
                    label: fieldNames.label
                  })) {
                    var _objectSpread2;

                    filteredOptions.push((0, _objectSpread3.default)((0, _objectSpread3.default)({}, option), {}, (_objectSpread2 = {}, (0, _defineProperty2.default)(_objectSpread2, fieldNames.label, render(search, connectedPathOptions, prefixCls, fieldNames)), (0, _defineProperty2.default)(_objectSpread2, SEARCH_MARK, connectedPathOptions), _objectSpread2)));
                  }
                }

                if (children) {
                  dig(option[fieldNames.children], connectedPathOptions);
                }
              });
            }

            dig(options, []); // Do sort

            if (sort) {
              filteredOptions.sort(function (a, b) {
                return sort(a[SEARCH_MARK], b[SEARCH_MARK], search, fieldNames);
              });
            }

            return limit > 0 ? filteredOptions.slice(0, limit) : filteredOptions;
          }, [search, options, fieldNames, prefixCls, render, changeOnSelect, filter, sort, limit]);
        };

        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
        _SEARCH_MARK = module.exports.SEARCH_MARK;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/defineProperty': _req1,
        '@babel/runtime/helpers/objectSpread2': _req2,
        '@babel/runtime/helpers/toConsumableArray': _req3,
        'react': _req4
      }));
    }
  };
});
//# sourceMappingURL=dc74694decbca50a68ef6466938e482745901045.js.map