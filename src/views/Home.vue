<template>
  <div class="home">
    <div class="home__logo">
      <img src="./../assets/img_sun_farm.svg" alt="" class="home__logo-image" />
    </div>
    <div class="home__wrapper">
      <h1 class="home__title">Welcome to CyberTime Farm</h1>
      <p class="home__text">Farm NFTL and CTF tokens</p>
      <p class="home__text--sm">Start of farming:</p>
    </div>
    <Timer />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Timer from "@/components/Timer.vue";
export default {
  name: "Home",
  components: {
    Timer,
  },
};
</script>

<style lang="scss">
.home {
  width: 1200px;
  margin: 0 auto;
  &__logo {
    display: block;
    width: 399px;
    height: 138px;
    margin-top: 94px;
    margin-left: 280px;
  }
  &__wrapper {
    text-align: center;
  }
  &__title {
    margin-top: 41px;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 32px;
    line-height: 48px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #d9d6dc;
    margin-bottom: 8px;
  }
  &__text {
    margin-top: 8px;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0.18em;
    color: #d9d6dc;
  }
  &__text--sm {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 137%;
    letter-spacing: 0.16em;
    color: #d9d6dc;
    margin-top: 58px;
  }
}
</style>
