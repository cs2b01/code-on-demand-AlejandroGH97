function send_message(){
        var content = $('#btn-input').val();
        var fid = $('#fid').val();
        var tid = $('#tid').val();
        var message = JSON.stringify({
                "content": content,
                "fid": fid,
                "tid": tid
              });

        $.ajax({
            url:'/send_msg',
            type:'POST',
            contentType: 'application/json',
            data : message,
            dataType:'json',
            success: function(response){
            },
            error: function(response){
            }
        });
    }
