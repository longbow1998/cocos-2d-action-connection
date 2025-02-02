System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/objectSpread2", "@babel/runtime/helpers/objectWithoutProperties", "react", "rc-util/lib/Children/toArray"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _cjsExports, ___esModule, _convertChildrenToData, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req0 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req1 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectWithoutProperties) {
      _req2 = _babelRuntimeHelpersObjectWithoutProperties.__cjsMetaURL;
    }, function (_react) {
      _req3 = _react.__cjsMetaURL;
    }, function (_rcUtilLibChildrenToArray) {
      _req4 = _rcUtilLibChildrenToArray.__cjsMetaURL;
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
        exports.convertChildrenToData = convertChildrenToData;

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

        var React = _interopRequireWildcard(require("react"));

        var _toArray = _interopRequireDefault(require("rc-util/lib/Children/toArray"));

        var _excluded = ["children", "value"],
            _excluded2 = ["children"];

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

        function convertNodeToOption(node) {
          var _ref = node,
              key = _ref.key,
              _ref$props = _ref.props,
              children = _ref$props.children,
              value = _ref$props.value,
              restProps = (0, _objectWithoutProperties2.default)(_ref$props, _excluded);
          return (0, _objectSpread2.default)({
            key: key,
            value: value !== undefined ? value : key,
            children: children
          }, restProps);
        }

        function convertChildrenToData(nodes) {
          var optionOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          return (0, _toArray.default)(nodes).map(function (node, index) {
            if (! /*#__PURE__*/React.isValidElement(node) || !node.type) {
              return null;
            }

            var _ref2 = node,
                isSelectOptGroup = _ref2.type.isSelectOptGroup,
                key = _ref2.key,
                _ref2$props = _ref2.props,
                children = _ref2$props.children,
                restProps = (0, _objectWithoutProperties2.default)(_ref2$props, _excluded2);

            if (optionOnly || !isSelectOptGroup) {
              return convertNodeToOption(node);
            }

            return (0, _objectSpread2.default)((0, _objectSpread2.default)({
              key: "__RC_SELECT_GRP__".concat(key === null ? index : key, "__"),
              label: key
            }, restProps), {}, {
              options: convertChildrenToData(children)
            });
          }).filter(function (data) {
            return data;
          });
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _convertChildrenToData = module.exports.convertChildrenToData;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/objectSpread2': _req1,
        '@babel/runtime/helpers/objectWithoutProperties': _req2,
        'react': _req3,
        'rc-util/lib/Children/toArray': _req4
      }));
    }
  };
});
//# sourceMappingURL=fa674b04fdab2e44b452cae6ec9de2fe57e2c175.js.map