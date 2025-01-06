System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/objectSpread2", "@babel/runtime/helpers/objectWithoutProperties", "react", "classnames", "rc-resize-observer"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req0 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req1 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req2 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectWithoutProperties) {
      _req3 = _babelRuntimeHelpersObjectWithoutProperties.__cjsMetaURL;
    }, function (_react) {
      _req4 = _react.__cjsMetaURL;
    }, function (_classnames2) {
      _req5 = _classnames2.__cjsMetaURL;
    }, function (_rcResizeObserver2) {
      _req6 = _rcResizeObserver2.__cjsMetaURL;
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

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

        var React = _interopRequireWildcard(require("react"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _rcResizeObserver = _interopRequireDefault(require("rc-resize-observer"));

        var _excluded = ["prefixCls", "invalidate", "item", "renderItem", "responsive", "responsiveDisabled", "registerSize", "itemKey", "className", "style", "children", "display", "order", "component"];

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
        } // Use shared variable to save bundle size


        var UNDEFINED = undefined;

        function InternalItem(props, ref) {
          var prefixCls = props.prefixCls,
              invalidate = props.invalidate,
              item = props.item,
              renderItem = props.renderItem,
              responsive = props.responsive,
              responsiveDisabled = props.responsiveDisabled,
              registerSize = props.registerSize,
              itemKey = props.itemKey,
              className = props.className,
              style = props.style,
              children = props.children,
              display = props.display,
              order = props.order,
              _props$component = props.component,
              Component = _props$component === void 0 ? 'div' : _props$component,
              restProps = (0, _objectWithoutProperties2.default)(props, _excluded);
          var mergedHidden = responsive && !display; // ================================ Effect ================================

          function internalRegisterSize(width) {
            registerSize(itemKey, width);
          }

          React.useEffect(function () {
            return function () {
              internalRegisterSize(null);
            };
          }, []); // ================================ Render ================================

          var childNode = renderItem && item !== UNDEFINED ? renderItem(item) : children;
          var overflowStyle;

          if (!invalidate) {
            overflowStyle = {
              opacity: mergedHidden ? 0 : 1,
              height: mergedHidden ? 0 : UNDEFINED,
              overflowY: mergedHidden ? 'hidden' : UNDEFINED,
              order: responsive ? order : UNDEFINED,
              pointerEvents: mergedHidden ? 'none' : UNDEFINED,
              position: mergedHidden ? 'absolute' : UNDEFINED
            };
          }

          var overflowProps = {};

          if (mergedHidden) {
            overflowProps['aria-hidden'] = true;
          }

          var itemNode = /*#__PURE__*/React.createElement(Component, (0, _extends2.default)({
            className: (0, _classnames.default)(!invalidate && prefixCls, className),
            style: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, overflowStyle), style)
          }, overflowProps, restProps, {
            ref: ref
          }), childNode);

          if (responsive) {
            itemNode = /*#__PURE__*/React.createElement(_rcResizeObserver.default, {
              onResize: function onResize(_ref) {
                var offsetWidth = _ref.offsetWidth;
                internalRegisterSize(offsetWidth);
              },
              disabled: responsiveDisabled
            }, itemNode);
          }

          return itemNode;
        }

        var Item = /*#__PURE__*/React.forwardRef(InternalItem);
        Item.displayName = 'Item';
        var _default = Item;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/objectSpread2': _req2,
        '@babel/runtime/helpers/objectWithoutProperties': _req3,
        'react': _req4,
        'classnames': _req5,
        'rc-resize-observer': _req6
      }));
    }
  };
});
//# sourceMappingURL=d6e007bb2ead376314e44a271ea528c02bf5445d.js.map