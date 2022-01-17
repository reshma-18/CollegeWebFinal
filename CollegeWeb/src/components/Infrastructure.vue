<template>
  <div>
    <div class="slider">
      <v-carousel cycle height="500" width="500" :show-arrows="false">
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item"
          reverse-transition="fade-transition"
          transition="fade-transition"
        ></v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>
<script>
import img1 from "../assets/images/infra1.jpeg";
import img2 from "../assets/images/infra2.jpg";
import img3 from "../assets/images/infra3.jpg";
import img4 from "../assets/images/infra4.jpeg";
import img5 from "../assets/images/infra5.jpg";
import img6 from "../assets/images/infra6.jpg";
import img8 from "../assets/images/infra8.jpg";

export default {
  name: "Infrastructure",
  components: {},
  data() {
    return {
      items: [
        { src: img1 },
        { src: img8 },
        { src: img2 },
        { src: img3 },
        { src: img4 },
        { src: img5 },
        { src: img6 },
      ],
    };
  },
};
</script>
<style scoped>
.slider {
  padding: 40px;
  width: 100%;
}
.v-window {
  border-radius: 12px;
}
.carousel.item {
  height: 300px;
}
.item img {
  position: absolute;
  top: 0;
  left: 0;
  max-height: 300px;
}
@media screen and (max-width: 450px) {
  .slider {
    padding: 20px;
  }
  .carousel.item {
    height: 200px;
  }
  .item img {
    max-height: 200px;
  }
}
</style>
