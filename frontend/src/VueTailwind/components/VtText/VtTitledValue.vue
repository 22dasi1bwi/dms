<template>
  <div class="combinedWrapperClass">
    <span :class="combinedTitleClass">{{title}}{{delimiter}}</span>
    <span :class="combinedValueClass">{{value}}</span>
  </div>
</template>

<script>
  export default {
    name: 'VtTitledValue',
    props: {
      title: {
        required: true
      },
      value: {
        required: false,
        default: ''
      },
      titleClass: {
        required: false,
        type: [String, Object],
        default() {
          return {'text-base': true, 'font-normal': true}
        }
      },
      valueClass: {
        required: false,
        type: [String, Object],
        default() {
          return {'text-base': true, 'font-bold': true}
        }
      },
      wrapperClass: {
        required: false,
        type: [String, Object],
        default(){ return {'mb-2': true}}
      },
      delimiter: {
        required: false,
        type: String,
        default: ':'
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
          'mr-1': true,
          ...titleClass
        };
      },
      combinedValueClass(){
        let valueClass = {};
        if(typeof this.valueClass==='string'){
          this.valueClass.split(' ').forEach(
            cssClass => {
              valueClass[cssClass] = true;
            }
          )
        } else if (typeof this.valueClass==='object'){
          valueClass = this.valueClass;
        }
        else {
          valueClass = {};
        }
        return valueClass;
      },
      combinedWrapperClass(){
        let wrapperClass = {};
        if(typeof this.wrapperClass==='string'){
          this.wrapperClass.split(' ').forEach(
            cssClass => {
              wrapperClass[cssClass] = true;
            }
          )
        } else if (typeof this.wrapperClass==='object'){
          wrapperClass = this.wrapperClass;
        }
        else {
          wrapperClass = {};
        }
        return wrapperClass;
      }
    }
  }
</script>

