<template>
  <client-only>
    <div class="login-page">
      <nuxt-img
        class="background"
        src="/bubbles.jpg"
        alt="bubbly background"
        sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
      />
      <button 
        v-if="!signingIn"
        class="button" 
        @click="googleSignIn"
      >Login
      </button>
      <h2 v-else>
        Signing in ...
      </h2> 
      <p v-if="!signingIn"><strong>(admin)</strong></p> 
      <hr /> 
      <nuxt-link v-if="!signingIn" to="/">Back</nuxt-link> 
    </div>
  </client-only>
</template>

<script>
import { db, auth, provider } from '@/services/fireinit.js';

export default {
  layout: 'bubbles',
  computed: {
    signingIn() {
      return this.$store.getters.signingIn;
    },
  },
  methods: {
    googleSignIn() {
      this.$store.dispatch('setSigningIn', true);
      auth.signInWithRedirect(provider);
    }
  },

  async mounted() {
    let result = await auth.getRedirectResult();
    if (result.credential) {
      let email = result.user.email;
      await this.$store.dispatch('login', email);
      await this.$router.push('/admin');
    }
  }
}
</script>

<style scoped>
.login-page {
  position: relative;
  height: 100vh;
  display: flex; 
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.background {
  object-fit: cover;
  pointer-events: none;
  position: absolute;
  top: -5rem;
  min-width: 100%;
  min-height: 120%;
  z-index: -1;
}

.button {
  margin-top: 50vh;
  background: #05357d;
  border-radius: 0;
  border: 1px solid white;
}

h2 {
  margin-top: 65vh;
  color: yellow;
  font-size: 2rem;
  text-shadow: 2px 2px 2px black;
}

.spinner {
  width: 15rem;
  height: 13rem;
  background: orange;
  margin-block: 3rem;
}

a {
  color: chartreuse;
  font-size: 1.4rem;
  margin-top: 2rem;
}

hr {
  margin-top: 2rem;
  width: 50%;
}

/*
p {
  color: maroon;
}
 */

</style>
