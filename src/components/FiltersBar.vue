<template>
  <div class="filters-bar">
    <h1>{{ collectionType }}</h1>
    <div class="filter-container">
      <div v-for="filter in filters" :key="filter.name" class="filter-option">
        <span>{{ filter.name }}</span>
        <ul>
          <li
            v-for="option in filter.filterOptions"
            :key="option"
            :class="{
              selected: selectedColor === option || selectedShape === option,
            }"
            @click="handleFiltration(option, filter.name)"
          >
            {{ option }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useGlassesStore } from "../store/glasses";

import { filters } from "../constants/filters";

const store = useGlassesStore();

const selectedColor = computed(() => {
  return store.selected_filter_color;
});

const selectedShape = computed(() => {
  return store.selected_filter_shape;
});

const collectionType = computed(() => {
  return store.collectionType.replace("-", " ");
});

/**
 * Filter and fetch data based on selected options
 */
const handleFiltration = (option, filterName) => {
  if (filterName === "Colours") {
    store.$patch({
      selected_filter_color: option,
    });
  } else {
    store.$patch({
      selected_filter_shape: option,
    });
  }

  store.fetchCollection();
};
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

      &.selected {
        background: rgb(0, 153, 255);
      }

      &:not(.selected):hover {
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
