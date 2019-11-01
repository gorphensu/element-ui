import debounce from 'throttle-debounce/debounce';

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
    this.debounceTriggerEvent = debounce(20, this.triggerEvent);
    this.bindEvent();
  },
  mounted() {
    this.debounceTriggerEvent();
  },
  beforeDestroy() {
    this.unbind();
  },
  methods: {
    triggerEvent() {
      this.$nextTick(() => {
        this.parent.table.$emit(`table-row-resize-change-${this.index}`, this.$el);
      });
    },
    bindEvent() {
      this.parent.table.$on(`table-row-resize-change-${this.index}`, $el => {
        this.$nextTick(() => {
          if (this.$el === $el) {
            return;
          }
          let currentHeight = this.$el.offsetHeight;
          if ($el.offsetHeight > currentHeight) {
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
      });
      this.parent.table.$on('header-dragend', () => {
        this.$el.style['height'] = '';
        this.debounceTriggerEvent();
      });
    },
    unbind() {
      this.parent.table.$off(`table-row-resize-change-${this.index}`);
    }
  }
};
