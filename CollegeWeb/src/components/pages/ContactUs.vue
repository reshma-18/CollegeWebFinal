<template>
  <div class="contact-div">
    <v-card hover>
      <p class="">
        <span class="block text-20">Address:</span>
        Swavalambi Adhyapak Vidhyalaya Wardha, Near Gangasagar water tank,
        Dhantoli, Ramnagar, Wardha. Dist. Wardha Maharashtra 442001
      </p>
      <p class="">
        <span class="block text-20">Mobile no: </span>
        9623258817
      </p>
      <p class="">
        <span class="block text-20">Email: </span>
        swavalambidted1971@rediffmail.com
      </p>
      <p class="">
        <span class="block text-20">Website: </span>
        swavalambidedcollege.in
      </p>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "ContactUs",
  components: {},
};
</script>

<style scoped>
.contact-div {
  width: 50%;
  margin: auto;
  text-align: left;
  font-size: 16px;
  border-radius: 10px;
  margin-top: 80px;
}
.contact-div .v-card {
  padding: 18px 30px;
}
p {
  margin-bottom: 20px;
  font-size: 18px;
  color: black;
}
span {
  text-transform: uppercase;
  font-weight: 700;
  display: block;
  margin: 5px;
}
.theme--light.v-card {
  border-bottom: 4px solid #80293b;
}
@media screen and (max-width: 768px) {
  .contact-div {
    width: 90%;
    margin-top: 40px;
  }
}
</style>
