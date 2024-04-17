<template>
  <div>
    <pv-button>Crear usuario</pv-button>

    <ul v-for="user in users">
      <li>{{ user.id + ' - ' + user.username }}</li>
      <pv-button >Delete</pv-button>
    </ul>
  </div>
</template>

<script>

import {UserApiService} from "@/services/user-api.service.js";

export default {
  name: 'list-user',
  data() {
    return {
      users: [],
        userApiService : new UserApiService()
    }
  },
  methods: {
  },
    async created() {
        const response = await this.userApiService.getAll();// 10 min
        this.users = response.data;
    }
}
</script>

<style scoped></style>
