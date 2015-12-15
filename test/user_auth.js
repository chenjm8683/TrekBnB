$.ajax({
  url: 'api/session',
   method: "post",
    data: {user: {username: "jeff", password: "jeffjeff"}},
     success: function(success){
       console.log(success)},
      error: function(error, status){
        console.log(status)}
});
