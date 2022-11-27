<template>
  <section>
    <div v-for="item in collectionData" :key="item" class="product-item">
      <img :src="item.glass_variants[0].media[0].url" alt="Glasses Photo" />
      <span>{{ item.name }}</span>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useGlassesStore } from "../store/glasses";

const collectionData = ref([]);
const store = useGlassesStore();

onMounted(() => {
  store.$subscribe(() => {
    collectionData.value = store.collection?.glasses;
  });
});
</script>

<style scoped lang="scss">
section {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.product-item {
  height: 350px;

  position: relative;
  border-right: 1px solid #000;
  border-bottom: 1px solid #000;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  span {
    position: absolute;
    left: 50%;
    top: 60px;
    transform: translateX(-50%);
    text-transform: uppercase;
  }
}
</style>
