<template>
  <div class="marqueeDiv">
    <marquee width="100%" direction="right" height="20px">
      Notification (if any)
    </marquee>
  </div>
</template>
<script>
export default {
  name: "Notification",
};
</script>
<style scoped>
.marqueeDiv {
  margin-top: 40px;
  margin-bottom: 0;
  position: sticky;
  background-color: #80293b;
  color: yellow;
}
</style>
