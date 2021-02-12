<template>
  <header class="header">
    <div>
      <a href="/" class="logo">
        <img src="../assets/Logo.svg" alt="" class="logo__image" />
        <h1 class="logo__text">CyberTime farm</h1>
      </a>
    </div>
    <nav class="header__nav">
      <ul class="header__nav-items">
        <li class="header__nav-item">
          <router-link to="/" class="header__nav-link" exact>Home</router-link>
        </li>
        <li class="header__nav-item">
          <router-link to="/farm" class="header__nav-link">Farm</router-link>
        </li>
        <li class="header__nav-item">
          <router-link to="/share" class="header__nav-link">Share</router-link>
        </li>
        <li class="header__nav-item">
          <router-link to="/leaderboard" class="header__nav-link"
            >Leaderboard</router-link
          >
        </li>
        <li class="header__nav-item">
          <router-link to="/vote" class="header__nav-link">Vote</router-link>
        </li>
      </ul>
    </nav>
    <button v-if="!isLogin" @click="goToLoginPage" class="wallet__login">
      Connect
    </button>
    <div v-else class="wallet">
      <img src="./../assets/avatar.svg" alt="" class="wallet__img" />
      <p class="wallet__id">{{ shortWalletID }}</p>
      <img src="./../assets/icon-success.svg" alt="" class="wallet__state" />
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  computed: {
    isLogin() {
      return this.$store.state.walletID;
    },
    shortWalletID() {
      return this.$store.getters.getShortWalletID;
    },
  },
  methods: {
    goToLoginPage() {
      if (this.$route.path != "/farm/login") {
        this.$router.push("/farm/login");
      }
    },
    // setLine(nextPosition) {
    //   const line = document.getElementById("line");
    //   const style = getComputedStyle(line);
    //   const left = style.getPropertyValue("left");
    //   if (parseInt(left) < nextPosition) {
    //     const timer = setInterval(function () {
    //       const line = document.getElementById("line");
    //       const style = getComputedStyle(line);
    //       const left = style.getPropertyValue("left");
    //       if (parseInt(left) >= nextPosition) {
    //         clearInterval(timer);
    //         return;
    //       }

    //       line.style.left = parseInt(left) + 1 + "px";
    //     }, 2);
    //   } else {
    //     const timer = setInterval(function () {
    //       const line = document.getElementById("line");
    //       const style = getComputedStyle(line);
    //       const left = style.getPropertyValue("left");
    //       if (parseInt(left) <= nextPosition) {
    //         clearInterval(timer);
    //         return;
    //       }
    //       line.style.left = parseInt(left) - 1 + "px";
    //     }, 2);
    //   }
    // },
  },
  created() {
    //   const unwatch = this.$watch(
    //     () => this.$route,
    //     (route) => {
    //       if (route.name == "Home") {
    //         this.setLine(0);
    //       } else if (route.name == "Farm") {
    //         this.setLine(90);
    //       } else if (route.name == "Invite") {
    //         this.setLine(182);
    //       } else if (route.name == "About") {
    //         this.setLine(277);
    //       }
    //       unwatch();
    //     }
    //   );
    // },
    // beforeDestroy() {
    //   const line = document.getElementById("line");
    //   line.style.removeProperty("left");
  },
};
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 1200px;
  padding: 35px 10px;
  box-sizing: border-box;
  &__nav {
    margin-left: 100px;
    position: relative;
  }
  &__nav-items {
    margin: 0;
    padding: 0;
    height: 33px;
    list-style: none;
    display: flex;
  }
  &__nav-line {
    display: block;
    height: 2px;
    width: 65px;
    background: #fff;
    position: absolute;
    bottom: 0;
    &--first {
      left: 0;
    }
    &--second {
      left: 90px;
    }
    &--third {
      left: 180px;
    }
    &--fourth {
      left: 277px;
    }
  }
  &__nav-item {
    margin-right: 28px;
  }
  &__nav-link {
    color: #d9d6dc;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0.18em;
    text-decoration: none;
  }
}
.logo {
  display: flex;
  text-decoration: none;
  &__image {
    width: 48px;
    height: 26px;
  }
  &__text {
    margin: 0 0 0 4px;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0.18em;
    color: #fff;
    text-decoration: none;
  }
}
.wallet {
  width: 253px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__login {
    display: block;
    text-decoration: none;
    background: rgba(217, 214, 220, 0.12);
    width: 147px;
    height: 40px;
    border-radius: 4px;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.18em;
    color: #fff;
    padding-left: 49px;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-right: 11px;
    box-sizing: border-box;
    position: relative;
    border: none;
    cursor: pointer;
    &:before {
      content: "";
      display: block;
      width: 24px;
      height: 24px;
      background: url("./../assets/walletwallet.svg");
      position: absolute;
      top: 8px;
      left: 11px;
    }
  }

  &__img {
    display: block;
    width: 40px;
    height: 40px;
  }
  &__id {
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.18em;
    color: #fff;
  }
  &__state {
    display: block;
    width: 20px;
    height: 20px;
  }
}
.router-link-active {
  position: relative;
  &:before {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    background: #fff;
    position: absolute;
    bottom: -14px;
  }
}
</style>
