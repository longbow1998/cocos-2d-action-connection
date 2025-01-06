System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, ___esModule, _getTransitionName, _getTransitionDirection, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_unresolved_2) {
      _req = _unresolved_2.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.getTransitionName = exports.getTransitionDirection = exports["default"] = void 0;

        var _type = require("./type"); // ================== Collapse Motion ==================


        var getCollapsedHeight = function getCollapsedHeight() {
          return {
            height: 0,
            opacity: 0
          };
        };

        var getRealHeight = function getRealHeight(node) {
          var scrollHeight = node.scrollHeight;
          return {
            height: scrollHeight,
            opacity: 1
          };
        };

        var getCurrentHeight = function getCurrentHeight(node) {
          return {
            height: node ? node.offsetHeight : 0
          };
        };

        var skipOpacityTransition = function skipOpacityTransition(_, event) {
          return (event === null || event === void 0 ? void 0 : event.deadline) === true || event.propertyName === 'height';
        };

        var collapseMotion = {
          motionName: 'ant-motion-collapse',
          onAppearStart: getCollapsedHeight,
          onEnterStart: getCollapsedHeight,
          onAppearActive: getRealHeight,
          onEnterActive: getRealHeight,
          onLeaveStart: getCurrentHeight,
          onLeaveActive: getCollapsedHeight,
          onAppearEnd: skipOpacityTransition,
          onEnterEnd: skipOpacityTransition,
          onLeaveEnd: skipOpacityTransition,
          motionDeadline: 500
        };
        var SelectPlacements = (0, _type.tuple)('bottomLeft', 'bottomRight', 'topLeft', 'topRight');

        var getTransitionDirection = function getTransitionDirection(placement) {
          if (placement !== undefined && (placement === 'topLeft' || placement === 'topRight')) {
            return "slide-down";
          }

          return "slide-up";
        };

        exports.getTransitionDirection = getTransitionDirection;

        var getTransitionName = function getTransitionName(rootPrefixCls, motion, transitionName) {
          if (transitionName !== undefined) {
            return transitionName;
          }

          return "".concat(rootPrefixCls, "-").concat(motion);
        };

        exports.getTransitionName = getTransitionName;
        var _default = collapseMotion;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _getTransitionName = module.exports.getTransitionName;
        _getTransitionDirection = module.exports.getTransitionDirection;
        _default0 = module.exports.default;
      }, () => ({
        './type': _req
      }));
    }
  };
});
//# sourceMappingURL=cad1877d00628f9c56d7dffe40338b352a5f422c.js.map