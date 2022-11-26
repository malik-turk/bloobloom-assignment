<template>
  <NavBar />
  <FiltersBar />
</template>

<script>
import NavBar from "../components/NavBar.vue";
import FiltersBar from "../components/FiltersBar.vue";

export default {
  components: {
    NavBar,
    FiltersBar,
  },
};
</script>

<style lang="scss" scoped></style>
