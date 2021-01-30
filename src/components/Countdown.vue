<template>
  <div id="countdown" class="countdown">
    <div class="countdown__number">
      <span class="days countdown__time">{{ displayDays }}</span>
      <span class="countdown__text">d</span>
    </div>
    <div class="countdown__number">
      <span class="hours countdown__time"> {{ displayHours }}</span>
      <span class="countdown__text">h</span>
    </div>
    <div class="countdown__number">
      <span class="minutes countdown__time">{{ displayMinutes }}</span>
      <span class="countdown__text">min</span>
    </div>
    <div class="countdown-number">
      <span class="seconds countdown__time">{{ displaySeconds }}</span>
      <span class="countdown__text">sec</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      displayDays: 0,
      displayHours: 0,
      displayMinutes: 0,
      displaySeconds: 0,
    };
  },
  computed: {
    _seconds: () => 1000,
    _minutes() {
      return this._seconds * 60;
    },
    _hours() {
      return this._minutes * 60;
    },
    _days() {
      return this._hours * 24;
    },
  },
  mounted() {
    this.showRemaining();
  },
  methods: {
    formatNum(num) {
      return num < 10 ? "0" + num : num;
    },
    showRemaining() {
      const timer = setInterval(() => {
        const now = new Date();
        const end = new Date(2021, 1, 19, 0, 0, 0, 0);
        const distance = end.getTime() - now.getTime();

        if (distance < 0) {
          clearInterval(timer);
          this.displayDays = "00";
          this.displayHours = "00";
          this.displayMinutes = "00";
          this.displaySeconds = "00";
          return;
        }

        const days = Math.floor(distance / this._days);
        const hours = Math.floor((distance % this._days) / this._hours);
        const minutes = Math.floor((distance % this._hours) / this._minutes);
        const seconds = Math.floor((distance % this._minutes) / this._seconds);

        this.displaySeconds = this.formatNum(seconds);
        this.displayMinutes = this.formatNum(minutes);
        this.displayHours = this.formatNum(hours);
        this.displayDays = this.formatNum(days);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.countdown {
  display: flex;
  justify-content: center;
  padding-top: 21px;
  width: 636px;
  height: 105px;
  margin: 0 auto;
  border: 1px solid #fff;
  box-sizing: border-box;
  box-shadow: 0px 0px 2px 1px rgba(255, 255, 255, 0.48);

  &__time {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 42px;
    line-height: 63px;
    letter-spacing: 0.18em;
  }
  &__text {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 42px;
    line-height: 63px;
    letter-spacing: 0.18em;
    margin-right: 20px;
  }
}
</style>
