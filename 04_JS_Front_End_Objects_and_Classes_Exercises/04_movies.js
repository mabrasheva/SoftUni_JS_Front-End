// Function that stores information about movies inside an array. 
// The movie's object info must be name, director, and date. 
// You can receive several types of input:
// •	"addMovie {movie name}" – add the movie
// •	"{movie name} directedBy {director}" – check if the movie exists and then add the director
// •	"{movie name} onDate {date}" – check if the movie exists and then add the date
// At the end print all the movies that have all the info (if the movie has no director, name, or date, don’t print it) in JSON format.

function movies(input) {

    let moviesList = [];

    function addMovieNameToList(inputString) {
        let movieName = inputString.replace('addMovie', '').trim();
        let movieObj = { name: movieName };
        moviesList.push(movieObj);
    }

    function addDirectorToMovie(inputString) {
        let [movieName, movieDirector] = inputString.split('directedBy').map(part => part.trim());

        for (const movie of moviesList) {
            if (movie.name === movieName) {
                movie.director = movieDirector;
            }
        }
    }

    function addDateToMovie(inputString) {
        let [movieName, movieDate] = inputString.split('onDate').map(part => part.trim());

        for (const movie of moviesList) {
            if (movie.name === movieName) {
                movie.date = movieDate;
            }
        }
    }

    for (const element of input) {

        if (element.startsWith("addMovie")) {
            addMovieNameToList(element);
        }
        if (element.includes('directedBy')) {
            addDirectorToMovie(element);
        }

        if (element.includes('onDate')) {
            addDateToMovie(element);
        }

    }

    for (const movie of moviesList) {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    }

}

movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
]
);

// {"name":"The Avengers","director":"Anthony Russo","date":"30.07.2010"}


