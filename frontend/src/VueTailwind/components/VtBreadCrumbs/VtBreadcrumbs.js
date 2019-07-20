import VtSVGCaretLeft from '../VtSVG/VtSVGCaretLeft';
import VtBreadcrumbsDivider from "./VtBreadcrumbsDivider";

export default {
  name: 'VtBreadcrumbs',
  components: {
    VtSVGCaretLeft,
    VtBreadcrumbsDivider
  },
  props: {
    'divider': {
      type: String,
      required: false,
      default: '/'
    }
  },
  methods: {
    generateBreadcrumbItems(){
      //delete elements that are not breadcrumb items
      const breadCrumbs = this.$slots.default.filter(
        item => {
          return item['componentOptions'] && item['componentOptions']['tag'] === 'vt-breadcrumbs-item';
        }
      );
      //add caret left icon to first link
      const caret = this.$createElement(VtSVGCaretLeft, {'class': 'h-8 w-6 text-teal-300 pb-0 mr-1'});
      //add dividers between the elements
      const result = breadCrumbs.reduce(
        (accumulator, currentItem) => accumulator.concat(
          currentItem,
          this.$createElement(VtBreadcrumbsDivider, null, ['/'])
        ),
        [caret]
      );
      result.pop();
      return result;

    },
  },
  render(createElement) {
    const children = this.generateBreadcrumbItems();
    return createElement(
      'div', {
        'class': 'flex'
      },
      children
    );
  }
}

