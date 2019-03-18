// Load "fs" package
// fs is a core Node package for reading and writing files
var fs = require("fs");   // fs stands for file system and is built into node



// Load .env file
require("dotenv").config();

// Load npm packages (If not installed yet then run "npm install nameOfFile" in the command line)
//var spotfiy = require("node-spotify-api");
var axios = require ("axios");
//var moment = require ("moment");

// Load Spotify keys
//var keys = require("./keys.js");

// Access Spotify keys information
//var spotify = new Spotify(keys.spotify);



// Global Variables
var userInput1 = process.argv[2];
var userInput2 = process.argv[3]; 



// Take user inputs via command line then call specified function
// Commands are:
// concert-this
// spotify-this-song
// movie-this
// do-what-it-says

if (userInput1 === "concert-this") {
    concertThisCall();
} 

//if (userInput1 === "spotify-this-song") {
//    spotifyThisCall
//}
//
if (userInput1 === "movie-this") {
    movieThisCall();
}
//
//if (userInput1 === "do-what-it-says") {
//    doWhatItSaysCall
//}



// Function concertThisCall
function concertThisCall() {

    var queryURL = "https://rest.bandsintown.com/artists/" + userInput2 + "/events?app_id=codingbootcamp";

    // AXIOS CALL
    $.axios({                                                                       // AXIOS call
    url: queryURL,                                                                  // the url is referencing the above URL listed in the variable
    method: "GET"                                                                   // The retrieval method of the data is GET
    }).then(function(response) {

        console.log(response.data);

        //for (var i = 0; i < 10; i++) {                                              // Limit the for loop to 10 images

    //}

});    

}




// Function movieThisCall
function movieThisCall() {

    var queryURL = "http://www.omdbapi.com/?t=" + userInput2.replace(" ", "-") + "&y=&plot=short&apikey=trilogy";

    // AXIOS CALL
    axios.get(queryURL).then(function(response) {

            console.log(response);
            //console.log("Title of the movie: " + response.data.Title);
            //console.log("Year the movie came out: " + response.data.Year);
            //console.log("IMDB Rating of the movie: " + response.data.imdbRating);
            //console.log("Rotten Tomatoes Rating of the movie: " + response.data.Ratings[1].Value);
            //console.log("Country where the movie was produced: " + response.data.Country);
            //console.log("Language of the movie: " + response.data.Language);
            //console.log("Plot of the movie: " + response.data.Plot);
            //console.log("Actors in the movie: " + response.data.Actors);
//
            ///* creating details for the log entry */
            //text = response.data.Title + ", " + response.data.Year + ", " + response.data.imdbRating + ", " + response.data.Ratings[1].Value + ", " + response.data.Country + ", " + response.data.Language + ", " + response.data.Plot + ", " + response.data.Actors + '\n';
            //logEntry(text);
        }
    );
}