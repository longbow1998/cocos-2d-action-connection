System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/extends", "rc-tooltip/lib/placements"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _cjsExports, ___esModule, _default, _getOverflowOptions, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req0 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_rcTooltipLibPlacements) {
      _req1 = _rcTooltipLibPlacements.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports["default"] = getPlacements;
        exports.getOverflowOptions = getOverflowOptions;

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _placements = require("rc-tooltip/lib/placements");

        var autoAdjustOverflowEnabled = {
          adjustX: 1,
          adjustY: 1
        };
        var autoAdjustOverflowDisabled = {
          adjustX: 0,
          adjustY: 0
        };
        var targetOffset = [0, 0];

        function getOverflowOptions(autoAdjustOverflow) {
          if (typeof autoAdjustOverflow === 'boolean') {
            return autoAdjustOverflow ? autoAdjustOverflowEnabled : autoAdjustOverflowDisabled;
          }

          return (0, _extends2["default"])((0, _extends2["default"])({}, autoAdjustOverflowDisabled), autoAdjustOverflow);
        }

        function getPlacements(config) {
          var _config$arrowWidth = config.arrowWidth,
              arrowWidth = _config$arrowWidth === void 0 ? 4 : _config$arrowWidth,
              _config$horizontalArr = config.horizontalArrowShift,
              horizontalArrowShift = _config$horizontalArr === void 0 ? 16 : _config$horizontalArr,
              _config$verticalArrow = config.verticalArrowShift,
              verticalArrowShift = _config$verticalArrow === void 0 ? 8 : _config$verticalArrow,
              autoAdjustOverflow = config.autoAdjustOverflow,
              arrowPointAtCenter = config.arrowPointAtCenter;
          var placementMap = {
            left: {
              points: ['cr', 'cl'],
              offset: [-4, 0]
            },
            right: {
              points: ['cl', 'cr'],
              offset: [4, 0]
            },
            top: {
              points: ['bc', 'tc'],
              offset: [0, -4]
            },
            bottom: {
              points: ['tc', 'bc'],
              offset: [0, 4]
            },
            topLeft: {
              points: ['bl', 'tc'],
              offset: [-(horizontalArrowShift + arrowWidth), -4]
            },
            leftTop: {
              points: ['tr', 'cl'],
              offset: [-4, -(verticalArrowShift + arrowWidth)]
            },
            topRight: {
              points: ['br', 'tc'],
              offset: [horizontalArrowShift + arrowWidth, -4]
            },
            rightTop: {
              points: ['tl', 'cr'],
              offset: [4, -(verticalArrowShift + arrowWidth)]
            },
            bottomRight: {
              points: ['tr', 'bc'],
              offset: [horizontalArrowShift + arrowWidth, 4]
            },
            rightBottom: {
              points: ['bl', 'cr'],
              offset: [4, verticalArrowShift + arrowWidth]
            },
            bottomLeft: {
              points: ['tl', 'bc'],
              offset: [-(horizontalArrowShift + arrowWidth), 4]
            },
            leftBottom: {
              points: ['br', 'cl'],
              offset: [-4, verticalArrowShift + arrowWidth]
            }
          };
          Object.keys(placementMap).forEach(function (key) {
            placementMap[key] = arrowPointAtCenter ? (0, _extends2["default"])((0, _extends2["default"])({}, placementMap[key]), {
              overflow: getOverflowOptions(autoAdjustOverflow),
              targetOffset: targetOffset
            }) : (0, _extends2["default"])((0, _extends2["default"])({}, _placements.placements[key]), {
              overflow: getOverflowOptions(autoAdjustOverflow)
            });
            placementMap[key].ignoreShake = true;
          });
          return placementMap;
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default = module.exports.default;
        _getOverflowOptions = module.exports.getOverflowOptions;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/extends': _req0,
        'rc-tooltip/lib/placements': _req1
      }));
    }
  };
});
//# sourceMappingURL=142d16cca3ed2f96ceba8261e6503bb234424320.js.map