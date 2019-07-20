<template>
  <span><vt-svg-caret-top :class="classTop"></vt-svg-caret-top><vt-svg-caret-bottom
    :class="classBottom"></vt-svg-caret-bottom></span>
</template>

<script lang="ts">
  import VtSvgCaretTop from '../VtSVG/VtSVGCaretTop';
  import VtSvgCaretBottom from '../VtSVG/VtSVGCaretBottom';

  export default {
    name: 'VtDatatableSortIndicator',
    components: {
      VtSvgCaretTop,
      VtSvgCaretBottom
    },
    data(){
      return {
        baseClass: 'w-3 h-3'
      };
    },
    props: {
      'isSortedAscending': {
        'type': Boolean,
        'required': true
      },
      'isInUse': {
        'type': Boolean,
        'required': true
      }
    },
    computed: {
      classTop() {
        if (this.isInUse && this.isSortedAscending) {
          return this.activeClass;
        } else {
          return this.inactiveClass;
        }
      },
      classBottom() {
        if (this.isInUse && !this.isSortedAscending) {
          return this.activeClass;
        } else {
          return this.inactiveClass;
        }
      },
      activeClass() {
        return this.baseClass+' '+'text-teal-500';
      },
      inactiveClass() {
        return this.baseClass+' '+'text-grey-300';
      }
    }
  }
</script>

