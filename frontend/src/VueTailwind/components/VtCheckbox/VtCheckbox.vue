<template>
  <div class="flex flex-inline my-1" @click.prevent="onClick()">
    <label class="relative flex flex-inline mx-1 cursor-pointer">
      <input type="checkbox"
             class="h-5 w-5 absolute hidden"
             :value="value">
      <span :class="classBox">
        <vt-svg-checkmark class="h-4 w-4"></vt-svg-checkmark>
      </span>
      <span class="h-5 flex flex-inline items-center ml-1">{{label}}</span>
    </label>
  </div>
</template>

<script>
  import VtSvgCheckmark from "../VtSVG/VtSvgCheckmark";

  export default {
    name: 'VtCheckbox',
    components: {
      'vt-svg-checkmark': VtSvgCheckmark
    },
    props: {
      'value': {
        'required': true,
        'type': [String, Boolean]
      },
      'label': {
        'required': false
      }
    },
    methods: {
      onClick(){
        this.$emit('input',!this.value);
      },
    },
    computed: {
      isChecked(){
        return this.value;
      },
      classBox() {
        return {
          'relative': true,
          'h-5': true,
          'w-5': true,
          'border-2': true,
          'rounded-sm': true,
          'flex': true,
          'items-center': true,
          'justify-center': true,
          'text-white': true,
          'bg-white': !this.isChecked,
          'bg-teal-500': this.isChecked,
          'border-grey-600': !this.isChecked,
          'border-teal-500': this.isChecked,
        };
      },
    }
  }
</script>
