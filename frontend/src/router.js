import { createWebHistory, createRouter } from 'vue-router'
import HomeView from './views/HomeView.vue';
import TestView from './views/TestView.vue';
import LoginView from './views/LoginView.vue';
import RegistrationView from './views/RegistrationView.vue';
import ItemsView from './views/ItemsView.vue';
import SingleItemView from './views/SingleItemView.vue';
import UsersView from './views/UsersView.vue';
import SingleUsersView from './views/SingleUsersView.vue';

const routes = [
    { path: '/', component: HomeView },
    { path: '/test', component: TestView },
    { path: '/account', component: LoginView },
    { path: '/register', component: RegistrationView },
    { path: '/items', component: ItemsView },
    { path: '/items/:id', component: SingleItemView },
    { path: '/users', component: UsersView },
    { path: '/users/:id', component: SingleUsersView }
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})