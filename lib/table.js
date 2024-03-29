module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(305);


/***/ },

/***/ 3:
/***/ function(module, exports) {

	/* globals __VUE_SSR_CONTEXT__ */

	// this module is a runtime utility for cleaner component module output and will
	// be included in the final webpack user bundle

	module.exports = function normalizeComponent (
	  rawScriptExports,
	  compiledTemplate,
	  injectStyles,
	  scopeId,
	  moduleIdentifier /* server only */
	) {
	  var esModule
	  var scriptExports = rawScriptExports = rawScriptExports || {}

	  // ES6 modules interop
	  var type = typeof rawScriptExports.default
	  if (type === 'object' || type === 'function') {
	    esModule = rawScriptExports
	    scriptExports = rawScriptExports.default
	  }

	  // Vue.extend constructor export interop
	  var options = typeof scriptExports === 'function'
	    ? scriptExports.options
	    : scriptExports

	  // render functions
	  if (compiledTemplate) {
	    options.render = compiledTemplate.render
	    options.staticRenderFns = compiledTemplate.staticRenderFns
	  }

	  // scopedId
	  if (scopeId) {
	    options._scopeId = scopeId
	  }

	  var hook
	  if (moduleIdentifier) { // server build
	    hook = function (context) {
	      // 2.3 injection
	      context = context || (this.$vnode && this.$vnode.ssrContext)
	      // 2.2 with runInNewContext: true
	      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
	        context = __VUE_SSR_CONTEXT__
	      }
	      // inject component styles
	      if (injectStyles) {
	        injectStyles.call(this, context)
	      }
	      // register component module identifier for async chunk inferrence
	      if (context && context._registeredComponents) {
	        context._registeredComponents.add(moduleIdentifier)
	      }
	    }
	    // used by ssr in case component is cached and beforeCreate
	    // never gets called
	    options._ssrRegister = hook
	  } else if (injectStyles) {
	    hook = injectStyles
	  }

	  if (hook) {
	    // inject component registration as beforeCreate hook
	    var existing = options.beforeCreate
	    options.beforeCreate = existing
	      ? [].concat(existing, hook)
	      : [hook]
	  }

	  return {
	    esModule: esModule,
	    exports: scriptExports,
	    options: options
	  }
	}


/***/ },

/***/ 10:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/utils/clickoutside");

/***/ },

/***/ 13:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/utils/vue-popper");

/***/ },

/***/ 45:
/***/ function(module, exports) {

	module.exports = require("throttle-debounce/throttle");

/***/ },

/***/ 46:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/utils/resize-event");

/***/ },

/***/ 55:
/***/ function(module, exports) {

	module.exports = require("vue");

/***/ },

/***/ 61:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/mixins/locale");

/***/ },

/***/ 63:
/***/ function(module, exports) {

	module.exports = require("throttle-debounce/debounce");

/***/ },

/***/ 123:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/utils/dom");

/***/ },

/***/ 138:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/utils/popup");

/***/ },

/***/ 190:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/tooltip");

/***/ },

/***/ 220:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/utils/util");

/***/ },

/***/ 262:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/utils/scrollbar-width");

/***/ },

/***/ 271:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/tag");

/***/ },

/***/ 305:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _table = __webpack_require__(306);

	var _table2 = _interopRequireDefault(_table);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* istanbul ignore next */
	_table2.default.install = function (Vue) {
	  Vue.component(_table2.default.name, _table2.default);
	};

	exports.default = _table2.default;

/***/ },

/***/ 306:
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(307),
	  /* template */
	  __webpack_require__(324),
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)

	module.exports = Component.exports


/***/ },

/***/ 307:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _checkbox = __webpack_require__(308);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	var _throttle = __webpack_require__(45);

	var _throttle2 = _interopRequireDefault(_throttle);

	var _debounce = __webpack_require__(63);

	var _debounce2 = _interopRequireDefault(_debounce);

	var _resizeEvent = __webpack_require__(46);

	var _mousewheel = __webpack_require__(309);

	var _mousewheel2 = _interopRequireDefault(_mousewheel);

	var _locale = __webpack_require__(61);

	var _locale2 = _interopRequireDefault(_locale);

	var _tableStore = __webpack_require__(311);

	var _tableStore2 = _interopRequireDefault(_tableStore);

	var _tableLayout = __webpack_require__(314);

	var _tableLayout2 = _interopRequireDefault(_tableLayout);

	var _tableBody = __webpack_require__(315);

	var _tableBody2 = _interopRequireDefault(_tableBody);

	var _tableHeader = __webpack_require__(317);

	var _tableHeader2 = _interopRequireDefault(_tableHeader);

	var _tableFooter = __webpack_require__(323);

	var _tableFooter2 = _interopRequireDefault(_tableFooter);

	var _util = __webpack_require__(312);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var tableIdSeed = 1;

	exports.default = {
	  name: 'ElTable',

	  mixins: [_locale2.default],

	  directives: {
	    Mousewheel: _mousewheel2.default
	  },

	  props: {
	    data: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },

	    width: [String, Number],

	    height: [String, Number],

	    maxHeight: [String, Number],

	    fit: {
	      type: Boolean,
	      default: true
	    },

	    stripe: Boolean,

	    border: Boolean,

	    rowKey: [String, Function],

	    context: {},

	    showHeader: {
	      type: Boolean,
	      default: true
	    },

	    showSummary: Boolean,

	    sumText: String,

	    summaryMethod: Function,

	    rowClassName: [String, Function],

	    rowStyle: [Object, Function],

	    highlightCurrentRow: Boolean,

	    currentRowKey: [String, Number],

	    emptyText: String,

	    expandRowKeys: Array,

	    defaultExpandAll: Boolean,

	    defaultSort: Object,

	    tooltipEffect: String,

	    spanMethod: Function,

	    optimize: [Boolean, Object], // 开启懒加载优化

	    rowHeight: Number, // 添加此属性设置行高

	    rowLineNumber: Number, // 添加此属性设置行显示样式

	    columnWidth: Number // 添加此属性设置列宽
	  },

	  components: {
	    TableHeader: _tableHeader2.default,
	    TableFooter: _tableFooter2.default,
	    TableBody: _tableBody2.default,
	    ElCheckbox: _checkbox2.default
	  },

	  methods: {
	    setCurrentRow: function setCurrentRow(row) {
	      this.store.commit('setCurrentRow', row);
	    },
	    toggleRowSelection: function toggleRowSelection(row, selected) {
	      this.store.toggleRowSelection(row, selected);
	      this.store.updateAllSelected();
	    },
	    clearSelection: function clearSelection() {
	      this.store.clearSelection();
	    },
	    handleMouseLeave: function handleMouseLeave() {
	      this.store.commit('setHoverRow', null);
	      if (this.hoverState) this.hoverState = null;
	    },
	    updateScrollY: function updateScrollY() {
	      this.layout.updateScrollY();
	    },
	    handleFixedMousewheel: function handleFixedMousewheel(event, data) {
	      var bodyWrapper = this.bodyWrapper;
	      if (Math.abs(data.spinY) > 0) {
	        var currentScrollTop = bodyWrapper.scrollTop;
	        if (data.pixelY < 0 && currentScrollTop !== 0) {
	          event.preventDefault();
	        }
	        if (data.pixelY > 0 && bodyWrapper.scrollHeight - bodyWrapper.clientHeight > currentScrollTop) {
	          event.preventDefault();
	        }
	        bodyWrapper.scrollTop += Math.ceil(data.pixelY / 5);
	      } else {
	        bodyWrapper.scrollLeft += Math.ceil(data.pixelX / 5);
	      }
	    },
	    handleHeaderFooterMousewheel: function handleHeaderFooterMousewheel(event, data) {
	      var pixelX = data.pixelX,
	          pixelY = data.pixelY;

	      if (Math.abs(pixelX) >= Math.abs(pixelY)) {
	        this.bodyWrapper.scrollLeft += data.pixelX / 5;
	      }
	    },
	    bindEvents: function bindEvents() {
	      var _this = this;

	      var _$refs = this.$refs,
	          headerWrapper = _$refs.headerWrapper,
	          footerWrapper = _$refs.footerWrapper;

	      var refs = this.$refs;
	      this.bodyWrapper.addEventListener('scroll', function () {
	        if (headerWrapper) headerWrapper.scrollLeft = this.scrollLeft;
	        if (footerWrapper) footerWrapper.scrollLeft = this.scrollLeft;
	        if (refs.fixedBodyWrapper) refs.fixedBodyWrapper.scrollTop = this.scrollTop;
	        if (refs.rightFixedBodyWrapper) refs.rightFixedBodyWrapper.scrollTop = this.scrollTop;
	      }, { passive: true });

	      var scrollBodyWrapper = function scrollBodyWrapper(event) {
	        var deltaX = event.deltaX,
	            deltaY = event.deltaY;


	        if (Math.abs(deltaX) < Math.abs(deltaY)) return;

	        if (deltaX > 0) {
	          _this.bodyWrapper.scrollLeft += 10;
	        } else if (deltaX < 0) {
	          _this.bodyWrapper.scrollLeft -= 10;
	        }
	      };
	      if (headerWrapper) {
	        (0, _util.mousewheel)(headerWrapper, (0, _throttle2.default)(16, scrollBodyWrapper));
	      }
	      if (footerWrapper) {
	        (0, _util.mousewheel)(footerWrapper, (0, _throttle2.default)(16, scrollBodyWrapper));
	      }

	      if (this.fit) {
	        this.windowResizeListener = (0, _throttle2.default)(50, function () {
	          if (_this.$ready) _this.doLayout();
	        });
	        (0, _resizeEvent.addResizeListener)(this.$el, this.windowResizeListener);
	      }
	    },
	    doLayout: function doLayout() {
	      var _this2 = this;

	      this.store.updateColumns();
	      this.layout.update();
	      this.updateScrollY();
	      this.$nextTick(function () {
	        if (_this2.height) {
	          _this2.layout.setHeight(_this2.height);
	        } else if (_this2.maxHeight) {
	          _this2.layout.setMaxHeight(_this2.maxHeight);
	        } else if (_this2.shouldUpdateHeight) {
	          _this2.layout.updateHeight();
	        }
	      });
	    }
	  },

	  created: function created() {
	    var _this3 = this;

	    this.tableId = 'el-table_' + tableIdSeed + '_';
	    this.debouncedLayout = (0, _debounce2.default)(50, function () {
	      return _this3.doLayout();
	    });
	  },


	  computed: {
	    optimizeX: function optimizeX() {
	      return this.optimize === true || this.optimize.column === true;
	    },
	    optimizeY: function optimizeY() {
	      return this.optimize === true || this.optimize.row === true;
	    },
	    bodyWrapper: function bodyWrapper() {
	      return this.$refs.bodyWrapper;
	    },
	    shouldUpdateHeight: function shouldUpdateHeight() {
	      return typeof this.height === 'number' || this.fixedColumns.length > 0 || this.rightFixedColumns.length > 0;
	    },
	    selection: function selection() {
	      return this.store.states.selection;
	    },
	    columns: function columns() {
	      return this.store.states.columns;
	    },
	    tableData: function tableData() {
	      return this.store.states.data;
	    },
	    fixedColumns: function fixedColumns() {
	      return this.store.states.fixedColumns;
	    },
	    rightFixedColumns: function rightFixedColumns() {
	      return this.store.states.rightFixedColumns;
	    },
	    bodyHeight: function bodyHeight() {
	      var style = {};

	      if (this.height) {
	        style = {
	          height: this.layout.bodyHeight ? this.layout.bodyHeight + 'px' : ''
	        };
	      } else if (this.maxHeight) {
	        style = {
	          'max-height': (this.showHeader ? this.maxHeight - this.layout.headerHeight - this.layout.footerHeight : this.maxHeight - this.layout.footerHeight) + 'px'
	        };
	      }
	      return style;
	    },
	    bodyWidth: function bodyWidth() {
	      var _layout = this.layout,
	          bodyWidth = _layout.bodyWidth,
	          scrollY = _layout.scrollY,
	          gutterWidth = _layout.gutterWidth;

	      return bodyWidth ? bodyWidth - (scrollY ? gutterWidth : 0) + 'px' : '';
	    },
	    headerBodyWidth: function headerBodyWidth() {
	      var _layout2 = this.layout,
	          bodyWidth = _layout2.bodyWidth,
	          scrollY = _layout2.scrollY,
	          gutterWidth = _layout2.gutterWidth;

	      if (this.optimizeY && this.rowHeight && this.scrollY) {
	        return bodyWidth - gutterWidth;
	      }
	      return bodyWidth;
	    },
	    fixedBodyHeight: function fixedBodyHeight() {
	      var style = {};

	      if (this.height) {
	        style = {
	          height: this.layout.fixedBodyHeight ? this.layout.fixedBodyHeight + 'px' : ''
	        };
	      } else if (this.maxHeight) {
	        var maxHeight = this.layout.scrollX ? this.maxHeight - this.layout.gutterWidth : this.maxHeight;

	        if (this.showHeader) {
	          maxHeight -= this.layout.headerHeight;
	        }

	        style = {
	          'max-height': maxHeight + 'px'
	        };
	      }

	      return style;
	    },
	    fixedHeight: function fixedHeight() {
	      var style = {};

	      if (this.maxHeight) {
	        style = {
	          bottom: this.layout.scrollX && this.data.length ? this.layout.gutterWidth + 'px' : ''
	        };
	      } else {
	        style = {
	          // height: this.layout.viewportHeight ? this.layout.viewportHeight - (this.data.length ? 0 : this.layout.gutterWidth) + 'px' : ''
	          // 如果配置列统计，且有滚动条情况，高度需要添加滚动条高度
	          height: this.layout.viewportHeight ? this.layout.viewportHeight - (this.data.length ? 0 : this.layout.gutterWidth && this.layout.scrollX ? this.layout.gutterWidth : 0) + (this.showSummary && this.layout.gutterWidth && this.layout.scrollX ? this.layout.gutterWidth : 0) + 'px' : ''
	        };
	      }
	      return style;
	    },
	    visibleRowCount: function visibleRowCount() {
	      if (this.rowHeight) {
	        return Math.ceil((this.height || this.maxHeight) / this.rowHeight);
	      }
	      return 0;
	    },
	    virtualBodyHeight: function virtualBodyHeight() {
	      return this.data.length * this.rowHeight;
	    },
	    virtualBodyWidth: function virtualBodyWidth() {
	      // this.store.states.columns.reduce((prev, cur) => {
	      //   return prev + (cur.realWidth || cur.width || cur.minWidth)
	      // }, 0)
	      return this.layout.bodyWidth;
	    }
	  },

	  watch: {
	    height: function height(value) {
	      this.layout.setHeight(value);
	    },
	    currentRowKey: function currentRowKey(newVal) {
	      this.store.setCurrentRowKey(newVal);
	    },


	    data: {
	      immediate: true,
	      handler: function handler(val) {
	        this.store.commit('setData', val);
	        if (this.$ready) this.doLayout();
	      }
	    },

	    expandRowKeys: function expandRowKeys(newVal) {
	      this.store.setExpandRowKeys(newVal);
	    }
	  },

	  destroyed: function destroyed() {
	    if (this.windowResizeListener) (0, _resizeEvent.removeResizeListener)(this.$el, this.windowResizeListener);
	  },
	  mounted: function mounted() {
	    var _this4 = this;

	    this.bindEvents();
	    this.doLayout();

	    // init filters
	    this.store.states.columns.forEach(function (column) {
	      if (column.filteredValue && column.filteredValue.length) {
	        _this4.store.commit('filterChange', {
	          column: column,
	          values: column.filteredValue,
	          silent: true
	        });
	      }
	    });
	    this.$ready = true;
	  },
	  data: function data() {
	    var store = new _tableStore2.default(this, {
	      rowKey: this.rowKey,
	      defaultExpandAll: this.defaultExpandAll
	    });
	    var layout = new _tableLayout2.default({
	      store: store,
	      table: this,
	      fit: this.fit,
	      showHeader: this.showHeader
	    });
	    return {
	      store: store,
	      layout: layout,
	      renderExpanded: null,
	      resizeProxyVisible: false
	    };
	  }
	};

/***/ },

/***/ 308:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/checkbox");

/***/ },

/***/ 309:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _normalizeWheel = __webpack_require__(310);

	var _normalizeWheel2 = _interopRequireDefault(_normalizeWheel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var isFirefox = typeof navigator !== 'undefined' && navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

	var mousewheel = function mousewheel(element, callback) {
	  if (element && element.addEventListener) {
	    element.addEventListener(isFirefox ? 'DOMMouseScroll' : 'mousewheel', function (event) {
	      var normalized = (0, _normalizeWheel2.default)(event);
	      callback && callback.apply(this, [event, normalized]);
	    });
	  }
	};

	exports.default = {
	  bind: function bind(el, binding) {
	    mousewheel(el, binding.value);
	  }
	};

/***/ },

/***/ 310:
/***/ function(module, exports) {

	module.exports = require("normalize-wheel");

/***/ },

/***/ 311:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _vue = __webpack_require__(55);

	var _vue2 = _interopRequireDefault(_vue);

	var _debounce = __webpack_require__(63);

	var _debounce2 = _interopRequireDefault(_debounce);

	var _util = __webpack_require__(312);

	var _config = __webpack_require__(313);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var sortData = function sortData(data, states) {
	  var sortingColumn = states.sortingColumn;
	  if (!sortingColumn || typeof sortingColumn.sortable === 'string') {
	    return data;
	  }
	  return (0, _util.orderBy)(data, states.sortProp, states.sortOrder, sortingColumn.sortMethod);
	};

	var getKeysMap = function getKeysMap(array, rowKey) {
	  var arrayMap = {};
	  (array || []).forEach(function (row, index) {
	    arrayMap[(0, _util.getRowIdentity)(row, rowKey)] = { row: row, index: index };
	  });
	  return arrayMap;
	};

	var toggleRowSelection = function toggleRowSelection(states, row, selected) {
	  var changed = false;
	  var selection = states.selection;
	  var index = selection.indexOf(row);
	  if (typeof selected === 'undefined') {
	    if (index === -1) {
	      selection.push(row);
	      changed = true;
	    } else {
	      selection.splice(index, 1);
	      changed = true;
	    }
	  } else {
	    if (selected && index === -1) {
	      selection.push(row);
	      changed = true;
	    } else if (!selected && index > -1) {
	      selection.splice(index, 1);
	      changed = true;
	    }
	  }

	  return changed;
	};

	var TableStore = function TableStore(table) {
	  var initialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  if (!table) {
	    throw new Error('Table is required.');
	  }
	  this.table = table;

	  this.states = {
	    rowKey: null,
	    _columns: [],
	    originColumns: [],
	    columns: [],
	    fixedColumns: [],
	    rightFixedColumns: [],
	    isComplex: false,
	    _data: null,
	    filteredData: null,
	    data: null,
	    sortingColumn: null,
	    sortProp: null,
	    sortOrder: null,
	    isAllSelected: false,
	    selection: [],
	    reserveSelection: false,
	    selectable: null,
	    currentRow: null,
	    hoverRow: null,
	    filters: {},
	    expandRows: [],
	    defaultExpandAll: false
	  };

	  for (var prop in initialState) {
	    if (initialState.hasOwnProperty(prop) && this.states.hasOwnProperty(prop)) {
	      this.states[prop] = initialState[prop];
	    }
	  }
	};

	TableStore.prototype.mutations = {
	  setData: function setData(states, data) {
	    var _this = this;

	    var dataInstanceChanged = states._data !== data;
	    states._data = data;
	    states.data = sortData(data || [], states);

	    // states.data.forEach((item) => {
	    //   if (!item.$extra) {
	    //     Object.defineProperty(item, '$extra', {
	    //       value: {},
	    //       enumerable: false
	    //     });
	    //   }
	    // });

	    this.updateCurrentRow();

	    if (!states.reserveSelection) {
	      if (dataInstanceChanged) {
	        this.clearSelection();
	      } else {
	        this.cleanSelection();
	      }
	      this.updateAllSelected();
	    } else {
	      (function () {
	        var rowKey = states.rowKey;
	        if (rowKey) {
	          (function () {
	            var selection = states.selection;
	            var selectedMap = getKeysMap(selection, rowKey);

	            states.data.forEach(function (row) {
	              var rowId = (0, _util.getRowIdentity)(row, rowKey);
	              var rowInfo = selectedMap[rowId];
	              if (rowInfo) {
	                selection[rowInfo.index] = row;
	              }
	            });

	            _this.updateAllSelected();
	          })();
	        } else {
	          console.warn('WARN: rowKey is required when reserve-selection is enabled.');
	        }
	      })();
	    }

	    var defaultExpandAll = states.defaultExpandAll;
	    if (defaultExpandAll) {
	      this.states.expandRows = (states.data || []).slice(0);
	    }

	    _vue2.default.nextTick(function () {
	      return _this.table.updateScrollY();
	    });
	  },
	  changeSortCondition: function changeSortCondition(states) {
	    var _this2 = this;

	    states.data = sortData(states.filteredData || states._data || [], states);

	    this.table.$emit('sort-change', {
	      column: this.states.sortingColumn,
	      prop: this.states.sortProp,
	      order: this.states.sortOrder
	    });

	    _vue2.default.nextTick(function () {
	      return _this2.table.updateScrollY();
	    });
	  },
	  filterChange: function filterChange(states, options) {
	    var _this3 = this;

	    var column = options.column,
	        values = options.values,
	        silent = options.silent;

	    if (values && !Array.isArray(values)) {
	      values = [values];
	    }

	    var prop = column.property;
	    var filters = {};

	    if (prop) {
	      states.filters[column.id] = values;
	      filters[column.columnKey || column.id] = values;
	    }

	    var data = states._data;

	    Object.keys(states.filters).forEach(function (columnId) {
	      var values = states.filters[columnId];
	      if (!values || values.length === 0) return;
	      var column = (0, _util.getColumnById)(_this3.states, columnId);
	      if (column && column.filterMethod) {
	        data = data.filter(function (row) {
	          return values.some(function (value) {
	            return column.filterMethod.call(null, value, row);
	          });
	        });
	      }
	    });

	    states.filteredData = data;
	    states.data = sortData(data, states);

	    if (!silent) {
	      this.table.$emit('filter-change', filters);
	    }

	    _vue2.default.nextTick(function () {
	      return _this3.table.updateScrollY();
	    });
	  },
	  insertColumn: function insertColumn(states, column, index, parent) {
	    var array = states._columns;
	    if (parent) {
	      array = parent.children;
	      if (!array) array = parent.children = [];
	    }

	    if (typeof index !== 'undefined') {
	      array.splice(index, 0, column);
	    } else {
	      array.push(column);
	    }

	    if (column.type === 'selection') {
	      states.selectable = column.selectable;
	      states.reserveSelection = column.reserveSelection;
	    }
	    if (this.table.$ready) {
	      this.updateColumns(); // hack for dynamics insert column
	      this.scheduleLayout();
	    }
	  },
	  removeColumn: function removeColumn(states, column, parent) {
	    var array = states._columns;
	    if (parent) {
	      array = parent.children;
	      if (!array) array = parent.children = [];
	    }
	    if (array) {
	      array.splice(array.indexOf(column), 1);
	    }

	    if (this.table.$ready) {
	      this.updateColumns(); // hack for dynamics remove column
	      this.scheduleLayout();
	    }
	  },
	  setHoverRow: function setHoverRow(states, row) {
	    states.hoverRow = row;
	  },
	  setCurrentRow: function setCurrentRow(states, row) {
	    var oldCurrentRow = states.currentRow;
	    states.currentRow = row;

	    if (oldCurrentRow !== row) {
	      this.table.$emit('current-change', row, oldCurrentRow);
	    }
	  },
	  rowSelectedChanged: function rowSelectedChanged(states, row) {
	    var changed = toggleRowSelection(states, row);
	    var selection = states.selection;

	    if (changed) {
	      var table = this.table;
	      table.$emit('selection-change', selection);
	      table.$emit('select', selection, row);
	    }

	    this.updateAllSelected();
	  },


	  toggleRowExpanded: function toggleRowExpanded(states, row, expanded) {
	    var expandRows = states.expandRows;
	    if (typeof expanded !== 'undefined') {
	      var index = expandRows.indexOf(row);
	      if (expanded) {
	        if (index === -1) expandRows.push(row);
	      } else {
	        if (index !== -1) expandRows.splice(index, 1);
	      }
	    } else {
	      var _index = expandRows.indexOf(row);
	      if (_index === -1) {
	        expandRows.push(row);
	      } else {
	        expandRows.splice(_index, 1);
	      }
	    }
	    this.table.$emit('expand', row, expandRows.indexOf(row) !== -1);
	  },

	  toggleAllSelection: (0, _debounce2.default)(10, function (states) {
	    var data = states.data || [];
	    var value = !states.isAllSelected;
	    var selection = this.states.selection;
	    var selectionChanged = false;

	    data.forEach(function (item, index) {
	      if (states.selectable) {
	        if (states.selectable.call(null, item, index) && toggleRowSelection(states, item, value)) {
	          selectionChanged = true;
	        }
	      } else {
	        if (toggleRowSelection(states, item, value)) {
	          selectionChanged = true;
	        }
	      }
	    });

	    var table = this.table;
	    if (selectionChanged) {
	      table.$emit('selection-change', selection);
	    }
	    table.$emit('select-all', selection);
	    states.isAllSelected = value;
	  })
	};

	var doFlattenColumns = function doFlattenColumns(columns) {
	  var result = [];
	  columns.forEach(function (column) {
	    if (column.children) {
	      result.push.apply(result, doFlattenColumns(column.children));
	    } else {
	      result.push(column);
	    }
	  });
	  return result;
	};

	TableStore.prototype.updateColumns = function () {
	  var states = this.states;
	  var _columns = states._columns || [];
	  states.fixedColumns = _columns.filter(function (column) {
	    return column.fixed === true || column.fixed === 'left';
	  });
	  states.rightFixedColumns = _columns.filter(function (column) {
	    return column.fixed === 'right';
	  });

	  if (states.fixedColumns.length > 0 && _columns[0] && _columns[0].type === 'selection' && !_columns[0].fixed) {
	    _columns[0].fixed = true;
	    states.fixedColumns.unshift(_columns[0]);
	  }
	  states.originColumns = [].concat(states.fixedColumns).concat(_columns.filter(function (column) {
	    return !column.fixed;
	  })).concat(states.rightFixedColumns);
	  states.columns = doFlattenColumns(states.originColumns);
	  states.isComplex = states.fixedColumns.length > 0 || states.rightFixedColumns.length > 0;
	};

	TableStore.prototype.initScrollShowColumns = function (startIndex, endIndex) {
	  var _columns = this.states._columns || [];
	  // TODO 懒加载优化
	  if (this.table.optimizeX) {
	    _columns.forEach(function (col, index) {
	      if (index >= startIndex && index <= endIndex) {
	        _vue2.default.set(col, 'scrollShow', true);
	      } else {
	        _vue2.default.set(col, 'scrollShow', false);
	      }
	    });
	  }
	};

	TableStore.prototype.updateScrollShowColumns = function (startIndex, endIndex) {
	  var _columns = this.states._columns || [];
	  if (this.table.optimizeX) {
	    _columns.forEach(function (col, index) {
	      if (index >= startIndex && index <= endIndex) {
	        _vue2.default.set(col, 'scrollShow', true);
	      } else {
	        _vue2.default.set(col, 'scrollShow', false);
	      }
	    });
	  }
	};

	TableStore.prototype.isSelected = function (row) {
	  return (this.states.selection || []).indexOf(row) > -1;
	};

	TableStore.prototype.clearSelection = function () {
	  var states = this.states;
	  states.isAllSelected = false;
	  var oldSelection = states.selection;
	  states.selection = [];
	  if (oldSelection.length > 0) {
	    this.table.$emit('selection-change', states.selection);
	  }
	};

	TableStore.prototype.setExpandRowKeys = function (rowKeys) {
	  var expandRows = [];
	  var data = this.states.data;
	  var rowKey = this.states.rowKey;
	  if (!rowKey) throw new Error('[Table] prop row-key should not be empty.');
	  var keysMap = getKeysMap(data, rowKey);
	  rowKeys.forEach(function (key) {
	    var info = keysMap[key];
	    if (info) {
	      expandRows.push(info.row);
	    }
	  });

	  this.states.expandRows = expandRows;
	};

	TableStore.prototype.toggleRowSelection = function (row, selected) {
	  var changed = toggleRowSelection(this.states, row, selected);
	  if (changed) {
	    this.table.$emit('selection-change', this.states.selection);
	  }
	};

	TableStore.prototype.cleanSelection = function () {
	  var selection = this.states.selection || [];
	  var data = this.states.data;
	  var rowKey = this.states.rowKey;
	  var deleted = void 0;
	  if (rowKey) {
	    deleted = [];
	    var selectedMap = getKeysMap(selection, rowKey);
	    var dataMap = getKeysMap(data, rowKey);
	    for (var key in selectedMap) {
	      if (selectedMap.hasOwnProperty(key) && !dataMap[key]) {
	        deleted.push(selectedMap[key].row);
	      }
	    }
	  } else {
	    deleted = selection.filter(function (item) {
	      return data.indexOf(item) === -1;
	    });
	  }

	  deleted.forEach(function (deletedItem) {
	    selection.splice(selection.indexOf(deletedItem), 1);
	  });

	  if (deleted.length) {
	    this.table.$emit('selection-change', selection);
	  }
	};

	TableStore.prototype.updateAllSelected = function () {
	  var states = this.states;
	  var selection = states.selection,
	      rowKey = states.rowKey,
	      selectable = states.selectable,
	      data = states.data;

	  if (!data || data.length === 0) {
	    states.isAllSelected = false;
	    return;
	  }

	  var selectedMap = void 0;
	  if (rowKey) {
	    selectedMap = getKeysMap(states.selection, rowKey);
	  }

	  var isSelected = function isSelected(row) {
	    if (selectedMap) {
	      return !!selectedMap[(0, _util.getRowIdentity)(row, rowKey)];
	    } else {
	      return selection.indexOf(row) !== -1;
	    }
	  };

	  var isAllSelected = true;
	  var selectedCount = 0;
	  for (var i = 0, j = data.length; i < j; i++) {
	    var item = data[i];
	    if (selectable) {
	      var isRowSelectable = selectable.call(null, item, i);
	      if (isRowSelectable) {
	        if (!isSelected(item)) {
	          isAllSelected = false;
	          break;
	        } else {
	          selectedCount++;
	        }
	      }
	    } else {
	      if (!isSelected(item)) {
	        isAllSelected = false;
	        break;
	      } else {
	        selectedCount++;
	      }
	    }
	  }

	  if (selectedCount === 0) isAllSelected = false;

	  states.isAllSelected = isAllSelected;
	};

	TableStore.prototype.scheduleLayout = function () {
	  this.table.debouncedLayout();
	};

	TableStore.prototype.setCurrentRowKey = function (key) {
	  var states = this.states;
	  var rowKey = states.rowKey;
	  if (!rowKey) throw new Error('[Table] row-key should not be empty.');
	  var data = states.data || [];
	  var keysMap = getKeysMap(data, rowKey);
	  var info = keysMap[key];
	  if (info) {
	    states.currentRow = info.row;
	  }
	};

	TableStore.prototype.updateCurrentRow = function () {
	  var states = this.states;
	  var table = this.table;
	  var data = states.data || [];
	  var oldCurrentRow = states.currentRow;

	  if (data.indexOf(oldCurrentRow) === -1) {
	    states.currentRow = null;

	    if (states.currentRow !== oldCurrentRow) {
	      table.$emit('current-change', null, oldCurrentRow);
	    }
	  }
	};

	TableStore.prototype.commit = function (name) {
	  var mutations = this.mutations;
	  if (mutations[name]) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    mutations[name].apply(this, [this.states].concat(args));
	  } else {
	    throw new Error('Action not found: ' + name);
	  }
	};

	exports.default = TableStore;

/***/ },

/***/ 312:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.getRowIdentity = exports.mousewheel = exports.getColumnByCell = exports.getColumnById = exports.orderBy = exports.getCell = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _util = __webpack_require__(220);

	var getCell = exports.getCell = function getCell(event) {
	  var cell = event.target;

	  while (cell && cell.tagName.toUpperCase() !== 'HTML') {
	    if (cell.tagName.toUpperCase() === 'TD') {
	      return cell;
	    }
	    cell = cell.parentNode;
	  }

	  return null;
	};

	var isObject = function isObject(obj) {
	  return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
	};

	var orderBy = exports.orderBy = function orderBy(array, sortKey, reverse, sortMethod) {
	  if (typeof reverse === 'string') {
	    reverse = reverse === 'descending' ? -1 : 1;
	  }
	  if (!sortKey && !sortMethod) {
	    return array;
	  }
	  var order = reverse && reverse < 0 ? -1 : 1;

	  // sort on a copy to avoid mutating original array
	  return array.slice().sort(sortMethod ? function (a, b) {
	    return sortMethod(a, b) ? order : -order;
	  } : function (a, b) {
	    if (sortKey !== '$key') {
	      if (isObject(a) && '$value' in a) a = a.$value;
	      if (isObject(b) && '$value' in b) b = b.$value;
	    }
	    a = isObject(a) ? (0, _util.getValueByPath)(a, sortKey) : a;
	    b = isObject(b) ? (0, _util.getValueByPath)(b, sortKey) : b;
	    return a === b ? 0 : a > b ? order : -order;
	  });
	};

	var getColumnById = exports.getColumnById = function getColumnById(table, columnId) {
	  var column = null;
	  table.columns.forEach(function (item) {
	    if (item.id === columnId) {
	      column = item;
	    }
	  });
	  return column;
	};

	var getColumnByCell = exports.getColumnByCell = function getColumnByCell(table, cell) {
	  var matches = (cell.className || '').match(/el-table_[^\s]+/gm);
	  if (matches) {
	    return getColumnById(table, matches[0]);
	  }
	  return null;
	};

	var isFirefox = typeof navigator !== 'undefined' && navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

	var mousewheel = exports.mousewheel = function mousewheel(element, callback) {
	  if (element && element.addEventListener) {
	    element.addEventListener(isFirefox ? 'DOMMouseScroll' : 'mousewheel', callback);
	  }
	};

	var getRowIdentity = exports.getRowIdentity = function getRowIdentity(row, rowKey) {
	  if (!row) throw new Error('row is required when get row identity');
	  if (typeof rowKey === 'string') {
	    if (rowKey.indexOf('.') < 0) {
	      return row[rowKey];
	    }
	    var key = rowKey.split('.');
	    var current = row;
	    for (var i = 0; i < key.length; i++) {
	      current = current[key[i]];
	    }
	    return current;
	  } else if (typeof rowKey === 'function') {
	    return rowKey.call(null, row);
	  }
	};

/***/ },

/***/ 313:
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	var optimizeConfig = exports.optimizeConfig = {
	  defaultVisibleColumnSize: 20,
	  defaultVisibleRowSize: 30
	};

/***/ },

/***/ 314:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _scrollbarWidth = __webpack_require__(262);

	var _scrollbarWidth2 = _interopRequireDefault(_scrollbarWidth);

	var _vue = __webpack_require__(55);

	var _vue2 = _interopRequireDefault(_vue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var TableLayout = function () {
	  function TableLayout(options) {
	    _classCallCheck(this, TableLayout);

	    this.table = null;
	    this.store = null;
	    this.columns = null;
	    this.fit = true;
	    this.showHeader = true;

	    this.height = null;
	    this.scrollX = false;
	    this.scrollY = false;
	    this.bodyWidth = null;
	    this.fixedWidth = null;
	    this.rightFixedWidth = null;
	    this.tableHeight = null;
	    this.headerHeight = 44; // Table Header Height
	    this.footerHeight = 44; // Table Footer Height
	    this.viewportHeight = null; // Table Height - Scroll Bar Height
	    this.bodyHeight = null; // Table Height - Table Header Height
	    this.fixedBodyHeight = null; // Table Height - Table Header Height - Scroll Bar Height
	    this.gutterWidth = (0, _scrollbarWidth2.default)();

	    for (var name in options) {
	      if (options.hasOwnProperty(name)) {
	        this[name] = options[name];
	      }
	    }

	    if (!this.table) {
	      throw new Error('table is required for Table Layout');
	    }
	    if (!this.store) {
	      throw new Error('store is required for Table Layout');
	    }
	  }

	  TableLayout.prototype.updateScrollY = function updateScrollY() {
	    var height = this.height;
	    if (typeof height !== 'string' && typeof height !== 'number') return;
	    var bodyWrapper = this.table.bodyWrapper;
	    if (this.table.$el && bodyWrapper) {
	      var body = bodyWrapper.querySelector('.el-table__body');
	      this.scrollY = body.offsetHeight > bodyWrapper.offsetHeight;
	    }
	  };

	  TableLayout.prototype.setHeight = function setHeight(value) {
	    var prop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'height';

	    var el = this.table.$el;
	    if (typeof value === 'string' && /^\d+$/.test(value)) {
	      value = Number(value);
	    }

	    this.height = value;

	    if (!el) return;
	    if (typeof value === 'number') {
	      el.style[prop] = value + 'px';

	      this.updateHeight();
	    } else if (typeof value === 'string') {
	      if (value === '') {
	        el.style[prop] = '';
	      }
	      this.updateHeight();
	    }
	  };

	  TableLayout.prototype.setMaxHeight = function setMaxHeight(value) {
	    return this.setHeight(value, 'max-height');
	  };

	  TableLayout.prototype.updateHeight = function updateHeight() {
	    var _this = this;

	    if (!this.table.$ready) {
	      return _vue2.default.nextTick(function () {
	        return _this.updateHeight();
	      });
	    }
	    var height = this.tableHeight = this.table.$el.clientHeight;
	    var noData = !this.table.data || this.table.data.length === 0;
	    var _table$$refs = this.table.$refs,
	        headerWrapper = _table$$refs.headerWrapper,
	        footerWrapper = _table$$refs.footerWrapper;

	    var footerHeight = this.footerHeight = footerWrapper ? footerWrapper.offsetHeight : 0;
	    if (this.showHeader && !headerWrapper) return;
	    if (!this.showHeader) {
	      this.headerHeight = 0;
	      if (this.height !== null && (!isNaN(this.height) || typeof this.height === 'string')) {
	        this.bodyHeight = height - footerHeight + (footerWrapper ? 1 : 0);
	      }
	      this.fixedBodyHeight = this.scrollX ? height - this.gutterWidth : height;
	    } else {
	      var headerHeight = this.headerHeight = headerWrapper.offsetHeight;
	      var bodyHeight = height - headerHeight - footerHeight + (footerWrapper ? 1 : 0);
	      if (this.height !== null && (!isNaN(this.height) || typeof this.height === 'string')) {
	        this.bodyHeight = bodyHeight;
	      }
	      this.fixedBodyHeight = this.scrollX ? bodyHeight - this.gutterWidth : bodyHeight;
	    }
	    this.viewportHeight = this.scrollX ? height - (noData ? 0 : this.gutterWidth) : height;
	    // this.viewportHeight = this.scrollX ? height - (noData ? this.gutterWidth : this.gutterWidth) : height;
	  };

	  TableLayout.prototype.update = function update() {
	    var fit = this.fit;
	    var columns = this.table.columns;
	    var bodyWidth = this.table.$el.clientWidth;
	    var bodyMinWidth = 0;

	    var flattenColumns = [];
	    columns.forEach(function (column) {
	      if (column.isColumnGroup) {
	        flattenColumns.push.apply(flattenColumns, column.columns);
	      } else {
	        flattenColumns.push(column);
	      }
	    });

	    var flexColumns = flattenColumns.filter(function (column) {
	      return typeof column.width !== 'number';
	    });

	    if (flexColumns.length > 0 && fit) {
	      flattenColumns.forEach(function (column) {
	        bodyMinWidth += column.width || column.minWidth || 80;
	      });

	      if (bodyMinWidth < bodyWidth - this.gutterWidth) {
	        // DON'T HAVE SCROLL BAR
	        this.scrollX = false;

	        var totalFlexWidth = bodyWidth - this.gutterWidth - bodyMinWidth;

	        if (flexColumns.length === 1) {
	          flexColumns[0].realWidth = (flexColumns[0].minWidth || 80) + totalFlexWidth;
	        } else {
	          (function () {
	            var allColumnsWidth = flexColumns.reduce(function (prev, column) {
	              return prev + (column.minWidth || 80);
	            }, 0);
	            var flexWidthPerPixel = totalFlexWidth / allColumnsWidth;
	            var noneFirstWidth = 0;

	            flexColumns.forEach(function (column, index) {
	              if (index === 0) return;
	              var flexWidth = Math.floor((column.minWidth || 80) * flexWidthPerPixel);
	              noneFirstWidth += flexWidth;
	              column.realWidth = (column.minWidth || 80) + flexWidth;
	            });

	            flexColumns[0].realWidth = (flexColumns[0].minWidth || 80) + totalFlexWidth - noneFirstWidth;
	          })();
	        }
	      } else {
	        // HAVE HORIZONTAL SCROLL BAR
	        this.scrollX = true;
	        flexColumns.forEach(function (column) {
	          column.realWidth = column.minWidth;
	        });
	      }

	      this.bodyWidth = Math.max(bodyMinWidth, bodyWidth);
	    } else {
	      flattenColumns.forEach(function (column) {
	        if (!column.width && !column.minWidth) {
	          column.realWidth = 80;
	        } else {
	          column.realWidth = column.width || column.minWidth;
	        }

	        bodyMinWidth += column.realWidth;
	      });
	      this.scrollX = bodyMinWidth > bodyWidth;

	      this.bodyWidth = bodyMinWidth;
	    }

	    var fixedColumns = this.store.states.fixedColumns;

	    if (fixedColumns.length > 0) {
	      var fixedWidth = 0;
	      fixedColumns.forEach(function (column) {
	        fixedWidth += column.realWidth;
	      });

	      this.fixedWidth = fixedWidth;
	    }

	    var rightFixedColumns = this.store.states.rightFixedColumns;
	    if (rightFixedColumns.length > 0) {
	      var rightFixedWidth = 0;
	      rightFixedColumns.forEach(function (column) {
	        rightFixedWidth += column.realWidth;
	      });

	      this.rightFixedWidth = rightFixedWidth;
	    }
	  };

	  return TableLayout;
	}();

	exports.default = TableLayout;

/***/ },

/***/ 315:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _util = __webpack_require__(312);

	var _dom = __webpack_require__(123);

	var _checkbox = __webpack_require__(308);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	var _tooltip = __webpack_require__(190);

	var _tooltip2 = _interopRequireDefault(_tooltip);

	var _tableBodyRow = __webpack_require__(316);

	var _tableBodyRow2 = _interopRequireDefault(_tableBodyRow);

	var _config = __webpack_require__(313);

	var _throttle = __webpack_require__(45);

	var _throttle2 = _interopRequireDefault(_throttle);

	var _debounce = __webpack_require__(63);

	var _debounce2 = _interopRequireDefault(_debounce);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  components: {
	    ElCheckbox: _checkbox2.default,
	    ElTooltip: _tooltip2.default,
	    TableBodyRow: _tableBodyRow2.default
	  },

	  props: {
	    store: {
	      required: true
	    },
	    stripe: Boolean,
	    context: {},
	    layout: {
	      required: true
	    },
	    rowClassName: [String, Function],
	    rowStyle: [Object, Function],
	    fixed: String,
	    highlight: Boolean,
	    rowHeight: Number,
	    rowLineNumber: Number,
	    columnWidth: Number
	  },
	  render2: function render2(h) {
	    var _this = this;

	    // let tmpFixedColumns = this.columns;
	    // if (this.rowHeight) {
	    //   tmpFixedColumns = !this.fixed
	    //   ? this.columns
	    //   : this.fixed === 'right'
	    //     ? this.rightFixedColumns
	    //     : this.fixedColumns;
	    // }
	    var columnsHidden = this.tmpFixedColumns.map(function (column, index) {
	      return _this.isColumnHidden(index);
	    });
	    return h(
	      'table',
	      {
	        'class': 'el-table__body',
	        attrs: { cellspacing: '0',
	          cellpadding: '0',
	          border: '0' }
	      },
	      [h(
	        'colgroup',
	        null,
	        [this._l(this.tmpFixedColumns, function (column) {
	          return h(
	            'col',
	            {
	              attrs: {
	                name: column.id,
	                width: column.width || column.realWidth
	              },
	              key: column.id
	            },
	            []
	          );
	        })]
	      ), h(
	        'tbody',
	        null,
	        [this._l(this.visibleData, function (row, $index) {
	          return [h(
	            'tr',
	            {
	              style: [_this.rowStyle ? _this.getRowStyle(row, $index) : null, _this.trRowHeightStyle],
	              key: _this.table.rowKey ? _this.getKeyOfRow(row, $index) : $index,
	              on: {
	                'dblclick': function dblclick($event) {
	                  return _this.handleDoubleClick($event, row);
	                },
	                'click': function click($event) {
	                  return _this.handleClick($event, row);
	                },
	                'contextmenu': function contextmenu($event) {
	                  return _this.handleContextMenu($event, row);
	                },
	                'mouseenter': function mouseenter(_) {
	                  return _this.handleMouseEnter($index);
	                },
	                'mouseleave': function mouseleave(_) {
	                  return _this.handleMouseLeave();
	                }
	              },

	              'class': [_this.getRowClass(row, $index)] },
	            [_this._l(_this.tmpFixedColumns, function (column, cellIndex) {
	              var _getSpan = _this.getSpan(row, column, $index, cellIndex),
	                  rowspan = _getSpan.rowspan,
	                  colspan = _getSpan.colspan;

	              if (!rowspan || !colspan) {
	                return null;
	              }
	              return h(
	                'td',
	                {
	                  attrs: {
	                    rowspan: rowspan,
	                    colspan: colspan
	                  },
	                  style: _this.rowHeightStyle
	                  // class={[column.id, column.align, column.className || '']}
	                  , 'class': _this.getCellClass($index, cellIndex, row, column),
	                  on: {
	                    'mouseenter': function mouseenter($event) {
	                      return _this.handleCellMouseEnter($event, row);
	                    },
	                    'mouseleave': _this.handleCellMouseLeave
	                  }
	                },
	                [column.renderCell.call(_this._renderProxy, h, { row: row, column: column, $index: $index, store: _this.store, _self: _this.context || _this.table.$vnode.context }, columnsHidden[cellIndex])]
	              );
	            }), !_this.fixed && _this.layout.scrollY && _this.layout.gutterWidth ? h(
	              'td',
	              { 'class': 'gutter' },
	              []
	            ) : '']
	          ), _this.store.states.expandRows.indexOf(row) > -1 ? h(
	            'tr',
	            null,
	            [h(
	              'td',
	              { style: _this.rowHeightStyle, attrs: { colspan: _this.tmpFixedColumns.length },
	                'class': 'el-table__expanded-cell' },
	              [_this.table.renderExpanded ? _this.table.renderExpanded(h, { row: row, $index: $index, store: _this.store }) : '']
	            )]
	          ) : ''];
	        }).concat(this._self.$parent.$slots.append).concat(h(
	          'el-tooltip',
	          {
	            attrs: { effect: this.table.tooltipEffect, placement: 'top', content: this.tooltipContent },
	            ref: 'tooltip' },
	          []
	        ))]
	      )]
	    );
	  },
	  render: function render(h) {
	    var _this2 = this;

	    if (!this.rowHeight || !this.table.optimizeY) {
	      return this.$options.render2.call(this, h);
	    }
	    // let tmpFixedColumns = this.columns;
	    // if (this.rowHeight) {
	    //   tmpFixedColumns = !this.fixed
	    //   ? this.columns
	    //   : this.fixed === 'right'
	    //     ? this.rightFixedColumns
	    //     : this.fixedColumns;
	    // }
	    var columnsHidden = this.tmpFixedColumns.map(function (column, index) {
	      return _this2.isColumnHidden(index);
	    });
	    return h(
	      'div',
	      {
	        'class': ['el-table__virtual-wrapper', { 'el-table--fixed__virtual-wrapper': this.fixed }],
	        style: { height: this.table.virtualBodyHeight + 'px', width: this.table.virtualBodyWidth + 'px' } },
	      [h(
	        'div',
	        { style: [{ transform: 'translate(' + (this.fixed ? 0 : 0) + 'px, ' + this.innerTop + 'px)' }] },
	        [h(
	          'table',
	          {
	            'class': 'el-table__body',
	            attrs: { cellspacing: '0',
	              cellpadding: '0',
	              border: '0' }
	          },
	          [h(
	            'colgroup',
	            null,
	            [this._l(this.tmpFixedColumns, function (column) {
	              return h(
	                'col',
	                {
	                  attrs: {
	                    name: column.id,
	                    width: column.width || column.realWidth
	                  },
	                  key: column.id
	                },
	                []
	              );
	            })]
	          ), h(
	            'tbody',
	            null,
	            [this._l(this.visibleData, function (row, $index) {
	              return [h(
	                'tr',
	                {
	                  style: [_this2.rowStyle ? _this2.getRowStyle(row, _this2.getIndex($index)) : null, _this2.trRowHeightStyle],
	                  key: _this2.table.rowKey ? _this2.getKeyOfRow(row, _this2.getIndex($index)) : $index,
	                  on: {
	                    'dblclick': function dblclick($event) {
	                      return _this2.handleDoubleClick($event, row);
	                    },
	                    'click': function click($event) {
	                      return _this2.handleClick($event, row);
	                    },
	                    'contextmenu': function contextmenu($event) {
	                      return _this2.handleContextMenu($event, row);
	                    },
	                    'mouseenter': function mouseenter(_) {
	                      return _this2.handleMouseEnter(_this2.getIndex($index));
	                    },
	                    'mouseleave': function mouseleave(_) {
	                      return _this2.handleMouseLeave();
	                    }
	                  },

	                  'class': [_this2.getRowClass(row, _this2.getIndex($index))] },
	                [_this2._l(_this2.tmpFixedColumns, function (column, cellIndex) {
	                  var _getSpan2 = _this2.getSpan(row, column, _this2.getIndex($index), cellIndex),
	                      rowspan = _getSpan2.rowspan,
	                      colspan = _getSpan2.colspan;

	                  if (!rowspan || !colspan) {
	                    return null;
	                  }
	                  return h(
	                    'td',
	                    {
	                      attrs: {
	                        rowspan: rowspan,
	                        colspan: colspan
	                      },
	                      style: _this2.rowHeightStyle
	                      // class={[column.id, column.align, column.className || '', columnsHidden[cellIndex] ? 'is-hidden-deprecated' : '']}
	                      , 'class': _this2.getCellClass($index, cellIndex, row, column),
	                      on: {
	                        'mouseenter': function mouseenter($event) {
	                          return _this2.handleCellMouseEnter($event, row);
	                        },
	                        'mouseleave': _this2.handleCellMouseLeave
	                      }
	                    },
	                    [column.renderCell.call(_this2._renderProxy, h, { row: row, column: column, $index: _this2.getIndex($index), store: _this2.store, _self: _this2.context || _this2.table.$vnode.context }, columnsHidden[cellIndex])]
	                  );
	                }), !_this2.fixed && _this2.layout.scrollY && _this2.layout.gutterWidth ? h(
	                  'td',
	                  { 'class': 'gutter' },
	                  []
	                ) : '']
	              ), _this2.store.states.expandRows.indexOf(row) > -1 ? h(
	                'tr',
	                null,
	                [h(
	                  'td',
	                  { style: _this2.rowHeightStyle, attrs: { colspan: _this2.tmpFixedColumns.length },
	                    'class': 'el-table__expanded-cell' },
	                  [_this2.table.renderExpanded ? _this2.table.renderExpanded(h, { row: row, $index: _this2.getIndex($index), store: _this2.store }) : '']
	                )]
	              ) : ''];
	            }).concat(this._self.$parent.$slots.append).concat(h(
	              'el-tooltip',
	              {
	                attrs: { effect: this.table.tooltipEffect, placement: 'top', content: this.tooltipContent },
	                ref: 'tooltip' },
	              []
	            ))]
	          )]
	        )]
	      )]
	    );
	  },


	  watch: {
	    'tooltipContent': function tooltipContent(newVal, oldVal) {
	      var _this3 = this;

	      if (!newVal) {
	        setTimeout(function () {
	          var tooltip = _this3.$refs.tooltip;
	          if (tooltip && (!_this3.tooltipContent || _this3.tooltipContent === ' ' || _this3.tooltipContent === ' \n' || _this3.tooltipContent === '\n ' || _this3.tooltipContent === '\n')) {
	            tooltip.setExpectedState(false);
	            tooltip.handleClosePopper();
	          }
	        }, 60);
	      }
	    },
	    'store.states.hoverRow': function storeStatesHoverRow(newVal, oldVal) {
	      if (!this.store.states.isComplex) return;
	      var el = this.$el;
	      if (!el) return;
	      var rows = el.querySelectorAll('tbody > tr.el-table__row');
	      var oldRow = rows[oldVal];
	      var newRow = rows[newVal];
	      // 虚拟滚动需要找回对应的虚拟row
	      if (this.table.optimizeY) {
	        newRow = rows[newVal - this.startIndex];
	        if (oldVal) {
	          oldRow = rows[oldVal - this.startIndex];
	        }
	      }
	      if (oldRow) {
	        (0, _dom.removeClass)(oldRow, 'hover-row');
	      } else {
	        rows.forEach(function (row) {
	          (0, _dom.removeClass)(row, 'hover-row');
	        });
	      }
	      if (newRow) {
	        (0, _dom.addClass)(newRow, 'hover-row');
	      }
	    },
	    'store.states.currentRow': function storeStatesCurrentRow(newVal, oldVal) {
	      if (!this.highlight) return;
	      var el = this.$el;
	      if (!el) return;
	      var data = this.store.states.data;
	      var rows = el.querySelectorAll('tbody > tr.el-table__row');
	      var oldRow = rows[data.indexOf(oldVal)];
	      var newRow = rows[data.indexOf(newVal)];
	      if (oldRow) {
	        (0, _dom.removeClass)(oldRow, 'current-row');
	      } else if (rows) {
	        [].forEach.call(rows, function (row) {
	          return (0, _dom.removeClass)(row, 'current-row');
	        });
	      }
	      if (newRow) {
	        (0, _dom.addClass)(newRow, 'current-row');
	      }
	    },
	    'tmpFixedColumns': function tmpFixedColumns(newVal, oldVal) {
	      if (this.table.optimizeX) {
	        this.scrollXEvent();
	        this.store.initScrollShowColumns(this.startColumnIndex, this.endColumnIndex);
	      }
	    }
	  },

	  computed: {
	    // let tmpFixedColumns = this.columns;
	    // if (this.rowHeight) {
	    //   tmpFixedColumns = !this.fixed
	    //   ? this.columns
	    //   : this.fixed === 'right'
	    //     ? this.rightFixedColumns
	    //     : this.fixedColumns;
	    // }
	    tmpFixedColumns: function tmpFixedColumns() {
	      var tmpFixedColumns = this.columns;
	      if (this.rowHeight) {
	        tmpFixedColumns = !this.fixed ? this.columns : this.fixed === 'right' ? this.rightFixedColumns : this.fixedColumns;
	      }
	      // if (this.table.optimizeX && !this.fixed) {
	      //   tmpFixedColumns = tmpFixedColumns.slice(this.startColumnIndex, this.endColumnIndex);
	      // }
	      return tmpFixedColumns;
	    },
	    visibleData: function visibleData() {
	      if (this.table.optimizeY && this.rowHeight) {
	        return this.data.slice(this.startIndex, this.endIndex);
	      }
	      return this.data;
	    },
	    rowHeightStyle: function rowHeightStyle() {
	      if (!this.rowHeight) {
	        return {};
	      }
	      if (this.rowLineNumber) {
	        return {
	          height: this.rowHeight + 'px'
	        };
	      }
	      return {};
	    },
	    trRowHeightStyle: function trRowHeightStyle() {
	      if (!this.rowHeight) {
	        return {};
	      }
	      return {
	        height: this.rowHeight + 'px'
	      };
	    },
	    table: function table() {
	      return this.$parent;
	    },
	    data: function data() {
	      return this.store.states.data;
	    },
	    columnsCount: function columnsCount() {
	      return this.store.states.columns.length;
	    },
	    leftFixedCount: function leftFixedCount() {
	      return this.store.states.fixedColumns.length;
	    },
	    rightFixedCount: function rightFixedCount() {
	      return this.store.states.rightFixedColumns.length;
	    },
	    columns: function columns() {
	      return this.store.states.columns;
	    },
	    fixedColumns: function fixedColumns() {
	      return this.store.states.fixedColumns;
	    },
	    rightFixedColumns: function rightFixedColumns() {
	      return this.store.states.rightFixedColumns;
	    }
	  },

	  data: function data() {
	    return {
	      tooltipContent: '',
	      startIndex: 0,
	      endIndex: _config.optimizeConfig.defaultVisibleRowSize - 1,
	      visibleCount: _config.optimizeConfig.defaultVisibleRowSize,
	      scrollTop: 0,
	      excessRows: 3,
	      innerTop: 0,

	      scrollLeft: 0,
	      startColumnIndex: 0,
	      endColumnIndex: 0,
	      visibleColumnCount: _config.optimizeConfig.defaultVisibleColumnSize,
	      innerLeft: 0
	    };
	  },
	  created: function created() {
	    var _this4 = this;

	    this.activateTooltip = (0, _debounce2.default)(50, function (tooltip) {
	      return tooltip.handleShowPopper();
	    });
	    // this.throttleScrollEvent = debounce(50, (e) => this.scrollEvent(e));
	    this.throttleScrollEvent = (0, _throttle2.default)(25, function (e) {
	      return _this4.scrollEvent(e);
	    });
	    // this.throttleScrollEvent = this.scrollEvent;

	    this.visibleCount = this.table.visibleRowCount;
	    this.endIndex = this.startIndex + this.visibleCount;

	    this.endColumnIndex = this.startColumnIndex + this.visibleColumnCount;
	  },
	  mounted: function mounted() {
	    // 行懒加载优化
	    if (this.table.optimizeY && this.rowHeight || this.table.optimizeX) {
	      this.bindEvent();
	    }
	    if (this.table.optimizeX) {
	      this.scrollXEvent(0);
	      this.store.initScrollShowColumns(this.startColumnIndex, this.endColumnIndex);
	    }
	  },
	  beforeDestroy: function beforeDestroy() {
	    // 行懒加载优化
	    if (this.table.optimizeY && this.rowHeight || this.table.optimizeX) {
	      this.unbindEvent();
	    }
	  },


	  methods: {
	    getIndex: function getIndex(index) {
	      return this.startIndex + index;
	    },
	    getVisibleCount: function getVisibleCount() {
	      var bodyWrapper = this.table && this.table.bodyWrapper;
	      if (bodyWrapper) {
	        var scrollTop = bodyWrapper.scrollTop;
	        var clientHeight = bodyWrapper.offsetHeight;
	        return Math.ceil(clientHeight / this.rowHeight);
	      }
	      return _config.optimizeConfig.defaultVisibleRowSize;
	    },
	    getKeyOfRow: function getKeyOfRow(row, index) {
	      var rowKey = this.table.rowKey;
	      if (rowKey) {
	        return (0, _util.getRowIdentity)(row, rowKey);
	      }
	      return index;
	    },

	    // TODO 没用了
	    isColumnHidden: function isColumnHidden(index) {
	      if (this.fixed === true || this.fixed === 'left') {
	        return index >= this.leftFixedCount;
	      } else if (this.fixed === 'right') {
	        return index < this.columnsCount - this.rightFixedCount;
	      } else {
	        return index < this.leftFixedCount || index >= this.columnsCount - this.rightFixedCount;
	      }
	    },
	    getSpan: function getSpan(row, column, rowIndex, columnIndex) {
	      var rowspan = 1;
	      var colspan = 1;
	      var fn = this.table.spanMethod;
	      if (typeof fn === 'function') {
	        var result = fn({
	          row: row,
	          column: column,
	          rowIndex: rowIndex,
	          columnIndex: columnIndex
	        });
	        if (Array.isArray(result)) {
	          rowspan = result[0];
	          colspan = result[1];
	        } else if ((typeof result === 'undefined' ? 'undefined' : _typeof(result)) === 'object') {
	          rowspan = result.rowspan;
	          colspan = result.colspan;
	        }
	      }
	      return { rowspan: rowspan, colspan: colspan };
	    },
	    getRowStyle: function getRowStyle(row, index) {
	      var rowStyle = this.rowStyle;
	      if (typeof rowStyle === 'function') {
	        return rowStyle.call(null, row, index);
	      }
	      return rowStyle;
	    },
	    getRowClass: function getRowClass(row, index) {
	      var classes = ['el-table__row'];

	      if (this.stripe && index % 2 === 1) {
	        classes.push('el-table__row--striped');
	      }
	      var rowClassName = this.rowClassName;
	      if (typeof rowClassName === 'string') {
	        classes.push(rowClassName);
	      } else if (typeof rowClassName === 'function') {
	        classes.push(rowClassName.call(null, row, index) || '');
	      }

	      return classes.join(' ');
	    },
	    getCellClass: function getCellClass(rowIndex, columnIndex, row, column) {
	      // class={[column.id, column.align, column.className || '', columnsHidden[cellIndex] ? 'is-hidden-deprecated' : '']}
	      var classes = [column.id, column.align, column.className];
	      if (this.isColumnHidden(columnIndex)) {
	        classes.push('is-hidden-deprecated');
	      }
	      return classes.join(' ');
	    },
	    handleCellMouseEnter: function handleCellMouseEnter(event, row) {
	      var table = this.table;
	      var cell = (0, _util.getCell)(event);

	      if (cell) {
	        var column = (0, _util.getColumnByCell)(table, cell);
	        var hoverState = table.hoverState = { cell: cell, column: column, row: row };
	        table.$emit('cell-mouse-enter', hoverState.row, hoverState.column, hoverState.cell, event);
	      }

	      // 判断是否text-overflow, 如果是就显示tooltip
	      var cellChild = event.target.querySelector('.cell');

	      if ((0, _dom.hasClass)(cellChild, 'el-tooltip') && cellChild.scrollWidth >= cellChild.offsetWidth) {
	        var tooltip = this.$refs.tooltip;
	        this.tooltipContent = cell.innerText;
	        tooltip.referenceElm = cell;
	        tooltip.$refs.popper && (tooltip.$refs.popper.style.display = 'none');
	        tooltip.doDestroy();
	        tooltip.setExpectedState(true);
	        if (!this.tooltipContent || this.tooltipContent === ' ' || this.tooltipContent === '\n' || this.tooltipContent === ' \n' || this.tooltipContent === '\n ') {
	          return;
	        }
	        this.activateTooltip(tooltip);
	      }
	    },
	    handleCellMouseLeave: function handleCellMouseLeave(event) {
	      var tooltip = this.$refs.tooltip;
	      if (tooltip) {
	        tooltip.setExpectedState(false);
	        tooltip.handleClosePopper();
	      }
	      var cell = (0, _util.getCell)(event);
	      if (!cell) return;

	      var oldHoverState = this.table.hoverState;
	      this.table.$emit('cell-mouse-leave', oldHoverState.row, oldHoverState.column, oldHoverState.cell, event);
	    },
	    handleMouseEnter: function handleMouseEnter(index) {
	      this.store.commit('setHoverRow', index);
	    },
	    handleMouseLeave: function handleMouseLeave() {
	      this.store.commit('setHoverRow', null);
	    },
	    handleContextMenu: function handleContextMenu(event, row) {
	      this.handleEvent(event, row, 'contextmenu');
	    },
	    handleDoubleClick: function handleDoubleClick(event, row) {
	      this.handleEvent(event, row, 'dblclick');
	    },
	    handleClick: function handleClick(event, row) {
	      this.store.commit('setCurrentRow', row);
	      this.handleEvent(event, row, 'click');
	    },
	    handleEvent: function handleEvent(event, row, name) {
	      var table = this.table;
	      var cell = (0, _util.getCell)(event);
	      var column = void 0;
	      if (cell) {
	        column = (0, _util.getColumnByCell)(table, cell);
	        if (column) {
	          table.$emit('cell-' + name, row, column, cell, event);
	        }
	      }
	      table.$emit('row-' + name, row, event, column);
	    },
	    handleExpandClick: function handleExpandClick(row) {
	      this.store.commit('toggleRowExpanded', row);
	    },
	    bindEvent: function bindEvent() {
	      this.table.bodyWrapper && this.table.bodyWrapper.addEventListener('scroll', this.throttleScrollEvent, {
	        passive: true
	      });
	    },
	    unbindEvent: function unbindEvent() {
	      this.table.bodyWrapper && this.table.bodyWrapper.removeEventListener('scroll', this.throttleScrollEvent);
	    },
	    scrollEvent: function scrollEvent(e) {
	      // if ((this.table.optimizeY && this.rowHeight) || this.table.optimizeX)

	      var bodyWrapper = this.table && this.table.bodyWrapper;
	      if (this.table.optimizeX) {
	        this.scrollXEvent(bodyWrapper && bodyWrapper.scrollLeft);
	      }
	      if (this.table.optimizeY) {
	        var tooltip = this.$refs.tooltip;
	        tooltip.$refs.popper && (tooltip.$refs.popper.style.display = 'none');
	        tooltip.doDestroy();
	      }
	      if (this.table.optimizeY && this.rowHeight) {
	        // if (this.data.length <= this.visibleCount) {
	        //   return
	        // }
	        if (bodyWrapper) {
	          var scrollTop = bodyWrapper.scrollTop,
	              scrollLeft = bodyWrapper.scrollLeft;

	          var bodyScrollHeight = this.visibleCount * this.rowHeight;
	          if (this.table.virtualBodyHeight < scrollTop + bodyScrollHeight) {
	            scrollTop = this.table.virtualBodyHeight - bodyScrollHeight;
	          }
	          this.scrollTop = scrollTop;
	          var startIndex = parseInt(scrollTop / this.rowHeight);
	          if (startIndex < 0) {
	            startIndex = 0;
	          }

	          var _getVisibleRange = this.getVisibleRange(startIndex),
	              start = _getVisibleRange.start,
	              end = _getVisibleRange.end;

	          this.startIndex = start;
	          this.endIndex = end;
	          this.innerTop = this.startIndex * this.rowHeight;
	        }
	      }
	    },
	    scrollXEvent: function scrollXEvent(scrollLeft) {
	      var bodyWrapper = this.table && this.table.bodyWrapper;
	      if (scrollLeft === undefined) {
	        scrollLeft = bodyWrapper.scrollLeft;
	      }
	      var columns = this.store.states._columns;
	      this.scrollLeft = scrollLeft;
	      var startColumnIndex = this.findNearestColumnIndex(scrollLeft);
	      var endColumnIndex = this.findNearestColumnIndex(scrollLeft + bodyWrapper.offsetWidth);
	      this.startColumnIndex = startColumnIndex;
	      this.endColumnIndex = Math.min(endColumnIndex + 1, columns.length);
	      // this.innerLeft = this.getColumnSizeAndOffset(this.startColumnIndex).offset;
	      // this.innerLeft = this.scrollLeft;
	      this.store.updateScrollShowColumns(this.startColumnIndex, this.endColumnIndex);
	    },
	    getColumnWidth: function getColumnWidth(column) {
	      return column.realWidth || column.width || column.minWidth || 0;
	    },
	    findNearestColumnIndex: function findNearestColumnIndex(scrollLeft) {
	      var columns = this.store.states._columns;
	      var total = 0;
	      for (var i = 0, j = columns.length; i < j; i++) {
	        var width = this.getColumnWidth(columns[i]);
	        total += width;
	        if (total >= scrollLeft || i === j - 1) {
	          return i;
	        }
	      }
	      return 0;
	    },
	    getColumnSizeAndOffset: function getColumnSizeAndOffset(index) {
	      var total = 0;
	      var columns = this.store.states._columns;
	      for (var i = 0, j = Math.min(index, columns.length - 1); i <= j; i++) {
	        var width = this.getColumnWidth(columns[i]);
	        if (i === j) {
	          return {
	            offset: total,
	            width: width
	          };
	        }
	        total += width;
	      }
	      return {
	        offset: 0,
	        width: 0
	      };
	    },
	    getVisibleRange: function getVisibleRange(expectStart) {
	      var start = expectStart - this.excessRows;

	      return {
	        start: start >= 0 ? start : 0,
	        end: expectStart + this.visibleCount + this.excessRows
	      };
	    }
	  }
	};

/***/ },

/***/ 316:
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	// import debounce from 'throttle-debounce/debounce';

	exports.default = {
	  props: {
	    index: {
	      type: Number
	    },
	    row: {
	      type: Object,
	      default: function _default() {}
	    },
	    parent: Object
	  },
	  watch: {},
	  computed: {},
	  render: function render(h) {
	    var $index = this.index;
	    var row = this.row;
	    var parent = this.parent;
	    return h(
	      "tr",
	      {
	        style: parent.rowStyle ? parent.getRowStyle(row, $index) : null,
	        key: parent.table.rowKey ? parent.getKeyOfRow(row, $index) : $index,
	        on: {
	          "dblclick": function dblclick($event) {
	            return parent.handleDoubleClick($event, row);
	          },
	          "click": function click($event) {
	            return parent.handleClick($event, row);
	          },
	          "contextmenu": function contextmenu($event) {
	            return parent.handleContextMenu($event, row);
	          },
	          "mouseenter": function mouseenter(_) {
	            return parent.handleMouseEnter($index);
	          },
	          "mouseleave": function mouseleave(_) {
	            return parent.handleMouseLeave();
	          }
	        },

	        "class": [parent.getRowClass(row, $index)]
	      },
	      [this.$slots.default]
	    );
	  },
	  created: function created() {},
	  mounted: function mounted() {},
	  beforeDestroy: function beforeDestroy() {},

	  methods: {}
	};

/***/ },

/***/ 317:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _dom = __webpack_require__(123);

	var _checkbox = __webpack_require__(308);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	var _tag = __webpack_require__(271);

	var _tag2 = _interopRequireDefault(_tag);

	var _vue = __webpack_require__(55);

	var _vue2 = _interopRequireDefault(_vue);

	var _filterPanel = __webpack_require__(318);

	var _filterPanel2 = _interopRequireDefault(_filterPanel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var getAllColumns = function getAllColumns(columns) {
	  var result = [];
	  columns.forEach(function (column) {
	    if (column.children) {
	      result.push(column);
	      result.push.apply(result, getAllColumns(column.children));
	    } else {
	      result.push(column);
	    }
	  });
	  return result;
	};

	var convertToRows = function convertToRows(originColumns) {
	  var maxLevel = 1;
	  var traverse = function traverse(column, parent) {
	    if (parent) {
	      column.level = parent.level + 1;
	      if (maxLevel < column.level) {
	        maxLevel = column.level;
	      }
	    }
	    if (column.children) {
	      var colSpan = 0;
	      column.children.forEach(function (subColumn) {
	        traverse(subColumn, column);
	        colSpan += subColumn.colSpan;
	      });
	      column.colSpan = colSpan;
	    } else {
	      column.colSpan = 1;
	    }
	  };

	  originColumns.forEach(function (column) {
	    column.level = 1;
	    traverse(column);
	  });

	  var rows = [];
	  for (var i = 0; i < maxLevel; i++) {
	    rows.push([]);
	  }

	  var allColumns = getAllColumns(originColumns);

	  allColumns.forEach(function (column) {
	    if (!column.children) {
	      column.rowSpan = maxLevel - column.level + 1;
	    } else {
	      column.rowSpan = 1;
	    }
	    rows[column.level - 1].push(column);
	  });

	  return rows;
	};

	exports.default = {
	  name: 'ElTableHeader',

	  render: function render(h) {
	    var _this = this;

	    var originColumns = this.store.states.originColumns;
	    // let tmpFixedColumns = !this.fixed
	    //   ? this.columns
	    //   : this.fixed === 'right'
	    //     ? this.rightFixedColumns
	    //     : this.fixedColumns;
	    var columnRows = convertToRows(originColumns, this.columns);
	    return h(
	      'table',
	      {
	        'class': 'el-table__header',
	        attrs: { cellspacing: '0',
	          cellpadding: '0',
	          border: '0' }
	      },
	      [h(
	        'colgroup',
	        null,
	        [this._l(this.columns, function (column) {
	          return h(
	            'col',
	            {
	              attrs: {
	                name: column.id,
	                width: column.width || column.realWidth
	              },
	              key: column.id
	            },
	            []
	          );
	        }), !this.fixed && this.layout.gutterWidth ? h(
	          'col',
	          {
	            attrs: { name: 'gutter', width: this.layout.scrollY ? this.layout.gutterWidth : '' }
	          },
	          []
	        ) : '']
	      ), h(
	        'thead',
	        null,
	        [this._l(columnRows, function (columns, rowIndex) {
	          return h(
	            'tr',
	            null,
	            [_this._l(columns, function (column, cellIndex) {
	              return h(
	                'th',
	                {
	                  attrs: {
	                    colspan: column.colSpan,
	                    rowspan: column.rowSpan,

	                    class2: [column.id, column.order, column.headerAlign, column.className || '', rowIndex === 0 && _this.isCellHidden(cellIndex, columns) ? 'is-hidden' : '', !column.children ? 'is-leaf' : '', column.labelClassName, column.sortable ? 'is-sortable' : '']
	                  },
	                  on: {
	                    'mousemove': function mousemove($event) {
	                      return _this.handleMouseMove($event, column);
	                    },
	                    'mouseout': _this.handleMouseOut,
	                    'mousedown': function mousedown($event) {
	                      return _this.handleMouseDown($event, column);
	                    },
	                    'click': function click($event) {
	                      return _this.handleHeaderClick($event, column);
	                    }
	                  },

	                  'class': _this.getHeaderCellClass(rowIndex, cellIndex, columns, column), key: column.id },
	                [h(
	                  'div',
	                  { 'class': ['cell', column.filteredValue && column.filteredValue.length > 0 ? 'highlight' : '', column.labelClassName] },
	                  [column.renderHeader ? column.renderHeader.call(_this._renderProxy, h, { column: column, $index: cellIndex, store: _this.store, _self: _this.$parent.$vnode.context }) : column.label, column.sortable ? h(
	                    'span',
	                    { 'class': 'caret-wrapper', on: {
	                        'click': function click($event) {
	                          return _this.handleSortClick($event, column);
	                        }
	                      }
	                    },
	                    [h(
	                      'i',
	                      { 'class': 'sort-caret ascending', on: {
	                          'click': function click($event) {
	                            return _this.handleSortClick($event, column, 'ascending');
	                          }
	                        }
	                      },
	                      []
	                    ), h(
	                      'i',
	                      { 'class': 'sort-caret descending', on: {
	                          'click': function click($event) {
	                            return _this.handleSortClick($event, column, 'descending');
	                          }
	                        }
	                      },
	                      []
	                    )]
	                  ) : '', column.filterable ? h(
	                    'span',
	                    { 'class': 'el-table__column-filter-trigger', on: {
	                        'click': function click($event) {
	                          return _this.handleFilterClick($event, column);
	                        }
	                      }
	                    },
	                    [h(
	                      'i',
	                      { 'class': ['el-icon-arrow-down', column.filterOpened ? 'el-icon-arrow-up' : ''] },
	                      []
	                    )]
	                  ) : '']
	                )]
	              );
	            }), !_this.fixed && _this.layout.gutterWidth ? h(
	              'th',
	              { 'class': 'gutter', style: { width: _this.layout.scrollY ? _this.layout.gutterWidth + 'px' : '0' } },
	              []
	            ) : '']
	          );
	        })]
	      )]
	    );
	  },


	  props: {
	    fixed: String,
	    store: {
	      required: true
	    },
	    layout: {
	      required: true
	    },
	    border: Boolean,
	    defaultSort: {
	      type: Object,
	      default: function _default() {
	        return {
	          prop: '',
	          order: ''
	        };
	      }
	    }
	  },

	  components: {
	    ElCheckbox: _checkbox2.default,
	    ElTag: _tag2.default
	  },

	  computed: {
	    isAllSelected: function isAllSelected() {
	      return this.store.states.isAllSelected;
	    },
	    columnsCount: function columnsCount() {
	      return this.store.states.columns.length;
	    },
	    leftFixedCount: function leftFixedCount() {
	      return this.store.states.fixedColumns.length;
	    },
	    rightFixedCount: function rightFixedCount() {
	      return this.store.states.rightFixedColumns.length;
	    },
	    columns: function columns() {
	      return this.store.states.columns;
	    },
	    fixedColumns: function fixedColumns() {
	      return this.store.states.fixedColumns;
	    },
	    rightFixedColumns: function rightFixedColumns() {
	      return this.store.states.rightFixedColumns;
	    }
	  },

	  created: function created() {
	    this.filterPanels = {};
	  },
	  mounted: function mounted() {
	    var _this2 = this;

	    if (this.defaultSort.prop) {
	      (function () {
	        var states = _this2.store.states;
	        states.sortProp = _this2.defaultSort.prop;
	        states.sortOrder = _this2.defaultSort.order || 'ascending';
	        _this2.$nextTick(function (_) {
	          for (var i = 0, length = _this2.columns.length; i < length; i++) {
	            var column = _this2.columns[i];
	            if (column.property === states.sortProp) {
	              column.order = states.sortOrder;
	              states.sortingColumn = column;
	              break;
	            }
	          }

	          if (states.sortingColumn) {
	            _this2.store.commit('changeSortCondition');
	          }
	        });
	      })();
	    }
	  },
	  beforeDestroy: function beforeDestroy() {
	    var panels = this.filterPanels;
	    for (var prop in panels) {
	      if (panels.hasOwnProperty(prop) && panels[prop]) {
	        panels[prop].$destroy(true);
	      }
	    }
	  },


	  methods: {
	    isCellHidden: function isCellHidden(index, columns) {
	      if (this.fixed === true || this.fixed === 'left') {
	        return index >= this.leftFixedCount;
	      } else if (this.fixed === 'right') {
	        var before = 0;
	        for (var i = 0; i < index; i++) {
	          before += columns[i].colSpan;
	        }
	        return before < this.columnsCount - this.rightFixedCount;
	      } else {
	        return index < this.leftFixedCount || index >= this.columnsCount - this.rightFixedCount;
	      }
	    },
	    getHeaderCellClass: function getHeaderCellClass(rowIndex, columnIndex, row, column) {
	      var classes = [column.id, column.order, column.headerAlign, column.className, column.labelClassName];

	      if (rowIndex === 0 && this.isCellHidden(columnIndex, row)) {
	        classes.push('is-hidden');
	      }

	      if (!column.children) {
	        classes.push('is-leaf');
	      }

	      if (column.sortable) {
	        classes.push('is-sortable');
	      }

	      var headerCellClassName = this.$parent.headerCellClassName;
	      if (typeof headerCellClassName === 'string') {
	        classes.push(headerCellClassName);
	      } else if (typeof headerCellClassName === 'function') {
	        classes.push(headerCellClassName.call(null, {
	          rowIndex: rowIndex,
	          columnIndex: columnIndex,
	          row: row,
	          column: column
	        }));
	      }

	      return classes.join(' ');
	    },
	    toggleAllSelection: function toggleAllSelection() {
	      this.store.commit('toggleAllSelection');
	    },
	    handleFilterClick: function handleFilterClick(event, column) {
	      event.stopPropagation();
	      var target = event.target;
	      var cell = target.parentNode;
	      var table = this.$parent;

	      var filterPanel = this.filterPanels[column.id];

	      if (filterPanel && column.filterOpened) {
	        filterPanel.showPopper = false;
	        return;
	      }

	      if (!filterPanel) {
	        filterPanel = new _vue2.default(_filterPanel2.default);
	        this.filterPanels[column.id] = filterPanel;
	        if (column.filterPlacement) {
	          filterPanel.placement = column.filterPlacement;
	        }
	        filterPanel.table = table;
	        filterPanel.cell = cell;
	        filterPanel.column = column;
	        !this.$isServer && filterPanel.$mount(document.createElement('div'));
	      }

	      setTimeout(function () {
	        filterPanel.showPopper = true;
	      }, 16);
	    },
	    handleHeaderClick: function handleHeaderClick(event, column) {
	      if (!column.filters && column.sortable) {
	        this.handleSortClick(event, column);
	      } else if (column.filters && !column.sortable) {
	        this.handleFilterClick(event, column);
	      }

	      this.$parent.$emit('header-click', column, event);
	    },
	    handleMouseDown: function handleMouseDown(event, column) {
	      var _this3 = this;

	      if (this.$isServer) return;
	      if (column.children && column.children.length > 0) return;
	      /* istanbul ignore if */
	      if (this.draggingColumn && this.border) {
	        (function () {
	          _this3.dragging = true;

	          _this3.$parent.resizeProxyVisible = true;

	          var table = _this3.$parent;
	          var tableEl = table.$el;
	          var tableLeft = tableEl.getBoundingClientRect().left;
	          var columnEl = _this3.$el.querySelector('th.' + column.id);
	          var columnRect = columnEl.getBoundingClientRect();
	          var minLeft = columnRect.left - tableLeft + 30;

	          (0, _dom.addClass)(columnEl, 'noclick');

	          _this3.dragState = {
	            startMouseLeft: event.clientX,
	            startLeft: columnRect.right - tableLeft,
	            startColumnLeft: columnRect.left - tableLeft,
	            tableLeft: tableLeft
	          };

	          var resizeProxy = table.$refs.resizeProxy;
	          resizeProxy.style.left = _this3.dragState.startLeft + 'px';

	          document.onselectstart = function () {
	            return false;
	          };
	          document.ondragstart = function () {
	            return false;
	          };

	          var handleMouseMove = function handleMouseMove(event) {
	            var deltaLeft = event.clientX - _this3.dragState.startMouseLeft;
	            var proxyLeft = _this3.dragState.startLeft + deltaLeft;

	            resizeProxy.style.left = Math.max(minLeft, proxyLeft) + 'px';
	          };

	          var handleMouseUp = function handleMouseUp() {
	            if (_this3.dragging) {
	              var _dragState = _this3.dragState,
	                  startColumnLeft = _dragState.startColumnLeft,
	                  startLeft = _dragState.startLeft;

	              var finalLeft = parseInt(resizeProxy.style.left, 10);
	              var columnWidth = finalLeft - startColumnLeft;
	              column.width = column.realWidth = columnWidth;
	              // 拖动列时候响应的事件回调
	              table.$emit('header-dragend', column.width, startLeft - startColumnLeft, column, event);

	              _this3.store.scheduleLayout();

	              document.body.style.cursor = '';
	              _this3.dragging = false;
	              _this3.draggingColumn = null;
	              _this3.dragState = {};

	              table.resizeProxyVisible = false;
	            }

	            document.removeEventListener('mousemove', handleMouseMove);
	            document.removeEventListener('mouseup', handleMouseUp);
	            document.onselectstart = null;
	            document.ondragstart = null;

	            setTimeout(function () {
	              (0, _dom.removeClass)(columnEl, 'noclick');
	            }, 0);
	          };

	          document.addEventListener('mousemove', handleMouseMove);
	          document.addEventListener('mouseup', handleMouseUp);
	        })();
	      }
	    },
	    handleMouseMove: function handleMouseMove(event, column) {
	      if (column.children && column.children.length > 0) return;
	      var target = event.target;
	      while (target && target.tagName !== 'TH') {
	        target = target.parentNode;
	      }

	      if (!column || !column.resizable) return;

	      if (!this.dragging && this.border) {
	        var rect = target.getBoundingClientRect();

	        var bodyStyle = document.body.style;
	        if (rect.width > 12 && rect.right - event.pageX < 8) {
	          bodyStyle.cursor = 'col-resize';
	          if ((0, _dom.hasClass)(target, 'is-sortable')) {
	            target.style.cursor = 'col-resize';
	          }
	          this.draggingColumn = column;
	        } else if (!this.dragging) {
	          bodyStyle.cursor = '';
	          if ((0, _dom.hasClass)(target, 'is-sortable')) {
	            target.style.cursor = 'pointer';
	          }
	          this.draggingColumn = null;
	        }
	      }
	    },
	    handleMouseOut: function handleMouseOut() {
	      if (this.$isServer) return;
	      document.body.style.cursor = '';
	    },
	    toggleOrder: function toggleOrder(order) {
	      return !order ? 'ascending' : order === 'ascending' ? 'descending' : null;
	    },
	    handleSortClick: function handleSortClick(event, column, givenOrder) {
	      event.stopPropagation();
	      var order = givenOrder || this.toggleOrder(column.order);

	      var target = event.target;
	      while (target && target.tagName !== 'TH') {
	        target = target.parentNode;
	      }

	      if (target && target.tagName === 'TH') {
	        if ((0, _dom.hasClass)(target, 'noclick')) {
	          (0, _dom.removeClass)(target, 'noclick');
	          return;
	        }
	      }

	      if (!column.sortable) return;

	      var states = this.store.states;
	      var sortProp = states.sortProp;
	      var sortOrder = void 0;
	      var sortingColumn = states.sortingColumn;

	      if (sortingColumn !== column) {
	        if (sortingColumn) {
	          sortingColumn.order = null;
	        }
	        states.sortingColumn = column;
	        sortProp = column.property;
	      }

	      if (!order) {
	        sortOrder = column.order = null;
	        states.sortingColumn = null;
	        sortProp = null;
	      } else {
	        sortOrder = column.order = order;
	      }

	      states.sortProp = sortProp;
	      states.sortOrder = sortOrder;

	      this.store.commit('changeSortCondition');
	    }
	  },

	  data: function data() {
	    return {
	      draggingColumn: null,
	      dragging: false,
	      dragState: {}
	    };
	  }
	};

/***/ },

/***/ 318:
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(319),
	  /* template */
	  __webpack_require__(322),
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)

	module.exports = Component.exports


/***/ },

/***/ 319:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _vuePopper = __webpack_require__(13);

	var _vuePopper2 = _interopRequireDefault(_vuePopper);

	var _popup = __webpack_require__(138);

	var _locale = __webpack_require__(61);

	var _locale2 = _interopRequireDefault(_locale);

	var _clickoutside = __webpack_require__(10);

	var _clickoutside2 = _interopRequireDefault(_clickoutside);

	var _dropdown = __webpack_require__(320);

	var _dropdown2 = _interopRequireDefault(_dropdown);

	var _checkbox = __webpack_require__(308);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	var _checkboxGroup = __webpack_require__(321);

	var _checkboxGroup2 = _interopRequireDefault(_checkboxGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'ElTableFilterPanel',

	  mixins: [_vuePopper2.default, _locale2.default],

	  directives: {
	    Clickoutside: _clickoutside2.default
	  },

	  components: {
	    ElCheckbox: _checkbox2.default,
	    ElCheckboxGroup: _checkboxGroup2.default
	  },

	  props: {
	    placement: {
	      type: String,
	      default: 'bottom-end'
	    }
	  },

	  customRender: function customRender(h) {
	    return h(
	      'div',
	      { 'class': 'el-table-filter' },
	      [h(
	        'div',
	        { 'class': 'el-table-filter__content' },
	        []
	      ), h(
	        'div',
	        { 'class': 'el-table-filter__bottom' },
	        [h(
	          'button',
	          {
	            on: {
	              'click': this.handleConfirm
	            }
	          },
	          [this.t('el.table.confirmFilter')]
	        ), h(
	          'button',
	          {
	            on: {
	              'click': this.handleReset
	            }
	          },
	          [this.t('el.table.resetFilter')]
	        )]
	      )]
	    );
	  },


	  methods: {
	    isActive: function isActive(filter) {
	      return filter.value === this.filterValue;
	    },
	    handleOutsideClick: function handleOutsideClick() {
	      this.showPopper = false;
	    },
	    handleConfirm: function handleConfirm() {
	      this.confirmFilter(this.filteredValue);
	      this.handleOutsideClick();
	    },
	    handleReset: function handleReset() {
	      this.filteredValue = [];
	      this.confirmFilter(this.filteredValue);
	      this.handleOutsideClick();
	    },
	    handleSelect: function handleSelect(filterValue) {
	      this.filterValue = filterValue;

	      if (typeof filterValue !== 'undefined' && filterValue !== null) {
	        this.confirmFilter(this.filteredValue);
	      } else {
	        this.confirmFilter([]);
	      }

	      this.handleOutsideClick();
	    },
	    confirmFilter: function confirmFilter(filteredValue) {
	      this.table.store.commit('filterChange', {
	        column: this.column,
	        values: filteredValue
	      });
	    }
	  },

	  data: function data() {
	    return {
	      table: null,
	      cell: null,
	      column: null
	    };
	  },


	  computed: {
	    filters: function filters() {
	      return this.column && this.column.filters;
	    },


	    filterValue: {
	      get: function get() {
	        return (this.column.filteredValue || [])[0];
	      },
	      set: function set(value) {
	        if (this.filteredValue) {
	          if (typeof value !== 'undefined' && value !== null) {
	            this.filteredValue.splice(0, 1, value);
	          } else {
	            this.filteredValue.splice(0, 1);
	          }
	        }
	      }
	    },

	    filteredValue: {
	      get: function get() {
	        if (this.column) {
	          return this.column.filteredValue || [];
	        }
	        return [];
	      },
	      set: function set(value) {
	        if (this.column) {
	          this.column.filteredValue = value;
	        }
	      }
	    },

	    multiple: function multiple() {
	      if (this.column) {
	        return this.column.filterMultiple;
	      }
	      return true;
	    }
	  },

	  mounted: function mounted() {
	    var _this = this;

	    this.popperElm = this.$el;
	    this.referenceElm = this.cell;
	    this.table.bodyWrapper.addEventListener('scroll', function () {
	      _this.updatePopper();
	    });

	    this.$watch('showPopper', function (value) {
	      if (_this.column) _this.column.filterOpened = value;
	      if (value) {
	        _dropdown2.default.open(_this);
	      } else {
	        _dropdown2.default.close(_this);
	      }
	    });
	  },

	  watch: {
	    showPopper: function showPopper(val) {
	      if (val === true && parseInt(this.popperJS._popper.style.zIndex, 10) < _popup.PopupManager.zIndex) {
	        this.popperJS._popper.style.zIndex = _popup.PopupManager.nextZIndex();
	      }
	    }
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },

/***/ 320:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _vue = __webpack_require__(55);

	var _vue2 = _interopRequireDefault(_vue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var dropdowns = [];

	!_vue2.default.prototype.$isServer && document.addEventListener('click', function (event) {
	  dropdowns.forEach(function (dropdown) {
	    var target = event.target;
	    if (!dropdown || !dropdown.$el) return;
	    if (target === dropdown.$el || dropdown.$el.contains(target)) {
	      return;
	    }
	    dropdown.handleOutsideClick && dropdown.handleOutsideClick(event);
	  });
	});

	exports.default = {
	  open: function open(instance) {
	    if (instance) {
	      dropdowns.push(instance);
	    }
	  },
	  close: function close(instance) {
	    var index = dropdowns.indexOf(instance);
	    if (index !== -1) {
	      dropdowns.splice(instance, 1);
	    }
	  }
	};

/***/ },

/***/ 321:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/checkbox-group");

/***/ },

/***/ 322:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('transition', {
	    attrs: {
	      "name": "el-zoom-in-top"
	    }
	  }, [(_vm.multiple) ? _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.showPopper),
	      expression: "showPopper"
	    }],
	    staticClass: "el-table-filter"
	  }, [_c('div', {
	    staticClass: "el-table-filter__content"
	  }, [_c('el-checkbox-group', {
	    staticClass: "el-table-filter__checkbox-group",
	    model: {
	      value: (_vm.filteredValue),
	      callback: function($$v) {
	        _vm.filteredValue = $$v
	      },
	      expression: "filteredValue"
	    }
	  }, _vm._l((_vm.filters), function(filter) {
	    return _c('el-checkbox', {
	      key: filter.value,
	      attrs: {
	        "label": filter.value
	      }
	    }, [_vm._v(_vm._s(filter.text))])
	  }))], 1), _c('div', {
	    staticClass: "el-table-filter__bottom"
	  }, [_c('button', {
	    class: {
	      'is-disabled': _vm.filteredValue.length === 0
	    },
	    attrs: {
	      "disabled": _vm.filteredValue.length === 0
	    },
	    on: {
	      "click": _vm.handleConfirm
	    }
	  }, [_vm._v(_vm._s(_vm.t('el.table.confirmFilter')))]), _c('button', {
	    on: {
	      "click": _vm.handleReset
	    }
	  }, [_vm._v(_vm._s(_vm.t('el.table.resetFilter')))])])]) : _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.showPopper),
	      expression: "showPopper"
	    }],
	    staticClass: "el-table-filter"
	  }, [_c('ul', {
	    staticClass: "el-table-filter__list"
	  }, [_c('li', {
	    staticClass: "el-table-filter__list-item",
	    class: {
	      'is-active': _vm.filterValue === undefined || _vm.filterValue === null
	    },
	    on: {
	      "click": function($event) {
	        _vm.handleSelect(null)
	      }
	    }
	  }, [_vm._v(_vm._s(_vm.t('el.table.clearFilter')))]), _vm._l((_vm.filters), function(filter) {
	    return _c('li', {
	      key: filter.value,
	      staticClass: "el-table-filter__list-item",
	      class: {
	        'is-active': _vm.isActive(filter)
	      },
	      attrs: {
	        "label": filter.value
	      },
	      on: {
	        "click": function($event) {
	          _vm.handleSelect(filter.value)
	        }
	      }
	    }, [_vm._v(_vm._s(filter.text))])
	  })], 2)])])
	},staticRenderFns: []}

/***/ },

/***/ 323:
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = {
	  name: 'ElTableFooter',

	  render: function render(h) {
	    var _this = this;

	    var sums = [];
	    this.columns.forEach(function (column, index) {
	      if (index === 0) {
	        sums[index] = _this.sumText;
	        return;
	      }
	      var values = _this.store.states.data.map(function (item) {
	        return Number(item[column.property]);
	      });
	      var precisions = [];
	      var notNumber = true;
	      values.forEach(function (value) {
	        if (!isNaN(value)) {
	          notNumber = false;
	          var decimal = ('' + value).split('.')[1];
	          precisions.push(decimal ? decimal.length : 0);
	        }
	      });
	      var precision = Math.max.apply(null, precisions);
	      if (!notNumber) {
	        sums[index] = values.reduce(function (prev, curr) {
	          var value = Number(curr);
	          if (!isNaN(value)) {
	            return parseFloat((prev + curr).toFixed(Math.min(precision, 20)));
	          } else {
	            return prev;
	          }
	        }, 0);
	      } else {
	        sums[index] = '';
	      }
	    });

	    return h(
	      'table',
	      {
	        'class': 'el-table__footer',
	        attrs: { cellspacing: '0',
	          cellpadding: '0',
	          border: '0' }
	      },
	      [h(
	        'colgroup',
	        null,
	        [this._l(this.columns, function (column) {
	          return h(
	            'col',
	            {
	              attrs: {
	                name: column.id,
	                width: column.width || column.realWidth
	              }
	            },
	            []
	          );
	        }), !this.fixed && this.layout.gutterWidth ? h(
	          'col',
	          {
	            attrs: { name: 'gutter', width: this.layout.scrollY ? this.layout.gutterWidth : '' }
	          },
	          []
	        ) : '']
	      ), h(
	        'tbody',
	        null,
	        [h(
	          'tr',
	          null,
	          [this._l(this.columns, function (column, cellIndex) {
	            return h(
	              'td',
	              {
	                key: cellIndex,
	                attrs: { colspan: column.colSpan,
	                  rowspan: column.rowSpan,

	                  class2: [column.id, column.headerAlign, column.className || '', _this.isCellHidden(cellIndex, _this.columns) ? 'is-hidden' : '', !column.children ? 'is-leaf' : '', column.labelClassName] },
	                'class': _this.getFooterCellClass(cellIndex, _this.columns, column) },
	              [h(
	                'div',
	                { 'class': ['cell', column.labelClassName] },
	                [_this.summaryMethod ? _this.summaryMethod({ columns: _this.columns, data: _this.store.states.data })[cellIndex] : sums[cellIndex]]
	              )]
	            );
	          }), !this.fixed && this.layout.gutterWidth ? h(
	            'td',
	            { 'class': 'gutter', style: { width: this.layout.scrollY ? this.layout.gutterWidth + 'px' : '0' } },
	            []
	          ) : '']
	        )]
	      )]
	    );
	  },


	  props: {
	    fixed: String,
	    store: {
	      required: true
	    },
	    layout: {
	      required: true
	    },
	    summaryMethod: Function,
	    sumText: String,
	    border: Boolean,
	    defaultSort: {
	      type: Object,
	      default: function _default() {
	        return {
	          prop: '',
	          order: ''
	        };
	      }
	    }
	  },

	  computed: {
	    isAllSelected: function isAllSelected() {
	      return this.store.states.isAllSelected;
	    },
	    columnsCount: function columnsCount() {
	      return this.store.states.columns.length;
	    },
	    leftFixedCount: function leftFixedCount() {
	      return this.store.states.fixedColumns.length;
	    },
	    rightFixedCount: function rightFixedCount() {
	      return this.store.states.rightFixedColumns.length;
	    },
	    columns: function columns() {
	      return this.store.states.columns;
	    }
	  },

	  methods: {
	    isCellHidden: function isCellHidden(index, columns) {
	      if (this.fixed === true || this.fixed === 'left') {
	        return index >= this.leftFixedCount;
	      } else if (this.fixed === 'right') {
	        var before = 0;
	        for (var i = 0; i < index; i++) {
	          before += columns[i].colSpan;
	        }
	        return before < this.columnsCount - this.rightFixedCount;
	      } else {
	        return index < this.leftFixedCount || index >= this.columnsCount - this.rightFixedCount;
	      }
	    },
	    getFooterCellClass: function getFooterCellClass(columnIndex, row, column) {
	      var classes = [column.id, column.headerAlign, column.className, column.labelClassName];
	      if (this.isCellHidden(columnIndex, row)) {
	        classes.push('is-hidden');
	      }
	      if (!column.children) {
	        classes.push('is-leaf');
	      }
	      return classes.join(' ');
	    }
	  }
	};

/***/ },

/***/ 324:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "el-table",
	    class: {
	      'el-table--fit': _vm.fit,
	      'el-table--striped': _vm.stripe,
	      'el-table--border': _vm.border,
	      'el-table--fluid-height': _vm.maxHeight,
	      'el-table--enable-row-hover': !_vm.store.states.isComplex,
	        'el-table--enable-row-transition': (_vm.store.states.data || []).length !== 0 && (_vm.store.states.data || []).length < 100
	    },
	    on: {
	      "mouseleave": function($event) {
	        _vm.handleMouseLeave($event)
	      }
	    }
	  }, [_c('div', {
	    ref: "hiddenColumns",
	    staticClass: "hidden-columns"
	  }, [_vm._t("default")], 2), (_vm.showHeader) ? _c('div', {
	    ref: "headerWrapper",
	    staticClass: "el-table__header-wrapper"
	  }, [_c('table-header', {
	    style: ({
	      width: _vm.layout.bodyWidth ? _vm.layout.bodyWidth + 'px' : ''
	    }),
	    attrs: {
	      "store": _vm.store,
	      "layout": _vm.layout,
	      "border": _vm.border,
	      "default-sort": _vm.defaultSort
	    }
	  })], 1) : _vm._e(), _c('div', {
	    ref: "bodyWrapper",
	    staticClass: "el-table__body-wrapper",
	    style: ([_vm.bodyHeight, {
	      'overflow-x': _vm.layout.scrollX ? '' : 'hidden'
	    }])
	  }, [_c('table-body', {
	    style: ({
	      width: _vm.bodyWidth
	    }),
	    attrs: {
	      "context": _vm.context,
	      "store": _vm.store,
	      "stripe": _vm.stripe,
	      "layout": _vm.layout,
	      "row-height": _vm.rowHeight,
	      "row-line-number": _vm.rowLineNumber,
	      "row-class-name": _vm.rowClassName,
	      "row-style": _vm.rowStyle,
	      "column-width": _vm.columnWidth,
	      "highlight": _vm.highlightCurrentRow
	    }
	  }), (!_vm.data || _vm.data.length === 0) ? _c('div', {
	    staticClass: "el-table__empty-block",
	    style: ({
	      width: _vm.bodyWidth
	    })
	  }, [_c('span', {
	    staticClass: "el-table__empty-text"
	  }, [_vm._t("empty", [_vm._v(_vm._s(_vm.emptyText || _vm.t('el.table.emptyText')))])], 2)]) : _vm._e()], 1), (_vm.showSummary) ? _c('div', {
	    directives: [{
	      name: "mousewheel",
	      rawName: "v-mousewheel",
	      value: (_vm.handleHeaderFooterMousewheel),
	      expression: "handleHeaderFooterMousewheel"
	    }, {
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.data && _vm.data.length > 0),
	      expression: "data && data.length > 0"
	    }],
	    ref: "footerWrapper",
	    staticClass: "el-table__footer-wrapper"
	  }, [_c('table-footer', {
	    style: ({
	      width: _vm.layout.bodyWidth ? _vm.layout.bodyWidth + 'px' : ''
	    }),
	    attrs: {
	      "store": _vm.store,
	      "layout": _vm.layout,
	      "border": _vm.border,
	      "sum-text": _vm.sumText || _vm.t('el.table.sumText'),
	      "summary-method": _vm.summaryMethod,
	      "default-sort": _vm.defaultSort
	    }
	  })], 1) : _vm._e(), (_vm.fixedColumns.length > 0) ? _c('div', {
	    directives: [{
	      name: "mousewheel",
	      rawName: "v-mousewheel",
	      value: (_vm.handleFixedMousewheel),
	      expression: "handleFixedMousewheel"
	    }],
	    ref: "fixedWrapper",
	    staticClass: "el-table__fixed",
	    style: ([{
	        width: _vm.layout.fixedWidth ? _vm.layout.fixedWidth + 'px' : ''
	      },
	      _vm.fixedHeight
	    ])
	  }, [(_vm.showHeader) ? _c('div', {
	    ref: "fixedHeaderWrapper",
	    staticClass: "el-table__fixed-header-wrapper"
	  }, [_c('table-header', {
	    style: ({
	      width: _vm.layout.fixedWidth ? _vm.layout.fixedWidth + 'px' : ''
	    }),
	    attrs: {
	      "fixed": "left",
	      "border": _vm.border,
	      "store": _vm.store,
	      "layout": _vm.layout
	    }
	  })], 1) : _vm._e(), _c('div', {
	    ref: "fixedBodyWrapper",
	    staticClass: "el-table__fixed-body-wrapper",
	    style: ([{
	        top: _vm.layout.headerHeight + 'px'
	      },
	      _vm.fixedBodyHeight
	    ])
	  }, [_c('table-body', {
	    style: ({
	      width: _vm.layout.fixedWidth ? _vm.layout.fixedWidth + 'px' : ''
	    }),
	    attrs: {
	      "fixed": "left",
	      "store": _vm.store,
	      "stripe": _vm.stripe,
	      "layout": _vm.layout,
	      "highlight": _vm.highlightCurrentRow,
	      "row-class-name": _vm.rowClassName,
	      "row-line-number": _vm.rowLineNumber,
	      "row-height": _vm.rowHeight,
	      "row-style": _vm.rowStyle,
	      "column-width": _vm.columnWidth
	    }
	  })], 1), (_vm.showSummary) ? _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.data && _vm.data.length > 0),
	      expression: "data && data.length > 0"
	    }],
	    ref: "fixedFooterWrapper",
	    staticClass: "el-table__fixed-footer-wrapper"
	  }, [_c('table-footer', {
	    style: ({
	      width: _vm.layout.fixedWidth ? _vm.layout.fixedWidth + 'px' : ''
	    }),
	    attrs: {
	      "fixed": "left",
	      "border": _vm.border,
	      "sum-text": _vm.sumText || _vm.t('el.table.sumText'),
	      "summary-method": _vm.summaryMethod,
	      "store": _vm.store,
	      "layout": _vm.layout
	    }
	  })], 1) : _vm._e()]) : _vm._e(), (_vm.rightFixedColumns.length > 0) ? _c('div', {
	    directives: [{
	      name: "mousewheel",
	      rawName: "v-mousewheel",
	      value: (_vm.handleFixedMousewheel),
	      expression: "handleFixedMousewheel"
	    }],
	    ref: "rightFixedWrapper",
	    staticClass: "el-table__fixed-right",
	    style: ([{
	        width: _vm.layout.rightFixedWidth ? _vm.layout.rightFixedWidth + 'px' : ''
	      }, {
	        right: _vm.layout.scrollY ? (_vm.border ? _vm.layout.gutterWidth : (_vm.layout.gutterWidth || 1)) + 'px' : ''
	      },
	      _vm.fixedHeight
	    ])
	  }, [(_vm.showHeader) ? _c('div', {
	    ref: "rightFixedHeaderWrapper",
	    staticClass: "el-table__fixed-header-wrapper"
	  }, [_c('table-header', {
	    style: ({
	      width: _vm.layout.rightFixedWidth ? _vm.layout.rightFixedWidth + 'px' : ''
	    }),
	    attrs: {
	      "fixed": "right",
	      "border": _vm.border,
	      "store": _vm.store,
	      "layout": _vm.layout
	    }
	  })], 1) : _vm._e(), _c('div', {
	    ref: "rightFixedBodyWrapper",
	    staticClass: "el-table__fixed-body-wrapper",
	    style: ([{
	        top: _vm.layout.headerHeight + 'px'
	      },
	      _vm.fixedBodyHeight
	    ])
	  }, [_c('table-body', {
	    style: ({
	      width: _vm.layout.rightFixedWidth ? _vm.layout.rightFixedWidth + 'px' : ''
	    }),
	    attrs: {
	      "fixed": "right",
	      "store": _vm.store,
	      "stripe": _vm.stripe,
	      "layout": _vm.layout,
	      "row-class-name": _vm.rowClassName,
	      "row-line-number": _vm.rowLineNumber,
	      "row-height": _vm.rowHeight,
	      "row-style": _vm.rowStyle,
	      "column-width": _vm.columnWidth,
	      "highlight": _vm.highlightCurrentRow
	    }
	  })], 1), (_vm.showSummary) ? _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.data && _vm.data.length > 0),
	      expression: "data && data.length > 0"
	    }],
	    ref: "rightFixedFooterWrapper",
	    staticClass: "el-table__fixed-footer-wrapper"
	  }, [_c('table-footer', {
	    style: ({
	      width: _vm.layout.rightFixedWidth ? _vm.layout.rightFixedWidth + 'px' : ''
	    }),
	    attrs: {
	      "fixed": "right",
	      "border": _vm.border,
	      "sum-text": _vm.sumText || _vm.t('el.table.sumText'),
	      "summary-method": _vm.summaryMethod,
	      "store": _vm.store,
	      "layout": _vm.layout
	    }
	  })], 1) : _vm._e()]) : _vm._e(), (_vm.rightFixedColumns.length > 0) ? _c('div', {
	    staticClass: "el-table__fixed-right-patch",
	    style: ({
	      width: _vm.layout.scrollY ? _vm.layout.gutterWidth + 'px' : '0',
	      height: _vm.layout.headerHeight + 'px'
	    })
	  }) : _vm._e(), _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.resizeProxyVisible),
	      expression: "resizeProxyVisible"
	    }],
	    ref: "resizeProxy",
	    staticClass: "el-table__column-resize-proxy"
	  })])
	},staticRenderFns: []}

/***/ }

/******/ });