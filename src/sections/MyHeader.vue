<template functional>
  <b-jumbotron class="jumbotron-header">
    <b-container>
      <div class="header-content">
        <h1 class="name"><strong>Kongpon C.</strong></h1>
        <h4>Software Developer</h4>
      </div>
    </b-container>
  </b-jumbotron>
</template>

<style scoped>
.jumbotron-header {
  background-image: url('../assets/images/header-blur.png');
  background-size: 100% 100%;
  border-radius: 0;
  margin-bottom: 0;
}

.name {
  font-size: 4em;
}

.header-content {
  margin: 14px 0 50px 0;
}

@media (max-width: 575px) {
  .name {
    font-size: 3em;
  }
}
</style>
