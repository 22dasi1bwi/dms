<template>
  <router-link
    :exact="exact"
    :to="to" active-class="border-teal-400 hover:border-teal-400"
    class="no-underline text-center block text-black text-sm tracking-wider font-bold uppercase mr-3 border-b-2 pt-2 pb-3 px-3 inline-block hover:border-grey-500 hover:text-grey-500 border-transparent">
    <slot></slot>
  </router-link>
</template>
<script>
  export default {
    props: {
      to: {
        required: true
      }, //where does the navigation point to?
      exact: Boolean //should the active class only be rendered on exact matches
    }
  }
</script>
