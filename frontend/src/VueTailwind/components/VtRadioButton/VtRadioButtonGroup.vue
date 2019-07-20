<template>
  <div class="">
   <vt-radio-button
    v-for="(item, index) in values"
    :key="'item-'+index"
    :label="label(item, index)"
    :value="item"
    :checked="isChecked(item)"
    @input-checked="innerUpdate"
   ></vt-radio-button>
  </div>
</template>

<script>
  import VtRadioButton from "./VtRadioButton";

  export default {
  name: 'VtRadioButtonGroup',
  components: {
    VtRadioButton,
  },
  props: {
    values: {
      type: Array,
      required: true,
      default: () => {return []}
    },
    labels: {
      type: Array,
      required: false,
      default: () => {return []}
    },
    value: {
      required: true
    },
    inline: {
      required: false,
      default: false,
      type: Boolean
    }
  },
  methods: {
    isChecked(innerValue){
      return innerValue === this.value;
    },
    label(item, index){
      return this.labels[index]||item;
    },
    innerUpdate(value) {
      this.$emit('input', value);
    }
  },
  computed: {
    class(){
      return {
        'flex': this.inline,
        'flex-wrap': this.inline
      }
    }
  }
}
</script>

