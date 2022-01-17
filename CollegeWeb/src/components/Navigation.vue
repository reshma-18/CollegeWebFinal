<template>
  <div class="nav-div">
    <ul class="">
      <input type="checkbox" id="checkbox_toggle" />
      <label for="checkbox_toggle" class="hamburger">&#9776;</label>
      <div class="menu">
        <router-link
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
          :id="item.title"
          tag="li"
          exact
          class="nav-links"
        >
          {{ item.title }}
        </router-link>
      </div>
      <!-- <div class="bars">
          <i class="fa fa-bars"></i>
        </div> -->
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      menuItems: [
        { title: "Home", path: "/" },
        { title: "Faculty", path: "/faculty" },
        { title: "Fee Structure", path: "/fee" },
        { title: "About us", path: "/about" },
        { title: "Infrastructure Facility", path: "/infrastructure" },
        { title: "Academic Activity", path: "/activity" },
        { title: "Other", path: "/other" },
        { title: "Admin Section", path: "/admin" },
      ],
    };
  },
};
</script>
<style scoped>
.nav-div {
  background-color: black;
}
.menu {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  /* background-color: black; */
  color: #ffff;
  /* padding: 10px; */
}
.nav-div ul li {
  list-style-type: none;
  cursor: pointer;
  color: white;
  font-size: 16px;
  font-weight: 500;
  margin-right: 15px;
  margin-left: 15px;
}
.nav-div ul li a {
  text-decoration: none;
}
.nav-div li.active {
  color: white;
  font-weight: 500;
  text-transform: uppercase;
}
input[type="checkbox"] {
  display: none;
}
/*HAMBURGER MENU*/
.hamburger {
  display: none;
  font-size: 24px;
  user-select: none;
  color: #ffff;
}
@media screen and (max-width: 768px) {
  .menu {
    display: none;
    position: absolute;
    background-color: black;
    right: 0;
    left: 0;
    text-align: center;
    padding: 16px 0;
  }
  input[type="checkbox"]:checked ~ .menu {
    display: block;
    z-index: 1;
  }
  .hamburger {
    display: block;
    color: white;
    margin-right: 10px;
  }
}
</style>
