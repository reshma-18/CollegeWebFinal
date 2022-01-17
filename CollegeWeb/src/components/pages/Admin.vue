<template>
  <v-card class="admin-form">
    <div>
      <form @submit.prevent="handleSubmit($event)">
        <div class="textField">
          <label>Username:</label>
          <input
            type="text"
            v-model="username"
            placeholder="Username"
            class="textInput"
          />
        </div>
        <div class="textField">
          <label>Password:</label>
          <input
            type="password"
            v-model="password"
            placeholder="Passsword"
            class="textInput"
          />
        </div>
        <div>
          <button type="submit" class="loginBtn">Log in</button>
        </div>
      </form>
    </div>
  </v-card>
</template>

<script>
import { createUser } from "../../services/UserServices";
export default {
  name: "Admin",
  components: {},
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    handleSubmit(data) {
      // if (
      //   this.username === "SwavlambiAdmin" &&
      //   this.password === "SwavlambiAdmin"
      // ) {
      //   return this.$router.push("/admin/attendence");
      // } else {
      //   console.log("error");
      // }

      console.log("data:::", data);
      createUser(data).then((response) => {
        console.log(response);
        // this.getAllUsers();
      });
    },
  },
};
</script>

<style scoped>
.admin-form {
  /* border: 2px solid red; */
  width: 40%;
  margin: auto;
  margin-top: 40px;
  text-align: left;
  padding: 30px 25px;
}
.textInput {
  border: 1px solid #80293b;
  padding: 10px;
  border-radius: 8px;
}
.textField {
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
}
label {
  font-size: 18px;
  font-weight: 600;
  color: black;
  margin-bottom: 10px;
}
.loginBtn {
  background-color: #80293b;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 600;
}
@media screen and (max-width: 768px) {
  .admin-form {
    width: 80%;
    margin: auto;
    margin-top: 40px;
    padding: 30px 25px;
  }
}
</style>
