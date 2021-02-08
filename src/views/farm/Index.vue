<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
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
};
</script>
