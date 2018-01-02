import fgInput from './components/shared/inputs/formGroupInput.vue'
import DropDown from './components/shared/Dropdown.vue'

/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalComponents = {
  install (Vue) {
    Vue.component('fg-input', fgInput)
    Vue.component('drop-down', DropDown)
  }
}

export default GlobalComponents
