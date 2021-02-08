<template>
  <div class="media">
    <a
      href="https://cybertime.medium.com/"
      class="media__item media__item--one"
    ></a>
    <a
      href="https://t.me/cybertime_eth"
      class="media__item media__item--two"
    ></a>
    <a
      href="https://twitter.com/cybertime_eth"
      class="media__item media__item--three"
    ></a>
    <a
      href="https://discord.gg/YZtubvRX7X"
      class="media__item media__item--four"
    ></a>
    <a
      href="https://www.reddit.com/r/cybertime_eth"
      class="media__item media__item--five"
    ></a>
    <a
      href="https://linkedin.com/company/cybertime-finance"
      class="media__item media__item--six"
    ></a>
    <a
      href="https://www.facebook.com/cybertime.finance"
      class="media__item media__item--seven"
    ></a>
    <a
      href="https://github.com/cybertime-eth"
      class="media__item media__item--eight"
    ></a>
  </div>
</template>

<style lang="scss" scoped="true">
.media {
  display: flex;
  justify-content: space-between;
  z-index: 3;
  width: 568px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  margin-bottom: 30px;
  &--top {
    margin-top: 30px;
    display: none;
  }
  &__item {
    border-radius: 50%;
    border: 2px solid #d9d6dc;
    width: 42px;
    height: 42px;
    margin-right: 24px;
    &:hover {
      border: 2px solid #fff;
      box-shadow: 0px 0px 2px 1px rgba(255, 255, 255, 0.48);
    }
    &--one {
      background: url("./../assets/mediaone.svg");
      background-repeat: no-repeat;
      background-position: 50% 50%;
      &:hover {
        background: url("./../assets/mediaonewhite.svg");
        background-repeat: no-repeat;
        background-position: 50% 50%;
      }
    }
    &--two {
      background: url("./../assets/mediatwo.svg");
      background-repeat: no-repeat;
      background-position: 50% 50%;
      &:hover {
        background: url("./../assets/mediatwowhite.svg");
        background-repeat: no-repeat;
        background-position: 50% 50%;
      }
    }
    &--three {
      background: url("./../assets/mediathree.svg");
      background-repeat: no-repeat;
      background-position: 50% 50%;
      &:hover {
        background: url("./../assets/mediathreewhite.svg");
        background-repeat: no-repeat;
        background-position: 50% 50%;
      }
    }
    &--four {
      background: url("./../assets/mediafour.svg");
      background-repeat: no-repeat;
      background-position: 50% 50%;
      &:hover {
        background: url("./../assets/mediafourwhite.svg");
        background-repeat: no-repeat;
        background-position: 50% 50%;
      }
    }
    &--five {
      background: url("./../assets/mediafive.svg");
      background-repeat: no-repeat;
      background-position: 50% 50%;
      &:hover {
        background: url("./../assets/mediafivewhite.svg");
        background-repeat: no-repeat;
        background-position: 50% 50%;
      }
    }
    &--six {
      background: url("./../assets/mediasix.svg");
      background-repeat: no-repeat;
      background-position: 50% 50%;
      &:hover {
        background: url("./../assets/mediasixwhite.svg");
        background-repeat: no-repeat;
        background-position: 50% 50%;
      }
    }
    &--seven {
      background: url("./../assets/mediaseven.svg");
      background-repeat: no-repeat;
      background-position: 50% 50%;
      &:hover {
        background: url("./../assets/mediasevenwhite.svg");
        background-repeat: no-repeat;
        background-position: 50% 50%;
      }
    }
    &--eight {
      background: url("./../assets/mediaeight.svg");
      background-repeat: no-repeat;
      background-position: 50% 50%;
      &:hover {
        background: url("./../assets/mediaeightwhite.svg");
        background-repeat: no-repeat;
        background-position: 50% 50%;
      }
    }
  }
}
</style>
