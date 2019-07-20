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
    data() {
      return {
        buttonClassEnabled: "border-transparent font-bold rounded bg-white text-teal-dark text-sm hover:bg-grey-lighter cursor-pointer",
        buttonClassDisabled: "border-transparent font-bold rounded bg-white  text-grey text-sm hover:bg-white cursor-not-allowed",
        buttonClassEnabledInverted: "border-transparent font-bold rounded bg-teal text-white antialiased text-sm hover:bg-teal-dark cursor-pointer",
        buttonClassDisabledInverted: "border-transparent font-bold rounded bg-teal text-grey-light text-sm hover:bg-teal cursor-not-allowed"
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

