<template>
  <transition name="layout" mode="out-in">
    <Nuxt/>
  </transition>
</template>

<style>
html {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
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
