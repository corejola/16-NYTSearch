// var searchTerm = "NASA";
// var startYear = 20180101;
// var endYear = 20181231;


$("#find-article").on("click", function (event) {

    event.preventDefault();

    var searchTerm = $("#article-input").val();
    var startYear = $("#start-input").val();
    var endYear = $("#end-input").val();


    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&begin_date=" + startYear + "&end_date=" + endYear + "&api-key=3SIwRHd1BsdHSaTiAaYDzg8tDHpWVHw9";

    // var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=nasa&begin_date=20190101&end_date=20190416&page=5&api-key=HMTk2zDKnB1SFeZTIe1IExOSVvndDeac";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        var results = response.response;
        //response as object
        console.log(response);

        for (i = 0; i < 10; i++) {
            var articleDiv = $("<div class='article'>");
            var articleDisplay = articleDiv.text(JSON.stringify(results.docs[i].headline.main))
            $("#article-view").append(articleDisplay);
        };
        //response as string
        // console.log(JSON.stringify(response));
    });

});

$("#clear").on("click", function () {
    $("#article-view").empty();
});