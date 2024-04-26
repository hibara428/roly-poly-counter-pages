/* eslint-disable */
declare module '*.vue' {
  import { CompatVue } from '@vue/runtime-dom'
  const vue: CompatVue
  export default vue
  export * from '@vue/runtime-dom'
  const { configureCompat } = Vue
  export { configureCompat }
}
