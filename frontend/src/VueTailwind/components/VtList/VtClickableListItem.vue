<template>
  <div @click.prevent="$emit('click')"
       class="py-4 cursor-pointer text-grey-900 border-2 border-transparent hover:shadow-md hover:border-teal-500 px-4 rounded w-full"
       >
    <div class="flex justify-between">
      <slot name="default"></slot>
      <div v-if="renderTitle()"
        :class="combinedTitleClass">{{title}}</div>
    </div>
    <slot name="subtitle"></slot>
    <div v-if="renderSubtitle()"
      class="text-sm font-light"
         >{{subtitle}}
    </div>
  </div>
</template>

<script lang="ts">

  export default {
    name: 'VtClickableListItem',
    methods: {
      renderTitle(){
        //render title element if no slot is defined
        return (typeof this.$slots['default'] === 'undefined') && typeof this.title !== 'undefined' && this.title !== '';
      },
      renderSubtitle(){
        //render subtitle element if no slot is defined
        return typeof this.$slots['subtitle'] === 'undefined' && typeof this.subtitle !== 'undefined' && this.subtitle !== '';
      }
    },
    props: {
      title: {
        required: false,
        type: String
      },
      subtitle: {
        required: false,
        type: String
      },
      titleClass: {
        required: false,
        type: [String, Object],
        default(){ return {'text-xl': true, 'font-medium': true}}
      }
    },
    computed: {
      combinedTitleClass(){
        let titleClass = {};
        if(typeof this.titleClass==='string'){
          this.titleClass.split(' ').forEach(
            cssClass => {
              titleClass[cssClass] = true;
            }
          )
        } else if (typeof this.titleClass==='object'){
          titleClass = this.titleClass;
        }
        else {
          titleClass = {};
        }
        return {
          'mb-1': true,
          ...titleClass
        }
      }
    }
  }
</script>

