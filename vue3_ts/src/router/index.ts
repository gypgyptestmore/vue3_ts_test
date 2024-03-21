import Home from '../pages/Home.vue'
import About from '../pages/About.vue';
import News  from '../pages/News.vue';
import Detail from '../pages/Detail.vue';
// 创建路由
import { createRouter, createWebHistory } from 'vue-router';
const router = createRouter({
    history: createWebHistory(),//路由器工作模式
    routes:[{//路由规则
        name:"/home",
        path:'/home',
        component:Home
    },
    {
        path:'/About',
        component: About
    },
    {
        path:'/News',
        component: News,
        children: [
                // child routes
                // name:'Detail',
                {
                    name:'xiangxi',
                    // path:'detail',
                    path:'detail/:id/:title/:content?',// ?表示可有可无
                    component:Detail,
                    // 1。 将路由的所有 params 参数作为 props 传给路由组件
                    // props:true

                    // 2.  函数写法，自己决定将什么作为参数，query 和 params 都可以
                    // props(route){
                    //     return route.query
                    // }
                    // 3.对象写法，可以自己决定将什么作为参数，但是写死了
                    props:{
                        a:100,
                        b:200,
                        c:300
                    }
                }
            ]
    }
]
})
export default router;