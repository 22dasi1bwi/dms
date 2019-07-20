<template>
  <input
    class="appearance-none block text-grey-700 border rounded py-2 px-4 leading-tight focus:border-teal-400 focus:bg-white focus:outline-none"
    :placeholder="placeholder"
    :value="value"
    @input="updateValue()"
    ref="vtTextFieldOutline"/>
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
    name: 'VtTextFieldOutline',
    props: {
      'value': {
        'type': String
      },
      'placeholder': {
        'type': String,
        'required': true
      },
      'eventdelay': {
        'type': Number,
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
      }
    },
    created() {
      this.updateValue = delayEvent(
        function (event) {
          this.$emit('input', this.$refs.vtTextFieldOutline.value);
        },
        this.eventDelayNumber || 200//delay for input
      );
    }
  }
</script>
