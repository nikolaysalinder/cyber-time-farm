<template>
  <div class="login">
    <p class="login__text">Please connect your wallet to continue</p>
    <button class="login__button">Connect wallet</button>
  </div>
</template>
<script>
export default {
  name: "login",
};
</script>

<style lang="scss">
.login {
  width: 1200px;
  margin: 0 auto;
  &__text {
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0.18em;
    color: #d9d6dc;
    text-align: center;
    margin-top: 103px;
  }
  &__button {
    display: block;
    margin: 0 auto;
    width: 227px;
    height: 46px;
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
    margin-top: 40px;
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
  }
}
</style>
