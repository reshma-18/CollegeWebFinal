<template>
  <div class="aboutus">
    <div class="flex-column">
      <v-row>
        <v-col class="margin-lr-30" cols="12" md="6">
          <v-card class="imgCard">
            <img src="../../assets/images/Maharashtr_Gov.jpg" />
          </v-card>
        </v-col>
        <v-col class="" cols="12" md="5">
          <v-card hover class="card1">
            Swavalambi Jr. College of Education has be recognized as per
            Government letter No. PAV/1070/10001/T/9733 dated 7th May 1971. In
            the past, pre – primary course was being conducted here. According
            to the new policy of the Government Diploma in Elementary Education
            Course is implemented. Government Approved this college is private
            Aided.<br /><br />
            Intake Capacity : 30 student <br />N.C.T.E. Code : 112029 <br />
            M.S.C.E. Pune Code { Sanketank No } : 7403
            <br />
            <u> Maharashtra Government Recognition Letter</u> &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            PAV/1070/10001/T/9733/ Date : 07/05/1971
            <br />
            <u>N. C. T. E. Recognition Letter</u> &nbsp; &nbsp;&nbsp;
            &nbsp;&nbsp; &nbsp; <br />WRC/5-6/96/1584/ Date : 22/04/1998
            <br /><u>S. C. E. R. T. Pune Recognition Letter </u> &nbsp;
            &nbsp;&nbsp;
            <br />
            PAV/ N.C.T.E./2002-03/34-T/<br />
            Date : 24/06/2002
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="margin-lr-30" cols="12" md="6">
          <v-card class="imgCard">
            <img src="../../assets/images/N.C.T.E._Recognisation_1.png" />
          </v-card>
        </v-col>
        <v-col class="" cols="12" md="5">
          <v-card hover class="card1">
            In Swavalambi Jr. College of Education admission capacity ( Intake )
            30 Students in the Ist year as per the Norms of N. C. T. E. In
            staffing pattern 1 principal, 4 Teacher Educator, 1 clerk & 2 peons
            are approved by Honorable Deputy Director of Education Nagpur. All
            staff is well qualified as per N. C. T. E. Norms.
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="margin-lr-30" cols="12" md="6">
          <v-card class="imgCard">
            <img src="../../assets/images/S.C.E.R.T._PUNE.jpg" />
          </v-card>
        </v-col>
        <v-col class="" cols="12" md="5">
          <v-card hover class="card1">
            Swavalambi Jr. College of Education ( D. Ed. ) Wardha. is Combined
            with Swavalambi colleqe of Education ( B. Ed. ) Wardha of
            well-equipped Education Technology lab, library & other
            infrastructure facilities related to swavalambi Jr. College of
            Education, Wardha. so In our college all infrastructure facilities
            are available. & play ground, is also available. Academic & various
            other activities are implemented in our college. For developing to
            improve the student teachers personality Result of swavalambi Jr.
            College of Education wardha. is very Well near about 100% . Our pass
            out students placement is 100% & also they are qualify the TET Exam
            & other competitive Exams & get jobs.
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
  components: {},
};
</script>
<style scoped>
.aboutus {
  margin-top: 30px;
}
.imgCard {
  width: 100%;
}
.imgCard img {
  max-width: 100%;
}

.v-card {
  padding: 30px;
  font-size: 18px;
  font-weight: 500;
  color: black;
  text-align: justify;
}
.card1 {
  margin-top: 50%;
}
.theme--light.v-card {
  border-bottom: 4px solid #80293b;
}
table {
  margin-top: 20px;
}
td,
th {
  padding: 5px;
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
@media screen and (max-width: 768px) {
  .v-card {
    width: 90%;
  }
  .aboutus {
    margin-top: 40px;
  }
}
</style>
