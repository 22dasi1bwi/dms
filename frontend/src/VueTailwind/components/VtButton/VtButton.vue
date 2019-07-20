<template>
  <button
    :disabled="disabled"
    @click.prevent="emitClickIfNotDisable()"
    :class="buttonClass">
    <slot></slot>
  </button>
</template>
<script lang="ts">
  export default {
    name: 'VtButton',
    data() {
      return {
        buttonClassEnabled: "border h-8 px-4 border-transparent rounded bg-teal-500 text-white text-sm font-bold shadow hover:shadow-md hover:bg-teal-400",
        buttonClassDisabled: "border h-8 px-4 border-grey-300 text-grey-300 rounded bg-white text-sm font-bold cursor-not-allowed",
        buttonClassEnabledInverted: "border h-8 px-4 border-transparent rounded bg-grey-100 text-teal-500 text-sm font-bold shadow hover:shadow-md hover:bg-white",
        buttonClassDisabledInverted: "border h-8 px-4 border-grey-300 text-grey-600 rounded bg-grey-300 text-sm font-bold cursor-not-allowed"
      }
    },
    props: {
      "disabled": {
        required: false,
        default: false,
        type: Boolean
      },
      "inverted": {
        required: false,
        default: false,
        type: Boolean
      }
    },
    computed: {
      buttonClass() {
        if (this.disabled) {
          if (this.inverted) {
            return this.buttonClassDisabledInverted;
          } else {
            return this.buttonClassDisabled;
          }
        } else {
          if (this.inverted) {
            return this.buttonClassEnabledInverted;
          } else {
            return this.buttonClassEnabled;
          }
        }
      }
    },
    methods: {
      emitClickIfNotDisable() {
        if (!this.disabled) {
          this.$emit('click');
        }
      }
    }
  }
</script>
