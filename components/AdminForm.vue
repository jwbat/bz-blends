<template>
  <form @submit.prevent="onSave">
    <!-- HOURS -->
    <section>
      <h3 class="section-title">Hours</h3> 

      <button 
        @click="isHoursModal = !isHoursModal; openModal()"
        type="button"
        class="add-btn"
      >Add Hours
      </button> 

      <!-- EDIT HOURS -->
      <div 
        v-for="(hour, index) in hours" 
        :key="index" 
        class="inputs edit-item"
      >
        <!-- CONTROLS -->
        <div class="controls">
          <span>
            <button 
              @click="moveUp(hour, index, hrs=true)"
              class="up"
              type="button"><UpArrow /> 
            </button> 
            <button
              @click="moveDown(hour, index, hrs=true)"
              class="down"
              type="button"><DownArrow /> 
            </button> 
          </span> 
          <button 
            @click="remove(hours, index)" 
            type="button"
            class="delete"><TrashCan /> 
          </button> 
        </div> 
        <div class="hour-inputs">
          <AppInputControl v-model.trim="hour.days"></AppInputControl>
          <AppInputControl v-model.trim="hour.openToClose"></AppInputControl>
        </div> 
      </div> 
    </section> 

    <!-- MENU -->
    <section>
      <h3 class="section-title">Menu</h3> 

      <button 
        @click="openModal"
        type="button"
        class="add-btn"
      >Add Menu Item
      </button> 

      <!-- EDIT MENU ITEMS -->
      <div 
        v-for="(item, index) in menu" 
        :key="index" 
        :id="index"
        class="edit-item"
      >
        <!-- CONTROLS -->
        <div class="controls">
          <span>
            <button 
              @click="moveUp(item, index)"
              class="up"
              type="button"><UpArrow /> 
            </button> 
            <button
              @click="moveDown(item, index)"
              class="down"
              type="button"><DownArrow /> 
            </button> 
          </span> 
          <button 
            @click="remove(menu, index)" 
            type="button"
            class="delete"><TrashCan /> 
          </button> 
        </div> 
        <!-- INPUTS -->
        <AppInputControl class="menu-inputs" v-model.trim="item.name">
          ~ {{ item.category }} ~  
        </AppInputControl>
        <AppInputControl class="menu-inputs" v-model.trim="item.price"></AppInputControl>
      </div> 

      <!-- SAVE / CANCEL -->
      <button type="submit" class="button">Save Changes</button>
      <button @click="onCancel" type="reset" class="button warn">Cancel</button>
    </section> 

    <!-- ** MODALS ** -->
    <!-- ADD HOURS MODAL -->
    <AddHoursModal 
      @close="closeModal" 
      @addHours="addHours"
      :open="isOpen && isHoursModal"
    /> 
    <!-- ADD ITEM MODAL -->
    <AddItemModal 
      @close="closeModal" 
      @add="addItem"
      :open="isOpen && !isHoursModal"
    /> 
  </form> 
</template>

<script>
export default {
  emits: ['submit'],
  props: ['hours', 'menu'],
  data() {
    return {
      isOpen: false,
      isHoursModal: false
    };
  },
  methods: {
    addHours(item) {
      this.hours.push(item);
    },
    addItem(item) {
      let idx = this.menu
        .slice()
        .reverse()
        .findIndex(el => el.category === item.category);
      if (idx > -1) {
        idx = this.menu.length - idx - 1;
        this.menu.splice(idx + 1, 0, item);
      } else this.menu.push(item);
    },
    moveUp(item, idx, hrs=false) {
      if (hrs) {
        if (this.hours[idx - 1]) {
          this.hours.splice(idx, 1);
          this.hours.splice(idx -1, 0, item);
        }
      }
      else if (this.menu[idx - 1] && this.menu[idx - 1].category === item.category) {
        this.menu.splice(idx, 1);
        this.menu.splice(idx - 1, 0, item);
      }
    },
    moveDown(item, idx, hrs=false) {
      if (hrs) {
        if (this.hours[idx + 1]) {
          this.hours.splice(idx, 1);
          this.hours.splice(idx + 1, 0, item);
        }
      }
      else if (this.menu[idx + 1] && this.menu[idx + 1].category === item.category) {
        this.menu.splice(idx, 1);
        this.menu.splice(idx + 1, 0, item);
      }
    },
    openModal() {
      this.isOpen = true;
    },
    closeModal() {
      this.isOpen = false;
      this.isHoursModal = false;
    },
    remove(arr, idx) {
      arr.splice(idx, 1);
    },
    onSave() {
      this.$emit('submit', this.hours, this.menu);
    },
    onCancel() {
      this.$router.push('/');
    },
  }
};
</script>

<style scoped>
form {
  width: min(99%, 600px);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: stretch;
  margin-bottom: 5rem;
}

section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-title {
  color: white;
  text-align: center;
  margin-block: 2rem 1rem;
}

.inputs {
  display: grid;
  grid-template-columns: 50% 50%;
}

.edit-item {
  width: min(90%, 600px);
  padding: 1rem;
  margin-bottom: 1rem;
  border: 2px solid #ccc;
  border-radius: 10px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hour-inputs {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.menu-inputs {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: min(90%, 600px);
  color: orange;
  font-size: 1.1rem;
}

.add-btn {
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background: #0360f9;
  padding: 8px;
  border-radius: 5px;
  margin-bottom: 1rem;
}

.add-btn:hover,
.add-btn:active {
  color: orange;
  background: blue;
}

.controls {
  width: 90%;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
}

.controls.hours {
  display: flex;
  justify-content: flex-end;
}

.delete, .up, .down {
  color: black;
  border: 1px solid #ccc;
  padding: 4px 6px;
  border-radius: 5px;
}

.delete {
}

.delete:hover,
.delete:active {
  color: white;
  background: red;
}

.warn {
  background: #720303;
}


</style>
