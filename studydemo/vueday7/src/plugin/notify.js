import modal from './notify.vue'
let notify={

}

notify.install=function(Vue,options={delay:3000}){
  Vue.prototype.$notify=function(message,opt={}){
    if(notify.el) return;
    options={...options,...opt}//用自己调用插件时传递过来的属性 覆盖掉默认设置好的
    let V=Vue.extend(modal)//返回的是一个构造函数的子类，参数时包含组件选项的对象
    let vm=new V;
    vm.value=message;

    let oDiv=document.createElement('div')//创建一个div将实例挂载到元素上
    vm.$mount(oDiv)
    notify.el=vm.$el;
    document.body.appendChild(vm.$el)
    setTimeout(() => {
      document.body.removeChild(vm.$el)
      notify.el=null
    }, options.delay);
  }
}

export default notify