<template>
  <nav>
    <button>MENU</button>
    <div class="brand-icon">
      <img src="../assets/images/logo.png" alt="logo" />
    </div>
  </nav>
</template>

<script>
export default {};
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
