<template>
  <div class='admin-page'>
    <AdminForm 
      :hours='hours'
      :menu='menu'
      @submit='onSubmit'
      @cancel='onCancel'
    /> 
    <TheFooter class="footer" /> 
  </div> 
</template>

<script>
import _ from "lodash";

export default {
  data() {
    return {
      hours: _.cloneDeep(this.$store.getters.hours),
      menu: _.cloneDeep(this.$store.getters.menu),
    };
  },
  mounted() {
    this.$store.dispatch('setSigningIn', false);
  },
  methods: {
    onSubmit(hours, menu) {
      this.$store.dispatch('setItems', { hours, menu })
        .then(() => {
          this.$router.push('/');
        })
        .catch(e => console.log(e));
    },
    onCancel() {
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
.admin-page {
  width: min(100%, 1000px);
  margin: auto;
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  position: relative;
}

.footer {
  background: none;
}
</style>
