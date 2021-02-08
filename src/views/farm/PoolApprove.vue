<template>
  <div class="pool-approve">
    <h1 class="pool-approve__title">CTF/ETH LP pool</h1>
    <h2 class="pool-approve__subtitle">
      Provide Liquidity to CTF/ETH on Uniswap and Earn CFT Shares
    </h2>
    <div class="pool-approve__items">
      <div class="pool-approve__item">
        <div class="pool-approve__item-header">
          <img
            src="./../../assets/ctf.svg"
            alt=""
            class="pool-approve__item-img"
          />
          <img
            src="./../../assets/eth.svg"
            alt=""
            class="pool-approve__item-img"
          />
        </div>
        <div class="pool-approve__item-body">
          <h3 class="pool-approve__item-title">
            <span class="pool-approve__item-sum">0</span>
            CTF/ETH LP
          </h3>
          <p class="pool-approve__item-text">Stake ballance</p>
          <button class="pool-approve__item-btn">approve share</button>
        </div>
      </div>
      <div class="pool-approve__item">
        <div class="pool-approve__item-header">
          <img src="./../../assets/ctf.svg" alt="" class="pool-approve__img" />
        </div>
        <div class="pool-approve__item-body">
          <h3 class="pool-approve__item-title">
            <span class="pool-approve__item-sum">0</span>
            CTF
          </h3>
          <p class="pool-approve__item-text">Unclaimed Profit</p>
          <button class="pool-approve__item-btn" disabled>claim profit</button>
        </div>
      </div>
    </div>
    <div class="info">
      <div class="info__header">
        <div class="info__item">
          <p class="info__text">Total Value Locked</p>
          <p class="info__value">13.000500</p>
        </div>
        <div class="info__item">
          <p class="info__text">Annual Return</p>
          <p class="info__value">333%</p>
        </div>
      </div>
      <div class="info__body">
        <div class="info__item">
          <p class="info__text">Your Share of Pool</p>
          <p class="info__value">499</p>
        </div>
      </div>
    </div>
    <a href="#" class="pool-approve__link">Get CTF/ETH LP on Uniswap</a>
    <Modal v-if="showConfirmationModal" @close="showConfirmationModal = false">
      <p slot="header" class="modal__subtitle">Waiting for Confirmation</p>
      <div slot="body" class="modal__body">
        <img
          src="./../../assets/preloader.svg"
          alt=""
          class="modal__preloader"
        />
        <h3 class="modal__title">Approve CTF/ETH LP</h3>
        <p class="modal__text">Please confirm this transaction</p>
      </div>
    </Modal>
    <Modal
      v-if="showSuccessModal"
      :isSuccessModal="true"
      @close="showSuccessModal = false"
    >
      <p slot="header" class="modal__subtitle">Successfully</p>
      <div slot="body" class="modal__body">
        <img src="./../../assets/success.svg" alt="" class="modal__success" />
        <h3 class="modal__title">Transaction confirmed</h3>
      </div>
      <div slot="footer"></div>
    </Modal>
    <Modal v-if="showErrorModal" @close="showErrorModal = false">
      <p slot="header" class="modal__subtitle">Transaction Error</p>
      <div slot="body" class="modal__body">
        <img src="./../../assets/error.svg" alt="" class="modal__success" />
        <h3 class="modal__title">Transaction rejected</h3>
        <p class="modal__text">
          Metamask Tx Signature: User denied transaction signature
        </p>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from "@/components/modals/Modal.vue";
export default {
  data() {
    return {
      showConfirmationModal: false,
      showSuccessModal: false,
      showErrorModal: false,
    };
  },
  components: {
    Modal,
  },
};
</script>

<style lang="scss" scoped>
.pool-approve {
  width: 1200px;
  margin: 0 auto;
  text-align: center;
  &__title {
    font-family: "Poppins", sans-serif;
    font-size: 32px;
    font-weight: 500;
    line-height: 48px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #d9d6dc;
    margin-top: 60px;
    text-align: center;
    margin-bottom: 0;
  }
  &__subtitle {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0.18em;
    color: #d9d6dc;
    margin-top: 8px;
    text-align: center;
    width: 563px;
    margin-left: auto;
    margin-right: auto;
  }
  &__items {
    display: flex;
    justify-content: space-between;
    width: 593px;
    margin: 26px auto;
  }
  &__item {
    width: 282px;
    background: #4a3762;
    border-radius: 8px;
  }
  &__item-header {
    display: flex;
    justify-content: space-between;
    height: 62px;
    box-sizing: border-box;
    padding: 16px 106px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.23);
  }
  &__item-img {
    width: 30px;
    height: 30px;
  }
  &__item-body {
    padding: 16px;
  }
  &__item-title {
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.07em;
    color: #fff;
    text-align: left;
    margin-top: 0;
    margin-bottom: 0;
  }
  &__item-sum {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #fff;
  }
  &__item-text {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.14em;
    color: #d9d6dc;
    margin-top: 9px;
    text-align: left;
  }
  &__item-btn {
    display: block;
    width: 100%;
    height: 36px;
    background: transparent;
    margin-top: 22px;
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
    &:hover {
      border: 1px solid #fff;
      box-shadow: 0px 0px 2px 1px rgba(255, 255, 255, 0.48);
      color: #fff;
    }
    &:disabled,
    &[disabled] {
      border: 1px solid #a9a4af;
      box-shadow: none;
      color: #a9a4af;
    }
  }
  &__link {
    display: inline-block;
    margin: 33px auto;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 137%;
    letter-spacing: 0.16em;
    color: #ff0083;
    text-align: center;
    position: relative;
    padding-left: 36px;
    &:before {
      content: "";
      display: block;
      width: 24px;
      height: 24px;
      position: absolute;
      left: 0;
      background: url("./../../assets/horse.svg");
      background-repeat: no-repeat;
    }
  }
}
.info {
  width: 593px;
  margin: 0 auto;
  background: #4a3762;
  box-sizing: border-box;
  border-radius: 8px;
  &__header {
    padding-top: 20px;
    padding-right: 17px;
    padding-left: 17px;
    padding-bottom: 8px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.23);
  }
  &__body {
    padding-top: 24px;
    padding-right: 17px;
    padding-left: 17px;
    padding-bottom: 4px;
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
    color: #d9d6dc;
    margin: 0;
    margin-bottom: 16px;
  }
  &__value {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.14em;
    color: #fff;
    margin: 0;
    margin-bottom: 16px;
  }
}
</style>
