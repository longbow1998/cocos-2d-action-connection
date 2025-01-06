System.register(["__unresolved_0", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/objectSpread2", "@babel/runtime/helpers/objectWithoutProperties", "rc-util/lib/warning"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _cjsExports, ___esModule, _INTERNAL_COL_DEFINE, _getExpandableProps, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_babelRuntimeHelpersInteropRequireDefault) {
      _req = _babelRuntimeHelpersInteropRequireDefault.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectSpread) {
      _req0 = _babelRuntimeHelpersObjectSpread.__cjsMetaURL;
    }, function (_babelRuntimeHelpersObjectWithoutProperties) {
      _req1 = _babelRuntimeHelpersObjectWithoutProperties.__cjsMetaURL;
    }, function (_rcUtilLibWarning) {
      _req2 = _rcUtilLibWarning.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.INTERNAL_COL_DEFINE = void 0;
        exports.getExpandableProps = getExpandableProps;

        var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

        var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

        var _warning = _interopRequireDefault(require("rc-util/lib/warning"));

        var _excluded = ["expandable"];
        var INTERNAL_COL_DEFINE = 'RC_TABLE_INTERNAL_COL_DEFINE';
        exports.INTERNAL_COL_DEFINE = INTERNAL_COL_DEFINE;

        function getExpandableProps(props) {
          var expandable = props.expandable,
              legacyExpandableConfig = (0, _objectWithoutProperties2.default)(props, _excluded);
          var config;

          if ('expandable' in props) {
            config = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, legacyExpandableConfig), expandable);
          } else {
            if (process.env.NODE_ENV !== 'production' && ['indentSize', 'expandedRowKeys', 'defaultExpandedRowKeys', 'defaultExpandAllRows', 'expandedRowRender', 'expandRowByClick', 'expandIcon', 'onExpand', 'onExpandedRowsChange', 'expandedRowClassName', 'expandIconColumnIndex', 'showExpandColumn'].some(function (prop) {
              return prop in props;
            })) {
              (0, _warning.default)(false, 'expanded related props have been moved into `expandable`.');
            }

            config = legacyExpandableConfig;
          }

          if (config.showExpandColumn === false) {
            config.expandIconColumnIndex = -1;
          }

          return config;
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);

        ___esModule = module.exports.__esModule;
        _INTERNAL_COL_DEFINE = module.exports.INTERNAL_COL_DEFINE;
        _getExpandableProps = module.exports.getExpandableProps;
      }, () => ({
        '@babel/runtime/helpers/interopRequireDefault': _req,
        '@babel/runtime/helpers/objectSpread2': _req0,
        '@babel/runtime/helpers/objectWithoutProperties': _req1,
        'rc-util/lib/warning': _req2
      }));
    }
  };
});
//# sourceMappingURL=8ff47332e7dc88b0e65bd673eaf6b3dbcc872cd7.js.map