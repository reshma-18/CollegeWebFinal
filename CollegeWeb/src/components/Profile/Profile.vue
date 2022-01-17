<template>
  <div class="profile-section">
    <v-card hover class="card-main">
      <div class="photo-div">
        <img :src="url" class="profile-img" />
      </div>
      <div class="teacher-details">
        <p class="fw-700">{{ name }}</p>
        <p>{{ position }}</p>
      </div>
      <v-card-actions>
        <v-btn text color="teal accent-4" @click="reveal = true"> About </v-btn>
      </v-card-actions>
      <v-expand-transition>
        <v-card
          v-if="reveal"
          class="transition-fast-in-fast-out v-card--reveal"
          style="height: 100%"
        >
          <v-card-text class="inner-card">
            <p>
              <span class="margin-r-5">Qualification:</span>{{ qualification }}
            </p>
            <p><span class="margin-r-5">Experience:</span>{{ experience }}</p>
            <p><span class="margin-r-5">Mobile No.:</span>{{ mobile }}</p>
            <p><span class="margin-r-5">Email Id:</span>{{ email }}</p>
          </v-card-text>
          <v-card-actions class="pt-0">
            <v-btn text color="teal accent-4" @click="reveal = false">
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Faculty",
  props: [
    "name",
    "url",
    "position",
    "qualification",
    "experience",
    "mobile",
    "email",
  ],
  components: {},
  data: () => ({
    reveal: false,
  }),
};
</script>

<style scoped>
.profile-section {
  border-radius: 10px;
  padding: 12px;
}
.photo-div {
  padding: 5px;
  margin-right: 40px;
}
.profile-img {
  width: 100px;
  height: 100px;
  border: 1px solid grey;
  border-radius: 10px;
}
p,
span {
  margin: 8px;
  color: black;
  font-size: 18px;
}
.v-card__actions {
  display: block;
}
.v-card__actions .v-btn {
  background-color: #80293b;
  color: white;
  font-weight: 700;
}
.v-card__text {
  padding: 5px;
}
.inner-card {
  padding-bottom: 0;
  text-align: left;
}
@media screen and (max-width: 450px) {
  p,
  span {
    font-size: 12px;
  }
  .photo-div {
    /* padding: 5px; */
    margin-right: 0;
  }
  .profile-img {
    width: 150px;
    height: 150px;
  }
  .v-card__actions .v-btn {
    font-size: 12px;
  }
}
</style>
