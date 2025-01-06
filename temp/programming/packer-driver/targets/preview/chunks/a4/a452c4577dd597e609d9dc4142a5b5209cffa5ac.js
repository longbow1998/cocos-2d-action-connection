System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/defineProperty", "classnames", "rc-util/lib/KeyCode", "react", "__unresolved_1"], function (_export, _context) {
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
    }, function (_classnames2) {
      _req2 = _classnames2.__cjsMetaURL;
    }, function (_rcUtilLibKeyCode) {
      _req3 = _rcUtilLibKeyCode.__cjsMetaURL;
    }, function (_react) {
      _req4 = _react.__cjsMetaURL;
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

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _KeyCode = _interopRequireDefault(require("rc-util/lib/KeyCode"));

        var React = _interopRequireWildcard(require("react"));

        var _util = require("../util");

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

        function TabNode(_ref) {
          var _classNames;

          var prefixCls = _ref.prefixCls,
              id = _ref.id,
              active = _ref.active,
              _ref$tab = _ref.tab,
              key = _ref$tab.key,
              label = _ref$tab.label,
              disabled = _ref$tab.disabled,
              closeIcon = _ref$tab.closeIcon,
              closable = _ref.closable,
              renderWrapper = _ref.renderWrapper,
              removeAriaLabel = _ref.removeAriaLabel,
              editable = _ref.editable,
              onClick = _ref.onClick,
              onFocus = _ref.onFocus,
              style = _ref.style;
          var tabPrefix = "".concat(prefixCls, "-tab");
          var removable = editable && closable !== false && !disabled;

          function onInternalClick(e) {
            if (disabled) {
              return;
            }

            onClick(e);
          }

          function onRemoveTab(event) {
            event.preventDefault();
            event.stopPropagation();
            editable.onEdit('remove', {
              key: key,
              event: event
            });
          }

          var node = /*#__PURE__*/React.createElement("div", {
            key: key // ref={ref}
            ,
            "data-node-key": (0, _util.genDataNodeKey)(key),
            className: (0, _classnames.default)(tabPrefix, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(tabPrefix, "-with-remove"), removable), (0, _defineProperty2.default)(_classNames, "".concat(tabPrefix, "-active"), active), (0, _defineProperty2.default)(_classNames, "".concat(tabPrefix, "-disabled"), disabled), _classNames)),
            style: style,
            onClick: onInternalClick
          }, /*#__PURE__*/React.createElement("div", {
            role: "tab",
            "aria-selected": active,
            id: id && "".concat(id, "-tab-").concat(key),
            className: "".concat(tabPrefix, "-btn"),
            "aria-controls": id && "".concat(id, "-panel-").concat(key),
            "aria-disabled": disabled,
            tabIndex: disabled ? null : 0,
            onClick: function onClick(e) {
              e.stopPropagation();
              onInternalClick(e);
            },
            onKeyDown: function onKeyDown(e) {
              if ([_KeyCode.default.SPACE, _KeyCode.default.ENTER].includes(e.which)) {
                e.preventDefault();
                onInternalClick(e);
              }
            },
            onFocus: onFocus
          }, label), removable && /*#__PURE__*/React.createElement("button", {
            type: "button",
            "aria-label": removeAriaLabel || 'remove',
            tabIndex: 0,
            className: "".concat(tabPrefix, "-remove"),
            onClick: function onClick(e) {
              e.stopPropagation();
              onRemoveTab(e);
            }
          }, closeIcon || editable.removeIcon || '×'));
          return renderWrapper ? renderWrapper(node) : node;
        }

        var _default = TabNode;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/defineProperty': _req1,
        'classnames': _req2,
        'rc-util/lib/KeyCode': _req3,
        'react': _req4,
        '../util': _req5
      }));
    }
  };
});
//# sourceMappingURL=a452c4577dd597e609d9dc4142a5b5209cffa5ac.js.map