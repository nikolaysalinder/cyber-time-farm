<template>
  <div class="pool">
    <div class="pool__header">
      <img :src="require(`./../../${pool.img}`)" alt="" class="pool__img" />
    </div>
    <div class="pool__body">
      <h4 class="pool__name">{{ pool.name }}</h4>
      <div class="pool__info">
        <p class="pool__text">Total stake</p>
        <p class="pool__value">{{ pool.value }}</p>
      </div>
      <button class="pool__btn">Select</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["pool"],
};
</script>

<style lang="scss" scoped>
.pool {
  width: 282px;
  background: #4a3762;
  border-radius: 8px;
  border: 1px solid #fff;
  margin-bottom: 24px;
  &__header {
    padding-top: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.23);
  }
  &__img {
    display: block;
    width: 50px;
    height: 50px;
    margin: 0 auto;
  }
  &__body {
    padding: 15px 16px 16px;
  }
  &__name {
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.18em;
    color: #fff;
    margin: 0;
    text-transform: uppercase;
  }
  &__info {
    display: flex;
    justify-content: space-between;
  }
  &__text {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    line-height: 14px;
    letter-spacing: 0.14em;
    color: #d9d6dc;
    margin-top: 20px;
  }
  &__value {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.14em;
    color: #fff;
    margin-top: 20px;
  }
  &__btn {
    display: block;
    width: 100%;
    background: #4a3762;
    margin-top: 15px;
    border: 1px solid #d9d6dc;
    box-sizing: border-box;
    border-radius: 8px;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #d9d6dc;
    padding: 7.5px;
    &:hover {
      border: 1px solid #ffffff;
      box-shadow: 0px 0px 2px 1px rgba(255, 255, 255, 0.48);
    }
  }
}
</style>
