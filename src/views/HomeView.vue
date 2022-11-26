<template>
  <NavBar />
  <FiltersBar />
  <CollectionGrid />
</template>

<script>
import NavBar from "../components/NavBar.vue";
import FiltersBar from "../components/FiltersBar.vue";
import CollectionGrid from "../components/CollectionGrid.vue";

export default {
  components: {
    NavBar,
    FiltersBar,
    CollectionGrid,
  },
};
</script>

<style lang="scss" scoped></style>
