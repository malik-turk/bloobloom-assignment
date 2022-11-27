<template>
  <aside class="side-bar" :class="{ 'sidebar--open': props.isSideBarVisible }">
    <div
      v-for="menuItem in menuItems"
      :key="menuItem.name"
      class="side-menu-item"
    >
      <span>{{ menuItem.name }}</span>
      <img
        v-if="menuItem.subItems"
        src="../assets/images/right-arrow.png"
        alt="right arrow"
      />
      <div v-if="menuItem.subItems" class="sub-menu">
        <span
          class="side-menu-item"
          @click="handleDataFetch(menuItem.name, 'women')"
          >Women</span
        >
        <span
          class="side-menu-item"
          @click="handleDataFetch(menuItem.name, 'men')"
          >Men</span
        >
      </div>
    </div>
  </aside>
</template>

<script setup>
import { menuItems } from "../constants/collection-data";
import { useGlassesStore } from "../store/glasses";

const props = defineProps(["isSideBarVisible"]);
const store = useGlassesStore();

const handleDataFetch = (categoryName, gender) => {
  store.$patch({
    collectionType: `${categoryName.toLowerCase()}-${gender}`,
  });
  store.fetchCollection();
};
</script>

<style scoped lang="scss">
.side-bar {
  position: fixed;
  left: -400px;
  top: 63px;
  height: calc(100vh - 63px);
  width: 400px;
  transition: left 400ms ease;
  border-right: 1px solid #000;
  text-transform: uppercase;
  user-select: none;
  z-index: 1;
  background: #fff;
}

.sidebar--open {
  left: 0;
}

.side-menu-item {
  width: calc(100% - 32px);
  height: 62px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #000;
  padding: 0 16px;
  position: relative;
  justify-content: space-between;
  cursor: pointer;

  img {
    width: 10px;
    height: 10px;
  }

  &:hover {
    background: #000;
    color: #fff;

    .sub-menu {
      display: block;
    }

    img {
      filter: invert(1);
    }
  }
}

.sub-menu {
  border-left: 1px solid #000;
  position: absolute;
  left: 400px;
  top: 0;
  height: calc(100vh - 63px);
  width: 400px;
  border-right: 1px solid #000;
  border-top: 1px solid #000;
  display: none;
  z-index: 1;
  background: #fff;

  .side-menu-item {
    color: #000;
    background: #fff;
  }
}
</style>
