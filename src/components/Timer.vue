<template>
  <div id="countdown" class="countdown">
    <div class="countdown__number">
      <span class="days countdown__time"></span>
      <span class="countdown__text">d</span>
    </div>
    <div class="countdown__number">
      <span class="hours countdown__time"></span>
      <span class="countdown__text">h</span>
    </div>
    <div class="countdown__number">
      <span class="minutes countdown__time"></span>
      <span class="countdown__text">min</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Timer",
  mounted() {
    function getTimeRemaining(endtime) {
      let t = Date.parse(endtime) - Date.parse(new Date());

      let minutes = Math.floor((t / 1000 / 60) % 60);
      let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      let days = Math.floor(t / (1000 * 60 * 60 * 24));
      return {
        total: t,
        days: days,
        hours: hours,
        minutes: minutes,
      };
    }

    function initializeClock(id, endtime) {
      let clock = document.getElementById(id);
      let daysSpan = clock.querySelector(".days");
      let hoursSpan = clock.querySelector(".hours");
      let minutesSpan = clock.querySelector(".minutes");

      function updateClock() {
        let t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
        minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);

        if (t.total <= 0) {
          clearInterval(timeinterval);
        }
      }

      updateClock();
      let timeinterval = setInterval(updateClock, 1000);
    }

    let deadline = "2021-02-19"; // for endless timer
    initializeClock("countdown", deadline);
  },
};
</script>

<style lang="scss">
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
