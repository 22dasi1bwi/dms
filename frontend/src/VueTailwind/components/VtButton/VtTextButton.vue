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
    name: 'VtTextButton',
    data() {
      return {
        buttonClassEnabled: "block border-2 border-transparent font-bold rounded bg-white py-2 px-4 text-teal-500 text-sm hover:bg-grey-200 cursor-pointer",
        buttonClassDisabled: "block border-2 border-transparent font-bold rounded bg-white py-2 px-4 text-grey-500 text-sm hover:bg-white cursor-not-allowed",
        buttonClassEnabledInverted: "block border-2 border-transparent font-bold rounded bg-teal-400 py-2 px-4 text-white antialiased text-sm hover:bg-teal-500 cursor-pointer",
        buttonClassDisabledInverted: "block border-2 border-transparent font-bold rounded bg-teal-400 py-2 px-4 text-grey-300 text-sm hover:bg-teal-400 cursor-not-allowed"
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

