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
    return {
      lineSettings: [
        { position: 60, width: 60 },
        { position: 80, width: 60 },
        { position: 100, width: 60 },
        { position: 120, width: 60 },
      ],
    };
  },
  computed: {
    // currentLinePosition() {
    //   if (this.$route.name == "Home") {
    //     return this.lineSettings[0].position;
    //   } else if (this.$route.name == "Farm") {
    //     return this.lineSettings[1].position;
    //   } else if (this.$route.name == "Invite") {
    //     return this.lineSettings[2].position;
    //   } else if (this.$route.name == "About") {
    //     return this.lineSettings[3].position;
    //   }
    //   return 0;
    // },
  },
  watch: {},
  methods: {
    setLine(nextPosition) {
      const line = document.getElementById("line");
      const style = getComputedStyle(line);
      const left = style.getPropertyValue("left");
      console.log(left, nextPosition);
      if (parseInt(left) < nextPosition) {
        const timer = setInterval(function () {
          const line = document.getElementById("line");
          const style = getComputedStyle(line);
          const left = style.getPropertyValue("left");
          if (parseInt(left) >= nextPosition) {
            clearInterval(timer);
            return;
          }

          line.style.left = parseInt(left) + 2 + "px";
        }, 5);
      } else {
        const timer = setInterval(function () {
          const line = document.getElementById("line");
          const style = getComputedStyle(line);
          const left = style.getPropertyValue("left");
          if (parseInt(left) <= nextPosition) {
            clearInterval(timer);
            return;
          }

          line.style.left = parseInt(left) - 2 + "px";
        }, 5);
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
};
</script>

<style lang="scss">
.header {
  outline: 1px solid green;
  display: flex;
  justify-content: start;
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
    left: 0;
    bottom: 0;
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
