<template>
  <transition name="modal">
    <div class="modal__mask">
      <div class="modal__wrapper">
        <div class="modal__container">
          <div class="modal__header">
            <h3 class="modal__title">Deposit</h3>
          </div>
          <div class="modal__body">
            <label for="token-sum" class="token__label"
              >{{ tokenMax }} CTF/ETH-LP Available</label
            >
            <div class="token__wrapper">
              <input
                type="number"
                id="token-sum"
                class="token__input"
                min="0"
                v-model="token"
              />
              <button class="token__btn-max" @click="setMax">Max</button>
            </div>
          </div>

          <div class="modal__footer">
            <button class="modal__button--secondary" @click="$emit('close')">
              Cancel
            </button>
            <button class="modal__button">Confirm</button>
            <!-- <slot name="footer">
              default footer
              <button class="modal__button" @click="$emit('close')">OK</button>
            </slot> -->
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  data() {
    return {
      tokenMax: 499,
      token: 0,
    };
  },
  methods: {
    setMax() {
      this.token = this.tokenMax;
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  &__mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
  }
  &__wrapper {
    display: table-cell;
    vertical-align: middle;
    background: rgba(0, 0, 0, 0.42);
    backdrop-filter: blur(2px);
  }
  &__container {
    width: 439px;
    box-sizing: border-box;
    margin: 0px auto;
    padding: 20px 20px 33px;
    background: #4a3762;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
  }
  &__header {
  }
  &__title {
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.075em;
    color: #fff;
    margin: 0;
  }
  &__body {
    margin-top: 20px;
    text-align: left;
  }
  &__footer {
    margin-top: 24px;
    display: flex;
    justify-content: space-between;
  }
  &__button {
    width: 184px;
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
    &:hover {
      background: radial-gradient(
        561.96% 561.96% at 8.26% -222.83%,
        #df1e82 37.07%,
        #fce153 100%
      );
    }
  }
  &__button--secondary {
    width: 203px;
    height: 36px;
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
    background: transparent;
    &:hover {
      border: 1px solid #ffffff;
      box-sizing: border-box;
      box-shadow: 0px 0px 2px 1px rgba(255, 255, 255, 0.48);
    }
  }
}
.token {
  &__label {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.14em;
    color: #a9a4af;
  }
  &__wrapper {
    margin-top: 8px;
    position: relative;
  }
  &__input {
    width: 100%;
    box-sizing: border-box;
    padding: 16px 80px 16px 16px;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.14em;
    color: #fff;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.16);
    border: none;
  }
  &__btn-max {
    display: block;
    width: 56px;
    height: 31px;
    border: 1px solid #d9d6dc;
    box-sizing: border-box;
    border-radius: 8px;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #fff;
    background: transparent;
    position: absolute;
    right: 16px;
    top: 8px;
    &:hover {
      border: 1px solid #ffffff;
      box-shadow: 0px 0px 2px 1px rgba(255, 255, 255, 0.48);
    }
  }
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
