<template>
  <div 
    @click="closeModal" 
    class="modal"
    :class="{ open }"
  >
    <!-- MODAL CARD -->
    <div class="modal-card">
      <h4 class="modal-title">Add Menu Item</h4><br />
      <div class="menu-item item-add">
        <div class="radios">
          <div>
            <input 
              v-model="category"
              type="radio" 
              id="hot-drinks" 
              name="category" 
              value="hot drinks"
              checked
            >
            <label for="hot-drinks">Hot Drink</label>
          </div>
          <div>
            <input 
              v-model="category"
              type="radio" 
              id="extras" 
              name="category" 
              value="extras"
            >
            <label for="extras">Extra</label>
          </div>
          <div>
            <input 
              v-model="category"
              type="radio" 
              id="cold-drinks" 
              name="category" 
              value="cold drinks"
            >
            <label for="cold-drinks">Cold Drink</label>
          </div>
          <div>
            <input 
              v-model="category"
              type="radio" 
              id="food" 
              name="category" 
              value="food"
            >
            <label for="food">Food</label>
          </div>
        </div> 
        <AppInputControl 
          v-model="name"
          class="menu-inputs" 
          placeholder="Name"
        ></AppInputControl>
        <AppInputControl 
          v-model="price"
          class="menu-inputs" 
          placeholder="Price"
        ></AppInputControl>
      </div> 
      <button @click="addItem" type="button" class="button">Add</button> 
    </div>
  </div>
</template>

<script>
export default {
  props: ['open'],
  emits: ['close', 'add'],
  data() {
    return {
      name: '',
      price: '',
      category: '',
    };
  },
  methods: {
    addItem() {
      this.$emit('add', {
        name: this.name,
        price: this.price,
        category: this.category
      });
      this.name = '';
      this.price = '';
      this.category = '';
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

.menu-item {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.menu-inputs {
  width: min(80%, 600px);
}
</style>
