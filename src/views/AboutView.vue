<template>
  <!-- <AboutView /> -->
  <div class="container y mandatory-scroll-snapping" dir="ltr">
    <div class="a-text">1</div>
    <div class="a-img1 imgs">2</div>
    <div class="a-text">3</div>
    <div class="a-img2 imgs">4</div>
    <div class="a-text">5</div>
    <div class="a-img3 imgs">6</div>
    <div class="a-text">7</div>
    <div class="a-img4 imgs">8</div>
    <div class="a-text">9</div>
  </div>
</template>

<script setup lang="ts"></script>
<style scoped>
.container > div {
  text-align: center;
  scroll-snap-align: center;
  flex: none;
}
.x.mandatory-scroll-snapping {
  scroll-snap-type: x mandatory;
}
.y.mandatory-scroll-snapping {
  scroll-snap-type: y mandatory;
}

div {
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  line-height: 100vh;
  text-align: center;
  font-size: 20vh;
}

.imgs {
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;
}

.a-img1 {
  background-image: url(https://images.pexels.com/photos/1097491/pexels-photo-1097491.jpeg);
}

.a-img2 {
  background-image: url("../assets/long_3.jpg");
}

.a-img3 {
  background-image: url("../assets/long_1.jpg");
}

.a-img4 {
  background-image: url("../assets/long_2.jpg");
}
</style>
