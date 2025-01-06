System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/objectDestructuringEmpty", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/slicedToArray", "@babel/runtime/helpers/objectWithoutProperties", "react", "classnames", "rc-motion", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req0 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectDestructuringEmpty) {
      _req1 = _babelRuntimeHelpersObjectDestructuringEmpty.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req2 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req3 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectWithoutProperties) {
      _req4 = _babelRuntimeHelpersObjectWithoutProperties.__cjsMetaURL;
    }, function (_react) {
      _req5 = _react.__cjsMetaURL;
    }, function (_classnames2) {
      _req6 = _classnames2.__cjsMetaURL;
    }, function (_rcMotion2) {
      _req7 = _rcMotion2.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req8 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req9 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req10 = _unresolved_4.__cjsMetaURL;
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

        var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime/helpers/objectDestructuringEmpty"));

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

        var React = _interopRequireWildcard(require("react"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _rcMotion = _interopRequireDefault(require("rc-motion"));

        var _TreeNode = _interopRequireDefault(require("./TreeNode"));

        var _treeUtil = require("./utils/treeUtil");

        var _contextTypes = require("./contextTypes");

        var _excluded = ["className", "style", "motion", "motionNodes", "motionType", "onMotionStart", "onMotionEnd", "active", "treeNodeRequiredProps"];

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

        var MotionTreeNode = function MotionTreeNode(_ref, ref) {
          var className = _ref.className,
              style = _ref.style,
              motion = _ref.motion,
              motionNodes = _ref.motionNodes,
              motionType = _ref.motionType,
              onOriginMotionStart = _ref.onMotionStart,
              onOriginMotionEnd = _ref.onMotionEnd,
              active = _ref.active,
              treeNodeRequiredProps = _ref.treeNodeRequiredProps,
              props = (0, _objectWithoutProperties2.default)(_ref, _excluded);

          var _React$useState = React.useState(true),
              _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
              visible = _React$useState2[0],
              setVisible = _React$useState2[1];

          var _React$useContext = React.useContext(_contextTypes.TreeContext),
              prefixCls = _React$useContext.prefixCls;

          var motionedRef = React.useRef(false);

          var onMotionEnd = function onMotionEnd() {
            if (!motionedRef.current) {
              onOriginMotionEnd();
            }

            motionedRef.current = true;
          };

          (0, React.useEffect)(function () {
            if (motionNodes && motionType === 'hide' && visible) {
              setVisible(false);
            }
          }, [motionNodes]);
          (0, React.useEffect)(function () {
            // Trigger motion only when patched
            if (motionNodes) {
              onOriginMotionStart();
            }

            return function () {
              if (motionNodes) {
                onMotionEnd();
              }
            };
          }, []);

          if (motionNodes) {
            return /*#__PURE__*/React.createElement(_rcMotion.default, (0, _extends2.default)({
              ref: ref,
              visible: visible
            }, motion, {
              motionAppear: motionType === 'show',
              onAppearEnd: onMotionEnd,
              onLeaveEnd: onMotionEnd
            }), function (_ref2, motionRef) {
              var motionClassName = _ref2.className,
                  motionStyle = _ref2.style;
              return /*#__PURE__*/React.createElement("div", {
                ref: motionRef,
                className: (0, _classnames.default)("".concat(prefixCls, "-treenode-motion"), motionClassName),
                style: motionStyle
              }, motionNodes.map(function (treeNode) {
                var restProps = (0, _extends2.default)({}, ((0, _objectDestructuringEmpty2.default)(treeNode.data), treeNode.data)),
                    title = treeNode.title,
                    key = treeNode.key,
                    isStart = treeNode.isStart,
                    isEnd = treeNode.isEnd;
                delete restProps.children;
                var treeNodeProps = (0, _treeUtil.getTreeNodeProps)(key, treeNodeRequiredProps);
                return /*#__PURE__*/React.createElement(_TreeNode.default, (0, _extends2.default)({}, restProps, treeNodeProps, {
                  title: title,
                  active: active,
                  data: treeNode.data,
                  key: key,
                  isStart: isStart,
                  isEnd: isEnd
                }));
              }));
            });
          }

          return /*#__PURE__*/React.createElement(_TreeNode.default, (0, _extends2.default)({
            domRef: ref,
            className: className,
            style: style
          }, props, {
            active: active
          }));
        };

        MotionTreeNode.displayName = 'MotionTreeNode';
        var RefMotionTreeNode = /*#__PURE__*/React.forwardRef(MotionTreeNode);
        var _default = RefMotionTreeNode;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/objectDestructuringEmpty': _req1,
        '@babel/runtime/helpers/extends': _req2,
        '@babel/runtime/helpers/slicedToArray': _req3,
        '@babel/runtime/helpers/objectWithoutProperties': _req4,
        'react': _req5,
        'classnames': _req6,
        'rc-motion': _req7,
        './TreeNode': _req8,
        './utils/treeUtil': _req9,
        './contextTypes': _req10
      }));
    }
  };
});
//# sourceMappingURL=dd1080e7a9cff89232eb43c598fc373d6e7afab0.js.map