<template>
    <h1>Register</h1>
    <p><RouterLink to="/account">Back to login</RouterLink></p>
    <form @submit.prevent="submitRegistration">
            <label for="username">Username:</label>
            <input name="username" type="text" v-model="username" :disabled="loading">
            
            <label for="password">Password:</label>
            <input name="password" type="password" v-model="password" :disabled="loading">
            <input type="submit" :disabled="loading">
    </form>
</template>

<script>
import { register } from '../netcode.js';
    export default {
        methods: {
            submitRegistration() {
                this.loading = true;
                register(this.username, this.password).then(e => {

                }).finally(() => {
                    this.loading = false;
                })
            }
        },
        data() {
            return {
                username: "",
                password: "",
                loading: false
            }
        }
    }
</script>

<style>
input, label {
    display: block
}
</style>