<template>
  <div v-if="renderTable">
    <vt-datatable-pagination :length="config.length" :start="config.start" :records-total="data.recordsTotal"
                             :records-filtered="data.recordsFiltered"></vt-datatable-pagination>
    <table class="border w-full">
      <thead class="border-b">
      <tr class="pb-4">
        <th class="px-4 py-2 cursor-pointer"
            v-for="(column, columnIndex) in config.columns"
            :key="column.data"
            @click="setSortColumn(columnIndex)"

        >
          <div class="flex flex-row justify-between">
            <span class="align-middle h-6 leading-normal">{{column.title}}</span>
            <vt-datatable-sort-indicator
              :is-sorted-ascending="columnSortedAscending"
              :isInUse="tableIsSortedByColumn(columnIndex)"
              class="flex flex-col w-3"
            ></vt-datatable-sort-indicator>
          </div>
        </th>
      </tr>
      <tr class="">
        <th class="px-1 pb-2"
          v-for="(column, columnIndex) in config.columns"
          :key="'search-'+column.data">
          <vt-text-field-outline v-if="!columnHasDropDownFilter(columnIndex)"
                                 :placeholder="column.title"
                                 :value="searchColumnValue(columnIndex)"
                                 @input="value => updateSearchColumn(columnIndex,value)"
                                 :eventdelay="600"
                                 class="w-full"
          ></vt-text-field-outline>
          <vt-select v-else
                     :value="searchColumnValue(columnIndex)"
                     @input="value => updateSearchColumn(columnIndex,value)"
                     :options="column.filter.options"
                     :class="column.filter.additionalClasses"
          ></vt-select>
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(row,rowIndex) in tableRowData" :key="rowIndex" :class="tableRowClass(rowIndex)">
        <td v-for="(data, dataIndex) in row" :key="dataIndex" class="px-1 py-1">
          {{data}}
        </td>
      </tr>
      </tbody>
    </table>
    <vt-datatable-pagination :length="config.length" :start="config.start" :records-total="data.recordsTotal"
                             :records-filtered="data.recordsFiltered"></vt-datatable-pagination>
  </div>
</template>

<script lang="ts">
  import VtDatatableSortIndicator from './VtDatatableSortIndicator.vue';
  import VtDatatablePagination from './VtDatatablePagination'

  const CONST = {
    SORT_DIR_ASC: 'asc',
    SORT_DIR_DESC: 'desc',
  };

  export default {
    name: 'VtDatatable',
    components: {
      VtDatatableSortIndicator,
      VtDatatablePagination
    },
    props: {
      data: {
        required: true,
        type: Object,
        default() {return {};}
      },
      config: {
        required: true,
        type: Object,
        default() {return {};}
      }
    },
    computed: {
      renderTable(){
        return Object.keys(this.config).length >= 0 && (this.config).constructor === Object
      },
      columnIds(){
        return this.config.columns.map(column => {
          return column['data'];
        });
      },
      columnHasDropDownFilter() {
        return columnIndex => this.config.columns[columnIndex].filter !== undefined;
      },
      tableRowData(){
        if (this.data['data'] === undefined) {
          return [];
        }
        const data = this.data['data'];
        const rowIds = this.columnIds; //array of strings of ids
        return data.map(row => {
          return rowIds.map(
            id => {
              return row[id];
            }
          );
        });
      },
      tableIsSortedByColumn() {
        return columnIndex => this.config.order['column'] === columnIndex;
      },
      columnSortedAscending() {
        return this.config.order['dir'] === CONST.SORT_DIR_ASC;
      },
      searchColumnValue() {
        return columnIndex => this.config.searchColumns[columnIndex];
      },
      tableRowClass() {
        return rowIndex => {
          if (rowIndex % 2 === 0) {
            return 'bg-grey-200';
          } else {
            return 'bg-white';
          }
        }
      }
    },
    methods: {
      nextPage() {
        const numberOfRecordsFiltered = this.data['recordsFiltered'] || 0;
        const maxStartValue = Math.floor(numberOfRecordsFiltered / this.config.length) * this.config.length;
        this.$emit('datatablenewstart', Math.min(this.config.start+this.config.length, maxStartValue));
      },
      previousPage() {
        this.$emit('datatablenewstart', Math.max(this.config.start - this.config.length, 0));
      },
      setSortColumn(sortColumnIndex){
        const newOrder = {
          'column': sortColumnIndex,
          'dir': 'asc'
        };

        //check if selected sort column is current sort column: if yes reverse order
        if(this.config.order.column === sortColumnIndex){
          if(this.config.order.dir === CONST.SORT_DIR_ASC){
            newOrder['dir'] = CONST.SORT_DIR_DESC;
          } else {
            newOrder['dir'] = CONST.SORT_DIR_ASC;
          }
        }

        this.$emit('datatablesetsort', newOrder);
      },
      updateSearchColumn(columnIndex, value) {
        const searchColumns = this.config.searchColumns.slice();
        searchColumns[columnIndex]=value;
        this.$emit('datatablesetsearch', searchColumns);
      },

    }
  }
</script>
