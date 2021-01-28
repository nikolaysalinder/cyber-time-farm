<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  beforeRouteUpdate(to, from, next) {
    // вызывается до подтверждения пути, соответствующего этому компоненту.
    // НЕ ИМЕЕТ доступа к контексту экземпляра компонента `this`,
    // так как к моменту вызова экземпляр ещё не создан!
    const line = document.getElementById("line");
    line.style.left = 60 + "px";
    next();
  },
};
</script>
