// New York Times Article Search
//1.0 set up API
//1.1API key - HMTk2zDKnB1SFeZTIe1IExOSVvndDeac
//1.2test run API call & evaluate the object
//1.2 response given as an object
//1.3 JSON.stringify(response) provides response as a string (difficult to parse out the data)

//2.0 Pararllel HTML parameters
//2.1 Search Term => q=____
//2.2 Number of Records to retrieve (API default is 10), selectable
//2.3 Start Year (optional)
//2.4 End Year (optional)
//2.5 Search - event listener
//2.6 Clear Results - event listener - clears search parameters

//3.0 Article Search Results
//3.1 take API search results and tie to a specific div or ID
//3.2 prepend search results to HTML


//Test API query...

// var searchTerm = from HTML
// var numRec = HTML element, use .val()
// var startYear =  HTML element, use .val(), format yyyymmdd
// var endYear = HTML element, use .val() yyyymmdd
// var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+ searchTerm + "&begin_date=" + startYear + "&end_date=" + endYear" + &api-key=HMTk2zDKnB1SFeZTIe1IExOSVvndDeac";

var queryURL =
    "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=nasa&begin_date=20190101&end_date=20190416&page=5&api-key=HMTk2zDKnB1SFeZTIe1IExOSVvndDeac";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {

    //response as object
    console.log(response);
    // $('#button-call').text(JSON.stringify(response))
    //response as string
    console.log(JSON.stringify(response));
});