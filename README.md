# LIRI Node App

LIRI is a Language Interpretation and Recognition Interface much like SIRI for the iPhone is a Speech Interpretation and Recognition Interface . LIRI is a command line node app that takes in parameters and gives back data.

LIRI will search Bands in Town for concerts, Spotify for songs, and OMDB for movies.

To retrieve the data, the app will send requests using the axios node package to the Bands in Town, Spotify and OMDB APIs.

<br>
---
### Terminal Commands:

node liri concert-this artistname
<br>
node liri spotify-this-song songname
<br>
node liri movie-this movietitle
<br> 
node liri do-what-it-says

<br>
---
### node liri concert-this

By entering the follwing command into the command line:
<br>
node liri concert-this artistname
<br>
the app will search the Bands in Town Artist Events API for an artist and render the following information about each event:

* Name of venue

* Venue location

* Date of event (using moment to format date as "MM/DD/YYYY")

In this example we set the artist name to be arianagrande:
<br>

