//read & set any environment variables with the dotenv package
require("dotenv").config();

// These variables will use npm packages that we will need
var Spotify = require("node-spotify-api");
var request = require("request");
var moment = require("moment");
var axios = require("axios");

// This imports modules from key.js
var keys = require('./keys.js');

// This sets up  API Keys
var spotify = new Spotify(keys.spotify);

var apikey = new Apikey(keys.omdbapikey); 

//This is for random.txt to read and write the file
var fs = require('fs');

var findArtist = function(artist) {
    return artist.name;
}

var spotifyFinder = function (songName) {
// This part is copied from npm for spotify;
    spotify.search({ type: 'track', query: 'The Sign' }, function(err,data) {
    if (err) {
        console.log('Error occurred: ' + err);
        return;
    }
    // This picks 0 index in the object
    var songs = data.tracks.items;
    // This prints the all requested information
    for (var i = 0; i < songs.length; i++) {
            console.log(i);
            console.log("Artist(s): " + songs[i].artists.map(findArtist));
            console.log("Song : " + songs[i].name);
            console.log("Preview: " + songs[i].preview_url);
            console.log("Album: " + songs[i].album.name);
            console.log("<===================================================================================>")
      }
});
}  

var findMovie = function(movie) {
    if (movie === undefined) {
      movie = "Mr Nobody";
    }
  
    var queryURL =
      "http://www.omdbapi.com/?t=" + movie + "&y=&plot=full&tomatoes=true&apikey=" + apikey;
  
    axios.get(queryURL).then(
      function(response) {
        var jsonData = response.data;
        console.log("Title: " + jsonData.Title);
        console.log("Year: " + jsonData.Year);
        console.log("IMDB Rating: " + jsonData.imdbRating);
        console.log("Rotten Tomatoes Rating: " + jsonData.Ratings[1].Value);
        console.log("Country: " + jsonData.Country);
        console.log("Language: " + jsonData.Language);
        console.log("Plot: " + jsonData.Plot);
        console.log("Actors: " + jsonData.Actors);
        
      }
    );
  }; 
  
  function doWhatItSays() {
    //Read random.txt file
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (!error);
        console.log(data.toString());
        //split text with comma delimiter
        var cmds = data.toString().split(',');
    });
}




// This is for user input method;
var userInput = function (caseData, functionData) {
            switch (caseData) {
            case 'spotitfy-this-song':
            spotifyFinder (functionData);
            break;
            case "movie-this":
            findMovie(functionData);
            break;
            case "do-what-it-says":
            doWhatItSays();
            break;
            default:
            console.log("Liri doesn't know that!");
    }
}

// This function pass the argument when it runs; 
var searchQuery = function (argOne, argTwo) {
            userInput(argOne, argTwo); 
            }; 

           searchQuery(process.argv[2], process.argv[3]);
