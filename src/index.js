import hatechTable from './component/Hatech-Table.vue'
const table = {
    install(Vue, options) {
        Vue.component('hatechTable', hatechTable);//'component-name'这就是后面可以使用的组件的名字，install是默认的一个方法
    }
}
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(table);
}
export default table