import axios from "axios";

export default {
  saveImage : function(formData, kontratadoId) {
    return axios.post("/api/image/" + kontratadoId, formData);
  },

  getKontratado: function(id){
    return axios.get("/api/kontratado/"+id);
  },

  getKontratadoByFilter: function(filter){
    return axios.post("/api/kontratado/filter", filter);
  },

  createKontratado: function(kontratado){
    return axios.post("/api/kontratado/", kontratado);
  },

  updateKontratado: function(kontratado){
    return axios.post("/api/kontratado/update", kontratado);
  },

  loginKontratado: function(kontratado){
    return axios.post("api/login/", kontratado);
  },

  insertCostRate: function(costRate){
    return axios.post("/api/costRate/",costRate);
  },
  editCostRate: function(id,costRate){
    return axios.post("/api/costRate/"+id, costRate);
  },
  deleteCostRate: function(id){
    return axios.delete("/api/costRate/delete/"+id);
  },
  insertFavourite: function(id,favourite){
    return axios.post("/api/favourite/", favourite);
  },
  deleteFavourite: function(id){
    return axios.delete("/api/favourite/delete/"+ id);
  },
  insertHire: function(hire){
    return axios.post("/api/hire/", hire);
  },
  insertMessage: function(message){
    return axios.post("/api/message/", message);
  },
  insertQualityRate: function(quality){
    return axios.post("/api/qualityRate/", quality);
  },
  editQualityRate: function(id, quality){
    return axios.post("/api/qualityRate/"+id, quality);
  },
  deleteQualityRate: function(id){
    return axios.post("/api/qualityRate/delete/"+id);
  },
  insertReview: function(review){
    return axios.post("/api/review/", review);
  },
  editReview: function(id, review){
    return axios.post("/api/review/"+id, review);
  },
  deleteReview: function(id){
    return axios.delete("/api/review/delete/"+id);
  },

  getStates: () => {
    return axios.get("/api/state");
  },

  getProfessions: () => {
    return axios.get("api/profession");
  }  
};
