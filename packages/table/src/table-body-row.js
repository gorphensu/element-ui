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
  },
  computed: {
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
  },
  mounted() {
  },
  beforeDestroy() {
  },
  methods: {
  }
};
