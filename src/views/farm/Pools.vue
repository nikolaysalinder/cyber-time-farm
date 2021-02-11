<template>
  <div class="token">
    <div class="token__container">
      <h1 class="token__title">Cyber Farming Week</h1>
      <h2 class="token__subtitle">
        Stake NFTL/ETH LP & CTF/ETH LP and earn CTF governance token
      </h2>
      <div class="token__items">
        <div class="token__item">
          <header class="token__header">
            <img
              src="./../../assets/Frame 446ntfl.svg"
              alt=""
              class="token__img"
            />
            <img src="./../../assets/eth.svg" alt="" class="token__img" />
          </header>
          <div class="token__body">
            <h3 class="token__item-title">
              Earn CTF Share <br />
              Stake NFTL/ETH Uniswap LP
            </h3>
            <div class="info__items">
              <div class="info__item">
                <p class="info__text">Total Value Locked</p>
                <p class="info__sum">86.400.000</p>
              </div>
              <div class="info__item">
                <p class="info__text">Annual Return</p>
                <p class="info__sum">23.44</p>
              </div>
              <div class="info__item">
                <p class="info__text">Daily Return</p>
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
            <img
              src="./../../assets/Frame 446ntfl.svg"
              alt=""
              class="token__img"
            />
            <img src="./../../assets/eth.svg" alt="" class="token__img" />
          </header>
          <div class="token__body">
            <h3 class="token__item-title">
              Earn CTF Share <br />
              Stake NFTL/ETH Uniswap LP
            </h3>
            <div class="info__items">
              <div class="info__item">
                <p class="info__text">Total Value Locked</p>
                <p class="info__sum">86.400.000</p>
              </div>
              <div class="info__item">
                <p class="info__text">Annual Return</p>
                <p class="info__sum">23.44</p>
              </div>
              <div class="info__item">
                <p class="info__text">Daily Return</p>
                <p class="info__sum">197.34%</p>
              </div>
            </div>
            <button class="token__button">stake ctf on pool</button>
            <button class="token__button--secondary">Buy NFT on Uniswap</button>
            <a href="#" class="token__link">contract</a>
          </div>
        </div>
      </div>
    </div>
    <div class="pools">
      <div class="pools__container">
        <h2 class="pools__title">Farm NFTL from 18 official pools</h2>
        <CountdownTimer />
        <p class="pools__text">
          Smart contracts are verified by a white hacker with reviews from
          Google, Microsoft, Apple, Oracle etc.
        </p>
        <div class="pools__items">
          <Pool v-for="pool in pools" :pool="pool" :key="pool.name" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CountdownTimer from "@/components/CountdownTimer.vue";
import Pool from "@/components/pools/Pool.vue";
export default {
  data() {
    return {
      pools: [
        { name: "usdc", value: "40.44" },
        { name: "usdt", value: "40.44" },
        { name: "dai", value: "40.44" },
        { name: "tusd", value: "40.44" },
        { name: "link", value: "40.44" },
        { name: "uni", value: "40.44" },
        { name: "yfi", value: "40.44" },
        { name: "comp", value: "40.44" },
        { name: "aave", value: "40.44" },
        { name: "weth", value: "40.44" },
        { name: "ghst", value: "40.44" },
        { name: "sand", value: "40.44" },
        { name: "enj", value: "40.44" },
        { name: "rari", value: "40.44" },
        { name: "axs", value: "40.44" },
        { name: "mana", value: "40.44" },
      ],
    };
  },
  components: {
    CountdownTimer,
    Pool,
  },
};
</script>

<style lang="scss" scoped>
.token {
  border-bottom: 1px solid rgba(255, 255, 255, 0.23);
  &__container {
    width: 1200px;
    margin: 0 auto;
    text-align: center;
  }
  &__title {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 32px;
    line-height: 48px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #d9d6dc;
  }
  &__subtitle {
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0.18em;
    color: #d9d6dc;
    width: 587px;
    margin-left: auto;
    margin-right: auto;
  }
  &__items {
    width: 590px;
    margin: 30px auto;
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
    display: flex;
    justify-content: space-between;
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 83px;
    padding-right: 83px;
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
  &__item-title {
    text-align: left;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.07em;
    color: #fff;
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
          background: url("./../../assets/horse hover.svg");
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
        background: url("./../../assets/horse.svg");
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
    color: #d9d6dc;
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
.pools {
  border-top: 1px solid rgba(255, 255, 255, 0.23);
  &__container {
    width: 1200px;
    margin: 0 auto;
  }
  &__title {
    font-family: "Poppins", sans-serif;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
    list-style: 0.18em;
    color: #d9d6dc;
    text-align: center;
    margin-top: 40px;
  }
  &__text {
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    font-style: italic;
    font-size: 14px;
    line-height: 137%;
    letter-spacing: 0.16em;
    color: #d9d6dc;
    width: 589px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 27px;
  }
  &__items {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    flex-wrap: wrap;
  }
}
</style>
