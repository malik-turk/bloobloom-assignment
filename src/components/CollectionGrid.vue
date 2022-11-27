<template>
  <section>
    <div class="loading-logo" v-if="isLoading">
      <img src="../assets/images/logo.png" alt="logo" />
    </div>
    <template v-else>
      <div v-for="item in collectionData" :key="item" class="product-item">
        <img :src="item.glass_variants[0].media[0].url" alt="Glasses Photo" />
        <span>{{ item.name }}</span>
      </div>
    </template>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useGlassesStore } from "../store/glasses";

const collectionData = ref([]);
const store = useGlassesStore();

const isLoading = computed(() => {
  return store.isLoading;
});

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

.loading-logo {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  animation: rotation 2s infinite linear;
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

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>
