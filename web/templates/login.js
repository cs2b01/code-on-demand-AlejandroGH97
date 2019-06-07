function getData(){
        $('#loading').show();
        $('#fail').hide();
        $('#success').hide();
        var username = $('#username').val();
        var password = $('#password').val();
        var message = JSON.stringify({
                "username": username,
                "password": password
            });

        $.ajax({
            url:'/authenticate',
            type:'POST',
            contentType: 'application/json',
            data : message,
            dataType:'json',
            statusCode:{
              401: function(response){
                  alert(JSON.stringify(response));
                  $('#loading').hide();
                  $('#fail').show();
                },
              200: function(response){
                  alert(JSON.stringify(response));
                  var id = response['id'];
                  $('#loading').hide();
                  $('#success').show();
                  window.location.href = "/chat/"+id+"/"+id;
                  }
                }
        });
    }
