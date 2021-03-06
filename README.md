# LIRI Node App

[Click here to view demo video of app](https://drive.google.com/file/d/1uUWgMUeubtmGsjSks8UTP9gt_Utle_HO/view?usp=sharing)
***

Technologies used: Node JS, JavaScript, API, JSON, AXIOS, Moment JS. 

***
### Overview

LIRI is a Language Interpretation and Recognition Interface much like SIRI for the iPhone is a Speech Interpretation and Recognition Interface. 
<br></br>
It is a Command Line Node app that takes in parameters and gives back data.
<br></br>
LIRI will search Bands in Town for concerts, Spotify for songs, and OMDB for movies.
<br></br>
The app will send requests using the AXIOS Node package to the Bands in Town, Spotify and OMDB APIs, and then retrieve data.
***

### Terminal Commands

node liri concert-this artistname
<br>
node liri spotify-this-song songname
<br>
node liri movie-this movietitle
<br> 
node liri do-what-it-says
***

### node liri concert-this

By entering the following into the command line:
<br></br>
*node liri concert-this artistname*
<br></br>
the app will search the Bands in Town Artist Events API for an artist and render the following information about each event:

* Name of venue

* Venue location

* Date of event (using moment to format date as "MM/DD/YYYY")

In this example we set the artist name to be "arianagrande".
<br>
The command line is:
<br>
*node liri concert-this arianagrande*
<br></br>
![liri_screenshot_01](https://raw.githubusercontent.com/makicoding/LIRI-Node-App/master/screenshots/liri_screenshot_01.png)
***

### node liri spotify-this-song

By entering the following into the command line:
<br></br>
*node liri spotify-this-song songname*
<br></br>
the app will search the Spotify API for a song and render the following information:

* Artist

* Song name

* Preview link of song from Spotify

* Album where song appears 

If no song is provided by the user, then the app defaults to the song "ghostbusters".

In the first example,  we provide no song.
<br>
The command line is:
<br>
*node liri spotify-this-song*
<br></br>
![liri_screenshot_02](https://raw.githubusercontent.com/makicoding/LIRI-Node-App/master/screenshots/liri_screenshot_02.png)

In the second example,  we set the song name to be "blackbird".
<br>
The command line is:
<br>
*node liri spotify-this-song blackbird*
<br></br>
![liri_screenshot_03](https://raw.githubusercontent.com/makicoding/LIRI-Node-App/master/screenshots/liri_screenshot_03.png)
***

### node liri movie-this

By entering the following into the command line:
<br></br>
*node liri movie-this movietitle*
<br></br>
the app will search the OMDB API for a movie title and render the following information:

* Title of movie

* Year

* IMDB rating

* Rotten Tomatoes rating

* Country where movie was produced

* Language of movie

* Plot

* Actors 

If no movie title is provided by the user, then the app defaults to the movie "mr.nobody".

In the first example,  we provide no movie title.
<br>
The command line is:
<br>
*node liri movie-this*
<br></br>
![liri_screenshot_04](https://raw.githubusercontent.com/makicoding/LIRI-Node-App/master/screenshots/liri_screenshot_04.png)

In the second example,  we set the movie title to be "avengers".
<br>
The command line is:
<br>
*node liri spotify-this-song avengers*
<br></br>
![liri_screenshot_05](https://raw.githubusercontent.com/makicoding/LIRI-Node-App/master/screenshots/liri_screenshot_05.png)
***

### node liri do-what-it-says

By entering the following into the command line:
<br></br>
*node liri do-what-it-says*
<br></br>
and using the fs node package, LIRI will read the text inside of random.txt and then use it to call one of LIRI's commands.

In this example, the text inside random.txt is 
<br>
*spotify-this-song, i want it that way*  
<br>
To call different LIRI commands we can modify the text inside random.txt to be:
<br>
*concert-this, the black keys*
<br>
*movie-this, iron man*


The command line for this example is:
<br>
*node liri do-what-it-says*
<br></br>
![liri_screenshot_06](https://raw.githubusercontent.com/makicoding/LIRI-Node-App/master/screenshots/liri_screenshot_06.png)
