import axios from "axios";

export default {
  // Save image in database
  saveImage : function(formData) {
    return axios.post("/api/image", formData);
  },

  getKontratado: function(id){
    return axios.get("/api/kontratado/"+id);
  },
  createKontratado: function(kontratado){
    return axios.post("/api/kontratado/", kontratado);
  },

};
