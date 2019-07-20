<template>
  <div class="md-radio my-4 flex flex-inline relative" @click="clicked($event)">
    <input id="0" type="radio" :checked="checked" class="hidden h-5 w-5 relative">
    <span :class="outerClass">
    </span>
    <span :class="innerClass">
    </span>
    <label for="0" class="ml-6 h-5 self-center flex-inline border-2 border-transparent">{{label}}</label>
  </div>
</template>

<script>
export default {
  name: 'VtRadioButton',
  props: {
    label: {
      type: String,
      required: false,
      default: ''
    },
    checked: {
      required: true,
      default: false
    },
    value: {
      required: true
    }
  },
  methods: {
    clicked: function (event) {
      if (!this.checked) {
        //only emit event if input was not checked before
        this.$emit('input-checked', this.value);
      }
    }
  },
  computed: {
    outerClass(){
      return {
        'absolute': true,
        'border-2': true,
        'border-teal-500': this.checked,
        'border-grey-900':
          !this.checked,
        'rounded-full': true,
        'h-5': true,
        'w-5': true,
        'items-center': true,
        'self-center': true,
        'p-2': true,
      };
    },
    innerClass(){
      return {
        'absolute': true,
        'bg-teal-500': this.checked,
        'bg-white': !this.checked,
        'ml-1':true,
        'rounded-full': true,
        'h-3': true,
        'w-3': true,
        'items-center': true,
        'self-center': true,
        'flex-block': true
      };
    }
  },
}
</script>

