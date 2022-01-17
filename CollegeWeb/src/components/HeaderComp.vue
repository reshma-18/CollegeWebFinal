<template>
  <div class="headerCls">
    <div class="header-div">
      <div class="flexItem">
        <img
          src="../assets/images/ded logo.jpg"
          alt="college logo"
          class="logo"
        />
        <span class="collegeHeading"> {{ collegeName }} </span>
      </div>
      <div class="codeDiv">
        <span class="fw-600">College Code: 7403</span>
        <span class="margin-lr-20">|</span>
        <span class="fw-600">NCTE Code: 112029</span>
      </div>
    </div>
    <div>
      <Navigation />
    </div>
  </div>
</template>

<script>
import Navigation from "./Navigation.vue";
export default {
  name: "HeaderComp",
  components: {
    Navigation,
  },
  data() {
    return {
      collegeName: "Swavalambi Adhyapak Vidhyalaya, Wardha",
    };
  },
};
</script>
<style scoped>
.header-Cls {
  width: 100%;
}
.header-div {
  color: #ffff;
  background-color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
}
.logo {
  width: 50px;
  height: 50px;
  margin-left: 20px;
  margin-right: 20px;
}
/* .headerCls {
  display: flex;
  justify-content: space-between;
  background-color: black;
  width: 100%;
  align-items: center;
  padding: 15px 0px;
} */
.collegeHeading {
  font-size: 22px;
  font-weight: 600;
  color: white;
}
@media screen and (max-width: 768px) {
  .header-div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .collegeHeading {
    font-size: 18px;
  }
}
@media screen and (max-width: 450px) {
  .collegeHeading {
    font-size: 14px;
  }
  .codeDiv {
    display: none;
  }
  .logo {
    width: 30px;
    height: 30px;
    margin-left: 5px;
    margin-right: 5px;
  }
}
</style>
