<template>
  <div class="countdown">
    <div class="countdown__times">
      <p class="countdown__start-time">Farming start: 19.02.2021</p>
      <p class="countdown__end-time">Farming end: 26.02.2021</p>
    </div>
    <div class="countdown__timer">
      <div class="countdown__days">
        <span class="countdown__value">{{ displayDays }}</span>
        <div class="countdown__text">Days</div>
      </div>
      <p class="countdown__delimeter">:</p>
      <div class="countdown__hours">
        <span class="countdown__value">{{ displayHours }}</span>
        <div class="countdown__text">Hours</div>
      </div>
      <p class="countdown__delimeter">:</p>
      <div class="countdown__minutes">
        <span class="countdown__value">{{ displayMinutes }}</span>
        <div class="countdown__text">Minutes</div>
      </div>
      <p class="countdown__delimeter">:</p>
      <div class="countdown__seconds">
        <span class="countdown__value">{{ displaySeconds }}</span>
        <div class="countdown__text">Seconds</div>
      </div>
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
        //  Установка даты
        const end = new Date(2021, 1, 26, 0, 0, 0, 0);
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

<style lang="scss">
.countdown {
  margin-left: auto;
  margin-right: auto;
  margin-top: 27px;
  width: 588px;
  &__times {
    display: flex;
    justify-content: space-between;
  }
  &__start-time {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 137%;
    letter-spacing: 0.16em;
    color: #d9d6dc;
  }
  &__end-time {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 137%;
    letter-spacing: 0.16em;
    color: #d9d6dc;
  }
  &__timer {
    display: flex;
    justify-content: space-between;
    padding: 19px 90px;
    border: 1px solid #ffffff;
    box-sizing: border-box;
    box-shadow: 0px 0px 2px 1px rgba(255, 255, 255, 0.48);
  }
  &__value {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 42px;
    line-height: 63px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
  }
  &__text {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 137%;
    letter-spacing: 0.16em;
    color: #d9d6dc;
  }
  &__delimeter {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 42px;
    line-height: 59px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    margin: 0;
  }
}
</style>
