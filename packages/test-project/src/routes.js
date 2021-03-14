import SimpleForm from './components/SimpleForm.vue'
import NestedValidations from './components/NestedValidations.vue'
import OldApiExample from './components/OldApiExample.vue'
import ChainOfRefs from './components/ChainOfRefs.vue'
import ComponentHelper from './components/ComponentHelper.vue'

export const routes = [
  {
    path: '/',
    component: SimpleForm
  },
  {
    path: '/nested-validations',
    component: NestedValidations
  },
  {
    path: '/old-api',
    component: OldApiExample
  },
  {
    path: '/nested-ref',
    component: ChainOfRefs
  },
  {
    path: '/component-helper',
    component: ComponentHelper
  }
]