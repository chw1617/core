// 插件化架构
// jquery,babel,vue,vue-cli,webpack，vite 的插件都是插件化架构
// core、plugin、api相分离，
// core   :抽象出核心逻辑，比如use、install等动作，保持核心代码最小化，
// plugin :各自负责实现自己插件内部的功能
// api : 将plugin和core 连接

/**
 * 简化版的babel插件
 */
interface Core {
    use:(Core):plugns,
    install:():any
}

const core = {
    use(plugins){
        const {name,fn} = plugins
        if(name in this){
            return // 已经注册
        }
        this[name] = fn
    },
    install(pluginsFn){
        pluginsFn(this)
        return this
    }
}

function plugin1(core){
    core.use({
        name:'plugin1',
        fn:function(){}
    })
}
function plugin2(core){
    core.use({
        name:'plugin2',
        fn:function(){}
    })
}

