import Vue from 'vue'
import VueRouter from "vue-router"

Vue.use(VueRouter);

import CV from "./pages/CV"
import Projects from "./pages/Projects"
import Solutions from "./pages/Solutions"
import Speaking from "./pages/Speaking"
import Teaching from "./pages/Teaching"

const router = new VueRouter({
    base: "/my-cv",
    routes: [
        {path: "/", component: CV, meta: {title: "Curriculum Vitae"}},
        {path: "/speaking", component: Speaking, meta: {title: "Speaking"}},
        {path: "/teaching", component: Teaching, meta: {title: "Teaching"}},
        {path: "/projects", component: Projects, meta: {title: "Projects"}},
        {path: "/solutions", component: Solutions, meta: {title: "Solutions"}},
    ]
});

router.afterEach((to) => {
    document.title = to.meta.title ? "Ben Potter | " + to.meta.title : "Ben Potter | Curriculum Vitae";
});

export default router