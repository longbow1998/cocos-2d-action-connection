System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "rc-util/lib/Dom/addEventListener"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _cjsExports, ___esModule, _addObserveTarget, _getFixedBottom, _getFixedTop, _getObserverEntities, _getTargetRect, _removeObserveTarget, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_rcUtilLibDomAddEventListener) {
      _req0 = _rcUtilLibDomAddEventListener.__cjsMetaURL;
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
        exports.addObserveTarget = addObserveTarget;
        exports.getFixedBottom = getFixedBottom;
        exports.getFixedTop = getFixedTop;
        exports.getObserverEntities = getObserverEntities;
        exports.getTargetRect = getTargetRect;
        exports.removeObserveTarget = removeObserveTarget;

        var _addEventListener = _interopRequireDefault(require("rc-util/lib/Dom/addEventListener"));

        function getTargetRect(target) {
          return target !== window ? target.getBoundingClientRect() : {
            top: 0,
            bottom: window.innerHeight
          };
        }

        function getFixedTop(placeholderReact, targetRect, offsetTop) {
          if (offsetTop !== undefined && targetRect.top > placeholderReact.top - offsetTop) {
            return offsetTop + targetRect.top;
          }

          return undefined;
        }

        function getFixedBottom(placeholderReact, targetRect, offsetBottom) {
          if (offsetBottom !== undefined && targetRect.bottom < placeholderReact.bottom + offsetBottom) {
            var targetBottomOffset = window.innerHeight - targetRect.bottom;
            return offsetBottom + targetBottomOffset;
          }

          return undefined;
        } // ======================== Observer ========================


        var TRIGGER_EVENTS = ['resize', 'scroll', 'touchstart', 'touchmove', 'touchend', 'pageshow', 'load'];
        var observerEntities = [];

        function getObserverEntities() {
          // Only used in test env. Can be removed if refactor.
          return observerEntities;
        }

        function addObserveTarget(target, affix) {
          if (!target) {
            return;
          }

          var entity = observerEntities.find(function (item) {
            return item.target === target;
          });

          if (entity) {
            entity.affixList.push(affix);
          } else {
            entity = {
              target: target,
              affixList: [affix],
              eventHandlers: {}
            };
            observerEntities.push(entity); // Add listener

            TRIGGER_EVENTS.forEach(function (eventName) {
              entity.eventHandlers[eventName] = (0, _addEventListener["default"])(target, eventName, function () {
                entity.affixList.forEach(function (targetAffix) {
                  targetAffix.lazyUpdatePosition();
                });
              });
            });
          }
        }

        function removeObserveTarget(affix) {
          var observerEntity = observerEntities.find(function (oriObserverEntity) {
            var hasAffix = oriObserverEntity.affixList.some(function (item) {
              return item === affix;
            });

            if (hasAffix) {
              oriObserverEntity.affixList = oriObserverEntity.affixList.filter(function (item) {
                return item !== affix;
              });
            }

            return hasAffix;
          });

          if (observerEntity && observerEntity.affixList.length === 0) {
            observerEntities = observerEntities.filter(function (item) {
              return item !== observerEntity;
            }); // Remove listener

            TRIGGER_EVENTS.forEach(function (eventName) {
              var handler = observerEntity.eventHandlers[eventName];

              if (handler && handler.remove) {
                handler.remove();
              }
            });
          }
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _addObserveTarget = module.exports.addObserveTarget;
        _getFixedBottom = module.exports.getFixedBottom;
        _getFixedTop = module.exports.getFixedTop;
        _getObserverEntities = module.exports.getObserverEntities;
        _getTargetRect = module.exports.getTargetRect;
        _removeObserveTarget = module.exports.removeObserveTarget;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        'rc-util/lib/Dom/addEventListener': _req0
      }));
    }
  };
});
//# sourceMappingURL=403dcaaf10398b48288e3bb3c2c75c726c03c1c8.js.map