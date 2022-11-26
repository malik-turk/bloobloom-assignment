<template>
  <section>
    <div v-for="item in [1, 2, 3, 4, 5, 6, 7]" :key="item" class="product-item">
      <img
        src="https://d32y5z2afvomc1.cloudfront.net/glass_variants/255304141618fba6685e2c93efb2f3f9dc80eece.jpg"
        alt=""
      />
      <span>TRAVELLER</span>
    </div>
  </section>
</template>

<script>
export default {};
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
