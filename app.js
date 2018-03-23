$(document).ready(function(){
    $("#btn1").click(function(){
console.log("Inside Click Function");
      //
       'use strict';
      // // get the url
       var url = window.location.href;
      // //getting the access token from url
       var access_token = url.split("#")[1].split("=")[1].split("&")[0];
      // // get the userid
       var userId = url.split("#")[1].split("=")[2].split("&")[0];
       console.log('access_token = ' + access_token);

       console.log('userId = ' + userId);

       $.ajax({
  type: 'GET',
  beforeSend: function(request) {
     request.setRequestHeader("Authorization", 'Bearer ' + access_token);
  },
    url: "https://api.fitbit.com/1/user/"+userId+"/activities/heart/date/today/1w.json",
    success:function(data, status, xhr){
      console.log(JSON.stringify(data));
    }
});


    });

});
