import { RouteRecordRaw, createWebHistory, createRouter } from "vue-router";
import Table from "../views/table/Table.vue";
import Form from "../views/form/Form.vue";

const routes: Array<RouteRecordRaw> = [
    { path: "/", component: Table },
    { path: "/form", component: Form }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;