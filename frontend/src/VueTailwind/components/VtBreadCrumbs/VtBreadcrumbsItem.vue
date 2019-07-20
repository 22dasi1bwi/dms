<template>
   <a @click="onClick()"
      :class="combinedClass">
      <slot></slot>
   </a>
</template>

<script>
  export default {
    name: 'VtBreadcrumbsItem',
    props: {
      current: {
        required: false,
        type: Boolean,
        default: false
      }
    },
    computed: {
      combinedClass() {
        return {
          'text-xl': true,
          'font-medium': true,
          'mb-3': true,
          'text-teal-300': !this.current,
          'text-teal-500': this.current,
          'cursor-pointer': !this.current,
          'pb-0': true,
          'border-b-2': true,
          'border-transparent': true,
          'hover:border-teal-300': !this.current,
        };
      }
    },
    methods: {
      onClick(){
        if(!this.current){ //current path is not clickable
          this.$emit('click');
        }
      }
    }
  }
</script>

