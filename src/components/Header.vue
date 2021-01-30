<template>
  <header class="header">
    <div @click="setLine(0)">
      <router-link to="/" class="logo">
        <img src="../assets/Logo.svg" alt="" class="logo__image" />
        <h1 class="logo__text">CyberTime farm</h1>
      </router-link>
    </div>
    <nav class="header__nav">
      <div class="header__nav-line" id="line"></div>
      <ul class="header__nav-items">
        <li class="header__nav-item" @click="setLine(0)">
          <router-link to="/" class="header__nav-link">Home</router-link>
        </li>
        <li class="header__nav-item" @click="setLine(90)">
          <router-link to="/farm" class="header__nav-link">Farm</router-link>
        </li>
        <li class="header__nav-item" @click="setLine(182)">
          <router-link to="/invite" class="header__nav-link"
            >Invite</router-link
          >
        </li>
        <li class="header__nav-item" @click="setLine(277)">
          <router-link to="/about" class="header__nav-link">About</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  computed: {
    lineClassObject() {
      if (this.$route.name == "Home") {
        return {
          "header__nav-line--first": true,
        };
      } else if (this.$route.name == "Farm") {
        return {
          "header__nav-line--second": true,
        };
      } else if (this.$route.name == "Invite") {
        return {
          "header__nav-line--third": true,
        };
      } else if (this.$route.name == "About") {
        return {
          "header__nav-line--fourth": true,
        };
      }
      return {
        left: 0,
      };
    },
  },
  methods: {
    setLine(nextPosition) {
      const line = document.getElementById("line");
      const style = getComputedStyle(line);
      const left = style.getPropertyValue("left");
      if (parseInt(left) < nextPosition) {
        const timer = setInterval(function () {
          const line = document.getElementById("line");
          const style = getComputedStyle(line);
          const left = style.getPropertyValue("left");
          if (parseInt(left) >= nextPosition) {
            clearInterval(timer);
            return;
          }

          line.style.left = parseInt(left) + 1 + "px";
        }, 2);
      } else {
        const timer = setInterval(function () {
          const line = document.getElementById("line");
          const style = getComputedStyle(line);
          const left = style.getPropertyValue("left");
          if (parseInt(left) <= nextPosition) {
            clearInterval(timer);
            return;
          }
          line.style.left = parseInt(left) - 1 + "px";
        }, 2);
      }
    },
  },
  created() {
    const unwatch = this.$watch(
      () => this.$route,
      (route) => {
        if (route.name == "Home") {
          this.setLine(0);
        } else if (route.name == "Farm") {
          this.setLine(90);
        } else if (route.name == "Invite") {
          this.setLine(182);
        } else if (route.name == "About") {
          this.setLine(277);
        }
        unwatch();
      }
    );
  },
  beforeDestroy() {
    const line = document.getElementById("line");
    line.style.removeProperty("left");
  },
};
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: flex-start;
  margin: 0 auto;
  width: 1200px;
  padding: 35px 10px;
  box-sizing: border-box;
  &__nav {
    margin-left: 178px;
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
</style>
