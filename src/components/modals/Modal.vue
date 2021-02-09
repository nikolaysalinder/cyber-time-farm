<template>
  <transition name="modal">
    <div class="modal__mask">
      <div class="modal__wrapper">
        <div
          class="modal__container"
          :class="{ 'modal__container--large': isLargeModal }"
        >
          <div class="modal__header">
            <slot name="header"> default header </slot>
          </div>

          <div class="modal__body">
            <slot name="body"> default body </slot>
          </div>

          <div class="modal__footer">
            <slot name="footer">
              <!--  <button class="modal__button" @click="$emit('close')">
                Close
              </button> -->
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["isLargeModal", "isSuccessModal"],
  created() {
    if (this.isSuccessModal) {
      setTimeout(() => {
        this.$emit("close");
      }, 2000);
    }
  },
};
</script>

<style lang="scss">
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
    width: 348px;
    border-radius: 8px;
    box-sizing: border-box;
    margin: 0px auto;
    padding: 16px 16px 24px;
    background: #584472;
    border-radius: 2px;
    box-shadow: 0px 4px 27px 7px rgba(21, 10, 34, 0.56);
    transition: all 0.3s ease;
    &--large {
      width: 439px;
      box-sizing: border-box;
      padding: 20px 20px 33px;
    }
  }
  &__subtitle {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 137%;
    letter-spacing: 0.16em;
    color: #d9d6dc;
    margin-top: 0;
    margin-bottom: 0;
    color: #d9d6dc;
  }
  &__body {
    margin: 20px 0;
  }
  &__preloader {
    margin-top: 33px;
    margin-bottom: 33px;
    animation: rotating 2s linear infinite;
  }
  &__success {
    margin-top: 37px;
    margin-bottom: 33px;
  }
  &__title {
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 0.18em;
    color: #fff;
  }
  &__text {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 137%;
    letter-spacing: 0.16em;
    color: #d9d6dc;
  }
  &__button {
    display: block;
    width: 100%;
    padding-top: 7px;
    padding-bottom: 7px;
    border: none;
    background: rgba(255, 255, 255, 0.13);
    border-radius: 4px;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.14em;
    color: #a9a4af;
  }
}

@keyframes rotating {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
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
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
.primary-modal {
  &__title {
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.075em;
    color: #ffffff;
    margin-top: 0;
  }
  &__fieldset {
    margin-top: 20px;
    text-align: left;
  }
  &__label {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.14em;
    color: #a9a4af;
    text-align: left;
  }
  &__input-wrapper {
    margin-top: 8px;
    position: relative;
  }
  &__input {
    width: 100%;
    box-sizing: border-box;
    padding: 16px 80px 16px 16px;
    background: rgba(255, 255, 255, 0.16);
    border-radius: 8px;
    border: none;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.14em;
    color: #fff;
  }
  &__button-max {
    display: block;
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
    padding: 5px 10px;
    background: transparent;
    position: absolute;
    top: 8px;
    right: 16px;
    &:hover {
      border: 1px solid #ffffff;
      box-shadow: 0px 0px 2px 1px rgba(255, 255, 255, 0.48);
    }
  }
  &__buttons {
    margin-top: 24px;
    display: flex;
    justify-content: space-between;
  }
  &__button--secondary {
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
    width: 203px;
    height: 36px;
    &:hover {
      border: 1px solid #ffffff;
      box-shadow: 0px 0px 2px 1px rgba(255, 255, 255, 0.48);
    }
  }
  &__button--primary {
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
}
</style>
