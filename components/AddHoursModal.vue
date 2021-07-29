<template>
  <div 
    @click="closeModal" 
    class="modal"
    :class="{ open }"
  >
    <!-- MODAL CARD -->
    <div class="modal-card">
      <h4 class="modal-title">Add Hours</h4><br />
      <div class="hours-item item-add">
        <AppInputControl 
          v-model="days"
          class="menu-inputs" 
          placeholder="Days"
        ></AppInputControl>
        <AppInputControl 
          v-model="openToClose"
          class="menu-inputs" 
          placeholder="Open to Close"
        ></AppInputControl>
      </div> 
      <button @click="addHours" type="button" class="button">Add</button> 
    </div>
  </div>
</template>

<script>
export default {
  props: ['open'],
  emits: ['close', 'addHours'],
  data() {
    return {
      days: '',
      openToClose: '',
    };
  },
  methods: {
    addHours() {
      this.$emit('addHours', {
        days: this.days,
        openToClose: this.openToClose,
      });
      this.days = '';
      this.openToClose = '';
      this.$emit('close');
    },
    closeModal(e) {
      if (e.target.classList.contains('modal')) {
        this.$emit('close');
      }
    },
  }
};
</script>

<style scoped>
.modal-title {
  margin-top: 2rem;
}

.modal {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.85);
  display: none;
  z-index: 50;
}
.modal.open {
  display: block;
}

.modal-card {
  background: beige;
  width: min(90%, 500px);
  margin-top: min(125px, 25%);
  margin-inline: auto;
  border-radius: 10px;
  border: 4px solid yellow;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.hours-item {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.menu-inputs {
  width: min(80%, 600px);
}
</style>
