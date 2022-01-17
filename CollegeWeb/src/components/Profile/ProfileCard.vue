<template>
  <div>
    <v-card hover @click="goToDetails()" class="profile-card">
      <div class="photo-div">
        <img :src="url" class="profile-img" />
      </div>
      <div class="teacher-details">
        <span>{{ name }}</span>
        <span>{{ position }}</span>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Faculty",
  props: ["name", "url", "position"],
  components: {},
  methods: {
    goToDetails() {
      this.$router.push("/faculty");
    },
  },
};
</script>

<style scoped>
.photo-div {
  padding: 5px;
}
.profile-img {
  width: 150px;
  height: 150px;
  border: 1px solid grey;
  border-radius: 10px;
}
.teacher-details {
  display: flex;
  flex-direction: column;
  align-items: center;
}
span {
  font-size: 16px;
  color: black;
  font-weight: 600;
}
.profile-card {
  padding: 12px;
}
@media screen and (max-width: 450px) {
  span {
  font-size: 12px;
}
}
</style>