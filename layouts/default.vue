<template>
  <div :class="$route.name">
    <Nuxt />
  </div>
</template>
<script>
import { auth, db } from '@/services/fireinit.js';

export default {
  async created() {
    await auth.onAuthStateChanged(user => {
      if (!user) {
        this.$store.dispatch('logout');
      }
      if (user) {
        this.$store.dispatch('login', user.uid);
      }
    });

    let menu; let hours;
    await db.collection('menu')
      .doc('m')
      .onSnapshot(doc => {
        menu = Array.from(Object.values(doc.data()));
        this.$store.dispatch('setMenu', menu);
      }, err => console.log(err.message));
    await db.collection('hours')
      .doc('h')
      .onSnapshot(doc => {
        hours = Array.from(Object.values(doc.data()));
        this.$store.dispatch('setHours', hours);
      }, err => console.log(err.message));
  },
};
</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background: black;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.admin {
  background: rgb(0,7,8);
  background: linear-gradient( 180deg , rgb(44 162 174) 0%, rgb(44 144 223 / 87%) 100%);
}

.button {
  color: #f8ebf8; 
  background: #4dc24d;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  text-shadow: 1px 1px 1px black;
  font-style: italic;
  margin: 1rem;
  padding: 0.5rem 1rem;
  border: 2px solid #4e914e80; 
  border-radius: 10px;
  text-decoration: none;
}

.button:hover {
  color: yellow;
  background: darkgreen;
}
</style>
