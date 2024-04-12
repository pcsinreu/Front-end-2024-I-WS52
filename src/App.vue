<script setup>

</script>

<template>
 <main>
 <button>Click me!</button>
 <pv-calendar />
 <pv-rating />
  <pv-input-text />

  <pv-input-mask id="basic"  mask="99-999999" placeholder="99-999999" />

  <div> {{ $t('hello') }}</div>
  <div> {{ $t('hello') }}</div>

   <pv-input-mask id="basic"  mask="aaaaaaa" :placeholder="$t('greet',{ user:'Pedro'})" />


  <div> {{ $t('hello') }}</div>
  <div> {{ $t('greet',{ user:'Pedro'}) }}</div>

  <label for="name">Name</label>
  <pv-input-text id="name" />

  <img src="./assets/logo.svg"  alt="brand icon"/>
  <pv-button label="Click me" :aria-label="$t('greet',{ user:'Pedro'})"/>
 </main>
</template>

<style scoped>
main{
 background-color:red;
}
</style>