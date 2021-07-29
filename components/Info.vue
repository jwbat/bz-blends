<template>
  <div class="info-container">
    <section class="location">
      <h3>Location</h3> 
      <p>1255 B Highway 141</p> 
      <p>White Salmon, WA</p> 
      <p>98672</p> 
    </section> 
    <section class="times">
      <h3>Hours</h3> 
      <div 
        class="hours"
        v-for="(time, index) in hours"
        :key="index"
      >
        <span><strong>{{ time.days }}</strong></span>
        <span>{{ time.openToClose }} </span>
      </div>        
    </section> 
    <section class="map">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2779.0959477974507!2d-121.51185629836704!3d45.849379015576524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54966d40e30d5723%3A0xa4149350546194b9!2sBZ%20BLENDS!5e0!3m2!1sen!2sus!4v1627577442879!5m2!1sen!2sus" 
        width="250" 
        height="200" 
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy">
      </iframe>
    </section> 
  </div>
</template>

<script>
import _ from "lodash";

export default {
  computed: {
    hours() {
      return _.cloneDeep(this.$store.getters.hours);
    }
  }
};
</script>

<style scoped>
.info-container {
  padding: 1rem;
  padding-bottom: 2rem;
}

section {
  color: white;
  width: 100%;
  padding: 1rem;
}

.button {
  background: none;
  color: #ddb02c;
  font-size: 1.5rem;
}

h3 {
  font-size: 1.2rem;
  font-weight: bold;
  color: #ddb02c;
  margin-bottom: 0.75rem;
}

h3, p, .hours {
  text-align: left;
}

p, .hours {
  color: #ecd7bd;
  padding-bottom: 0.75rem;
}

.hours {
  display: flex;
  padding-bottom: 0.75rem;
}

.hours span {
  flex-basis: 12rem;
}
</style>

