<template>
  <div class="info-bar">
    <div>
      <span>College Code: 7403</span>
      <span class="margin-lr-20">|</span>
      <span>NCTE Code: 112029</span>
    </div>
    <!-- <div>
      <span>Mob. No. : 9623258817</span>
    </div> -->
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.info-bar {
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 14px;
  background-color: #501b1d;
  color: white;
  padding: 4px;
  width: 100%;
}
@media screen and (max-width: 500px) {
  .info-bar {
    display: none;
  }
}
</style>
