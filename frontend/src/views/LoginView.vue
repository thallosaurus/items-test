<script setup>
import { login, logout } from '../netcode.js';
</script>

<template>
    <div v-if="!$store.getters.isLoggedIn">
        <h1>Login</h1>
        <form @submit="formSubmit">
            <label for="username">Username:</label>
            <input name="username" type="text" v-model="username" :disabled="loading">
            
            <label for="password">Password:</label>
            <input name="password" type="password" v-model="password" :disabled="loading">
            <input type="submit" :disabled="loading">
            <RouterLink to="/register">Register</RouterLink>
        </form>
    </div>
    <div v-else>
        <h1>Account</h1>
        <p>Username: {{ $store.state.user.username }}</p>
        <form @submit="formLogout">
            <input type="submit" :disabled="loading">
        </form>
    </div>
</template>

<style scoped>
form input, form label {
    display: block
}
</style>

<script>
export default {
    data() {
        return {
            username: "",
            password: "",
            loading: false
        }
    },
    methods: {
        formSubmit(event) {
            event.preventDefault();
            this.loading = true;
            login(this.username, this.password).then((data) => {
                console.log(data)
                this.$store.commit("login", data);
            }).catch(e => {
                console.error(e);
            }).finally(() => {
                console.log("finally");
                this.loading = false;
            });
        },

        formLogout(event) {
            event.preventDefault();
            this.loading = true;
            logout().then(() => {
                this.loading = false;
                this.$store.commit("login", null);
            }).catch((err) => {
                console.error(err);
            }).finally(() => {
                this.loading = false;
            })
        }
    }
}


</script>