<template>
  <NavBar />
  <FiltersBar />
  <CollectionGrid />
</template>

<script setup>
import { onMounted } from "vue";

// Components
import NavBar from "../components/NavBar.vue";
import FiltersBar from "../components/FiltersBar.vue";
import CollectionGrid from "../components/CollectionGrid.vue";

// Store
import { useGlassesStore } from "../store/glasses";

const store = useGlassesStore();

onMounted(() => {
  store.fetchCollection();
});
</script>

<style lang="scss" scoped></style>
