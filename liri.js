// Load "fs" package
// fs is a core Node package for reading and writing files
var fs = require("fs");   // fs stands for file system and is built into node



// Load .env file
require("dotenv").config();

// Load npm packages (If not installed yet then run "npm install nameOfFile" in the command line)
var Spotify = require("node-spotify-api");
var axios = require ("axios");
var moment = require ("moment");

// Load Spotify keys
var keys = require("./keys.js");

// Access Spotify keys information
var spotify = new Spotify(keys.spotify);



// Global Variables
var userInput1 = process.argv[2];
var userInput2 = process.argv[3]; 

// var userInput2NoSpace = userInput2.replace(" ", "-");    // Here we use the replace() method to remove any spaces (For example: ariana grande would become arianagrande)
// However the above replace() method doesn't work very well with APIs so we have omitted



// ----------------------------------------
// TAKE USER INPUTS VIA COMMAND LINE THEN CALL SPECIFIED FUNCTION

// Commands are:
// concert-this
// spotify-this-song
// movie-this
// do-what-it-says

if (userInput1 === "concert-this") {
    concertThisCall();
} 

if (userInput1 === "spotify-this-song") {
    spotifyThisCall();
}

if (userInput1 === "movie-this") {
    movieThisCall();
}

if (userInput1 === "do-what-it-says") {
    doWhatItSaysCall();
}



// ----------------------------------------
// AXIOS CALL FUNCTIONS

// Function concertThisCall
function concertThisCall() {

    var queryURL = "https://rest.bandsintown.com/artists/" + userInput2 + "/events?app_id=codingbootcamp";

    // AXIOS CALL
    axios.get(queryURL).then(function(response) {

        // console.log(response);   // See the entire response from the AXIOS call to identify which parts we want to use

        for(var i = 0; i < response.data.length; i++) {
            var venueLocation = response.data[i].venue.country + ", " + response.data[i].venue.city + " " + response.data[i].venue.region;
            console.log("Name of venue: " + response.data[i].venue.name);
            console.log("Venue location: " + venueLocation);
            console.log("Date of event: " + moment(response.data[i].datatime).format("MM/DD/YYYY")); 
            
        }

    });

}



// --------------------
// Function spotifyThisCall
function spotifyThisCall() {

    spotify
    .search({ type: 'track', query: 'All the Small Things' })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(err) {
      console.log(err);
    });

}



// --------------------
// Function movieThisCall
function movieThisCall() {

    var queryURL = "http://www.omdbapi.com/?t=" + userInput2 + "&y=&plot=short&apikey=trilogy";

    // AXIOS CALL
    axios.get(queryURL).then(function(response) {

        console.log(response);   // See the entire response from the AXIOS call to identify which parts we want to use

        console.log("Title of movie: " + response.data.Title);
        console.log("Year: " + response.data.Year);
        console.log("IMDB Rating: " + response.data.Ratings[0].Value);
        console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
        console.log("Country where movie was produced: " + response.data.Country);
        console.log("Language of movie: " + response.data.Language);
        console.log("Plot: " + response.data.Plot);
        console.log("Actors: " + response.data.Actors);

    });

}



// ----------------------------------------
// COMMAND LINE commands

// To install packages from npmjs.com type the following into the command line (the name npm stands for Node Package Manager):
// npm install fs
// npm install --save node-spotify-api
// npm install axios
// npm install moment --save

// To run node for liri.js using the specified commands concert-this, spotify-this-song, movie-this, do-what-it-says
// that we have written above, type the following into the command line:
// node liri concert-this arianagrande
// node liri spotify-this-song takeapicture
// node liri movie-this avengers
// node liri do-what-it-says
// (note that you don't have to write out the .js like node liri.js concert-this arianagrande in the above, though this will work too)