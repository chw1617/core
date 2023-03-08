/**
 * from vue-router
 * 异步函数队列化执行
 */
function runQueue(queue:Array<hook>,fn:Function,cb:Function){
    const step = (i)=>{
        if(i===queue.length){
            cb()
        }
        if(queue[i]){
            fn(queue[i],()=>{
                step(i+1)
            })
        }else{
            step(i+1)
        }
    }
    step(0)
}