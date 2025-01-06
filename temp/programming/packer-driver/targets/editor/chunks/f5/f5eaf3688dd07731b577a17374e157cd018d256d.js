System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/objectSpread2", "@babel/runtime/helpers/objectWithoutProperties", "react", "rc-trigger", "classnames"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req2 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req3 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectWithoutProperties) {
      _req4 = _babelRuntimeHelpersObjectWithoutProperties.__cjsMetaURL;
    }, function (_react) {
      _req5 = _react.__cjsMetaURL;
    }, function (_rcTrigger2) {
      _req6 = _rcTrigger2.__cjsMetaURL;
    }, function (_classnames2) {
      _req7 = _classnames2.__cjsMetaURL;
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

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

        var React = _interopRequireWildcard(require("react"));

        var _rcTrigger = _interopRequireDefault(require("rc-trigger"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _excluded = ["prefixCls", "disabled", "visible", "children", "popupElement", "containerWidth", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "direction", "placement", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "getPopupContainer", "empty", "getTriggerDOMNode", "onPopupVisibleChange", "onPopupMouseEnter"];

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

        var getBuiltInPlacements = function getBuiltInPlacements(dropdownMatchSelectWidth) {
          // Enable horizontal overflow auto-adjustment when a custom dropdown width is provided
          var adjustX = dropdownMatchSelectWidth === true ? 0 : 1;
          return {
            bottomLeft: {
              points: ['tl', 'bl'],
              offset: [0, 4],
              overflow: {
                adjustX: adjustX,
                adjustY: 1
              }
            },
            bottomRight: {
              points: ['tr', 'br'],
              offset: [0, 4],
              overflow: {
                adjustX: adjustX,
                adjustY: 1
              }
            },
            topLeft: {
              points: ['bl', 'tl'],
              offset: [0, -4],
              overflow: {
                adjustX: adjustX,
                adjustY: 1
              }
            },
            topRight: {
              points: ['br', 'tr'],
              offset: [0, -4],
              overflow: {
                adjustX: adjustX,
                adjustY: 1
              }
            }
          };
        };

        var SelectTrigger = function SelectTrigger(props, ref) {
          var prefixCls = props.prefixCls,
              disabled = props.disabled,
              visible = props.visible,
              children = props.children,
              popupElement = props.popupElement,
              containerWidth = props.containerWidth,
              animation = props.animation,
              transitionName = props.transitionName,
              dropdownStyle = props.dropdownStyle,
              dropdownClassName = props.dropdownClassName,
              _props$direction = props.direction,
              direction = _props$direction === void 0 ? 'ltr' : _props$direction,
              placement = props.placement,
              dropdownMatchSelectWidth = props.dropdownMatchSelectWidth,
              dropdownRender = props.dropdownRender,
              dropdownAlign = props.dropdownAlign,
              getPopupContainer = props.getPopupContainer,
              empty = props.empty,
              getTriggerDOMNode = props.getTriggerDOMNode,
              onPopupVisibleChange = props.onPopupVisibleChange,
              onPopupMouseEnter = props.onPopupMouseEnter,
              restProps = (0, _objectWithoutProperties2.default)(props, _excluded);
          var dropdownPrefixCls = "".concat(prefixCls, "-dropdown");
          var popupNode = popupElement;

          if (dropdownRender) {
            popupNode = dropdownRender(popupElement);
          }

          var builtInPlacements = React.useMemo(function () {
            return getBuiltInPlacements(dropdownMatchSelectWidth);
          }, [dropdownMatchSelectWidth]); // ===================== Motion ======================

          var mergedTransitionName = animation ? "".concat(dropdownPrefixCls, "-").concat(animation) : transitionName; // ======================= Ref =======================

          var popupRef = React.useRef(null);
          React.useImperativeHandle(ref, function () {
            return {
              getPopupElement: function getPopupElement() {
                return popupRef.current;
              }
            };
          });
          var popupStyle = (0, _objectSpread2.default)({
            minWidth: containerWidth
          }, dropdownStyle);

          if (typeof dropdownMatchSelectWidth === 'number') {
            popupStyle.width = dropdownMatchSelectWidth;
          } else if (dropdownMatchSelectWidth) {
            popupStyle.width = containerWidth;
          }

          return /*#__PURE__*/React.createElement(_rcTrigger.default, (0, _extends2.default)({}, restProps, {
            showAction: onPopupVisibleChange ? ['click'] : [],
            hideAction: onPopupVisibleChange ? ['click'] : [],
            popupPlacement: placement || (direction === 'rtl' ? 'bottomRight' : 'bottomLeft'),
            builtinPlacements: builtInPlacements,
            prefixCls: dropdownPrefixCls,
            popupTransitionName: mergedTransitionName,
            popup: /*#__PURE__*/React.createElement("div", {
              ref: popupRef,
              onMouseEnter: onPopupMouseEnter
            }, popupNode),
            popupAlign: dropdownAlign,
            popupVisible: visible,
            getPopupContainer: getPopupContainer,
            popupClassName: (0, _classnames.default)(dropdownClassName, (0, _defineProperty2.default)({}, "".concat(dropdownPrefixCls, "-empty"), empty)),
            popupStyle: popupStyle,
            getTriggerDOMNode: getTriggerDOMNode,
            onPopupVisibleChange: onPopupVisibleChange
          }), children);
        };

        var RefSelectTrigger = /*#__PURE__*/React.forwardRef(SelectTrigger);
        RefSelectTrigger.displayName = 'SelectTrigger';
        var _default = RefSelectTrigger;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/defineProperty': _req2,
        '@babel/runtime/helpers/objectSpread2': _req3,
        '@babel/runtime/helpers/objectWithoutProperties': _req4,
        'react': _req5,
        'rc-trigger': _req6,
        'classnames': _req7
      }));
    }
  };
});
//# sourceMappingURL=f5eaf3688dd07731b577a17374e157cd018d256d.js.map