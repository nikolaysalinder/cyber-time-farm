<template>
  <transition name="modal">
    <div class="modal__mask">
      <div class="modal__wrapper">
        <div class="modal__container">
          <div class="modal__header">
            <slot name="header"> default header </slot>
          </div>

          <div class="modal__body">
            <slot name="body"> default body </slot>
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
  props: ["isSuccess"],
  created() {
    if (this.isSuccessModal) {
      setTimeout(() => {
        this.$emit("close");
        this.$router.push("/farm/pool-deposit");
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
</style>
