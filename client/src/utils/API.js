import axios from "axios";

export default{
    savePost: function(postdata){
      return axios.post("https://rocky-fjord-92993.herokuapp.com/:3001/api/stock",postdata);
    },
    getDataById: function(id){
      return axios.get("https://rocky-fjord-92993.herokuapp.com:3001/api/stock/" + id);
    },
    getData: function(){
      return axios.get("https://rocky-fjord-92993.herokuapp.com:3001/api/stock/");
    },
    deleteData: function(id) {
      return axios.delete("https://rocky-fjord-92993.herokuapp.com:3001/api/stock/" + id);
    },
    updatePost:function(id){
      return axios.post("https://rocky-fjord-92993.herokuapp.com:3001/api/stock/"+id);
    },
// request the information to send it to the server
    saveItem: function(item) {
      return axios.post("https://rocky-fjord-92993.herokuapp.com:3001/api/freeItems", item);
    },
    getEmail:function(msg){
      return axios.post("https://rocky-fjord-92993.herokuapp.com:3001/api/freeItems",msg);
    },
    saveUser : function(userData){
      return axios.post("https://rocky-fjord-92993.herokuapp.com:3001/api/user",userData);
    },
    updateUserData:function(name,data){
      return axios.put("https://rocky-fjord-92993.herokuapp.com:3001/api/user/:"+name,{data});
    },
    findUser:function(email){
      return axios.get("https://rocky-fjord-92993.herokuapp.com:3001/api/user/?email=" + email);
    },
    getUData: function(){
      return axios.get("https://rocky-fjord-92993.herokuapp.com:3001/api/user/");
    },
    findUserID:function(id){
      return axios.get("https://rocky-fjord-92993.herokuapp.com:3001/api/user/" + id);
    },
    getUSerData: function(id){
      return axios.get("https://rocky-fjord-92993.herokuapp.com:3001/api/user/?user_id="+id);
    },
};
