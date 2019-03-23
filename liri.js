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
// However the above replace() doesn't work very well with APIs so we have omitted



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
    spotifyThisSongCall();
}

if (userInput1 === "movie-this") {
    movieThisCall();
}

if (userInput1 === "do-what-it-says") {
    doWhatItSaysCall();
}



// ----------------------------------------
// API CALL FUNCTIONS

// Function concertThisCall
function concertThisCall() {

    // AXIOS Call
    // Trilogy's Bands In Town API key: codingbootcamp
    var queryURL = "https://rest.bandsintown.com/artists/" + userInput2 + "/events?app_id=codingbootcamp";

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
function spotifyThisSongCall() {

    // If the user does not specify a song, "ghostbusters" will be searched
    if(userInput2 === undefined) {      // Here, userInput2 will not be specified by the user and so we use undefined
        userInput2 = "ghostbusters";
    }

    // Call to Spotify
    spotify.search({ type: 'track', query: userInput2 }, function(err, data) {

        if (err) {
          return console.log('Error occurred: ' + err);
        }
      
        // console.log(data);       // This logs to the console the entire data response from the Spotify API 
    
        var results = data.tracks.items;

        for(var i = 0; i < results.length; i++){

            var albumResults = results[i].album;

            console.log("Artist: " + albumResults.artists[0].name);
            console.log("Song name: " + results[i].name);
            console.log("Preview link of song from Spotify: " + albumResults.external_urls.spotify);
            console.log("Album where song appears: " + albumResults.name);
    
        }

    });

}



// --------------------
// Function movieThisCall
function movieThisCall() {

    // If the user does not specify a movie, "mr.nobody" will be searched
    if(userInput2 === undefined) {      // Here, userInput2 will not be specified by the user and so we use undefined
        userInput2 = "mr.nobody";
    }

    // AXIOS Call
    // Trilogy's OMDB API Key: trilogy
    var queryURL = "http://www.omdbapi.com/?t=" + userInput2 + "&y=&plot=short&apikey=trilogy";

    axios.get(queryURL).then(function(response) {

        //console.log(response);   // See the entire response from the AXIOS call to identify which parts we want to use

        console.log("Title of movie: " + response.data.Title);
        console.log("Year: " + response.data.Year);
        console.log("IMDB rating: " + response.data.Ratings[0].Value);
        console.log("Rotten Tomatoes rating: " + response.data.Ratings[1].Value);
        console.log("Country where movie was produced: " + response.data.Country);
        console.log("Language of movie: " + response.data.Language);
        console.log("Plot: " + response.data.Plot);
        console.log("Actors: " + response.data.Actors);

    });

}



// ----------------------------------------
// doWhatItSaysCall FUNCTION

function doWhatItSaysCall() {

    // This block of code will read from the "random.txt" file.
    // It's important to include the "utf8" parameter or the code will provide stream data (garbage)
    // The code will store the contents of the reading inside the variable "data"
    fs.readFile("random.txt", "utf8", function(error, data) {

        if (error) {
            return console.log(error);  // If the code experiences any errors it will log the error to the console.
        }

        console.log(data);

        var dataArray = data.split(", ");    // We split the text data in the random.txt file at ", " to make it more readable

        console.log(dataArray);

        userInput1 = dataArray[0];      // Set userInput1 to be "spotify-this-song" that is specified in the random.txt file

        userInput2 = dataArray[1];      // Set userInput2 to be "I Want It That Way" that is specified in the random.txt file

        // If Statements to specify which function to call
        if (userInput1 === "concert-this") {
            concertThisCall();          // Call the function concertThisCall()
        }
        if (userInput1 === "spotify-this-song") {
            spotifyThisSongCall();      // Call the function spotifyThisSongCall()
        }
        if (userInput1 === "movie-this") {
            movieThisCall();            // Call the function movieThisCall()
        }
        
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
// node liri spotify-this-song blackbird
// node liri movie-this avengers
// node liri do-what-it-says
// (note that you don't have to write out the .js like node liri.js concert-this arianagrande in the above, though this will work too)

// Different texts we can put inside random.txt to test out node liri do-what-it-says:
// concert-this, the black keys
// spotify-this-song, i want it that way
// movie-this, iron man