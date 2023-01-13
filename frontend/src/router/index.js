import { createRouter, createWebHistory } from 'vue-router';
import Index from "../views/Index.vue";
import Create from "../views/Create.vue";
import Edit from "../views/Edit.vue";

const routes = [
  {
    name: 'Index',
    path: '/',
    component: Index
  },
  {
    name: 'Edit',
    path: '/edit/:id',
    component: Edit
  },
  {
    name: 'Create',
    path: '/create',
    component: Create
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
