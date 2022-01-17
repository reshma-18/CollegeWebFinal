<template>
  <div>
    <span class="sub-heading">Infrastructure Facilities</span>
    <div class="gallery">
      <div v-for="item in items" :key="item.src" class="cardDiv">
        <v-card class="infraCard">
          <img :src="item.src" class="cardImg" />
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from "../../assets/images/infra1.jpeg";
import img2 from "../../assets/images/infra2.jpg";
import img3 from "../../assets/images/infra3.jpg";
import img4 from "../../assets/images/infra4.jpeg";
import img5 from "../../assets/images/infra5.jpg";
import img6 from "../../assets/images/infra6.jpg";
import img7 from "../../assets/images/college-building.jpg";
import img8 from "../../assets/images/Computer_Lab.jpg";
export default {
  data() {
    return {
      items: [
        { src: img1 },
        { src: img2 },
        { src: img3 },
        { src: img4 },
        { src: img5 },
        { src: img6 },
        { src: img7 },
        { src: img8 },
      ],
    };
  },
};
</script>
<style scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 30px;
  row-gap: 30px;
}
.cardDiv {
  margin: 50px auto;
}
.infraCard {
  width: 650px;
  height: 450px;
  padding: 20px;
  transition: transform 0.2s; /* Animation */
}
.cardImg {
  width: 100%;
  max-width: 100%;
  height: 100%;
}
.infraCard:hover {
  transform: scale(1.1);
}
.sub-heading {
  font-size: 18px;
  font-weight: 700;
  display: block;
  padding: 5px;
  color: white;
  background-color: #80293b;
  margin: 30px auto;
  width: 400px;
  border-radius: 10px;
}
</style>
