<template functional>
  <div v-bind="data.attrs" class="grid" :class="data.staticClass || ''">
    <slot></slot>
  </div>
</template>

<style>
.grid {
  display: grid;  
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-row-gap: 15px;
  grid-column-gap: 15px;
}
</style>
