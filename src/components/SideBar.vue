<template>
  <aside class="side-bar" :class="{ 'sidebar--open': isSideBarVisible }">
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
        <span class="side-menu-item">Women</span>
        <span class="side-menu-item">Men</span>
      </div>
    </div>
  </aside>
</template>

<script>
import { menuItems } from "../constants/collection-data";

export default {
  data() {
    return {
      menuItems,
    };
  },
  props: {
    isSideBarVisible: {
      type: Boolean,
      default: () => false,
    },
  },
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

  .side-menu-item {
    color: #000;
    background: #fff;
  }
}
</style>
