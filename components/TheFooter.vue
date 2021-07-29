<template>
  <div class="footer-container" :class="$route.name" >
    <nuxt-link 
      :class="[{ loggedIn }, { hidden : !loggedIn }]" 
      to="/">Home</nuxt-link>
    <nuxt-link 
      :class="[{ loggedIn }, { hidden : !loggedIn }]" 
      v-if="!loggedIn" to="/login">Sign in</nuxt-link>
    <nuxt-link 
      :class="{ loggedIn }" 
      v-else 
      to="/logout">Logout</nuxt-link>
    <nuxt-link 
      :class="{ loggedIn }" 
      v-if="loggedIn" 
      to="/admin">Admin</nuxt-link>
  </div>
</template>

<script>
export default {
  name: "TheFooter",
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    }
  },
};
</script>


<style scoped>
.footer-container {
  width: 100%;
  height: 40px;
  text-align: right;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.the-footer {
  width: min(100%, 600px);
  display: flex;
  justify-content: space-around;
}

a {
  text-decoration: none;
  color: #777;
}

a.loggedIn {
  color: #ccc;
  font-weight: bold;
}

a.admin {
  color: white;
}

.nuxt-link-exact-active.loggedIn.admin {
  color: yellow; 
}

a:hover {
  color: beige;
}

a.hidden {
  opacity: 0;
}

</style>
