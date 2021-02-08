<template>
  <div class="farm">
    <h1 class="farm__title">CyberTime Farming Week</h1>
    <p class="farm__text">
      Farm NFTL from 18 official pools, stake NFTL/ETH LP and become CTF holder
    </p>
    <div class="currency">
      <div class="currency__item">
        <div class="currency__item-header">
          <h2 class="currency__item-title">Stablecoins</h2>
        </div>
        <div class="currency__item-body">
          <ul class="coins">
            <li class="coins__item">
              <img
                src="./../../assets/usdc.svg"
                alt=""
                class="coins__item-image"
              />
              <p class="coins__item-name">usdc</p>
            </li>
            <li class="coins__item">
              <img
                src="./../../assets/usdt.svg"
                alt=""
                class="coins__item-image"
              />
              <p class="coins__item-name">usdt</p>
            </li>
            <li class="coins__item">
              <img
                src="./../../assets/dai.svg"
                alt=""
                class="coins__item-image"
              />
              <p class="coins__item-name">dai</p>
            </li>
            <li class="coins__item">
              <img
                src="./../../assets/tusd.svg"
                alt=""
                class="coins__item-image"
              />
              <p class="coins__item-name">tusd</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="currency__item">
        <div class="currency__item-header">
          <h2 class="currency__item-title">Crypto</h2>
        </div>
        <div class="currency__item-body">
          <ul class="coins">
            <li class="coins__item">
              <img
                src="./../../assets/usdc.svg"
                alt=""
                class="coins__item-image"
              />
              <p class="coins__item-name">link</p>
            </li>
            <li class="coins__item">
              <img
                src="./../../assets/uni.svg"
                alt=""
                class="coins__item-image"
              />
              <p class="coins__item-name">uni</p>
            </li>
            <li class="coins__item">
              <img
                src="./../../assets/yfi.svg"
                alt=""
                class="coins__item-image"
              />
              <p class="coins__item-name">yfi</p>
            </li>
            <li class="coins__item">
              <img
                src="./../../assets/comp.svg"
                alt=""
                class="coins__item-image"
              />
              <p class="coins__item-name">comp</p>
            </li>
            <li class="coins__item">
              <img
                src="./../../assets/aave.svg"
                alt=""
                class="coins__item-image"
              />
              <p class="coins__item-name">aave</p>
            </li>
            <li class="coins__item">
              <img
                src="./../../assets/weth.svg"
                alt=""
                class="coins__item-image"
              />
              <p class="coins__item-name">weth</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="currency__item">
        <div class="currency__item-header">
          <h2 class="currency__item-title">NFT</h2>
        </div>
        <div class="currency__item-body">
          <ul class="coins">
            <li class="coins__item">
              <img
                src="./../../assets/ghst.svg"
                alt=""
                class="coins__item-image"
              />
              <p class="coins__item-name">ghst</p>
            </li>
            <li class="coins__item">
              <img
                src="./../../assets/sand.svg"
                alt=""
                class="coins__item-image"
              />
              <p class="coins__item-name">sand</p>
            </li>
            <li class="coins__item">
              <img
                src="./../../assets/enj.svg"
                alt=""
                class="coins__item-image"
              />
              <p class="coins__item-name">enj</p>
            </li>
            <li class="coins__item">
              <img
                src="./../../assets/rari.svg"
                alt=""
                class="coins__item-image"
              />
              <p class="coins__item-name">rari</p>
            </li>
            <li class="coins__item">
              <img
                src="./../../assets/chz.svg"
                alt=""
                class="coins__item-image"
              />
              <p class="coins__item-name">chz</p>
            </li>
            <li class="coins__item">
              <img
                src="./../../assets/meme.svg"
                alt=""
                class="coins__item-image"
              />
              <p class="coins__item-name">meme</p>
            </li>
            <li class="coins__item">
              <img
                src="./../../assets/axs.svg"
                alt=""
                class="coins__item-image"
              />
              <p class="coins__item-name">axs</p>
            </li>
            <li class="coins__item">
              <img
                src="./../../assets/mana.svg"
                alt=""
                class="coins__item-image"
              />
              <p class="coins__item-name">mana</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.farm {
  width: 1200px;
  margin: 0 auto;
  &__title {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 32px;
    line-height: 48px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    text-align: center;
    color: #d9d6dc;
    margin-top: 87px;
  }
  &__text {
    display: block;
    margin: 11px auto;
    font-family: "Poppins", sans-serif;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0.18em;
    color: #d9d6dc;
    text-align: center;
    width: 500px;
  }
}
.currency {
  display: flex;
  justify-content: space-between;
  width: 993px;
  margin: 65px auto;
  &__item {
    width: 315px;
    height: 283px;
    background: #4a3762;
    border-radius: 8px;
  }
  &__item-header {
    box-sizing: border-box;
    border-bottom: 1px solid rgba(255, 255, 255, 0.23);
  }
  &__item-title {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #d9d6dc;
    text-align: center;
    margin-top: 16px;
    margin-bottom: 12px;
  }
  &__item-body {
    padding: 26px 18px;
  }
}
.coins {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 190px;
  margin: 0;
  padding: 0;
  list-style: none;
  &__item {
    display: flex;
    margin-bottom: 22px;
  }
  &__item-image {
    height: 25px;
    width: 25px;
  }
  &__item-name {
    margin: 0;
    margin-left: 16px;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.18em;
    color: #d9d6dc;
    text-transform: uppercase;
  }
}
</style>
