import { RouteRecordRaw, createMemoryHistory, createRouter } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import Table from "../views/table/Table.vue";

const routes: Array<RouteRecordRaw> = [
    { path: "/", component: HelloWorld },
    { path: "/table", component: Table }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router;