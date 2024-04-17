<template>
  <div>
    <pv-button>Crear usuario</pv-button>

    <ul v-for="user in users">
      <li>{{ user.id + ' - ' + user.username }}</li>
      <pv-button @click="deleteUser(user.id)" >Delete</pv-button>
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
      async refresh(){
          const responseGetALL = await  this.userApiService.getAll();
          this.users = responseGetALL.data;
      },
      async deleteUser(id) {
          const reponse = await this.userApiService.delete(id)

          if( reponse.status === 200)
          {
              alert('user deleted')
            this.refresh();
          }
          else{
              alert('Error  deleting user')
          }
      }
  },
    async created() {
        this.refresh();
    }
}
</script>

<style scoped></style>
