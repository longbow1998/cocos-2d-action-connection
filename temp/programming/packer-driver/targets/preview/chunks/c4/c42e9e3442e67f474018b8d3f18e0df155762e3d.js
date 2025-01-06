System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/objectSpread2", "@babel/runtime/helpers/slicedToArray", "react", "rc-util/lib/Dom/findDOMNode", "rc-util/lib/ref", "classnames", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _req13, _cjsExports, ___esModule, _default0, _genCSSMotion, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req0 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
      _req4 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req1 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req2 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req3 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_react) {
      _req5 = _react.__cjsMetaURL;
    }, function (_rcUtilLibDomFindDOMNode) {
      _req6 = _rcUtilLibDomFindDOMNode.__cjsMetaURL;
    }, function (_rcUtilLibRef) {
      _req7 = _rcUtilLibRef.__cjsMetaURL;
    }, function (_classnames2) {
      _req8 = _classnames2.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req9 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req10 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req11 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req12 = _unresolved_5.__cjsMetaURL;
    }, function (_unresolved_6) {
      _req13 = _unresolved_6.__cjsMetaURL;
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
        exports.default = void 0;
        exports.genCSSMotion = genCSSMotion;

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

        var React = _interopRequireWildcard(require("react"));

        var _findDOMNode = _interopRequireDefault(require("rc-util/lib/Dom/findDOMNode"));

        var _ref2 = require("rc-util/lib/ref");

        var _classnames = _interopRequireDefault(require("classnames"));

        var _motion = require("./util/motion");

        var _interface = require("./interface");

        var _useStatus3 = _interopRequireDefault(require("./hooks/useStatus"));

        var _DomWrapper = _interopRequireDefault(require("./DomWrapper"));

        var _useStepQueue = require("./hooks/useStepQueue");

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
        /* eslint-disable react/default-props-match-prop-types, react/no-multi-comp, react/prop-types */

        /**
         * `transitionSupport` is used for none transition test case.
         * Default we use browser transition event support check.
         */


        function genCSSMotion(config) {
          var transitionSupport = config;

          if ((0, _typeof2.default)(config) === 'object') {
            transitionSupport = config.transitionSupport;
          }

          function isSupportTransition(props) {
            return !!(props.motionName && transitionSupport);
          }

          var CSSMotion = /*#__PURE__*/React.forwardRef(function (props, ref) {
            var _props$visible = props.visible,
                visible = _props$visible === void 0 ? true : _props$visible,
                _props$removeOnLeave = props.removeOnLeave,
                removeOnLeave = _props$removeOnLeave === void 0 ? true : _props$removeOnLeave,
                forceRender = props.forceRender,
                children = props.children,
                motionName = props.motionName,
                leavedClassName = props.leavedClassName,
                eventProps = props.eventProps;
            var supportMotion = isSupportTransition(props); // Ref to the react node, it may be a HTMLElement

            var nodeRef = (0, React.useRef)(); // Ref to the dom wrapper in case ref can not pass to HTMLElement

            var wrapperNodeRef = (0, React.useRef)();

            function getDomElement() {
              try {
                // Here we're avoiding call for findDOMNode since it's deprecated
                // in strict mode. We're calling it only when node ref is not
                // an instance of DOM HTMLElement. Otherwise use
                // findDOMNode as a final resort
                return nodeRef.current instanceof HTMLElement ? nodeRef.current : (0, _findDOMNode.default)(wrapperNodeRef.current);
              } catch (e) {
                // Only happen when `motionDeadline` trigger but element removed.
                return null;
              }
            }

            var _useStatus = (0, _useStatus3.default)(supportMotion, visible, getDomElement, props),
                _useStatus2 = (0, _slicedToArray2.default)(_useStatus, 4),
                status = _useStatus2[0],
                statusStep = _useStatus2[1],
                statusStyle = _useStatus2[2],
                mergedVisible = _useStatus2[3]; // Record whether content has rendered
            // Will return null for un-rendered even when `removeOnLeave={false}`


            var renderedRef = React.useRef(mergedVisible);

            if (mergedVisible) {
              renderedRef.current = true;
            } // ====================== Refs ======================


            var setNodeRef = React.useCallback(function (node) {
              nodeRef.current = node;
              (0, _ref2.fillRef)(ref, node);
            }, [ref]); // ===================== Render =====================

            var motionChildren;
            var mergedProps = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, eventProps), {}, {
              visible: visible
            });

            if (!children) {
              // No children
              motionChildren = null;
            } else if (status === _interface.STATUS_NONE || !isSupportTransition(props)) {
              // Stable children
              if (mergedVisible) {
                motionChildren = children((0, _objectSpread2.default)({}, mergedProps), setNodeRef);
              } else if (!removeOnLeave && renderedRef.current && leavedClassName) {
                motionChildren = children((0, _objectSpread2.default)((0, _objectSpread2.default)({}, mergedProps), {}, {
                  className: leavedClassName
                }), setNodeRef);
              } else if (forceRender || !removeOnLeave && !leavedClassName) {
                motionChildren = children((0, _objectSpread2.default)((0, _objectSpread2.default)({}, mergedProps), {}, {
                  style: {
                    display: 'none'
                  }
                }), setNodeRef);
              } else {
                motionChildren = null;
              }
            } else {
              var _classNames; // In motion


              var statusSuffix;

              if (statusStep === _interface.STEP_PREPARE) {
                statusSuffix = 'prepare';
              } else if ((0, _useStepQueue.isActive)(statusStep)) {
                statusSuffix = 'active';
              } else if (statusStep === _interface.STEP_START) {
                statusSuffix = 'start';
              }

              motionChildren = children((0, _objectSpread2.default)((0, _objectSpread2.default)({}, mergedProps), {}, {
                className: (0, _classnames.default)((0, _motion.getTransitionName)(motionName, status), (_classNames = {}, (0, _defineProperty2.default)(_classNames, (0, _motion.getTransitionName)(motionName, "".concat(status, "-").concat(statusSuffix)), statusSuffix), (0, _defineProperty2.default)(_classNames, motionName, typeof motionName === 'string'), _classNames)),
                style: statusStyle
              }), setNodeRef);
            } // Auto inject ref if child node not have `ref` props


            if ( /*#__PURE__*/React.isValidElement(motionChildren) && (0, _ref2.supportRef)(motionChildren)) {
              var _ref = motionChildren,
                  originNodeRef = _ref.ref;

              if (!originNodeRef) {
                motionChildren = /*#__PURE__*/React.cloneElement(motionChildren, {
                  ref: setNodeRef
                });
              }
            }

            return /*#__PURE__*/React.createElement(_DomWrapper.default, {
              ref: wrapperNodeRef
            }, motionChildren);
          });
          CSSMotion.displayName = 'CSSMotion';
          return CSSMotion;
        }

        var _default = genCSSMotion(_motion.supportTransition);

        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
        _genCSSMotion = module.exports.genCSSMotion;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/defineProperty': _req1,
        '@babel/runtime/helpers/objectSpread2': _req2,
        '@babel/runtime/helpers/slicedToArray': _req3,
        '@babel/runtime/helpers/typeof': _req4,
        'react': _req5,
        'rc-util/lib/Dom/findDOMNode': _req6,
        'rc-util/lib/ref': _req7,
        'classnames': _req8,
        './util/motion': _req9,
        './interface': _req10,
        './hooks/useStatus': _req11,
        './DomWrapper': _req12,
        './hooks/useStepQueue': _req13
      }));
    }
  };
});
//# sourceMappingURL=c42e9e3442e67f474018b8d3f18e0df155762e3d.js.map