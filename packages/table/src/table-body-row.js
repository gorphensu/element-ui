// import debounce from 'throttle-debounce/debounce';

export default {
  props: {
    index: {
      type: Number
    },
    row: {
      type: Object,
      default: () => {}
    },
    parent: Object
  },
  watch: {
    // 当数据改变后，再计算一下layout
    row: {
      deep: true,
      handler: function(newVal, oldVal) {
        if (newVal !== oldVal) {
          this.debounceTriggerEvent();
        }
      }
    }
  },
  render(h) {
    let $index = this.index;
    let row = this.row;
    let parent = this.parent;
    return (
      <tr
      style={ parent.rowStyle ? parent.getRowStyle(row, $index) : null }
      key={ parent.table.rowKey ? parent.getKeyOfRow(row, $index) : $index }
      on-dblclick={ ($event) => parent.handleDoubleClick($event, row) }
      on-click={ ($event) => parent.handleClick($event, row) }
      on-contextmenu={ ($event) => parent.handleContextMenu($event, row) }
      on-mouseenter={ _ => parent.handleMouseEnter($index) }
      on-mouseleave={ _ => parent.handleMouseLeave() }
      class={ [parent.getRowClass(row, $index)] }
      >
      {this.$slots.default}
      </tr>
    );
  },
  created() {
    // this.debounceTriggerEvent = debounce(20, this.triggerEvent);
    this.debounceTriggerEvent = this.triggerEvent;
    this.bindEvent();
  },
  mounted() {
    setTimeout(() => {
      this.debounceTriggerEvent();
    });
  },
  beforeDestroy() {
    this.unbind();
  },
  methods: {
    triggerEvent() {
      this.$nextTick(() => {
        // 理论上是要非固定行才去发出这个事件，去通知固定行的高度改变
        !this.parent.fixed && this.parent.table.$emit(`table-row-resize-change-${this.index}`, this.$el);
      });
    },
    bindEvent() {
      // 接收的是固定行 this.$el是固定行 $el是非固定行
      this.tableRowResizeCallback = ($el) => {
        this.$nextTick(() => {
          if (this.$el === $el || !this.parent.fixed) { // 如果不是固定列接收，拒接
            return;
          }
          let currentHeight = this.$el.offsetHeight;
          if ($el.offsetHeight !== currentHeight) {
            this.$el.style['height'] = $el.offsetHeight + 'px';
            // 修复如果滚动条不在最初状态，修复高度后，滚动条需要保存位置
            if (this.parent.table.$refs.fixedBodyWrapper) {
              if (this.parent.table.$refs.fixedBodyWrapper.scrollTop !== this.parent.table.bodyWrapper.scrollTop) {
                this.parent.table.$refs.fixedBodyWrapper.scrollTop = this.parent.table.bodyWrapper.scrollTop;
              }
            }
            if (this.parent.table.$refs.rightFixedBodyWrapper) {
              if (this.parent.table.$refs.rightFixedBodyWrapper.scrollTop !== this.parent.table.bodyWrapper.scrollTop) {
                this.parent.table.$refs.rightFixedBodyWrapper.scrollTop = this.parent.table.bodyWrapper.scrollTop;
              }
            }
          }
        });
      };
      this.parent.table.$on(`table-row-resize-change-${this.index}`, this.tableRowResizeCallback);
      this.parent.table.$on('header-dragend', () => {
        this.$el.style['height'] = '';
        this.debounceTriggerEvent();
      });
    },
    unbind() {
      this.parent.table.$off(`table-row-resize-change-${this.index}`, this.tableRowResizeCallback);
    }
  }
};
