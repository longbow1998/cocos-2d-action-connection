System.register(["__unresolved_0", "@babel/runtime/helpers/typeof", "react"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _cjsExports, ___esModule, _default, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersTypeof) {
      _req = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_react) {
      _req0 = _react.__cjsMetaURL;
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
        exports.default = getRanges;

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

        function getRanges(_ref) {
          var prefixCls = _ref.prefixCls,
              _ref$rangeList = _ref.rangeList,
              rangeList = _ref$rangeList === void 0 ? [] : _ref$rangeList,
              _ref$components = _ref.components,
              components = _ref$components === void 0 ? {} : _ref$components,
              needConfirmButton = _ref.needConfirmButton,
              onNow = _ref.onNow,
              onOk = _ref.onOk,
              okDisabled = _ref.okDisabled,
              showNow = _ref.showNow,
              locale = _ref.locale;
          var presetNode;
          var okNode;

          if (rangeList.length) {
            var Item = components.rangeItem || 'span';
            presetNode = /*#__PURE__*/React.createElement(React.Fragment, null, rangeList.map(function (_ref2) {
              var label = _ref2.label,
                  onClick = _ref2.onClick,
                  onMouseEnter = _ref2.onMouseEnter,
                  onMouseLeave = _ref2.onMouseLeave;
              return /*#__PURE__*/React.createElement("li", {
                key: label,
                className: "".concat(prefixCls, "-preset")
              }, /*#__PURE__*/React.createElement(Item, {
                onClick: onClick,
                onMouseEnter: onMouseEnter,
                onMouseLeave: onMouseLeave
              }, label));
            }));
          }

          if (needConfirmButton) {
            var Button = components.button || 'button';

            if (onNow && !presetNode && showNow !== false) {
              presetNode = /*#__PURE__*/React.createElement("li", {
                className: "".concat(prefixCls, "-now")
              }, /*#__PURE__*/React.createElement("a", {
                className: "".concat(prefixCls, "-now-btn"),
                onClick: onNow
              }, locale.now));
            }

            okNode = needConfirmButton && /*#__PURE__*/React.createElement("li", {
              className: "".concat(prefixCls, "-ok")
            }, /*#__PURE__*/React.createElement(Button, {
              disabled: okDisabled,
              onClick: onOk
            }, locale.ok));
          }

          if (!presetNode && !okNode) {
            return null;
          }

          return /*#__PURE__*/React.createElement("ul", {
            className: "".concat(prefixCls, "-ranges")
          }, presetNode, okNode);
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/typeof': _req,
        'react': _req0
      }));
    }
  };
});
//# sourceMappingURL=5e92825848b9c25f08c93fbccdf3870fc700c70b.js.map