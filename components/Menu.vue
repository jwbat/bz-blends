<template>
  <div >
    <section>
      <h2>Hot Drinks</h2> 
      <h4 class="sizes"> 12oz / 16oz / 20oz / 24oz</h4> 
      <ul v-for="item in menu" :key="item.name" >
        <li class="drinks" v-if="item.category === 'hot drinks'">
          <span>{{ item.name }}</span>
          <span class="price">{{ item.price }}</span>
        </li> 
      </ul> 
      <div class="extras">
        <h3>Extras:</h3> 
        <div v-for="item in menu" :key="item.name">
          <p v-if="item.category === 'extras'">
            {{ item.name }} - {{ item.price }}
          </p> 
        </div> 
      </div> 
    </section> 
    <section>
      <h2>Cold Drinks</h2> 
      <ul v-for="item in menu" :key="item.name" >
        <li class="drinks" v-if="item.category === 'cold drinks'">
          <span>{{ item.name }}</span>
          <span class="price">{{ item.price }}</span>
        </li> 
      </ul> 
    </section> 
    <section>
      <h2>Food</h2> 
      <ul v-for="item in menu" :key="item.name">
        <li class="food" v-if="item.category === 'food'">
          <span>{{ item.name }}</span>
          <span class="price price--food">{{ item.price }}</span>
        </li> 
      </ul> 
    </section> 
  </div>
</template>

<script>
import { storage } from '@/services/fireinit.js';
import _ from "lodash";

export default {
  computed: {
    menu() {
      return _.cloneDeep(this.$store.getters.menu);
    },
  }
};
</script>

<style scoped>
section {
  margin-bottom: 2rem;
  line-height: 1.5;
  color: #ec4e01;
}

h2 {
  font-family: Palatino, Palatino Linotype, Palatino LT STD, Book Antiqua, Georgia, serif;
  font-style: italic;
  color: #cec19e;
  font-size: 1.8rem;
/*   font-size: 8vw;*/
  margin-block: 2rem 1rem;
}

ul {
  list-style: none;
  text-align: left;
}

li {
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-column-gap: 1rem;
  font-weight: 700;
}

li.food {
  grid-template-columns: 4fr 1fr;
}

ul, li {
  margin-left: 0;
  padding-left: 0;
}

.sizes {
  color: #555;
  font-style: italic;
  margin-bottom: 0.5rem;
}

.extras {
  border: 1px solid black;
  margin-block: 1rem 2rem;
  margin-inline: auto;
  padding: 0.5rem;
  line-height: 1;
  font-size: 0.9rem;
  width: min(80%, 300px);
}

.extras h3 {
  font-size: 1rem;
  font-weight: normal;
  font-style: italic;
  text-decoration: underline;
  margin-bottom: 0.5rem;
}

.price {
  font-weight: 400;
  font-size: 0.9rem;
  font-style: italic;
  text-align: right;
}

.price--food {
  padding-right: 1rem;
}

</style>
