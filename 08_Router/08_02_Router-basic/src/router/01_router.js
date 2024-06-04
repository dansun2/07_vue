import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/01_Router/HomeView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            // path : 라우트를 호출할 경로를 나타내는 것으로 path에 해당하는 컴포넌트를 routerView로 렌더링한다.
            path: '/', // path는 경로를 의미함 이게 들어오면 작성한것까지
            // 라우트를 호출할 때 주로 사용되며, 특정 이름의 라우트로 이동하거나 router.push를 사용하여 해당 라우트로 이동
            name: 'home',
            // 라우트가 호출되면 렌더링할 컴포넌트를 등록한다.
            component: HomeView
        },
        {
            path: '/pathvariable/:id',
            name : 'path',
            component : ()=> import('../views/01_Router/PathVariable.vue')
        }
    ]
});

export default router;