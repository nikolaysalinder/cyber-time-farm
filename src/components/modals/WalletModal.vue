<template>
  <transition name="modal">
    <div class="modal__mask">
      <div class="modal__wrapper">
        <div class="modal__container">
          <div class="modal__header">
            <slot name="header">
              <h3>Connecting MetaMask</h3>
            </slot>
          </div>

          <div class="modal__body">
            <slot name="body">
              <img
                src="./../../assets/preloader.svg"
                alt=""
                class="preloader"
              />
              <p class="modal__text">
                Please unlock and authorize your MetaMask wallet to continue
              </p>
            </slot>
          </div>

          <div class="modal__footer">
            <slot name="footer">
              <button class="modal__button" @click="$emit('close')">
                Close
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  created() {
    setTimeout(() => {
      this.$emit("close");
    }, 2000);
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
    width: 348px;
    box-sizing: border-box;
    margin: 0px auto;
    padding: 16px 16px 24px;
    background: #584472;
    border-radius: 8px;
  }
  &__header h3 {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 137%;
    letter-spacing: 0.16em;
    color: #d9d6dc;
    text-align: center;
    margin-top: 0;
  }
  &__body p {
    color: #000;
    font-family: "Roboto";
    font-weight: 500;
    font-size: 14px;
    line-height: 137%;
    text-align: center;
    letter-spacing: 0.16em;
    color: #d9d6dc;
  }
  &__footer {
    color: #000;
  }
  &__button {
    margin-top: 49px;
    background: rgba(255, 255, 255, 0.13);
    border-radius: 4px;
    border: none;
    width: 315px;
    height: 28px;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.14em;
    color: #a9a4af;
    cursor: pointer;
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

.preloader {
  display: block;
  margin: 33px auto;

  animation: rotating 2s linear infinite;
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
