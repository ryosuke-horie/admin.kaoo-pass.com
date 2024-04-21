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
    // 仮の実装のため、特定のID、Passwordであれば認証を許可
    if (id.value === 'admin' && password.value === 'password') {
        alert('ログイン成功');
    } else {
        alert('ログイン失敗');
    }
}
</script>
