<template>
  <div class="margin-t-30">
    <span class="sub-heading">Teaching Staff</span>
    <v-row class="padding-20">
      <v-col cols="12" md="8">
        <v-card class="imgCard">
          <img src="../../assets/images/TeachingStaff.jpg" />
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <Profile
          name="Shri. Suryakant T. Deshmukh"
          position="Principal"
          :url="img1"
          qualification="B.A., B.Sc.,M.A[Soci], M.Ed."
          experience="12th year running"
          mobile="9623258817"
          email="deshmukha_suryakant@rediffmail.com"
        />
        <Profile
          name="Sau. Vanashri C. Bhusari"
          position="Assistant Teacher"
          :url="img2"
          qualification="M.A.[Eco.],M.Com., M.Ed."
          experience="14th year running"
          mobile="8077402233"
          email="vanashribhusari@gmail.com"
        />
        <Profile
          name="Shri Nilesh D. Bhende"
          position="Assistant Teacher"
          :url="img3"
          qualification="M.A.[Soci.],M.SW, M.Ed."
          experience="14th year running"
          mobile="9561575554"
          email="nbhend111@gmail.com"
        />
      </v-col>
    </v-row>
    <span class="sub-heading">Non-Teaching Staff</span>
    <v-row class="padding-20">
      <v-col cols="12" md="8">
        <v-card class="imgCard">
          <img src="../../assets/images/NonTeachingStaff.jpg" />
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <Profile
          name="Shri Vaibhav D. Tiwari "
          position="Peon"
          :url="img4"
          qualification="S.S.C.,H.S.C.,MS-CIT"
          experience="12th year running"
          class="lastProf"
          mobile="9822234380"
          email="swavalambidted1971@rediffmail.com"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Profile from "../Profile/Profile.vue";
import img1 from "../../assets/images/Deshmukh-Sir.jpeg";
import img2 from "../../assets/images/Bhusari-mam.jpeg";
import img3 from "../../assets/images/Nilesh-sir.jpeg";
import img4 from "../../assets/images/Vaibhav.jpg";
export default {
  name: "Faculty",
  components: {
    Profile,
  },
  data() {
    return {
      img1,
      img2,
      img3,
      img4,
    };
  },
};
</script>

<style scoped>
.sub-heading {
  font-size: 18px;
  font-weight: 700;
  display: block;
  padding: 5px;
  color: white;
  background-color: #80293b;
  margin: 30px auto;
  width: 200px;
  border-radius: 10px;
}
.imgCard {
  width: 100%;
  margin-top: 50px;
}
.imgCard img {
  max-width: 100%;
  padding: 30px;
}
.lastProf {
  margin-top: 50%;
}
@media screen and (max-width: 450px) {
  .sub-heading {
    margin: 40px auto;
    width: 200px;
  }
}
</style>
