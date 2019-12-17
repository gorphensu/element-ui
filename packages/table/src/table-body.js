import { getCell, getColumnByCell, getRowIdentity } from './util';
import { hasClass, addClass, removeClass } from 'element-ui/src/utils/dom';
import ElCheckbox from 'element-ui/packages/checkbox';
import ElTooltip from 'element-ui/packages/tooltip';
import TableBodyRow from './table-body-row';
import { optimizeConfig } from './config';
import throttle from 'throttle-debounce/throttle';
import debounce from 'throttle-debounce/debounce';

export default {
  components: {
    ElCheckbox,
    ElTooltip,
    TableBodyRow
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
  render2(h) {
    // let tmpFixedColumns = this.columns;
    // if (this.rowHeight) {
    //   tmpFixedColumns = !this.fixed
    //   ? this.columns
    //   : this.fixed === 'right'
    //     ? this.rightFixedColumns
    //     : this.fixedColumns;
    // }
    const columnsHidden = this.tmpFixedColumns.map((column, index) => this.isColumnHidden(index));
    return (
      <table
        class="el-table__body"
        cellspacing="0"
        cellpadding="0"
        border="0">
        <colgroup>
          {
            this._l(this.tmpFixedColumns, column =>
              <col
                name={ column.id }
                width={ column.width || column.realWidth }
                key={ column.id }
              />)
          }
        </colgroup>
        <tbody>
          {
            this._l(this.visibleData, (row, $index) =>
              [
                <tr
                    style={ [this.rowStyle ? this.getRowStyle(row, $index) : null, this.trRowHeightStyle] }
                    key={ this.table.rowKey ? this.getKeyOfRow(row, $index) : $index }
                    on-dblclick={ ($event) => this.handleDoubleClick($event, row) }
                    on-click={ ($event) => this.handleClick($event, row) }
                    on-contextmenu={ ($event) => this.handleContextMenu($event, row) }
                    on-mouseenter={ _ => this.handleMouseEnter($index) }
                    on-mouseleave={ _ => this.handleMouseLeave() }
                    class={ [this.getRowClass(row, $index)] }>
                    {
                      this._l(this.tmpFixedColumns, (column, cellIndex) => {
                        const { rowspan, colspan } = this.getSpan(row, column, $index, cellIndex);
                        if (!rowspan || !colspan) {
                          return null;
                        }
                        return (<td
                          rowspan={ rowspan }
                          colspan={ colspan }
                          style={this.rowHeightStyle}
                          class={ [column.id, column.align, column.className || '', columnsHidden[cellIndex] ? 'is-hidden-deprecated' : '' ] }
                          on-mouseenter={ ($event) => this.handleCellMouseEnter($event, row) }
                          on-mouseleave={ this.handleCellMouseLeave }>
                          {
                            column.renderCell.call(this._renderProxy, h, { row, column, $index, store: this.store, _self: this.context || this.table.$vnode.context }, columnsHidden[cellIndex])
                          }
                        </td>)
                      }
                      )
                    }
                    {
                      !this.fixed && this.layout.scrollY && this.layout.gutterWidth ? <td class="gutter" /> : ''
                    }
                  </tr>,
                this.store.states.expandRows.indexOf(row) > -1
                ? (<tr>
                    <td style={this.rowHeightStyle} colspan={ this.tmpFixedColumns.length } class="el-table__expanded-cell">
                      { this.table.renderExpanded ? this.table.renderExpanded(h, { row, $index, store: this.store }) : ''}
                    </td>
                  </tr>)
                : ''
              ]
            ).concat(
              this._self.$parent.$slots.append
            ).concat(
              <el-tooltip effect={ this.table.tooltipEffect } placement="top" ref="tooltip" content={ this.tooltipContent }></el-tooltip>
            )
          }
        </tbody>
      </table>
    );
  },
  render(h) {
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
    const columnsHidden = this.tmpFixedColumns.map((column, index) => this.isColumnHidden(index));
    return (
      <div
        class={['el-table__virtual-wrapper', {'el-table--fixed__virtual-wrapper': this.fixed}]}
        style={{height: this.table.virtualBodyHeight + 'px', width: this.table.virtualBodyWidth + 'px'}} >
        <div style={[{transform: `translate(${this.fixed ? 0 : 0}px, ${this.innerTop}px)`}]}>
        <table
          class="el-table__body"
          cellspacing="0"
          cellpadding="0"
          border="0">
          <colgroup>
            {
              this._l(this.tmpFixedColumns, column =>
                <col
                  name={ column.id }
                  width={ column.width || column.realWidth }
                  key={ column.id }
                />)
            }
          </colgroup>
          <tbody>
            {
              this._l(this.visibleData, (row, $index) =>
                [
                  <tr
                    style={ [this.rowStyle ? this.getRowStyle(row, $index) : null, this.trRowHeightStyle] }
                    key={ this.table.rowKey ? this.getKeyOfRow(row, $index) : $index }
                    on-dblclick={ ($event) => this.handleDoubleClick($event, row) }
                    on-click={ ($event) => this.handleClick($event, row) }
                    on-contextmenu={ ($event) => this.handleContextMenu($event, row) }
                    on-mouseenter={ _ => this.handleMouseEnter($index) }
                    on-mouseleave={ _ => this.handleMouseLeave() }
                    class={ [this.getRowClass(row, $index)] }>
                    {
                      this._l(this.tmpFixedColumns, (column, cellIndex) => {
                        const { rowspan, colspan } = this.getSpan(row, column, $index, cellIndex);
                        if (!rowspan || !colspan) {
                          return null;
                        }
                        return (<td
                          style={this.rowHeightStyle}
                          class={ [column.id, column.align, column.className || '', columnsHidden[cellIndex] ? 'is-hidden-deprecated' : '' ] }
                          on-mouseenter={ ($event) => this.handleCellMouseEnter($event, row) }
                          on-mouseleave={ this.handleCellMouseLeave }>
                          {
                            column.renderCell.call(this._renderProxy, h, { row, column, $index, store: this.store, _self: this.context || this.table.$vnode.context }, columnsHidden[cellIndex])
                          }
                        </td>)
                      }
                      )
                    }
                    {
                      !this.fixed && this.layout.scrollY && this.layout.gutterWidth ? <td class="gutter" /> : ''
                    }
                  </tr>,
                  this.store.states.expandRows.indexOf(row) > -1
                  ? (<tr>
                      <td style={this.rowHeightStyle} colspan={ this.tmpFixedColumns.length } class="el-table__expanded-cell">
                        { this.table.renderExpanded ? this.table.renderExpanded(h, { row, $index, store: this.store }) : ''}
                      </td>
                    </tr>)
                  : ''
                ]
              ).concat(
                this._self.$parent.$slots.append
              ).concat(
                <el-tooltip effect={ this.table.tooltipEffect } placement="top" ref="tooltip" content={ this.tooltipContent }></el-tooltip>
              )
            }
          </tbody>
        </table>
        </div>
      </div>
    );
  },

  watch: {
    'store.states.hoverRow'(newVal, oldVal) {
      if (!this.store.states.isComplex) return;
      const el = this.$el;
      if (!el) return;
      const rows = el.querySelectorAll('tbody > tr.el-table__row');
      const oldRow = rows[oldVal];
      const newRow = rows[newVal];
      if (oldRow) {
        removeClass(oldRow, 'hover-row');
      }
      if (newRow) {
        addClass(newRow, 'hover-row');
      }
    },
    'store.states.currentRow'(newVal, oldVal) {
      if (!this.highlight) return;
      const el = this.$el;
      if (!el) return;
      const data = this.store.states.data;
      const rows = el.querySelectorAll('tbody > tr.el-table__row');
      const oldRow = rows[data.indexOf(oldVal)];
      const newRow = rows[data.indexOf(newVal)];
      if (oldRow) {
        removeClass(oldRow, 'current-row');
      } else if (rows) {
        [].forEach.call(rows, row => removeClass(row, 'current-row'));
      }
      if (newRow) {
        addClass(newRow, 'current-row');
      }
    },
    'tmpFixedColumns'(newVal, oldVal) {
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
    tmpFixedColumns() {
      let tmpFixedColumns = this.columns;
      if (this.rowHeight) {
        tmpFixedColumns = !this.fixed
        ? this.columns
        : this.fixed === 'right'
          ? this.rightFixedColumns
          : this.fixedColumns;
      }
      // if (this.table.optimizeX && !this.fixed) {
      //   tmpFixedColumns = tmpFixedColumns.slice(this.startColumnIndex, this.endColumnIndex);
      // }
      return tmpFixedColumns;
    },
    visibleData() {
      if (this.table.optimizeY && this.rowHeight) {
        return this.data.slice(this.startIndex, this.endIndex);
      }
      return this.data
    },
    rowHeightStyle() {
      if (!this.rowHeight) {
        return {}
      }
      if (this.rowLineNumber) {
        return {
          height: this.rowHeight + 'px'
        }
      }
      return {}
    },
    trRowHeightStyle() {
      if (!this.rowHeight) {
        return {}
      }
      return {
        height: this.rowHeight + 'px'
      }
    },
    table() {
      return this.$parent;
    },

    data() {
      return this.store.states.data;
    },

    columnsCount() {
      return this.store.states.columns.length;
    },

    leftFixedCount() {
      return this.store.states.fixedColumns.length;
    },

    rightFixedCount() {
      return this.store.states.rightFixedColumns.length;
    },

    columns() {
      return this.store.states.columns;
    },
    fixedColumns() {
      return this.store.states.fixedColumns;
    },
    rightFixedColumns() {
      return this.store.states.rightFixedColumns;
    }
  },

  data() {
    return {
      tooltipContent: '',
      startIndex: 0,
      endIndex: optimizeConfig.defaultVisibleRowSize - 1,
      visibleCount: optimizeConfig.defaultVisibleRowSize,
      scrollTop: 0,
      excessRows: 3,
      innerTop: 0,

      scrollLeft: 0,
      startColumnIndex: 0,
      endColumnIndex: 0,
      visibleColumnCount: optimizeConfig.defaultVisibleColumnSize,
      innerLeft: 0
    };
  },

  created() {
    this.activateTooltip = debounce(50, tooltip => tooltip.handleShowPopper());
    // this.throttleScrollEvent = debounce(50, (e) => this.scrollEvent(e));
    this.throttleScrollEvent = this.scrollEvent;
    this.visibleCount = this.table.visibleRowCount;
    this.endIndex = this.startIndex + this.visibleCount;

    this.endColumnIndex = this.startColumnIndex + this.visibleColumnCount;
  },

  mounted() {
    // 行懒加载优化
    if ((this.table.optimizeY && this.rowHeight) || this.table.optimizeX) {
      this.bindEvent();
    }
    if (this.table.optimizeX) {
      this.scrollXEvent(0);
      this.store.initScrollShowColumns(this.startColumnIndex, this.endColumnIndex);
    }
  },

  beforeDestroy() {
    // 行懒加载优化
    if ((this.table.optimizeY && this.rowHeight) || this.table.optimizeX) {
      this.unbindEvent();
    }
  },

  methods: {
    getVisibleCount() {
      let bodyWrapper = this.table && this.table.bodyWrapper;
      if (bodyWrapper) {
        let scrollTop = bodyWrapper.scrollTop;
        let clientHeight = bodyWrapper.offsetHeight;
        return Math.ceil(clientHeight / this.rowHeight);
      }
      return optimizeConfig.defaultVisibleRowSize
    },
    getKeyOfRow(row, index) {
      const rowKey = this.table.rowKey;
      if (rowKey) {
        return getRowIdentity(row, rowKey);
      }
      return index;
    },
    // TODO 没用了
    isColumnHidden(index) {
      if (this.fixed === true || this.fixed === 'left') {
        return index >= this.leftFixedCount;
      } else if (this.fixed === 'right') {
        return index < this.columnsCount - this.rightFixedCount;
      } else {
        return (index < this.leftFixedCount) || (index >= this.columnsCount - this.rightFixedCount);
      }
    },

    getSpan(row, column, rowIndex, columnIndex) {
      let rowspan = 1;
      let colspan = 1;
      const fn = this.table.spanMethod;
      if (typeof fn === 'function') {
        const result = fn({
          row,
          column,
          rowIndex,
          columnIndex
        });
        if (Array.isArray(result)) {
          rowspan = result[0];
          colspan = result[1];
        } else if (typeof result === 'object') {
          rowspan = result.rowspan;
          colspan = result.colspan;
        }
      }
      return { rowspan, colspan };
    },

    getRowStyle(row, index) {
      const rowStyle = this.rowStyle;
      if (typeof rowStyle === 'function') {
        return rowStyle.call(null, row, index);
      }
      return rowStyle;
    },

    getRowClass(row, index) {
      const classes = ['el-table__row'];

      if (this.stripe && index % 2 === 1) {
        classes.push('el-table__row--striped');
      }
      const rowClassName = this.rowClassName;
      if (typeof rowClassName === 'string') {
        classes.push(rowClassName);
      } else if (typeof rowClassName === 'function') {
        classes.push(rowClassName.call(null, row, index) || '');
      }

      return classes.join(' ');
    },

    handleCellMouseEnter(event, row) {
      const table = this.table;
      const cell = getCell(event);

      if (cell) {
        const column = getColumnByCell(table, cell);
        const hoverState = table.hoverState = {cell, column, row};
        table.$emit('cell-mouse-enter', hoverState.row, hoverState.column, hoverState.cell, event);
      }

      // 判断是否text-overflow, 如果是就显示tooltip
      const cellChild = event.target.querySelector('.cell');

      if ((hasClass(cellChild, 'el-tooltip') && cellChild.scrollWidth >= cellChild.offsetWidth)) {
        const tooltip = this.$refs.tooltip;
        if (!this.tooltipContent) {
          return
        }
        this.tooltipContent = cell.innerText;
        tooltip.referenceElm = cell;
        tooltip.$refs.popper && (tooltip.$refs.popper.style.display = 'none');
        tooltip.doDestroy();
        tooltip.setExpectedState(true);
        this.activateTooltip(tooltip);
      }
    },

    handleCellMouseLeave(event) {
      const tooltip = this.$refs.tooltip;
      if (tooltip) {
        tooltip.setExpectedState(false);
        tooltip.handleClosePopper();
      }
      const cell = getCell(event);
      if (!cell) return;

      const oldHoverState = this.table.hoverState;
      this.table.$emit('cell-mouse-leave', oldHoverState.row, oldHoverState.column, oldHoverState.cell, event);
    },

    handleMouseEnter(index) {
      this.store.commit('setHoverRow', index);
    },

    handleMouseLeave() {
      this.store.commit('setHoverRow', null);
    },

    handleContextMenu(event, row) {
      this.handleEvent(event, row, 'contextmenu');
    },

    handleDoubleClick(event, row) {
      this.handleEvent(event, row, 'dblclick');
    },

    handleClick(event, row) {
      this.store.commit('setCurrentRow', row);
      this.handleEvent(event, row, 'click');
    },

    handleEvent(event, row, name) {
      const table = this.table;
      const cell = getCell(event);
      let column;
      if (cell) {
        column = getColumnByCell(table, cell);
        if (column) {
          table.$emit(`cell-${name}`, row, column, cell, event);
        }
      }
      table.$emit(`row-${name}`, row, event, column);
    },

    handleExpandClick(row) {
      this.store.commit('toggleRowExpanded', row);
    },
    bindEvent() {
      this.table.bodyWrapper && this.table.bodyWrapper.addEventListener('scroll', this.throttleScrollEvent, {
        passive: true
      });
    },
    unbindEvent() {
      this.table.bodyWrapper && this.table.bodyWrapper.removeEventListener('scroll', this.throttleScrollEvent);
    },
    scrollEvent(e) {
      // if ((this.table.optimizeY && this.rowHeight) || this.table.optimizeX)

      let bodyWrapper = this.table && this.table.bodyWrapper;
      let { scrollTop, scrollLeft } = bodyWrapper;
      if (this.table.optimizeY && this.rowHeight) {
        if (this.data.length <= this.visibleCount) {
          return
        }
        if (bodyWrapper) {
          const bodyScrollHeight = this.visibleCount * this.rowHeight;
          if (this.table.virtualBodyHeight < scrollTop + bodyScrollHeight) {
            scrollTop = this.table.virtualBodyHeight - bodyScrollHeight;
          }
          this.scrollTop = scrollTop;
          let startIndex = parseInt(scrollTop / this.rowHeight);
          const { start, end } = this.getVisibleRange(startIndex);
          this.startIndex = start;
          this.endIndex = end;
          this.innerTop = this.startIndex * this.rowHeight;
        }
      }
      if (this.table.optimizeX) {
        this.scrollXEvent(scrollLeft);
      }
    },
    scrollXEvent(scrollLeft) {
      let bodyWrapper = this.table && this.table.bodyWrapper;
      if (scrollLeft === undefined) {
        scrollLeft = bodyWrapper.scrollLeft;
      }
      const columns = this.store.states._columns;
      this.scrollLeft = scrollLeft;
      let startColumnIndex = this.findNearestColumnIndex(scrollLeft);
      let endColumnIndex = this.findNearestColumnIndex(scrollLeft + bodyWrapper.offsetWidth);
      this.startColumnIndex = startColumnIndex;
      this.endColumnIndex = Math.min(endColumnIndex + 1, columns.length);
      // this.innerLeft = this.getColumnSizeAndOffset(this.startColumnIndex).offset;
      // this.innerLeft = this.scrollLeft;
      this.store.updateScrollShowColumns(this.startColumnIndex, this.endColumnIndex);
    },
    getColumnWidth(column) {
      return column.realWidth || column.width || column.minWidth || 0;
    },
    findNearestColumnIndex(scrollLeft) {
      const columns = this.store.states._columns;
      let total = 0;
      for (let i = 0, j = columns.length; i < j; i++) {
        const width = this.getColumnWidth(columns[i]);
        total += width;
        if (total >= scrollLeft || i === j - 1) {
          return i
        }
      }
      return 0;
    },
    getColumnSizeAndOffset(index) {
      let total = 0;
      const columns = this.store.states._columns;
      for (let i = 0, j = Math.min(index, columns.length - 1); i <= j; i++) {
        const width = this.getColumnWidth(columns[i]);
        if (i === j) {
          return {
            offset: total,
            width
          }
        }
        total += width
      }
      return {
        offset: 0,
        width: 0
      }
    },
    getVisibleRange (expectStart) {
      const start = expectStart - this.excessRows

      return {
        start: start >= 0 ? start : 0,
        end: expectStart + this.visibleCount + this.excessRows
      }
    }
  }
};
