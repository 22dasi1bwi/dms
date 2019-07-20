<template>
  <div class="relative flex flex-row mt-6 mb-6 min-w-full w-full">
    <div class="flex-col justify-center flex flex-block">{{numberOfRecordsText}}</div>
    <div class="absolute right-0">
      <vt-outline-button class="inline-flex" :disabled="!previousTablePageAvailable" @click="previousPage">Previous</vt-outline-button>
      <vt-outline-button class="inline-flex" :disabled="!nextTablePageAvailable" @click="nextPage">Next</vt-outline-button>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'VtDatatablePagination',
    props: {
      recordsTotal: {
        required: true,
        type: Number,
        default: 0
      },
      recordsFiltered: {
        required: true,
        type: Number,
        default: 0
      },
      start: {
        required: true,
        type: Number,
        default: 0
      },
      length: {
        required: true,
        type: Number,
        default: 50
      },
    },
    computed: {
      numberOfRecordsText() {
        //table is filtered?
        if (this.recordsTotal > this.recordsFiltered) {
          //filtered
          //E.g.: 'Showing 1 to 2 of 2 entries (filtered from 67 total entries)'
          return 'Showing ' + (this.start + 1) + ' to ' + (Math.min(this.length + this.start, this.recordsFiltered)) + ' of ' + this.recordsFiltered + ' entries';
        } else {
          //not filtered
          //E.g.: 'Showing 1 to 50 of 67 entries'
          return 'Showing ' + (this.start + 1) + ' to ' + (Math.min(this.length + this.start, this.recordsTotal)) + ' of ' + this.recordsTotal + ' entries';
        }
      },
      nextTablePageAvailable() {
        const numberOfRecordsFiltered = this.recordsFiltered || 0;
        const maxStartValue = Math.floor((numberOfRecordsFiltered - 1) / this.length) * this.length;
        return this.start + this.length <= maxStartValue;
      },
      previousTablePageAvailable() {
        const numberOfRecordsFiltered = this.recordsFiltered || 0;
        return this.start > 0 && numberOfRecordsFiltered > 0;
      }
    },
    methods: {
      nextPage() {
        const numberOfRecordsFiltered = this.recordsFiltered || 0;
        const maxStartValue = Math.floor(numberOfRecordsFiltered / this.length) * this.length;
        this.$parent.$emit('datatablenewstart', Math.min(this.start+this.length, maxStartValue));
      },
      previousPage() {
        this.$parent.$emit('datatablenewstart', Math.max(this.start - this.length, 0));
      }
    }
  }
</script>
