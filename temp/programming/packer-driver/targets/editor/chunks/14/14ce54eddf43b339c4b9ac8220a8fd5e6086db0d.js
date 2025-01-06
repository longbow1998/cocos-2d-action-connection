System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/defineProperty", "react", "classnames", "rc-trigger"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
    }, function (_rcTrigger2) {
      _req4 = _rcTrigger2.__cjsMetaURL;
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

        var React = _interopRequireWildcard(require("react"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _rcTrigger = _interopRequireDefault(require("rc-trigger"));

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

        var BUILT_IN_PLACEMENTS = {
          bottomLeft: {
            points: ['tl', 'bl'],
            offset: [0, 4],
            overflow: {
              adjustX: 1,
              adjustY: 1
            }
          },
          bottomRight: {
            points: ['tr', 'br'],
            offset: [0, 4],
            overflow: {
              adjustX: 1,
              adjustY: 1
            }
          },
          topLeft: {
            points: ['bl', 'tl'],
            offset: [0, -4],
            overflow: {
              adjustX: 0,
              adjustY: 1
            }
          },
          topRight: {
            points: ['br', 'tr'],
            offset: [0, -4],
            overflow: {
              adjustX: 0,
              adjustY: 1
            }
          }
        };

        function PickerTrigger(_ref) {
          var _classNames;

          var prefixCls = _ref.prefixCls,
              popupElement = _ref.popupElement,
              popupStyle = _ref.popupStyle,
              visible = _ref.visible,
              dropdownClassName = _ref.dropdownClassName,
              dropdownAlign = _ref.dropdownAlign,
              transitionName = _ref.transitionName,
              getPopupContainer = _ref.getPopupContainer,
              children = _ref.children,
              range = _ref.range,
              popupPlacement = _ref.popupPlacement,
              direction = _ref.direction;
          var dropdownPrefixCls = "".concat(prefixCls, "-dropdown");

          var getPopupPlacement = function getPopupPlacement() {
            if (popupPlacement !== undefined) {
              return popupPlacement;
            }

            return direction === 'rtl' ? 'bottomRight' : 'bottomLeft';
          };

          return /*#__PURE__*/React.createElement(_rcTrigger.default, {
            showAction: [],
            hideAction: [],
            popupPlacement: getPopupPlacement(),
            builtinPlacements: BUILT_IN_PLACEMENTS,
            prefixCls: dropdownPrefixCls,
            popupTransitionName: transitionName,
            popup: popupElement,
            popupAlign: dropdownAlign,
            popupVisible: visible,
            popupClassName: (0, _classnames.default)(dropdownClassName, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(dropdownPrefixCls, "-range"), range), (0, _defineProperty2.default)(_classNames, "".concat(dropdownPrefixCls, "-rtl"), direction === 'rtl'), _classNames)),
            popupStyle: popupStyle,
            getPopupContainer: getPopupContainer
          }, children);
        }

        var _default = PickerTrigger;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/defineProperty': _req1,
        'react': _req2,
        'classnames': _req3,
        'rc-trigger': _req4
      }));
    }
  };
});
//# sourceMappingURL=14ce54eddf43b339c4b9ac8220a8fd5e6086db0d.js.map