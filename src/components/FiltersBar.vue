<template>
  <div class="filters-bar">
    <h1>Spectacles Women</h1>
    <div class="filter-container">
      <div v-for="filter in filters" :key="filter.name" class="filter-option">
        <span>{{ filter.name }}</span>
        <ul>
          <li v-for="option in filter.filterOptions" :key="option">
            {{ option }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { filters } from "../constants/filters";
</script>

<style scoped lang="scss">
.filters-bar {
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-transform: uppercase;
  border-bottom: 1px solid #000;
}

.filter-container {
  flex: 0.33;
  display: flex;
}

.filter-option {
  position: relative;
  width: 150px;
  cursor: pointer;
  z-index: 1;

  span {
    text-align: center;
    margin-bottom: 5px;
    display: inline-block;
  }

  &:hover {
    ul {
      display: block;
    }
  }

  ul {
    position: absolute;
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: none;
    border: 1px solid #000;
    user-select: none;

    li {
      padding: 5px 10px;
      background: #fff;

      &:hover {
        background: rgb(219, 219, 219);
      }
    }

    li:not(:last-child) {
      border-bottom: 1px solid #000;
    }
  }
}

h1 {
  font-size: 20px;
  flex: 0.33;
  text-align: center;
}
</style>
