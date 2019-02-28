# -liri-node-app
LIRI: Language-Interpretation-Recognition-Interface

LIRI is a command line node app that takes in parameters and gives you back data using the Spotify, Bands in Town and OMDB APIs.

NPM Modules and API Accounts Required

You will find these resources helpful in order to build off of the existing CLI program:

Node-Spotify-API
Spotify Developer Account - will need to register to obtain CLIENT ID & CLIENT SECRET
OMDB API - will need to request API key
Bands In Town API - will need to request API key
Request
Moment
DotEnv
.env file setup

After obtaining the various Client ID/Client Secret/API keys, you will want to create a .env file with the following format (to reference the user-specific information):

SPOTIFY_ID=*key*
SPOTIFY_SECRET=*key*

OMDB_ID=*key*

BANDSINTOWN_ID=*key*
Breakdown

LIRI Can:

Search BandsInTown with the name of a band to receive:

Name of venue
Location of concert
Date of event
Search Spotify with a song title to see:

Artist(s) name
Complete song title
Preview of song from Spotify
Album title
Search IMDB for a movie title to see:

Title of the movie
Year the movie came out
IMDB rating of the movie
Rotten Tomatoes rating of the movie
Country where the movie was produced
Language of the movie
Plot of the movie
Actors in the movie
Execute raw text in a "command & argument" format from the random.txt file

Using LIRI

To use each LIRI function - type the following CLI in the format below:

Bands in Town:

node liri.js concert-this <artist/band name here>
Spotify:

node liri.js spotify-this-song  <song name here>
OMDB:

node liri.js movie-this <movie name here>
Do what it says:

node liri.js do-what-it-says
