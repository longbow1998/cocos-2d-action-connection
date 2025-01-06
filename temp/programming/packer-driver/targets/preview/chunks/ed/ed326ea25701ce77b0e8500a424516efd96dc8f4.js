System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/defineProperty", "react", "classnames"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _cjsExports, ___esModule, _findAllChildrenKeys, _renderExpandIcon, __cjsMetaURL;

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
    }, function (_react) {
      _req2 = _react.__cjsMetaURL;
    }, function (_classnames2) {
      _req3 = _classnames2.__cjsMetaURL;
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
        exports.findAllChildrenKeys = findAllChildrenKeys;
        exports.renderExpandIcon = renderExpandIcon;

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var React = _interopRequireWildcard(require("react"));

        var _classnames = _interopRequireDefault(require("classnames"));

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

        function renderExpandIcon(_ref) {
          var _classNames;

          var prefixCls = _ref.prefixCls,
              record = _ref.record,
              onExpand = _ref.onExpand,
              expanded = _ref.expanded,
              expandable = _ref.expandable;
          var expandClassName = "".concat(prefixCls, "-row-expand-icon");

          if (!expandable) {
            return /*#__PURE__*/React.createElement("span", {
              className: (0, _classnames.default)(expandClassName, "".concat(prefixCls, "-row-spaced"))
            });
          }

          var onClick = function onClick(event) {
            onExpand(record, event);
            event.stopPropagation();
          };

          return /*#__PURE__*/React.createElement("span", {
            className: (0, _classnames.default)(expandClassName, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-row-expanded"), expanded), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-row-collapsed"), !expanded), _classNames)),
            onClick: onClick
          });
        }

        function findAllChildrenKeys(data, getRowKey, childrenColumnName) {
          var keys = [];

          function dig(list) {
            (list || []).forEach(function (item, index) {
              keys.push(getRowKey(item, index));
              dig(item[childrenColumnName]);
            });
          }

          dig(data);
          return keys;
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _findAllChildrenKeys = module.exports.findAllChildrenKeys;
        _renderExpandIcon = module.exports.renderExpandIcon;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/defineProperty': _req1,
        'react': _req2,
        'classnames': _req3
      }));
    }
  };
});
//# sourceMappingURL=ed326ea25701ce77b0e8500a424516efd96dc8f4.js.map