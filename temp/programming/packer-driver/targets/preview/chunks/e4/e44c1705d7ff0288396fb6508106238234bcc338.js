System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/objectSpread2", "@babel/runtime/helpers/extends", "react", "classnames", "__unresolved_1"], function (_export, _context) {
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
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req1 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req2 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_react2) {
      _req3 = _react2.__cjsMetaURL;
    }, function (_classnames2) {
      _req4 = _classnames2.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req5 = _unresolved_2.__cjsMetaURL;
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

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _react = _interopRequireWildcard(require("react"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _MemoChildren = _interopRequireDefault(require("./MemoChildren"));

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

        var sentinelStyle = {
          width: 0,
          height: 0,
          overflow: 'hidden',
          outline: 'none'
        };

        var Panel = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
          var prefixCls = props.prefixCls,
              className = props.className,
              style = props.style,
              title = props.title,
              ariaId = props.ariaId,
              footer = props.footer,
              closable = props.closable,
              closeIcon = props.closeIcon,
              onClose = props.onClose,
              children = props.children,
              bodyStyle = props.bodyStyle,
              bodyProps = props.bodyProps,
              modalRender = props.modalRender,
              onMouseDown = props.onMouseDown,
              onMouseUp = props.onMouseUp,
              holderRef = props.holderRef,
              visible = props.visible,
              forceRender = props.forceRender,
              width = props.width,
              height = props.height; // ================================= Refs =================================

          var sentinelStartRef = (0, _react.useRef)();
          var sentinelEndRef = (0, _react.useRef)();

          _react.default.useImperativeHandle(ref, function () {
            return {
              focus: function focus() {
                var _sentinelStartRef$cur;

                (_sentinelStartRef$cur = sentinelStartRef.current) === null || _sentinelStartRef$cur === void 0 ? void 0 : _sentinelStartRef$cur.focus();
              },
              changeActive: function changeActive(next) {
                var _document = document,
                    activeElement = _document.activeElement;

                if (next && activeElement === sentinelEndRef.current) {
                  sentinelStartRef.current.focus();
                } else if (!next && activeElement === sentinelStartRef.current) {
                  sentinelEndRef.current.focus();
                }
              }
            };
          }); // ================================ Style =================================


          var contentStyle = {};

          if (width !== undefined) {
            contentStyle.width = width;
          }

          if (height !== undefined) {
            contentStyle.height = height;
          } // ================================ Render ================================


          var footerNode;

          if (footer) {
            footerNode = /*#__PURE__*/_react.default.createElement("div", {
              className: "".concat(prefixCls, "-footer")
            }, footer);
          }

          var headerNode;

          if (title) {
            headerNode = /*#__PURE__*/_react.default.createElement("div", {
              className: "".concat(prefixCls, "-header")
            }, /*#__PURE__*/_react.default.createElement("div", {
              className: "".concat(prefixCls, "-title"),
              id: ariaId
            }, title));
          }

          var closer;

          if (closable) {
            closer = /*#__PURE__*/_react.default.createElement("button", {
              type: "button",
              onClick: onClose,
              "aria-label": "Close",
              className: "".concat(prefixCls, "-close")
            }, closeIcon || /*#__PURE__*/_react.default.createElement("span", {
              className: "".concat(prefixCls, "-close-x")
            }));
          }

          var content = /*#__PURE__*/_react.default.createElement("div", {
            className: "".concat(prefixCls, "-content")
          }, closer, headerNode, /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
            className: "".concat(prefixCls, "-body"),
            style: bodyStyle
          }, bodyProps), children), footerNode);

          return /*#__PURE__*/_react.default.createElement("div", {
            key: "dialog-element",
            role: "dialog",
            "aria-labelledby": title ? ariaId : null,
            "aria-modal": "true",
            ref: holderRef,
            style: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, style), contentStyle),
            className: (0, _classnames.default)(prefixCls, className),
            onMouseDown: onMouseDown,
            onMouseUp: onMouseUp
          }, /*#__PURE__*/_react.default.createElement("div", {
            tabIndex: 0,
            ref: sentinelStartRef,
            style: sentinelStyle,
            "aria-hidden": "true"
          }), /*#__PURE__*/_react.default.createElement(_MemoChildren.default, {
            shouldUpdate: visible || forceRender
          }, modalRender ? modalRender(content) : content), /*#__PURE__*/_react.default.createElement("div", {
            tabIndex: 0,
            ref: sentinelEndRef,
            style: sentinelStyle,
            "aria-hidden": "true"
          }));
        });

        if (process.env.NODE_ENV !== 'production') {
          Panel.displayName = 'Panel';
        }

        var _default = Panel;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/objectSpread2': _req1,
        '@babel/runtime/helpers/extends': _req2,
        'react': _req3,
        'classnames': _req4,
        './MemoChildren': _req5
      }));
    }
  };
});
//# sourceMappingURL=e44c1705d7ff0288396fb6508106238234bcc338.js.map