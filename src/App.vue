<script setup>

</script>

<template>
    <nav>
          <RouterLink to="/">Form</RouterLink>
        <RouterLink to="/brand">Brand</RouterLink>
        <RouterLink to="/princing">Pricing</RouterLink>
    </nav>
 <main>
    <router-view></router-view>
 </main>
</template>

<style scoped>
main{
 background-color:red;
}
</style>