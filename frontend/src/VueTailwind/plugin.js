import VtTextFieldOutline from "./components/VtTextField/VtTextFieldOutline";
import VtButton from "./components/VtButton/VtButton";
import VtClickableListItem from "./components/VtList/VtClickableListItem";
import VtScrollToTop from './components/VtScrollToTop/VtScrollToTop';

const VueTailwind = {
  install (Vue, options) {
    Vue.component('vt-button', VtButton);
    Vue.component('vt-text-field-outline', VtTextFieldOutline);
    Vue.component('vt-clickable-list-item', VtClickableListItem);
    Vue.component('vt-scroll-to-top', VtScrollToTop);
  }
};
export default VueTailwind;

