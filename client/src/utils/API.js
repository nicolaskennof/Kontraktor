import axios from "axios";

export default {
  // Save image in database
  saveImage : function(formData) {
    return axios.post("/api/image", formData);
  }
};
