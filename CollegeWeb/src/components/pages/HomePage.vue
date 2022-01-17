<template>
  <div>
    <div class="home-info">
      <v-row>
        <v-col class="" cols="12" md="4">
          <v-card hover class="card">
            Swavalambi Shikshan Prasark Mandal, Wardha. was established on 19th
            November 1942 in the pre-independence period. The founder of this
            organization is Renevered Late Ganesh Hari Bhide. He was of the view
            that the student produced by this institute should be imbued with
            Social & National Sentiments as well as accept the principle of
            Self- Reliance in personal life and should be looked upon by the
            society as a cultured person. For that he had decided that the goal
            of the organization was Strength, Intelligence, Discipline,
            Self-Reliance & Resistance. The organization owns a 32- acre Land in
            the Centre of town. <br />
            The following Educational Institutions are run under the
            Organization Swavalambi Shikshan Prasarsk Mandal, Wardha.
            <table class="margin-t-20">
              <tr>
                <th>Name of Institutions.</th>
                <th class="block margin-l-30">Establishment</th>
              </tr>
              <tr>
                <td class="">Swavalambi Vidyalya, Wardha.</td>
                <td class="block margin-l-30">1942</td>
              </tr>
              <tr>
                <td>Swavalambi Vidyalya & Jr. College, Kharangna.</td>
                <td class="block margin-l-30">1952</td>
              </tr>
              <tr>
                <td>Swavalambi Kanya Vidyalya, Wardha.</td>
                <td class="block margin-l-30">1958</td>
              </tr>
              <tr>
                <td>Swavalambi College of Education, Wardha ( B. Ed. )</td>
                <td class="block margin-l-30">1958</td>
              </tr>
              <tr>
                <td>Swavalambi Jr. College of Education,Wardha. ( D. Ed. )</td>
                <td class="block margin-l-30">1971</td>
              </tr>
              <tr>
                <td>Madhuban Convent, Wardha.</td>
                <td class="block margin-l-30"></td>
              </tr>
            </table>
          </v-card>
        </v-col>
        <v-col cols="12" md="8">
          <Infrastructure />
        </v-col>
      </v-row>
    </div>
    <div class="heading-div">
      <span class="heading">Our Faculties</span>
    </div>
    <div class="staff">
      <profile-card
        name="Shri. Suryakant T. Deshmukh"
        position="Principal"
        :url="img1"
      />
      <profile-card
        name="Sau. Vanashri C. Bhusari"
        position="Assistant Teacher"
        :url="img2"
      />
      <profile-card
        name="Shri Nilesh D. Bhende"
        position="Assistant Teacher"
        :url="img3"
      />
      <profile-card
        name="Shri Vaibhav D. Tiwari "
        position="Peon"
        :url="img4"
      />
    </div>
    <div>
      <div class="heading-div">
        <span class="heading">Our Contact</span>
      </div>
      <ContactUs />
    </div>
    <div>
      <Notification />
    </div>
  </div>
</template>

<script>
import ProfileCard from "../Profile/ProfileCard.vue";
import Infrastructure from "../Infrastructure.vue";
import ContactUs from "../pages/ContactUs.vue";
import Notification from "../Notifiction.vue";
import img1 from "../../assets/images/Deshmukh-Sir.jpeg";
import img2 from "../../assets/images/Bhusari-mam.jpeg";
import img3 from "../../assets/images/Nilesh-sir.jpeg";
import img4 from "../../assets/images/Vaibhav.jpg";
export default {
  name: "HomePage",
  components: {
    ProfileCard,
    Infrastructure,
    ContactUs,
    Notification,
  },
  data() {
    return {
      img1,
      img2,
      img3,
      img4,
    };
  },
};
</script>

<style scoped>
.heading-div {
  background-color: #501b1d;
  color: white;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 12px;
}
.staff {
  padding: 15px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 25px;
  margin-top: 40px;
}
.card {
  padding: 30px;
  text-align: justify;
  margin-top: 40px;
  margin-left: 40px;
  font-weight: 600;
  height: 500px;
  overflow: scroll;
}
.theme--light.v-card {
  border: 4px solid #80293b;
}
td {
  text-align: left;
}
@media screen and (max-width: 768px) {
  .staff {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 25px;
    grid-row-gap: 25px;
    margin-top: 40px;
  }
  .card {
    margin-top: 50px;
    margin-left: 30px;
    margin-right: 30px;
  }
}
@media screen and (max-width: 450px) {
  .staff {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  .card {
    padding: 20px;
    margin-top: 40px;
    margin-left: 30px;
    font-size: 14px;
  }
}
</style>
