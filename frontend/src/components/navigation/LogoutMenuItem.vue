<template>
  <div @click="$emit('click')" class="cursor-pointer border-b border-grey-300 hover:border-teal-500 py-3">
      <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'logout-menu-item',
    }
</script>
