<template>
  <div class="input-control">
    <label><slot /></label>
    <input
      v-bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value)">
  </div>
</template>

<script>
export default {
  name: 'AppInputControl',
  props: {
    value: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.input-control {
  text-align: center;
}

.input-control label {
  font-weight: bold;
}

.input-control input {
  background: beige; 
  width: 97%;
  font: inherit;
  font-weight: bold;
  border: 1px solid #ccc;
  margin: 0.5rem auto;
  padding: 5px;
}

.input-control input:focus,
.input-control textarea:focus {
  background-color: #eee;
  outline: none;
}
</style>


