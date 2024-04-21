<template>
    <h1>ログイン</h1>
    <form @submit.prevent="login">
        <div>
            <label for="id">ID</label>
            <input type="id" id="id" v-model="id">
        </div>
        <div>
            <label for="password">パスワード</label>
            <input type="password" id="password" v-model="password">
        </div>
        <button type="submit">ログイン</button>
    </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const id = ref('');
const password = ref('');

const login = () => {
    console.log(id.value, password.value)
}
</script>
