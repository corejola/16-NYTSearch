// var searchTerm = "NASA";
var startYear = 20180101;
var endYear = 20181231;


$("#find-article").on("click", function (event) {

    event.preventDefault();

    var searchTerm = $("#article-input").val();

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&begin_date=" + startYear + "&end_date=" + endYear + "&api-key=3SIwRHd1BsdHSaTiAaYDzg8tDHpWVHw9";

    // var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=nasa&begin_date=20190101&end_date=20190416&page=5&api-key=HMTk2zDKnB1SFeZTIe1IExOSVvndDeac";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        var results = response.response;
        //response as object
        console.log(response);

        $("#article-view").text(JSON.stringify(results.docs[1].byline))

        //response as string
        // console.log(JSON.stringify(response));
    });

});