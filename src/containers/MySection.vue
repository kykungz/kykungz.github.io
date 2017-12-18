<template functional>
<b-container fluid id="section">
  <h1 class="content-container mx-auto">
    <icon :name="props.icon" scale="2.4"></icon>
    {{ props.topic }}
  </h1>
  <hr class="content-container mx-auto">
  <div :class="{ 'content-container' : !props.wide, 'mx-auto' : true }">
    <slot></slot>
  </div>
  <hr class="content-container mx-auto">
</b-container>
</template>
