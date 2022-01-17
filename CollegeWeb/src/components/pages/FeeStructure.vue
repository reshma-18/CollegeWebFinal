<template>
  <div class="margin-t-30 padding-20">
    <span class="sub-heading">Fee Structure</span>
    <v-row>
      <v-col cols="12" sm="12" md="6">
        <v-card class="imgCard">
          <img src="../../assets/images/Fee_Structure_1.jpg" />
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="6">
        <v-card class="feeCard">
          <table>
            <tr>
              <th>Sr.No.</th>
              <th>Year</th>
              <th>Tuition Fee</th>
              <th>Term Fee</th>
              <th>Admission Fee</th>
              <th>Total</th>
            </tr>
            <tr>
              <td>1</td>
              <td>1st Year</td>
              <td>2640</td>
              <td>440</td>
              <td>220</td>
              <td>3300</td>
            </tr>
            <tr>
              <td>2</td>
              <td>2nd Year</td>
              <td>2640</td>
              <td>440</td>
              <td>0</td>
              <td>3080</td>
            </tr>
          </table></v-card
        >
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "FeeStructure",
  components: {},
};
</script>

<style scoped>
.imgCard {
  width: 100%;
  padding: 30px;
}
.imgCard img {
  max-width: 100%;
}
.feeCard {
  margin-top: 40%;
  padding: 20px;
  width: 100%;
}
.theme--light.v-sheet {
  border-color: none;
}
.theme--light.v-card {
  border-bottom: 4px solid #80293b;
  /* border-right: 3px solid #80293b; */
}
table {
  border-collapse: collapse;
  max-width: 100%;
}
td,
th {
  border: 2px solid black;
  text-align: left;
  padding: 15px;
}
td {
  font-weight: 500;
  color: black;
  font-size: 16px;
}
th {
  font-weight: 700;
  color: black;
  font-size: 18px;
}
.sub-heading {
  font-size: 18px;
  font-weight: 700;
  display: block;
  padding: 5px;
  color: white;
  background-color: #80293b;
  margin: 20px auto;
  width: 200px;
  border-radius: 10px;
}
@media screen and (max-width: 768px) {
  /* .card-main {
    width: 90%;
    padding: 15px;
  } */
  /* table {
    width: 50%;
    overflow: scroll;
  } */
  .feeCard {
    margin-top: 10%;
  }
}
@media screen and (max-width: 500px) {
  /* .card-main {
    width: 90%;
    overflow: scroll;
  } */
}
</style>
