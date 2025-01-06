System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/objectWithoutProperties", "@babel/runtime/helpers/toConsumableArray", "react", "rc-util/lib/Children/toArray", ".."], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _cjsExports, ___esModule, _parseChildren, _parseItems, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req0 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
      _req3 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req1 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectWithoutProperties) {
      _req2 = _babelRuntimeHelpersObjectWithoutProperties.__cjsMetaURL;
    }, function (_babelRuntimeHelpersToConsumableArray) {
      _req4 = _babelRuntimeHelpersToConsumableArray.__cjsMetaURL;
    }, function (_react) {
      _req5 = _react.__cjsMetaURL;
    }, function (_rcUtilLibChildrenToArray) {
      _req6 = _rcUtilLibChildrenToArray.__cjsMetaURL;
    }, function (_2) {
      _req7 = _2.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

        var _typeof3 = require("@babel/runtime/helpers/typeof");

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.parseChildren = parseChildren;
        exports.parseItems = parseItems;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

        var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

        var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

        var React = _interopRequireWildcard(require("react"));

        var _toArray = _interopRequireDefault(require("rc-util/lib/Children/toArray"));

        var _ = require("..");

        var _excluded = ["label", "children", "key", "type"];

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

          if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") {
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

        function parseChildren(children, keyPath) {
          return (0, _toArray.default)(children).map(function (child, index) {
            if ( /*#__PURE__*/React.isValidElement(child)) {
              var _eventKey, _child$props;

              var key = child.key;
              var eventKey = (_eventKey = (_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props.eventKey) !== null && _eventKey !== void 0 ? _eventKey : key;
              var emptyKey = eventKey === null || eventKey === undefined;

              if (emptyKey) {
                eventKey = "tmp_key-".concat([].concat((0, _toConsumableArray2.default)(keyPath), [index]).join('-'));
              }

              var cloneProps = {
                key: eventKey,
                eventKey: eventKey
              };

              if (process.env.NODE_ENV !== 'production' && emptyKey) {
                cloneProps.warnKey = true;
              }

              return /*#__PURE__*/React.cloneElement(child, cloneProps);
            }

            return child;
          });
        }

        function convertItemsToNodes(list) {
          return (list || []).map(function (opt, index) {
            if (opt && (0, _typeof2.default)(opt) === 'object') {
              var _ref = opt,
                  label = _ref.label,
                  children = _ref.children,
                  key = _ref.key,
                  type = _ref.type,
                  restProps = (0, _objectWithoutProperties2.default)(_ref, _excluded);
              var mergedKey = key !== null && key !== void 0 ? key : "tmp-".concat(index); // MenuItemGroup & SubMenuItem

              if (children || type === 'group') {
                if (type === 'group') {
                  // Group
                  return /*#__PURE__*/React.createElement(_.MenuItemGroup, (0, _extends2.default)({
                    key: mergedKey
                  }, restProps, {
                    title: label
                  }), convertItemsToNodes(children));
                } // Sub Menu


                return /*#__PURE__*/React.createElement(_.SubMenu, (0, _extends2.default)({
                  key: mergedKey
                }, restProps, {
                  title: label
                }), convertItemsToNodes(children));
              } // MenuItem & Divider


              if (type === 'divider') {
                return /*#__PURE__*/React.createElement(_.Divider, (0, _extends2.default)({
                  key: mergedKey
                }, restProps));
              }

              return /*#__PURE__*/React.createElement(_.MenuItem, (0, _extends2.default)({
                key: mergedKey
              }, restProps), label);
            }

            return null;
          }).filter(function (opt) {
            return opt;
          });
        }

        function parseItems(children, items, keyPath) {
          var childNodes = children;

          if (items) {
            childNodes = convertItemsToNodes(items);
          }

          return parseChildren(childNodes, keyPath);
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _parseChildren = module.exports.parseChildren;
        _parseItems = module.exports.parseItems;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/objectWithoutProperties': _req2,
        '@babel/runtime/helpers/typeof': _req3,
        '@babel/runtime/helpers/toConsumableArray': _req4,
        'react': _req5,
        'rc-util/lib/Children/toArray': _req6,
        '..': _req7
      }));
    }
  };
});
//# sourceMappingURL=99e607214b66b4da648793c2438dbcde455ddb87.js.map