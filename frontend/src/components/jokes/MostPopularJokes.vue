<template>
  <div>
    <vt-datatable :data=tableData :config=tableConfig
                  @datatablenewstart="newTableStart"
                  @datatablesetsort="setSortOrder"
                  @datatablesetsearch="setSearches">
    </vt-datatable>
  </div>
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    name: 'MostPopularJokes',
    computed: {
      ...mapState('MostPopularJokes', {
        tableConfig: 'tableConfig',
        tableData: 'tableData',
      })
    },
    data() {
      return {
        jokes: [],
      }
    },
    methods: {
      setSortOrder(sortOrder){
        this.$store.dispatch('MostPopularJokes/setSortOrder', sortOrder)
      },
      newTableStart(start){
        this.$store.dispatch('MostPopularJokes/setTableStart', start)
      },
      setSearches(searchColumns){
        this.$store.dispatch('MostPopularJokes/setSearchColumns', searchColumns)
      }
    },
    mounted() {
      this.$store.dispatch('MostPopularJokes/load')
    }
  }
</script>

