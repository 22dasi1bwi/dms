<template>
  <div class="relative flex cursor-pointer"
    @click.prevent="onUpdate">
    <span class="inline-flex h-5 items-center">{{labelOff}}</span>
    <label class="relative flex items-center h-5 mx-1 cursor-pointer">
      <input type="checkbox"
             class="absolute inset-x-0 inset-y-0 w-8 h-4 hidden"
             :value="innerValue">
      <span :class="switchClass"></span>
      <span :class="toggleClass"></span>
    </label>
    <span class="h-5 inline-flex items-center">{{labelOn}}</span>
  </div>
</template>

<script>
  export default {
    name: 'VtSwitch',
    props: {
      labelOff: {
       'required': false,
      },
      labelOn: {
        'required': false
      },
      valueOff: {
        required: false,
        default: false
      },
      valueOn: {
        required: false,
        default: true
      },
      value: {
        required: true
      }
    },
    methods: {
      onUpdate(){
        const value = (!this.innerValue)? this.valueOn : this.valueOff;
        this.$emit('input', value);
      },
    },
    computed: {
      innerValue(){
        return this.value===this.valueOn;
      },
      switchClass(){
        return {
          'bg-teal-400': this.innerValue,
          'h-3': true,
          'w-8': true,
          'rounded-full': true,
          'bg-grey-500': !this.innerValue,
        };
      },
      toggleClass() {
        return {
          'bg-teal-500': this.innerValue,
          'h-5': true,
          'w-5': true,
          'rounded-full': true,
          'absolute': true,
          'top-0': true,
          'shadow': true,
          'right-0': this.innerValue,
          'left-0': !this.innerValue,
          'border': !this.innerValue,
          'border-grey-100': !this.innerValue,
          'bg-white': !this.innerValue
        };
      },
    },
  }
</script>
