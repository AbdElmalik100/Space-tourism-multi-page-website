<template>
  <main>
    <router-view></router-view>
  </main>
</template>
<script setup>

</script>
<style lang="scss">
@import './variables';

* {
  box-sizing: border-box;
}

body {
  font-family: 'Bellefair', serif;
  font-family: 'Barlow Condensed', sans-serif;;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

a {
  color: $white;
  text-decoration: none;

  &:hover {
    color: $white;
  }
}
</style>