<template>
  <nav>
    <button
      @mouseenter="changeSideBarVisibility(true)"
      @mouseleave="changeSideBarVisibility(false)"
    >
      MENU
    </button>
    <div class="brand-icon">
      <img src="../assets/images/logo.png" alt="logo" />
    </div>
  </nav>
  <SideBar
    @mouseenter="changeSideBarVisibility(true)"
    @mouseleave="changeSideBarVisibility(false)"
    :is-side-bar-visible="isSideBarVisible"
  />
</template>

<script>
import SideBar from "../components/SideBar.vue";

export default {
  components: {
    SideBar,
  },
  data() {
    return {
      isSideBarVisible: true,
    };
  },
  methods: {
    /**
     * Change sidebar visibility based on given params
     *
     * @param {bool} shouldShow sidebar toggler
     * @return void
     */
    changeSideBarVisibility(shouldShow = false) {
      this.isSideBarVisible = shouldShow;
    },
  },
};
</script>

<style scoped lang="scss">
nav {
  display: flex;
  align-items: center;
  height: 62px;
  position: relative;
  border-bottom: 1px solid #000;
}

button {
  padding-left: 34px;
  width: 160px;
  height: 100%;
  background: #fff;
  border: none;
  outline: 0;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
}

.brand-icon {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  img {
    object-fit: cover;
    height: 30px;
    width: 30px;
  }
}
</style>
