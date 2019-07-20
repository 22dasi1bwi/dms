import VtTextButton from "./components/VtButton/VtTextButton";
import VtTextFieldOutline from "./components/VtTextField/VtTextFieldOutline";
import VtButton from "./components/VtButton/VtButton";
import VtOutlineButton from "./components/VtButton/VtOutlineButton";
import VtIconButton from "./components/VtButton/VtIconButton";
import VtClickableListItem from "./components/VtList/VtClickableListItem";
import VtTitledValue from "./components/VtText/VtTitledValue";
import VtBreadcrumbs from "./components/VtBreadCrumbs/VtBreadcrumbs.js";
import VtBreadCrumbsItem from "./components/VtBreadCrumbs/VtBreadcrumbsItem";
import VtValidationError from "./components/VtText/VtValidationError";
import VtTextField from "./components/VtTextField/VtTextField";
import VtSwitch from "./components/VtSwitch/VtSwitch";
import VtCheckbox from "./components/VtCheckbox/VtCheckbox";
import VtScrollToTop from './components/VtScrollToTop/VtScrollToTop';
import VtListTitle from "./components/VtText/VtListTitle";
import VtRadioButtonGroup from "./components/VtRadioButton/VtRadioButtonGroup";
import VtDatatable from "./components/VtDatatable/VtDatatable";
import VtSelect from "./components/VtSelect/VtSelect";

const VueTailwind = {
  // The install method will be called with the Vue constructor as the first argument, along with possible options
  // But currently we don't have any options (yet)
  install (Vue, options) {
    // Add or modify global methods or properties.
    // Vue.yourMethod = (value) => value;
    // Add components here:
    // Buttons
    Vue.component('vt-button', VtButton);
    Vue.component('vt-text-button', VtTextButton);
    Vue.component('vt-outline-button', VtOutlineButton);
    Vue.component('vt-icon-button', VtIconButton);

    // Textfield
    Vue.component('vt-text-field-outline', VtTextFieldOutline);
    Vue.component('vt-text-field', VtTextField);

    // Lists
    Vue.component('vt-clickable-list-item', VtClickableListItem);

    // Text
    Vue.component('vt-titled-value', VtTitledValue);
    Vue.component('vt-validation-error', VtValidationError);
    Vue.component('vt-list-title', VtListTitle);

    //Navigation
    Vue.component('vt-breadcrumbs', VtBreadcrumbs);
    Vue.component('vt-breadcrumbs-item', VtBreadCrumbsItem);

    //Radio button
    Vue.component('vt-radio-buttons', VtRadioButtonGroup);

    // Switch
    Vue.component('vt-switch', VtSwitch);

    // Checkbox
    Vue.component('vt-checkbox', VtCheckbox);

    // ScrollToTop
    Vue.component('vt-scroll-to-top', VtScrollToTop);

    // Stepper
    // Vue.component('vt-stepper', VtStepper);
    // Vue.component('vt-stepper-step', VtStepperStep);
    // Vue.component('vt-stepper-header', VtStepperHeader);
    // Vue.component('vt-stepper-content', VtStepperContent);
    // Vue.component('vt-stepper-step-completed', VtStepperStepCompleted);
    // Vue.component('vt-divider', VtDivider);

    // Datatable
    Vue.component('vt-datatable', VtDatatable);

    // Select
    Vue.component('vt-select', VtSelect)
    // RemovableList
    // Vue.component('vt-removable-list', VtRemovableList);
    // Vue.component('vt-removable-list-item', VtRemovableListItem);


    // Add `Vue.mixin()` to inject options to all components.
    // Vue.mixin({});

    // Add Vue instance methods by attaching them to Vue.prototype.
    // Vue.property.$myProperty = 'This is a Vue instance property.'
  }
};
export default VueTailwind;

