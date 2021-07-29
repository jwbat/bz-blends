<template>
</template>

<script>
import { auth } from '@/services/fireinit.js';

export default {
  mounted() {
    auth
      .signOut()
      .then(() => {
        this.$router.push('/');
        this.$store.dispatch('logout');
      })
      .catch(err => console.log(err));
  }
};
</script>

<style scoped>
</style>
