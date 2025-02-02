System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/objectSpread2", "rc-util/lib/ref", "react", "rc-util/lib/Dom/findDOMNode", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req0 = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req1 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_rcUtilLibRef) {
      _req2 = _rcUtilLibRef.__cjsMetaURL;
    }, function (_react) {
      _req3 = _react.__cjsMetaURL;
    }, function (_rcUtilLibDomFindDOMNode) {
      _req4 = _rcUtilLibDomFindDOMNode.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req5 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req6 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req7 = _unresolved_4.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = void 0;

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var _ref = require("rc-util/lib/ref");

        var React = _interopRequireWildcard(require("react"));

        var _findDOMNode = _interopRequireDefault(require("rc-util/lib/Dom/findDOMNode"));

        var _observerUtil = require("../utils/observerUtil");

        var _DomWrapper = _interopRequireDefault(require("./DomWrapper"));

        var _Collection = require("../Collection");

        function SingleObserver(props, ref) {
          var children = props.children,
              disabled = props.disabled;
          var elementRef = React.useRef(null);
          var wrapperRef = React.useRef(null);
          var onCollectionResize = React.useContext(_Collection.CollectionContext); // =========================== Children ===========================

          var isRenderProps = typeof children === 'function';
          var mergedChildren = isRenderProps ? children(elementRef) : children; // ============================= Size =============================

          var sizeRef = React.useRef({
            width: -1,
            height: -1,
            offsetWidth: -1,
            offsetHeight: -1
          }); // ============================= Ref ==============================

          var canRef = !isRenderProps && /*#__PURE__*/React.isValidElement(mergedChildren) && (0, _ref.supportRef)(mergedChildren);
          var originRef = canRef ? mergedChildren.ref : null;
          var mergedRef = React.useMemo(function () {
            return (0, _ref.composeRef)(originRef, elementRef);
          }, [originRef, elementRef]);

          var getDom = function getDom() {
            return (0, _findDOMNode.default)(elementRef.current) || (0, _findDOMNode.default)(wrapperRef.current);
          };

          React.useImperativeHandle(ref, function () {
            return getDom();
          }); // =========================== Observe ============================

          var propsRef = React.useRef(props);
          propsRef.current = props; // Handler

          var onInternalResize = React.useCallback(function (target) {
            var _propsRef$current = propsRef.current,
                onResize = _propsRef$current.onResize,
                data = _propsRef$current.data;

            var _target$getBoundingCl = target.getBoundingClientRect(),
                width = _target$getBoundingCl.width,
                height = _target$getBoundingCl.height;

            var offsetWidth = target.offsetWidth,
                offsetHeight = target.offsetHeight;
            /**
             * Resize observer trigger when content size changed.
             * In most case we just care about element size,
             * let's use `boundary` instead of `contentRect` here to avoid shaking.
             */

            var fixedWidth = Math.floor(width);
            var fixedHeight = Math.floor(height);

            if (sizeRef.current.width !== fixedWidth || sizeRef.current.height !== fixedHeight || sizeRef.current.offsetWidth !== offsetWidth || sizeRef.current.offsetHeight !== offsetHeight) {
              var size = {
                width: fixedWidth,
                height: fixedHeight,
                offsetWidth: offsetWidth,
                offsetHeight: offsetHeight
              };
              sizeRef.current = size; // IE is strange, right?

              var mergedOffsetWidth = offsetWidth === Math.round(width) ? width : offsetWidth;
              var mergedOffsetHeight = offsetHeight === Math.round(height) ? height : offsetHeight;
              var sizeInfo = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, size), {}, {
                offsetWidth: mergedOffsetWidth,
                offsetHeight: mergedOffsetHeight
              }); // Let collection know what happened

              onCollectionResize === null || onCollectionResize === void 0 ? void 0 : onCollectionResize(sizeInfo, target, data);

              if (onResize) {
                // defer the callback but not defer to next frame
                Promise.resolve().then(function () {
                  onResize(sizeInfo, target);
                });
              }
            }
          }, []); // Dynamic observe

          React.useEffect(function () {
            var currentElement = getDom();

            if (currentElement && !disabled) {
              (0, _observerUtil.observe)(currentElement, onInternalResize);
            }

            return function () {
              return (0, _observerUtil.unobserve)(currentElement, onInternalResize);
            };
          }, [elementRef.current, disabled]); // ============================ Render ============================

          return /*#__PURE__*/React.createElement(_DomWrapper.default, {
            ref: wrapperRef
          }, canRef ? /*#__PURE__*/React.cloneElement(mergedChildren, {
            ref: mergedRef
          }) : mergedChildren);
        }

        var RefSingleObserver = /*#__PURE__*/React.forwardRef(SingleObserver);

        if (process.env.NODE_ENV !== 'production') {
          RefSingleObserver.displayName = 'SingleObserver';
        }

        var _default = RefSingleObserver;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/objectSpread2': _req1,
        'rc-util/lib/ref': _req2,
        'react': _req3,
        'rc-util/lib/Dom/findDOMNode': _req4,
        '../utils/observerUtil': _req5,
        './DomWrapper': _req6,
        '../Collection': _req7
      }));
    }
  };
});
//# sourceMappingURL=5a8200a629e69ca6cfd93d16f291536742dbbbc2.js.map