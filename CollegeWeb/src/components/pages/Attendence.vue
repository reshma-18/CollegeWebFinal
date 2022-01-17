<template>
  <v-card class="cardUpload">
    <div>
      <label>Upload File</label>
      <input
        type="file"
        id="file"
        ref="file"
        @change="handleFileUpload($event)"
      />
      <button type="button" @click="uploadFile()" class="uploadBtn">
        Upload file
      </button>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "Attendence",
  data() {
    return {
      files: [],
      file: "",
    };
  },
  methods: {
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },
    uploadFile() {
      this.files.push(this.file);
      console.log("----------", this.files);
    },
  },
};
</script>

<style scoped>
.cardUpload {
  width: 300px;
  padding: 15px;
  margin-top: 40px;
  margin-left: 30px;
  text-align: center;
}
label {
  font-size: 18px;
  font-weight: 600;
  color: black;
  display: block;
  margin-bottom: 20px;
}
.uploadBtn {
  background-color: #80293b;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 600;
  margin-top: 30px;
}
</style>
