System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/slicedToArray", "@babel/runtime/helpers/typeof", "rc-util/lib/Children/toArray", "rc-util/lib/hooks/useLayoutEffect", "react"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req0 = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req1 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req2 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req3 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_rcUtilLibChildrenToArray) {
      _req4 = _rcUtilLibChildrenToArray.__cjsMetaURL;
    }, function (_rcUtilLibHooksUseLayoutEffect) {
      _req5 = _rcUtilLibHooksUseLayoutEffect.__cjsMetaURL;
    }, function (_react) {
      _req6 = _react.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard")["default"];

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports["default"] = void 0;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

        var _toArray = _interopRequireDefault(require("rc-util/lib/Children/toArray"));

        var _useLayoutEffect = _interopRequireDefault(require("rc-util/lib/hooks/useLayoutEffect"));

        var React = _interopRequireWildcard(require("react"));

        function cuttable(node) {
          var type = (0, _typeof2["default"])(node);
          return type === 'string' || type === 'number';
        }

        function getNodesLen(nodeList) {
          var totalLen = 0;
          nodeList.forEach(function (node) {
            if (cuttable(node)) {
              totalLen += String(node).length;
            } else {
              totalLen += 1;
            }
          });
          return totalLen;
        }

        function sliceNodes(nodeList, len) {
          var currLen = 0;
          var currentNodeList = [];

          for (var i = 0; i < nodeList.length; i += 1) {
            // Match to return
            if (currLen === len) {
              return currentNodeList;
            }

            var node = nodeList[i];
            var canCut = cuttable(node);
            var nodeLen = canCut ? String(node).length : 1;
            var nextLen = currLen + nodeLen; // Exceed but current not which means we need cut this
            // This will not happen on validate ReactElement

            if (nextLen > len) {
              var restLen = len - currLen;
              currentNodeList.push(String(node).slice(0, restLen));
              return currentNodeList;
            }

            currentNodeList.push(node);
            currLen = nextLen;
          }

          return nodeList;
        }

        var NONE = 0;
        var PREPARE = 1;
        var WALKING = 2;
        var DONE_WITH_ELLIPSIS = 3;
        var DONE_WITHOUT_ELLIPSIS = 4;

        var Ellipsis = function Ellipsis(_ref) {
          var enabledMeasure = _ref.enabledMeasure,
              children = _ref.children,
              text = _ref.text,
              width = _ref.width,
              fontSize = _ref.fontSize,
              rows = _ref.rows,
              onEllipsis = _ref.onEllipsis;

          var _React$useState = React.useState([0, 0, 0]),
              _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
              _React$useState2$ = (0, _slicedToArray2["default"])(_React$useState2[0], 3),
              startLen = _React$useState2$[0],
              midLen = _React$useState2$[1],
              endLen = _React$useState2$[2],
              setCutLength = _React$useState2[1];

          var _React$useState3 = React.useState(NONE),
              _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
              walkingState = _React$useState4[0],
              setWalkingState = _React$useState4[1];

          var _React$useState5 = React.useState(0),
              _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
              singleRowHeight = _React$useState6[0],
              setSingleRowHeight = _React$useState6[1];

          var singleRowRef = React.useRef(null);
          var midRowRef = React.useRef(null);
          var nodeList = React.useMemo(function () {
            return (0, _toArray["default"])(text);
          }, [text]);
          var totalLen = React.useMemo(function () {
            return getNodesLen(nodeList);
          }, [nodeList]);
          var mergedChildren = React.useMemo(function () {
            if (!enabledMeasure || walkingState !== DONE_WITH_ELLIPSIS) {
              return children(nodeList, false);
            }

            return children(sliceNodes(nodeList, midLen), midLen < totalLen);
          }, [enabledMeasure, walkingState, children, nodeList, midLen, totalLen]); // ======================== Walk ========================

          (0, _useLayoutEffect["default"])(function () {
            if (enabledMeasure && width && fontSize && totalLen) {
              setWalkingState(PREPARE);
              setCutLength([0, Math.ceil(totalLen / 2), totalLen]);
            }
          }, [enabledMeasure, width, fontSize, text, totalLen, rows]);
          (0, _useLayoutEffect["default"])(function () {
            var _a;

            if (walkingState === PREPARE) {
              setSingleRowHeight(((_a = singleRowRef.current) === null || _a === void 0 ? void 0 : _a.offsetHeight) || 0);
            }
          }, [walkingState]);
          (0, _useLayoutEffect["default"])(function () {
            var _a, _b;

            if (singleRowHeight) {
              if (walkingState === PREPARE) {
                // Ignore if position is enough
                var midHeight = ((_a = midRowRef.current) === null || _a === void 0 ? void 0 : _a.offsetHeight) || 0;
                var maxHeight = rows * singleRowHeight;

                if (midHeight <= maxHeight) {
                  setWalkingState(DONE_WITHOUT_ELLIPSIS);
                  onEllipsis(false);
                } else {
                  setWalkingState(WALKING);
                }
              } else if (walkingState === WALKING) {
                if (startLen !== endLen) {
                  var _midHeight = ((_b = midRowRef.current) === null || _b === void 0 ? void 0 : _b.offsetHeight) || 0;

                  var _maxHeight = rows * singleRowHeight;

                  var nextStartLen = startLen;
                  var nextEndLen = endLen; // We reach the last round

                  if (startLen === endLen - 1) {
                    nextEndLen = startLen;
                  } else if (_midHeight <= _maxHeight) {
                    nextStartLen = midLen;
                  } else {
                    nextEndLen = midLen;
                  }

                  var nextMidLen = Math.ceil((nextStartLen + nextEndLen) / 2);
                  setCutLength([nextStartLen, nextMidLen, nextEndLen]);
                } else {
                  setWalkingState(DONE_WITH_ELLIPSIS);
                  onEllipsis(true);
                }
              }
            }
          }, [walkingState, startLen, endLen, rows, singleRowHeight]); // ======================= Render =======================

          var measureStyle = {
            width: width,
            whiteSpace: 'normal',
            margin: 0,
            padding: 0
          };

          var renderMeasure = function renderMeasure(content, ref, style) {
            return /*#__PURE__*/React.createElement("span", {
              "aria-hidden": true,
              ref: ref,
              style: (0, _extends2["default"])({
                position: 'fixed',
                display: 'block',
                left: 0,
                top: 0,
                zIndex: -9999,
                visibility: 'hidden',
                pointerEvents: 'none',
                fontSize: Math.floor(fontSize / 2) * 2
              }, style)
            }, content);
          };

          var renderMeasureSlice = function renderMeasureSlice(len, ref) {
            var sliceNodeList = sliceNodes(nodeList, len);
            return renderMeasure(children(sliceNodeList, true), ref, measureStyle);
          };

          return /*#__PURE__*/React.createElement(React.Fragment, null, mergedChildren, enabledMeasure && walkingState !== DONE_WITH_ELLIPSIS && walkingState !== DONE_WITHOUT_ELLIPSIS && /*#__PURE__*/React.createElement(React.Fragment, null, renderMeasure('lg', singleRowRef, {
            wordBreak: 'keep-all',
            whiteSpace: 'nowrap'
          }), walkingState === PREPARE ? renderMeasure(children(nodeList, false), midRowRef, measureStyle) : renderMeasureSlice(midLen, midRowRef)));
        };

        if (process.env.NODE_ENV !== 'production') {
          Ellipsis.displayName = 'Ellipsis';
        }

        var _default = Ellipsis;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/extends': _req1,
        '@babel/runtime/helpers/slicedToArray': _req2,
        '@babel/runtime/helpers/typeof': _req3,
        'rc-util/lib/Children/toArray': _req4,
        'rc-util/lib/hooks/useLayoutEffect': _req5,
        'react': _req6
      }));
    }
  };
});
//# sourceMappingURL=6bb7b404f6da7096efce939669108c0fda636ae7.js.map