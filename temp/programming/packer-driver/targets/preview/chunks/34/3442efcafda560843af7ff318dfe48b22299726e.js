System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireWildcard", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/toConsumableArray", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/slicedToArray", "@babel/runtime/helpers/extends", "@ant-design/icons/FileTwoTone", "@ant-design/icons/LoadingOutlined", "@ant-design/icons/PaperClipOutlined", "@ant-design/icons/PictureTwoTone", "classnames", "rc-motion", "react", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _req3, _req4, _req5, _req6, _req7, _req8, _req9, _req10, _req11, _req12, _req13, _req14, _req15, _req16, _req17, _req18, _cjsExports, ___esModule, _default0, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireWildcard) {
      _req = _babelRuntimeHelpersInteropRequireWildcard.__cjsMetaURL;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req0 = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersToConsumableArray) {
      _req1 = _babelRuntimeHelpersToConsumableArray.__cjsMetaURL;
    }, function (_babelRuntimeHelpersDefineProperty) {
      _req2 = _babelRuntimeHelpersDefineProperty.__cjsMetaURL;
    }, function (_babelRuntimeHelpersSlicedToArray) {
      _req3 = _babelRuntimeHelpersSlicedToArray.__cjsMetaURL;
    }, function (_babelRuntimeHelpersExtends) {
      _req4 = _babelRuntimeHelpersExtends.__cjsMetaURL;
    }, function (_antDesignIconsFileTwoTone) {
      _req5 = _antDesignIconsFileTwoTone.__cjsMetaURL;
    }, function (_antDesignIconsLoadingOutlined) {
      _req6 = _antDesignIconsLoadingOutlined.__cjsMetaURL;
    }, function (_antDesignIconsPaperClipOutlined) {
      _req7 = _antDesignIconsPaperClipOutlined.__cjsMetaURL;
    }, function (_antDesignIconsPictureTwoTone) {
      _req8 = _antDesignIconsPictureTwoTone.__cjsMetaURL;
    }, function (_classnames2) {
      _req9 = _classnames2.__cjsMetaURL;
    }, function (_rcMotion2) {
      _req10 = _rcMotion2.__cjsMetaURL;
    }, function (_react) {
      _req11 = _react.__cjsMetaURL;
    }, function (_unresolved_2) {
      _req12 = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req13 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req14 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req15 = _unresolved_5.__cjsMetaURL;
    }, function (_unresolved_6) {
      _req16 = _unresolved_6.__cjsMetaURL;
    }, function (_unresolved_7) {
      _req17 = _unresolved_7.__cjsMetaURL;
    }, function (_unresolved_8) {
      _req18 = _unresolved_8.__cjsMetaURL;
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

        var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

        var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

        var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

        var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

        var _FileTwoTone = _interopRequireDefault(require("@ant-design/icons/FileTwoTone"));

        var _LoadingOutlined = _interopRequireDefault(require("@ant-design/icons/LoadingOutlined"));

        var _PaperClipOutlined = _interopRequireDefault(require("@ant-design/icons/PaperClipOutlined"));

        var _PictureTwoTone = _interopRequireDefault(require("@ant-design/icons/PictureTwoTone"));

        var _classnames = _interopRequireDefault(require("classnames"));

        var _rcMotion = _interopRequireWildcard(require("rc-motion"));

        var React = _interopRequireWildcard(require("react"));

        var _button = _interopRequireDefault(require("../../button"));

        var _configProvider = require("../../config-provider");

        var _useForceUpdate = _interopRequireDefault(require("../../_util/hooks/useForceUpdate"));

        var _motion = _interopRequireDefault(require("../../_util/motion"));

        var _reactNode = require("../../_util/reactNode");

        var _utils = require("../utils");

        var _ListItem = _interopRequireDefault(require("./ListItem"));

        var listItemMotion = (0, _extends2["default"])({}, _motion["default"]);
        delete listItemMotion.onAppearEnd;
        delete listItemMotion.onEnterEnd;
        delete listItemMotion.onLeaveEnd;

        var InternalUploadList = function InternalUploadList(props, ref) {
          var _classNames;

          var _props$listType = props.listType,
              listType = _props$listType === void 0 ? 'text' : _props$listType,
              _props$previewFile = props.previewFile,
              previewFile = _props$previewFile === void 0 ? _utils.previewImage : _props$previewFile,
              onPreview = props.onPreview,
              onDownload = props.onDownload,
              onRemove = props.onRemove,
              locale = props.locale,
              iconRender = props.iconRender,
              _props$isImageUrl = props.isImageUrl,
              isImgUrl = _props$isImageUrl === void 0 ? _utils.isImageUrl : _props$isImageUrl,
              customizePrefixCls = props.prefixCls,
              _props$items = props.items,
              items = _props$items === void 0 ? [] : _props$items,
              _props$showPreviewIco = props.showPreviewIcon,
              showPreviewIcon = _props$showPreviewIco === void 0 ? true : _props$showPreviewIco,
              _props$showRemoveIcon = props.showRemoveIcon,
              showRemoveIcon = _props$showRemoveIcon === void 0 ? true : _props$showRemoveIcon,
              _props$showDownloadIc = props.showDownloadIcon,
              showDownloadIcon = _props$showDownloadIc === void 0 ? false : _props$showDownloadIc,
              removeIcon = props.removeIcon,
              previewIcon = props.previewIcon,
              downloadIcon = props.downloadIcon,
              _props$progress = props.progress,
              progress = _props$progress === void 0 ? {
            strokeWidth: 2,
            showInfo: false
          } : _props$progress,
              appendAction = props.appendAction,
              _props$appendActionVi = props.appendActionVisible,
              appendActionVisible = _props$appendActionVi === void 0 ? true : _props$appendActionVi,
              itemRender = props.itemRender;
          var forceUpdate = (0, _useForceUpdate["default"])();

          var _React$useState = React.useState(false),
              _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
              motionAppear = _React$useState2[0],
              setMotionAppear = _React$useState2[1]; // ============================= Effect =============================


          React.useEffect(function () {
            if (listType !== 'picture' && listType !== 'picture-card') {
              return;
            }

            (items || []).forEach(function (file) {
              if (typeof document === 'undefined' || typeof window === 'undefined' || !window.FileReader || !window.File || !(file.originFileObj instanceof File || file.originFileObj instanceof Blob) || file.thumbUrl !== undefined) {
                return;
              }

              file.thumbUrl = '';

              if (previewFile) {
                previewFile(file.originFileObj).then(function (previewDataUrl) {
                  // Need append '' to avoid dead loop
                  file.thumbUrl = previewDataUrl || '';
                  forceUpdate();
                });
              }
            });
          }, [listType, items, previewFile]);
          React.useEffect(function () {
            setMotionAppear(true);
          }, []); // ============================= Events =============================

          var onInternalPreview = function onInternalPreview(file, e) {
            if (!onPreview) {
              return;
            }

            e === null || e === void 0 ? void 0 : e.preventDefault();
            return onPreview(file);
          };

          var onInternalDownload = function onInternalDownload(file) {
            if (typeof onDownload === 'function') {
              onDownload(file);
            } else if (file.url) {
              window.open(file.url);
            }
          };

          var onInternalClose = function onInternalClose(file) {
            onRemove === null || onRemove === void 0 ? void 0 : onRemove(file);
          };

          var internalIconRender = function internalIconRender(file) {
            if (iconRender) {
              return iconRender(file, listType);
            }

            var isLoading = file.status === 'uploading';
            var fileIcon = isImgUrl && isImgUrl(file) ? /*#__PURE__*/React.createElement(_PictureTwoTone["default"], null) : /*#__PURE__*/React.createElement(_FileTwoTone["default"], null);
            var icon = isLoading ? /*#__PURE__*/React.createElement(_LoadingOutlined["default"], null) : /*#__PURE__*/React.createElement(_PaperClipOutlined["default"], null);

            if (listType === 'picture') {
              icon = isLoading ? /*#__PURE__*/React.createElement(_LoadingOutlined["default"], null) : fileIcon;
            } else if (listType === 'picture-card') {
              icon = isLoading ? locale.uploading : fileIcon;
            }

            return icon;
          };

          var actionIconRender = function actionIconRender(customIcon, callback, prefixCls, title) {
            var btnProps = {
              type: 'text',
              size: 'small',
              title: title,
              onClick: function onClick(e) {
                callback();

                if ((0, _reactNode.isValidElement)(customIcon) && customIcon.props.onClick) {
                  customIcon.props.onClick(e);
                }
              },
              className: "".concat(prefixCls, "-list-item-card-actions-btn")
            };

            if ((0, _reactNode.isValidElement)(customIcon)) {
              var btnIcon = (0, _reactNode.cloneElement)(customIcon, (0, _extends2["default"])((0, _extends2["default"])({}, customIcon.props), {
                onClick: function onClick() {}
              }));
              return /*#__PURE__*/React.createElement(_button["default"], (0, _extends2["default"])({}, btnProps, {
                icon: btnIcon
              }));
            }

            return /*#__PURE__*/React.createElement(_button["default"], (0, _extends2["default"])({}, btnProps), /*#__PURE__*/React.createElement("span", null, customIcon));
          }; // ============================== Ref ===============================
          // Test needs


          React.useImperativeHandle(ref, function () {
            return {
              handlePreview: onInternalPreview,
              handleDownload: onInternalDownload
            };
          });

          var _React$useContext = React.useContext(_configProvider.ConfigContext),
              getPrefixCls = _React$useContext.getPrefixCls,
              direction = _React$useContext.direction; // ============================= Render =============================


          var prefixCls = getPrefixCls('upload', customizePrefixCls);
          var listClassNames = (0, _classnames["default"])((_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-list"), true), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-list-").concat(listType), true), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-list-rtl"), direction === 'rtl'), _classNames)); // >>> Motion config

          var motionKeyList = (0, _toConsumableArray2["default"])(items.map(function (file) {
            return {
              key: file.uid,
              file: file
            };
          }));
          var animationDirection = listType === 'picture-card' ? 'animate-inline' : 'animate'; // const transitionName = list.length === 0 ? '' : `${prefixCls}-${animationDirection}`;

          var motionConfig = {
            motionDeadline: 2000,
            motionName: "".concat(prefixCls, "-").concat(animationDirection),
            keys: motionKeyList,
            motionAppear: motionAppear
          };

          if (listType !== 'picture-card') {
            motionConfig = (0, _extends2["default"])((0, _extends2["default"])({}, listItemMotion), motionConfig);
          }

          return /*#__PURE__*/React.createElement("div", {
            className: listClassNames
          }, /*#__PURE__*/React.createElement(_rcMotion.CSSMotionList, (0, _extends2["default"])({}, motionConfig, {
            component: false
          }), function (_ref) {
            var key = _ref.key,
                file = _ref.file,
                motionClassName = _ref.className,
                motionStyle = _ref.style;
            return /*#__PURE__*/React.createElement(_ListItem["default"], {
              key: key,
              locale: locale,
              prefixCls: prefixCls,
              className: motionClassName,
              style: motionStyle,
              file: file,
              items: items,
              progress: progress,
              listType: listType,
              isImgUrl: isImgUrl,
              showPreviewIcon: showPreviewIcon,
              showRemoveIcon: showRemoveIcon,
              showDownloadIcon: showDownloadIcon,
              removeIcon: removeIcon,
              previewIcon: previewIcon,
              downloadIcon: downloadIcon,
              iconRender: internalIconRender,
              actionIconRender: actionIconRender,
              itemRender: itemRender,
              onPreview: onInternalPreview,
              onDownload: onInternalDownload,
              onClose: onInternalClose
            });
          }), appendAction && /*#__PURE__*/React.createElement(_rcMotion["default"], (0, _extends2["default"])({}, motionConfig, {
            visible: appendActionVisible,
            forceRender: true
          }), function (_ref2) {
            var motionClassName = _ref2.className,
                motionStyle = _ref2.style;
            return (0, _reactNode.cloneElement)(appendAction, function (oriProps) {
              return {
                className: (0, _classnames["default"])(oriProps.className, motionClassName),
                style: (0, _extends2["default"])((0, _extends2["default"])((0, _extends2["default"])({}, motionStyle), {
                  // prevent the element has hover css pseudo-class that may cause animation to end prematurely.
                  pointerEvents: motionClassName ? 'none' : undefined
                }), oriProps.style)
              };
            });
          }));
        };

        var UploadList = /*#__PURE__*/React.forwardRef(InternalUploadList);

        if (process.env.NODE_ENV !== 'production') {
          UploadList.displayName = 'UploadList';
        }

        var _default = UploadList;
        exports["default"] = _default; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _default0 = module.exports.default;
      }, () => ({
        '@babel/runtime/helpers/interopRequireWildcard': _req,
        '@babel/runtime/helpers/interopRequireDefault': _req0,
        '@babel/runtime/helpers/toConsumableArray': _req1,
        '@babel/runtime/helpers/defineProperty': _req2,
        '@babel/runtime/helpers/slicedToArray': _req3,
        '@babel/runtime/helpers/extends': _req4,
        '@ant-design/icons/FileTwoTone': _req5,
        '@ant-design/icons/LoadingOutlined': _req6,
        '@ant-design/icons/PaperClipOutlined': _req7,
        '@ant-design/icons/PictureTwoTone': _req8,
        'classnames': _req9,
        'rc-motion': _req10,
        'react': _req11,
        '../../button': _req12,
        '../../config-provider': _req13,
        '../../_util/hooks/useForceUpdate': _req14,
        '../../_util/motion': _req15,
        '../../_util/reactNode': _req16,
        '../utils': _req17,
        './ListItem': _req18
      }));
    }
  };
});
//# sourceMappingURL=3442efcafda560843af7ff318dfe48b22299726e.js.map