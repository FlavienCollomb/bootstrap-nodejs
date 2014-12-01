$(document).ready(function(){
    console.log("AZERTY");

    $.ajax({
        type    : "GET",
        url     : "/first",
        dataType: "json"
    })
        .done(function (data) {
            console.log(data);
        });

    $.ajax({
        type    : "POST",
        url     : "/second",
        dataType: "json",
        data    :JSON.stringify({"id":1})
    })
        .done(function (data) {
            console.log(data);
        });

    $.ajax({
        type    : "GET",
        url     : "/third",
        dataType: "json"
    });

    $.ajax({
        type    : "GET",
        url     : "/fourth",
        dataType: "json"
    });
});
