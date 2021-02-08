<template>
  <main class="home-new">
    <img src="./../assets/img_sun_farm.svg" alt="" class="home-new__img" />
    <h1 class="home-new__title">Welcome to CyberTime Farm</h1>
    <p class="home-new__text">Farm NFTL and CTF tokens</p>
    <div class="token__items">
      <div class="token__item">
        <header class="token__header">
          <img src="./../assets/Frame 446ntfl.svg" alt="" class="token__img" />
        </header>
        <div class="token__body">
          <p class="token__name">NFTL</p>
          <p class="token__price">$0.01</p>
          <div class="info__items">
            <div class="info__item">
              <p class="info__text">Circulating Supply</p>
              <p class="info__sum">86.400.000</p>
            </div>
            <div class="info__item">
              <p class="info__text">Total staked</p>
              <p class="info__sum">23.44</p>
            </div>
            <div class="info__item">
              <p class="info__text">Pool APY</p>
              <p class="info__sum">197.34%</p>
            </div>
          </div>
          <button class="token__button">stake ctf on pool</button>
          <button class="token__button--secondary">Buy NFT on Uniswap</button>
          <a href="#" class="token__link">contract</a>
        </div>
      </div>
      <div class="token__item">
        <header class="token__header">
          <img src="./../assets/446ctf.svg" alt="" class="token__img" />
        </header>
        <div class="token__body">
          <p class="token__name">CTF</p>
          <p class="token__price">$55.77</p>
          <div class="info__items">
            <div class="info__item">
              <p class="info__text">Circulating Supply</p>
              <p class="info__sum">86.400</p>
            </div>
            <div class="info__item">
              <p class="info__text">Total staked</p>
              <p class="info__sum">40.44</p>
            </div>
            <div class="info__item">
              <p class="info__text">Pool APY</p>
              <p class="info__sum">200.33%</p>
            </div>
          </div>
          <button class="token__button">stake ctf on pool</button>
          <button class="token__button--secondary">Buy NFT on Uniswap</button>
          <a href="#" class="token__link">contract</a>
        </div>
      </div>
    </div>
    <p class="home-new__desc">
      Smart contracts are verified by a white hacker with reviews from Google,
      Microsoft, Apple, Oracle etc.
    </p>
    <br />
    <a href="#" class="home-new__button">Audit</a>

    <Media />
  </main>
</template>

<script>
import Media from "@/components/Media.vue";
export default {
  name: "NewHome",
  components: {
    Media,
  },
};
</script>

<style lang="scss">
.home-new {
  width: 1200px;
  margin: 0 auto;
  text-align: center;
  &__img {
    display: block;
    margin-top: 15px;
    margin-left: 275px;
  }
  &__title {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 32px;
    line-height: 48px;
    text-transform: uppercase;
    color: #d9d6dc;
    text-align: center;
    margin-top: 25px;
  }
  &__text {
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0.18em;
    color: #d9d6dc;
    text-align: center;
    margin-top: 8px;
  }
  &__desc {
    display: inline-block;
    margin-right: 0 auto;
    font-family: "Roboto", sans-serif;
    font-style: italic;
    font-weight: 300;
    font-size: 14px;
    line-height: 137%;
    text-align: center;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: #d9d6dc;
    width: 589px;
    text-align: center;
  }
  &__button {
    display: block;
    width: 180px;
    height: 36px;
    box-sizing: border-box;
    border: 1px solid #d9d6dc;
    border-radius: 8px;
    margin: 20px auto;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #d9d6dc;
    padding: 7px;
  }
}
.token {
  &__items {
    width: 590px;
    margin: 40px auto;
    display: flex;
    justify-content: space-between;
  }
  &__item {
    width: 282px;
    background: #4a3762;
    border-radius: 8px;
    border: 1px solid #ffffff;
    box-sizing: border-box;
    box-shadow: 0px 0px 2px 1px rgba(255, 255, 255, 0.48);
    border-radius: 8px;
  }
  &__header {
    padding-top: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.23);
  }
  &__img {
    display: block;
    margin: 0 auto;
    width: 50px;
    height: 50px;
  }
  &__body {
    padding: 16px;
    text-align: center;
  }
  &__name {
    margin-top: 0;
    margin-bottom: 0;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: #fff;
    text-align: left;
  }
  &__price {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 32px;
    line-height: 48px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #fff;
    margin-top: 0px;
    margin-bottom: 0;
    text-align: left;
  }
  &__button {
    margin-top: 20px;
    width: 250px;
    height: 36px;
    background: linear-gradient(
        0deg,
        rgba(255, 205, 214, 0.32),
        rgba(255, 205, 214, 0.32)
      ),
      radial-gradient(
        561.96% 561.96% at 8.26% -222.83%,
        #df1e82 37.07%,
        #fce153 100%
      );
    border-radius: 8px;
    border: none;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #fff;
    transition: all 10s;
    &:hover {
      background: radial-gradient(
        561.96% 561.96% at 8.26% -222.83%,
        #df1e82 37.07%,
        #fce153 100%
      );
    }
    &:disabled,
    &[disabled] {
      background: linear-gradient(
          0deg,
          rgba(255, 205, 214, 0.32),
          rgba(255, 205, 214, 0.32)
        ),
        radial-gradient(
          561.96% 561.96% at 8.26% -222.83%,
          #df1e82 37.07%,
          #fce153 100%
        );
    }
    &--secondary {
      width: 250px;
      height: 36px;
      border: 1px solid #d9d6dc;
      box-sizing: border-box;
      border-radius: 8px;
      background: transparent;
      position: relative;
      padding-left: 36px;
      font-family: "Poppins", sans-serif;
      font-weight: 600;
      font-size: 14px;
      line-height: 21px;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #fff;
      margin-top: 12px;
      position: relative;
      &:hover {
        box-shadow: 0px 0px 2px 1px rgba(255, 255, 255, 0.48);
        &:before {
          background: url("./../assets/horse hover.svg");
        }
      }
      &:disabled,
      &[disabled] {
        border: 1px solid #a9a4af;
        box-shadow: none;
        color: #a9a4af;
      }
      &:before {
        content: "";
        display: block;
        width: 18px;
        height: 18px;
        position: absolute;
        top: 7px;
        left: 21px;
        background: url("./../assets/horse.svg");
      }
    }
  }
  &__link {
    font-family: "Roboto", sans-serif;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.16em;
    transition-delay: underline;
    text-transform: uppercase;
    color: #d9d6dc;
    text-align: center;
    margin-top: 12px;
    &:hover {
      color: #ffffff;
    }
  }
}
.info {
  &__items {
    margin-top: 14px;
  }
  &__item {
    display: flex;
    justify-content: space-between;
  }
  &__text {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.14em;
    margin-bottom: 8px;
    margin-top: 8px;
  }
  &__sum {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.14em;
    color: #fff;
    margin-bottom: 8px;
    margin-top: 8px;
  }
}
</style>
