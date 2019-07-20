<template>
  <div class="flex flex-inline my-1">
    <label class="relative flex flex-inline mx-1 cursor-pointer h-12 w-full">
      <input type="text"
             @focus="focused=!focused"
             @blur="focused=!focused"
             :class="inputClass"
             :value="value"
             @input="updateValue()"
             ref="vtTextField">
      <span :class="labelClass">{{label}}</span>
    </label>
  </div>
</template>

<script>
  function delayEvent(method, delay) {
    let timeoutID = null;
    return function () {
      clearTimeout(timeoutID);
      const args = arguments;
      const that = this;
      timeoutID = setTimeout(function () {
          method.apply(that, args);
        },
        delay
      );
    }
  }
  export default {
    name: 'VtTextField',
    data() {
      return {
        focused: false,
      }
    },
    props: {
      'value': {
        'type': String,
        'required': false,
      },
      'label': {
        'type': String,
        'required': false,
      },
      //TODO: Add placeholder functionality
      'eventdelay': {
        'type': [Number, String],
        'required': false,
        'default': 200
      }
    },
    methods: {
      updateValue: () => {
      }
    },
    computed: {
      eventDelayNumber() {
        return parseInt(this.eventdelay);
      },
      hasText() {
        return this.value.length > 0;
      },
      labelClass() {
        return {
          'absolute': true,
          'text-xl': !this.focused && !this.hasText,
          'h-5': !this.focused && !this.hasText,
          'mb-2': !this.focused && !this.hasText,
          'bottom-0': !this.focused && !this.hasText,
          'text-grey-600': !this.focused,
          'top-0': this.focused || this.hasText,
          'text-xs': this.focused || this.hasText,
          'h-3': this.focused || this.hasText,
          'text-teal-500': this.focused
        };
      },
      inputClass() {
        return {
          'h-7': true,
          'absolute': true,
          'bottom-0': true,
          'text-xl': true,
          'outline-none': true,
          'appearance-none': true,
          'pb-2': true,
          'border-grey-600': !this.focused,
          'border-b': !this.focused,
          'border-teal-500': this.focused,
          'border-b-2': this.focused,
        };
      },
    },
    created() {
      this.updateValue = delayEvent(
        function (event) {
          this.$emit('input', this.$refs.vtTextField.value);
        },
        this.eventDelayNumber || 200//delay for input
      );
    }
  }
</script>
