System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/objectWithoutProperties", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/objectSpread2", "@babel/runtime/helpers/classCallCheck", "@babel/runtime/helpers/createClass", "@babel/runtime/helpers/inherits", "@babel/runtime/helpers/createSuper", "react", "rc-util/lib/React/render", "classnames", "rc-motion", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _req13, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersTypeof) {
      _req0 = _babelRuntimeHelpersTypeof.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectWithoutProperties) {
      _req1 = _babelRuntimeHelpersObjectWithoutProperties.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req2 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req3 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_babelRuntimeHelpersClassCallCheck) {
      _req4 = _babelRuntimeHelpersClassCallCheck.__cjsMetaURL;
    }, function (_babelRuntimeHelpersCreateClass) {
      _req5 = _babelRuntimeHelpersCreateClass.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInherits) {
      _req6 = _babelRuntimeHelpersInherits.__cjsMetaURL;
    }, function (_babelRuntimeHelpersCreateSuper) {
      _req7 = _babelRuntimeHelpersCreateSuper.__cjsMetaURL;
    }, function (_react) {
      _req8 = _react.__cjsMetaURL;
    }, function (_rcUtilLibReactRender) {
      _req9 = _rcUtilLibReactRender.__cjsMetaURL;
    }, function (_classnames2) {
      _req10 = _classnames2.__cjsMetaURL;
    }, function (_rcMotion2) {
      _req11 = _rcMotion2.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req12 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req13 = _unresolved_3.__cjsMetaURL;
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

        var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

        var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

        var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

        var _createSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/createSuper"));

        var React = _interopRequireWildcard(require("react"));

        var _render = require("rc-util/lib/React/render");

        var _classnames = _interopRequireDefault(require("classnames"));

        var _rcMotion = require("rc-motion");

        var _Notice = _interopRequireDefault(require("./Notice"));

        var _useNotification2 = _interopRequireDefault(require("./useNotification"));

        var _excluded = ["getContainer"];

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

        var seed = 0;
        var now = Date.now();

        function getUuid() {
          var id = seed;
          seed += 1;
          return "rcNotification_".concat(now, "_").concat(id);
        }

        var Notification = /*#__PURE__*/function (_Component) {
          (0, _inherits2.default)(Notification, _Component);

          var _super = (0, _createSuper2.default)(Notification);

          function Notification() {
            var _this;

            (0, _classCallCheck2.default)(this, Notification);

            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            _this = _super.call.apply(_super, [this].concat(args));
            _this.state = {
              notices: []
            };
            _this.hookRefs = new Map();

            _this.add = function (originNotice, holderCallback) {
              var _originNotice$key;

              var key = (_originNotice$key = originNotice.key) !== null && _originNotice$key !== void 0 ? _originNotice$key : getUuid();
              var notice = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, originNotice), {}, {
                key: key
              });
              var maxCount = _this.props.maxCount;

              _this.setState(function (previousState) {
                var notices = previousState.notices;
                var noticeIndex = notices.map(function (v) {
                  return v.notice.key;
                }).indexOf(key);
                var updatedNotices = notices.concat();

                if (noticeIndex !== -1) {
                  updatedNotices.splice(noticeIndex, 1, {
                    notice: notice,
                    holderCallback: holderCallback
                  });
                } else {
                  if (maxCount && notices.length >= maxCount) {
                    // XXX, use key of first item to update new added (let React to move exsiting
                    // instead of remove and mount). Same key was used before for both a) external
                    // manual control and b) internal react 'key' prop , which is not that good.
                    // eslint-disable-next-line no-param-reassign
                    // zombieJ: Not know why use `updateKey`. This makes Notice infinite loop in jest.
                    // Change to `updateMark` for compare instead.
                    // https://github.com/react-component/notification/commit/32299e6be396f94040bfa82517eea940db947ece
                    notice.key = updatedNotices[0].notice.key;
                    notice.updateMark = getUuid(); // zombieJ: That's why. User may close by key directly.
                    // We need record this but not re-render to avoid upper issue
                    // https://github.com/react-component/notification/issues/129

                    notice.userPassKey = key;
                    updatedNotices.shift();
                  }

                  updatedNotices.push({
                    notice: notice,
                    holderCallback: holderCallback
                  });
                }

                return {
                  notices: updatedNotices
                };
              });
            };

            _this.remove = function (removeKey) {
              _this.setState(function (_ref) {
                var notices = _ref.notices;
                return {
                  notices: notices.filter(function (_ref2) {
                    var _ref2$notice = _ref2.notice,
                        key = _ref2$notice.key,
                        userPassKey = _ref2$notice.userPassKey;
                    var mergedKey = userPassKey !== null && userPassKey !== void 0 ? userPassKey : key;
                    return mergedKey !== removeKey;
                  })
                };
              });
            };

            _this.noticePropsMap = {};
            return _this;
          }

          (0, _createClass2.default)(Notification, [{
            key: "getTransitionName",
            value: function getTransitionName() {
              var _this$props = this.props,
                  prefixCls = _this$props.prefixCls,
                  animation = _this$props.animation;
              var transitionName = this.props.transitionName;

              if (!transitionName && animation) {
                transitionName = "".concat(prefixCls, "-").concat(animation);
              }

              return transitionName;
            }
          }, {
            key: "render",
            value: function render() {
              var _this2 = this;

              var notices = this.state.notices;
              var _this$props2 = this.props,
                  prefixCls = _this$props2.prefixCls,
                  className = _this$props2.className,
                  closeIcon = _this$props2.closeIcon,
                  style = _this$props2.style;
              var noticeKeys = [];
              notices.forEach(function (_ref3, index) {
                var notice = _ref3.notice,
                    holderCallback = _ref3.holderCallback;
                var updateMark = index === notices.length - 1 ? notice.updateMark : undefined;
                var key = notice.key,
                    userPassKey = notice.userPassKey;
                var noticeProps = (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({
                  prefixCls: prefixCls,
                  closeIcon: closeIcon
                }, notice), notice.props), {}, {
                  key: key,
                  noticeKey: userPassKey || key,
                  updateMark: updateMark,
                  onClose: function onClose(noticeKey) {
                    var _notice$onClose;

                    _this2.remove(noticeKey);

                    (_notice$onClose = notice.onClose) === null || _notice$onClose === void 0 ? void 0 : _notice$onClose.call(notice);
                  },
                  onClick: notice.onClick,
                  children: notice.content
                }); // Give to motion

                noticeKeys.push(key);
                _this2.noticePropsMap[key] = {
                  props: noticeProps,
                  holderCallback: holderCallback
                };
              });
              return /*#__PURE__*/React.createElement("div", {
                className: (0, _classnames.default)(prefixCls, className),
                style: style
              }, /*#__PURE__*/React.createElement(_rcMotion.CSSMotionList, {
                keys: noticeKeys,
                motionName: this.getTransitionName(),
                onVisibleChanged: function onVisibleChanged(changedVisible, _ref4) {
                  var key = _ref4.key;

                  if (!changedVisible) {
                    delete _this2.noticePropsMap[key];
                  }
                }
              }, function (_ref5) {
                var key = _ref5.key,
                    motionClassName = _ref5.className,
                    motionStyle = _ref5.style,
                    visible = _ref5.visible;
                var _this2$noticePropsMap = _this2.noticePropsMap[key],
                    noticeProps = _this2$noticePropsMap.props,
                    holderCallback = _this2$noticePropsMap.holderCallback;

                if (holderCallback) {
                  return /*#__PURE__*/React.createElement("div", {
                    key: key,
                    className: (0, _classnames.default)(motionClassName, "".concat(prefixCls, "-hook-holder")),
                    style: (0, _objectSpread2.default)({}, motionStyle),
                    ref: function ref(div) {
                      if (typeof key === 'undefined') {
                        return;
                      }

                      if (div) {
                        _this2.hookRefs.set(key, div);

                        holderCallback(div, noticeProps);
                      } else {
                        _this2.hookRefs.delete(key);
                      }
                    }
                  });
                }

                return /*#__PURE__*/React.createElement(_Notice.default, (0, _extends2.default)({}, noticeProps, {
                  className: (0, _classnames.default)(motionClassName, noticeProps === null || noticeProps === void 0 ? void 0 : noticeProps.className),
                  style: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, motionStyle), noticeProps === null || noticeProps === void 0 ? void 0 : noticeProps.style),
                  visible: visible
                }));
              }));
            }
          }]);
          return Notification;
        }(React.Component);

        Notification.newInstance = void 0;
        Notification.defaultProps = {
          prefixCls: 'rc-notification',
          animation: 'fade',
          style: {
            top: 65,
            left: '50%'
          }
        };

        Notification.newInstance = function newNotificationInstance(properties, callback) {
          var _ref6 = properties || {},
              getContainer = _ref6.getContainer,
              props = (0, _objectWithoutProperties2.default)(_ref6, _excluded);

          var div = document.createElement('div');

          if (getContainer) {
            var root = getContainer();
            root.appendChild(div);
          } else {
            document.body.appendChild(div);
          }

          var called = false;

          function ref(notification) {
            if (called) {
              return;
            }

            called = true;
            callback({
              notice: function notice(noticeProps) {
                notification.add(noticeProps);
              },
              removeNotice: function removeNotice(key) {
                notification.remove(key);
              },
              component: notification,
              destroy: function destroy() {
                (0, _render.unmount)(div);

                if (div.parentNode) {
                  div.parentNode.removeChild(div);
                }
              },
              // Hooks
              useNotification: function useNotification() {
                return (0, _useNotification2.default)(notification);
              }
            });
          } // Only used for test case usage


          if (process.env.NODE_ENV === 'test' && properties.TEST_RENDER) {
            properties.TEST_RENDER( /*#__PURE__*/React.createElement(Notification, (0, _extends2.default)({}, props, {
              ref: ref
            })));
            return;
          }

          (0, _render.render)( /*#__PURE__*/React.createElement(Notification, (0, _extends2.default)({}, props, {
            ref: ref
          })), div);
        };

        var _default = Notification;
        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/objectWithoutProperties': _req1,
        '@babel/runtime/helpers/extends': _req2,
        '@babel/runtime/helpers/objectSpread2': _req3,
        '@babel/runtime/helpers/classCallCheck': _req4,
        '@babel/runtime/helpers/createClass': _req5,
        '@babel/runtime/helpers/inherits': _req6,
        '@babel/runtime/helpers/createSuper': _req7,
        'react': _req8,
        'rc-util/lib/React/render': _req9,
        'classnames': _req10,
        'rc-motion': _req11,
        './Notice': _req12,
        './useNotification': _req13
      }));
    }
  };
});
//# sourceMappingURL=c95cbb4043f53e0defd412182ba336b962d36baf.js.map