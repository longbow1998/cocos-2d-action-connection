System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/slicedToArray", "classnames", "rc-dropdown", "rc-menu", "rc-util/lib/KeyCode", "react", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _cjsExports, ___esModule, _default0, __cjsMetaURL;

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
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req2 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_classnames2) {
      _req3 = _classnames2.__cjsMetaURL;
    }, function (_rcDropdown2) {
      _req4 = _rcDropdown2.__cjsMetaURL;
    }, function (_rcMenu2) {
      _req5 = _rcMenu2.__cjsMetaURL;
    }, function (_rcUtilLibKeyCode) {
      _req6 = _rcUtilLibKeyCode.__cjsMetaURL;
    }, function (_react) {
      _req7 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req8 = _unresolved_2.__cjsMetaURL;
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

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _rcDropdown = _interopRequireDefault(require("rc-dropdown"));

        var _rcMenu = _interopRequireWildcard(require("rc-menu"));

        var _KeyCode = _interopRequireDefault(require("rc-util/lib/KeyCode"));

        var React = _interopRequireWildcard(require("react"));

        var _AddButton = _interopRequireDefault(require("./AddButton"));

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

        function OperationNode(_ref, ref) {
          var prefixCls = _ref.prefixCls,
              id = _ref.id,
              tabs = _ref.tabs,
              locale = _ref.locale,
              mobile = _ref.mobile,
              _ref$moreIcon = _ref.moreIcon,
              moreIcon = _ref$moreIcon === void 0 ? 'More' : _ref$moreIcon,
              moreTransitionName = _ref.moreTransitionName,
              style = _ref.style,
              className = _ref.className,
              editable = _ref.editable,
              tabBarGutter = _ref.tabBarGutter,
              rtl = _ref.rtl,
              removeAriaLabel = _ref.removeAriaLabel,
              onTabClick = _ref.onTabClick,
              getPopupContainer = _ref.getPopupContainer,
              popupClassName = _ref.popupClassName; // ======================== Dropdown ========================

          var _useState = (0, React.useState)(false),
              _useState2 = (0, _slicedToArray2.default)(_useState, 2),
              open = _useState2[0],
              setOpen = _useState2[1];

          var _useState3 = (0, React.useState)(null),
              _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
              selectedKey = _useState4[0],
              setSelectedKey = _useState4[1];

          var popupId = "".concat(id, "-more-popup");
          var dropdownPrefix = "".concat(prefixCls, "-dropdown");
          var selectedItemId = selectedKey !== null ? "".concat(popupId, "-").concat(selectedKey) : null;
          var dropdownAriaLabel = locale === null || locale === void 0 ? void 0 : locale.dropdownAriaLabel;

          function onRemoveTab(event, key) {
            event.preventDefault();
            event.stopPropagation();
            editable.onEdit('remove', {
              key: key,
              event: event
            });
          }

          var menu = /*#__PURE__*/React.createElement(_rcMenu.default, {
            onClick: function onClick(_ref2) {
              var key = _ref2.key,
                  domEvent = _ref2.domEvent;
              onTabClick(key, domEvent);
              setOpen(false);
            },
            prefixCls: "".concat(dropdownPrefix, "-menu"),
            id: popupId,
            tabIndex: -1,
            role: "listbox",
            "aria-activedescendant": selectedItemId,
            selectedKeys: [selectedKey],
            "aria-label": dropdownAriaLabel !== undefined ? dropdownAriaLabel : 'expanded dropdown'
          }, tabs.map(function (tab) {
            var removable = editable && tab.closable !== false && !tab.disabled;
            return /*#__PURE__*/React.createElement(_rcMenu.MenuItem, {
              key: tab.key,
              id: "".concat(popupId, "-").concat(tab.key),
              role: "option",
              "aria-controls": id && "".concat(id, "-panel-").concat(tab.key),
              disabled: tab.disabled
            }, /*#__PURE__*/React.createElement("span", null, tab.label), removable && /*#__PURE__*/React.createElement("button", {
              type: "button",
              "aria-label": removeAriaLabel || 'remove',
              tabIndex: 0,
              className: "".concat(dropdownPrefix, "-menu-item-remove"),
              onClick: function onClick(e) {
                e.stopPropagation();
                onRemoveTab(e, tab.key);
              }
            }, tab.closeIcon || editable.removeIcon || '×'));
          }));

          function selectOffset(offset) {
            var enabledTabs = tabs.filter(function (tab) {
              return !tab.disabled;
            });
            var selectedIndex = enabledTabs.findIndex(function (tab) {
              return tab.key === selectedKey;
            }) || 0;
            var len = enabledTabs.length;

            for (var i = 0; i < len; i += 1) {
              selectedIndex = (selectedIndex + offset + len) % len;
              var tab = enabledTabs[selectedIndex];

              if (!tab.disabled) {
                setSelectedKey(tab.key);
                return;
              }
            }
          }

          function onKeyDown(e) {
            var which = e.which;

            if (!open) {
              if ([_KeyCode.default.DOWN, _KeyCode.default.SPACE, _KeyCode.default.ENTER].includes(which)) {
                setOpen(true);
                e.preventDefault();
              }

              return;
            }

            switch (which) {
              case _KeyCode.default.UP:
                selectOffset(-1);
                e.preventDefault();
                break;

              case _KeyCode.default.DOWN:
                selectOffset(1);
                e.preventDefault();
                break;

              case _KeyCode.default.ESC:
                setOpen(false);
                break;

              case _KeyCode.default.SPACE:
              case _KeyCode.default.ENTER:
                if (selectedKey !== null) onTabClick(selectedKey, e);
                break;
            }
          } // ========================= Effect =========================


          (0, React.useEffect)(function () {
            // We use query element here to avoid React strict warning
            var ele = document.getElementById(selectedItemId);

            if (ele && ele.scrollIntoView) {
              ele.scrollIntoView(false);
            }
          }, [selectedKey]);
          (0, React.useEffect)(function () {
            if (!open) {
              setSelectedKey(null);
            }
          }, [open]); // ========================= Render =========================

          var moreStyle = (0, _defineProperty2.default)({}, rtl ? 'marginRight' : 'marginLeft', tabBarGutter);

          if (!tabs.length) {
            moreStyle.visibility = 'hidden';
            moreStyle.order = 1;
          }

          var overlayClassName = (0, _classnames.default)((0, _defineProperty2.default)({}, "".concat(dropdownPrefix, "-rtl"), rtl));
          var moreNode = mobile ? null : /*#__PURE__*/React.createElement(_rcDropdown.default, {
            prefixCls: dropdownPrefix,
            overlay: menu,
            trigger: ['hover'],
            visible: tabs.length ? open : false,
            transitionName: moreTransitionName,
            onVisibleChange: setOpen,
            overlayClassName: (0, _classnames.default)(overlayClassName, popupClassName),
            mouseEnterDelay: 0.1,
            mouseLeaveDelay: 0.1,
            getPopupContainer: getPopupContainer
          }, /*#__PURE__*/React.createElement("button", {
            type: "button",
            className: "".concat(prefixCls, "-nav-more"),
            style: moreStyle,
            tabIndex: -1,
            "aria-hidden": "true",
            "aria-haspopup": "listbox",
            "aria-controls": popupId,
            id: "".concat(id, "-more"),
            "aria-expanded": open,
            onKeyDown: onKeyDown
          }, moreIcon));
          return /*#__PURE__*/React.createElement("div", {
            className: (0, _classnames.default)("".concat(prefixCls, "-nav-operations"), className),
            style: style,
            ref: ref
          }, moreNode, /*#__PURE__*/React.createElement(_AddButton.default, {
            prefixCls: prefixCls,
            locale: locale,
            editable: editable
          }));
        }

        var _default = /*#__PURE__*/React.memo( /*#__PURE__*/React.forwardRef(OperationNode), function (_, next) {
          return (// https://github.com/ant-design/ant-design/issues/32544
            // We'd better remove syntactic sugar in `rc-menu` since this has perf issue
            next.tabMoving
          );
        });

        exports.default = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/typeof': _req0,
        '@babel/runtime/helpers/defineProperty': _req1,
        '@babel/runtime/helpers/slicedToArray': _req2,
        'classnames': _req3,
        'rc-dropdown': _req4,
        'rc-menu': _req5,
        'rc-util/lib/KeyCode': _req6,
        'react': _req7,
        './AddButton': _req8
      }));
    }
  };
});
//# sourceMappingURL=525d5ebcb74d7b22cb5c48c9ad6df6107a0750cc.js.map