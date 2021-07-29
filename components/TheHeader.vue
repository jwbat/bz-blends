<template>
  <div class="header-container">
    <header class="the-header">
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/admin">Admin</nuxt-link>
      <nuxt-link v-if="!loggedIn" to="/login">Sign in</nuxt-link>
      <nuxt-link v-else to="/logout">Logout</nuxt-link>
    </header>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
  props: ['loggedIn']
};
</script>

<style scoped>
.header-container {
  height: 60px;
  max-width: 100vw;
  margin-bottom: 1rem;
  text-align: center;
  display: flex;
  justify-content: center;
}

.the-header {
  width: 100%;
  position: fixed;
  height: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: #05357d;
  z-index: 100;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: white;
  border: 1px solid lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
}

a:hover,
a:active,
a.nuxt-link-active {
  color: red;
}
</style>
