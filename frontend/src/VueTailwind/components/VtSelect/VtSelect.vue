<template>
  <div :class="parentClass">
    <select
      :class="selectClass"
      :disabled="disabled"
      :value="value"
      @input="emitInputIfNotDisabled()"
      ref="vtSelect"
      >
      <option v-for="option in options" v-bind:value="option.value" class="text-grey-800">
        {{ option.text }}
      </option>
    </select>
    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
      <vt-svg-caret-bottom class="h-2 w-2 fill-current"></vt-svg-caret-bottom>
    </div>
  </div>
</template>
<script lang="ts">
  import VtSVGCaretBottom from '../VtSVG/VtSVGCaretBottom.vue';

  export default {
    name: 'VtSelect',
    components: {
      VtSvgCaretBottom: VtSVGCaretBottom
    },
    data() {
      return {
        parentBaseClass: "relative",
        parentClassEnabled: "focus-within:text-teal-500 hover:text-teal-500 focus:text-teal-500 text-grey-800",
        parentClassDisabled: "text-grey-500",
        selectBaseClass: "block appearance-none outline-none w-full border py-2 px-4 pr-8 rounded border-grey-300",
        selectClassEnabled: "bg-white hover:border-teal-500 focus:border-teal-500 focus-within:border-teal-500",
        selectClassDisabled: "bg-grey-300"
      }
    },
    props: {
      'value': {
        required: false,
        type: String,
        default: ''
      },
      'disabled': {
        required: false,
        default: false,
        type: Boolean
      },
      'options': {
        required: true,
        default: [{text: '', value: ''}],
        type: Array
      }
    },
    computed: {
      parentClass(){
        if(this.disabled){
          return this.parentBaseClass + ' ' + this.parentClassDisabled;
        } else {
          return this.parentBaseClass + ' ' + this.parentClassEnabled;
        }
      },
      selectClass(){
        if(this.disabled){
          return this.selectBaseClass + ' ' + this.selectClassDisabled;
        } else {
          return this.selectBaseClass + ' ' + this.selectClassEnabled;
        }
      }
    },
    methods: {
      emitInputIfNotDisabled() {
        if (!this.disabled) {
          this.$emit('input',this.$refs.vtSelect.value);
        }
      }
    }
  }
  </script>
