<template>
  <div class="invite">
    <img class="invite__image" src="./../assets/img_evangelist.svg" alt="" />
    <h1 class="invite__title">Evangelist program</h1>
    <p class="invite__text">
      Tell about our project in social networks, involve your
      friends/acquaintances and participate in the drawing of exclusive NFTs
      from CyberTime. Each participant in the program will receive points for
      activity. Multiplier depends on:
    </p>
    <ul class="invite__list">
      <li class="invite__list-item">
        <p class="invite__text">
          Audience coverage (post for 1000 people is more valuable than a
          personal conversation)
        </p>
      </li>
      <li class="invite__list-item">
        <p class="invite__text">
          Audience quality (if you have access to investors / blockchain
          enthusiasts / NFT authors, then the score is higher)
        </p>
      </li>
      <li class="invite__list-item">
        <p class="invite__text">
          Frequency of activity (the more often you repost our messages, publish
          from yourself about us, the higher the score)
        </p>
      </li>
      <li class="invite__list-item">
        <p class="invite__text">
          Multichannel activity (if you are active on different social networks,
          the score is higher)
        </p>
      </li>
    </ul>
    <div class="participate">
      <h2 class="participate__title">How can you participate?</h2>
      <ol class="participate__items">
        <li class="participate__item">
          <p class="participate__text">
            Publish information about us in your accounts / invite your friends
            to our social groups networks.
          </p>
        </li>
        <li class="participate__item">
          <p class="participate__text">
            Fill out the form with confirmation from the link:<br />
            <br />
            <a
              class="participate__item-link"
              href="https://forms.gle/p9hfbNuMkPiMXrQP9"
              >https://forms.gle/p9hfbNuMkPiMXrQP9</a
            >
          </p>
        </li>
        <li class="participate__item">
          <p class="participate__text">Follow the rating table</p>
        </li>
        <li class="participate__item">
          <p class="participate__text">
            Repeat the process every time you mention us
          </p>
        </li>
      </ol>
    </div>
    <p class="invite__text">Multiplier examples:</p>
    <ul class="examples">
      <li class="examples__item">
        <p class="examples__text">YouTube Video Review (>1k followers)</p>
        <span class="examples__count">x5</span>
      </li>
      <li class="examples__item">
        <p class="examples__text">Twitter post review (>1k followers)</p>
        <span class="examples__count">x5</span>
      </li>
      <li class="examples__item">
        <p class="examples__text">
          Medium / Site post review (more 1k symbols)
        </p>
        <span class="examples__count">x5</span>
      </li>
      <li class="examples__item">
        <p class="examples__text">YouTube Video (300-1k followers)</p>
        <span class="examples__count">x3</span>
      </li>
      <li class="examples__item">
        <p class="examples__text">Twitter post (300-1k followers)</p>
        <span class="examples__count">x3</span>
      </li>
      <li class="examples__item">
        <p class="examples__text">BitcoinTalk Tred post</p>
        <span class="examples__count">x3</span>
      </li>
      <li class="examples__item">
        <p class="examples__text">Сomments in thematic publics / channels</p>
        <span class="examples__count">x1.5</span>
      </li>
      <li class="examples__item">
        <p class="examples__text">YouTube Video (>300 followers)</p>
        <span class="examples__count">x1.5</span>
      </li>
      <li class="examples__item">
        <p class="examples__text">Twitter post (>300 followers)</p>
        <span class="examples__count">x1.5</span>
      </li>
    </ul>
    <p class="invite__text">
      We will publish a leaderboard where we will regularly update the total
      scores. Summing up and announcing the winners on February 26 after Cyber
      Farming Week
    </p>
  </div>
</template>

<style lang="scss">
.invite {
  width: 1200px;
  margin: 0 auto;
  &__image {
    display: block;
    margin: 36px auto 23px;
  }
  &__title {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 32px;
    line-height: 48px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    text-align: center;
  }
  &__text {
    display: block;
    margin: 20px auto;
    width: 588px;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 137%;
    letter-spacing: 0.16em;
    color: #d9d6dc;
  }
  &__list {
    margin: 0;
    list-style: none;
    display: block;
    width: 588px;
    margin: 0 auto;
  }
  &__list-item {
    position: relative;
    &:before {
      content: "";
      display: block;
      width: 12px;
      height: 12px;
      position: absolute;
      left: -21px;
      top: 4px;
      background: url("./../assets/dot.svg");
    }
  }
}
.participate {
  width: 588px;
  margin: 30px auto;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  box-shadow: 0px 0px 2px 1px rgba(255, 255, 255, 0.48);
  padding: 21px 17px;
  &__title {
    margin-top: 0;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 137%;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }
  &__items {
    padding-left: 18px;
  }
  &__text {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 137%;
    letter-spacing: 0.16em;
    color: #d9d6dc;
    margin-left: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  &__item-link {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.16em;
    text-decoration: underline;
    text-transform: uppercase;
    color: #ffffff;
    margin-left: 63px;
    &:hover {
      text-decoration: none;
    }
  }
}
.examples {
  display: block;
  box-sizing: border-box;
  width: 588px;
  list-style: none;
  margin: 0 auto;
  padding: 0;
  &__item {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(255, 255, 255, 0.23);
    position: relative;
    &:before {
      content: "";
      display: block;
      width: 14px;
      height: 12px;
      background: url("./../assets/line.svg");
      position: absolute;
      top: 16px;
      left: 0px;
    }
  }
  &__text {
    margin-top: 11px;
    margin-left: 22px;
    margin-bottom: 10px;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 137%;
    letter-spacing: 0.16em;
    color: #d9d6dc;
  }
  &__count {
    margin-top: 11px;
    margin-bottom: 10px;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 137%;
    letter-spacing: 0.16em;
    color: #d9d6dc;
  }
}
</style>
